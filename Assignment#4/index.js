// Initialize Firebase

firebase.initializeApp(config);

var userName = document.getElementById('userName');
var email = document.getElementById('email');
var password = document.getElementById('password');
var passwordConfirm = document.getElementById('passwordConfirm');
var buttonSignIn = document.getElementById('buttonSignIn');

buttonSignIn.addEventListener("click", function(event) {

	console.log(userName.value);
	event.preventDefault();
	var hasError = false;
	document.getElementById('userName-error').innerHTML = "";
	if (userName.value.length < 1) {
		var error = document.getElementById('userName-error');
		var errorText = document.createElement("p");
		errorText.textContent = "Вы не ввели имя пользователя!";
		error.appendChild(errorText);
		hasError = true;
	}

	document.getElementById('email-error').innerHTML = "";
	if (email.value.length < 1) {
		var error = document.getElementById('email-error');
		var errorText = document.createElement("p");
		errorText.textContent = "Вы не ввели email!";
		error.appendChild(errorText);
		hasError = true;
	}

	document.getElementById('email-error-2').innerHTML = "";
	var emailReGex = (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/gm);
	if ((emailReGex.test(email.value.toString()) == false) && (email.value.length >= 1)) {
		var error = document.getElementById('email-error-2');
		var errorText = document.createElement("p");
		errorText.textContent = "Неверный email!";
		error.appendChild(errorText);
		hasError = true;
	}

	document.getElementById('password-error').innerHTML = "";
	if (password.value.length<8) {
		var error = document.getElementById('password-error');
		var errorText = document.createElement("p");
		errorText.textContent = "Пароль слишком короткий! (мин. 8 символов)";
		error.appendChild(errorText);
		hasError = true;
	}

	document.getElementById('passwordConfirm-error').innerHTML = "";
	if (passwordConfirm.value!=password.value) {
		var error = document.getElementById('passwordConfirm-error');
		var errorText = document.createElement("p");
		errorText.textContent = "Пароли не совпадают!";
		error.appendChild(errorText);
		hasError = true;
	}

	document.getElementById('success-sign-in').innerHTML = "";
	if (!hasError) {
		var success = document.getElementById('success-sign-in');
		var successText = document.createElement("p");
		successText.textContent = "Вы успешно зарегистрировались!";
		success.appendChild(successText);
		localStorage.setItem('userName', userName.value.toString());
		localStorage.setItem('email', email.value.toString());
		localStorage.setItem('userPassword', password.value.toString());
		document.getElementById('signed-up-user').innerHTML = "";
		var pole2 = document.getElementById('signed-up-user');
		var pole2Text_ = document.createElement("p");
		var pole2Text = document.createElement("p");
		var pole2Text1 = document.createElement("p");
		pole2Text_.textContent = "Новый пользователь";
		pole2Text.textContent = localStorage.getItem("userName");
		pole2Text1.textContent =  localStorage.getItem('email');
		pole2.appendChild(pole2Text_); pole2.appendChild(pole2Text); pole2.appendChild(pole2Text1);
	}


});
