// Обробка відправлення форми form.login-form повинна відбуватися відповідно до події submit.
// Під час відправлення форми сторінка не повинна перезавантажуватися.
// Якщо у формі є незаповнені поля, виводь alert з попередженням про те, що всі поля повинні бути заповнені.
// Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт, де ім'я поля буде ім'ям властивості, 
// а значення поля - значенням властивості. Для доступу до елементів форми використовуй властивість elements.
// Виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.









document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.login-form');
  
    form.addEventListener('submit', function (event) {
      event.preventDefault(); 
  
      const emailInput = form.elements.email;
      const passwordInput = form.elements.password;
  
      if (emailInput.value === '' || passwordInput.value === '') {
        alert('Всі поля повинні бути заповнені');
      } else {
        const formData = {
          email: emailInput.value,
          password: passwordInput.value,
        };
  
        console.log(formData);
  
        form.reset(); 
      }
    });
  });
