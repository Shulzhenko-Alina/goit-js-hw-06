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
