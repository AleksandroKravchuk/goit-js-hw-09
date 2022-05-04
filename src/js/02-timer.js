import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const refs = {
    onInput: document.querySelector("#datetime-picker"), 
    btnInput: document.querySelector("button"), 
    timer: document.querySelector(".timer"),
    valueTimer: document.querySelector(".value"),
}

console.log(refs.onInput);
console.log(refs.btnInput);
console.log(refs.timer);
console.log(refs.valueTimer);

refs.btnInput.setAttribute('disabled', '');

// flatpickr(element, {});



const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {

        refs.onInput.addEventListener('input', (evt) => {
            
            console.log(evt.currentTarget.value)
        const addValue = evt.currentTarget.value;
        const date = new Date(addValue);
            
            // const currentData = selectedDates[0];
            // const cur = new Date(currentData);
       
            if (date.getTime() < new Date().getTime()) {
                refs.btnInput.setAttribute('disabled', '');
                return alert('Ошибка');
                
            }
            // selectedDates = addValue;
            // const selYear = [...selectedDates]
            // console.log(selectedDates[data.minute]);
            refs.btnInput.removeAttribute('disabled');
           refs.btnInput.classList.add('active');
    // console.log(evt.currentTarget.value)
            
            
            
})

        
      
  },
};

flatpickr("#datetime-picker", options);
// flatpickr.


//  if (!title || !task) return notyf.error('Please fill in all fields');

//   notyf.success('Todo added');