var emailLogIn = document.getElementById('log-in-email');
var passwordLogIn = document.getElementById('log-in-password');
var buttonLogIn = document.getElementById('buttonLogIn');
console.log(buttonLogIn)
buttonLogIn.addEventListener("click", function(event) {

  event.preventDefault();
  console.log("OLOLOLO");
  var hasError = false;
	document.getElementById('email-error-3').innerHTML = "";
	if (emailLogIn.value !== localStorage.getItem('email')){
		var error = document.getElementById('email-error-3');
		var errorText = document.createElement("p");
		errorText.textContent = "Такого пользователя не существует";
		error.appendChild(errorText);
		hasError = true;
	}
  document.getElementById('password-error-3').innerHTML = "";
	if (passwordLogIn.value !== localStorage.getItem('userPassword')) {
		var error = document.getElementById('password-error-3');
		var errorText = document.createElement("p");
		errorText.textContent = "Пароль неверный!";
		error.appendChild(errorText);
		hasError = true;
	}
  document.getElementById('success-log-in').innerHTML = "";
	if (!hasError) {
		var success = document.getElementById('success-log-in');
		var successText = document.createElement("p");
		successText.textContent = "Доступ разрешен";
		success.appendChild(successText);
	}
})
