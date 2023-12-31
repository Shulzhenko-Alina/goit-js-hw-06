// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), 
// підставляє його поточне значення в span#name-output. Якщо інпут порожній, 
// у спані повинен відображатися рядок "Anonymous".






const refs = {
    input: document.querySelector('#name-input'),
    nameEl: document.querySelector('#name-output'),
  };
  
  refs.input.addEventListener(`input`, inputChange);
  
  function inputChange(event) {
    event.currentTarget.value !== ``
      ? (refs.nameEl.textContent = event.currentTarget.value)
      : (refs.nameEl.textContent = `Anonymous`);
  }
