import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const refs = {
    btnInput: document.querySelector("button"), 
    daysValue : document.querySelector('.value[data-days]'),
    horseValue :  document.querySelector('.value[data-hours]'),
    minutesValue :  document.querySelector('.value[data-minutes]'),
    secondsValue :  document.querySelector('.value[data-seconds]'),
}

refs.btnInput.setAttribute('disabled', '');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        const selectedInx = selectedDates[0].getTime();
        
        if (selectedInx < Date.now()) {
                refs.btnInput.setAttribute('disabled', '');
                return Notiflix.Notify.failure('😪 Please choose a date in the future');
                
            }
        const timer = new Timer({
           onTik: updateDateFace,
           onStart:selectedInx,
});
        refs.btnInput.addEventListener('click', () => {
    timer.start();
})
        refs.btnInput.removeAttribute('disabled');
        refs.btnInput.classList.add('active');  
  },
};

flatpickr("#datetime-picker", options);

class Timer {
    constructor({onTik,onStart}) {
        this.intrvalId = null;
        this.isActive = false;  
        this.onTik = onTik;
        this.onStart = onStart;
      
    };
 start() {
        if(this.isActive) {
        return;
    }
    const startTime = this.onStart;
    this.isActive = true;
    this.intrvalId = setInterval(() => {
         
         const currentTime = Date.now();
         const deltaTime = startTime - currentTime;
         const time = convertMs(deltaTime);
         this.onTik(time);
         
           if (deltaTime < 1000) {
               clearInterval(this.intrvalId);
               Notiflix.Notify.success('I am finished');
               refs.btnInput.classList.remove('active'); 
               refs.btnInput.setAttribute('disabled','');
     }
     }, 1000);
    };
}


function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day)) ;
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour)) ;
  // Remaining minutes
  const minutes = addLeadingZero (Math.floor(((ms % day) % hour) / minute)) ;
  // Remaining seconds
  const seconds = addLeadingZero (Math.floor((((ms % day) % hour) % minute) / second)) ;

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value){
    return String(value).padStart(2, '0');
}

function updateDateFace({ days, hours, minutes, seconds }) {
refs.daysValue.textContent = `${days}`;
refs.horseValue.textContent = `${hours}`;
refs.minutesValue.textContent = `${minutes}`;
refs.secondsValue.textContent = `${seconds}`;
}
