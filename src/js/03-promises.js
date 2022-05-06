import Notiflix from 'notiflix';

const refs = {
 formSubmit : document.querySelector('.form'),
 inputDelay : document.querySelector('input[name = "delay"]'),
 inputStep : document.querySelector('input[name = "step"]'),
 inputAmount : document.querySelector('input[name = "amount"]'),
}


console.log(refs.formSubmit);
console.log(refs.inputDelay);
console.log(refs.inputStep);
console.log(refs.inputAmount);


refs.inputDelay.addEventListener('input', (evt) => {
  const valueDelay = evt.currentTarget.value;
  refs.inputDelay.setAttribute('valueDelay', `${valueDelay}`) ;
})

refs.inputStep.addEventListener('input', (evt) => {
 const valueStep = evt.currentTarget.value;
 
  refs.inputStep.setAttribute('valueStep', `${valueStep}`) ;
})

refs.formSubmit.addEventListener('submit', createPromise);

let delay = refs.inputDelay.getAttribute('valueDelay');
console.log(delay)

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve(Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`));     
    
  } else {
    reject (Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`))
  }

    },delay)
  })
 
}
const position = 3;


createPromise(position, delay)
  .then(result => console.log(`✅ Fulfilled promise ${position} in ${delay}ms`))
  .catch( error => console.log(`❌ Rejected promise ${position} in ${delay}ms`));