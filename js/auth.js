<<<<<<< HEAD
const authWrapper = document.getElementById("auth-section");
const formTitle = document.getElementById("form-title");
const signupWrapper = document.getElementById("signup-wrapper");
const signinWrapper = document.getElementById("signin-wrapper");
const signupTxt = document.getElementById("signup-txt");
const signinTxt = document.getElementById("signin-txt");

function openAuth(){
	authWrapper.style.display = "grid";
}

function closeAuth(){
	authWrapper.style.display = "none";
}

function prepareSignup(){
	formTitle.innerHTML = "Sign Up";
	signupWrapper.style.display = "flex";
	signinWrapper.style.display = "none";
	signupTxt.style.display = "none";
	signinTxt.style.display = "unset";
}

function prepareSignin(){
	formTitle.innerHTML = "Sign In";
	signupWrapper.style.display = "none";
	signinWrapper.style.display = "flex";
	signupTxt.style.display = "unset";
	signinTxt.style.display = "none";
=======
const authWrapper = document.getElementById("auth-section");
const formTitle = document.getElementById("form-title");
const signupWrapper = document.getElementById("signup-wrapper");
const signinWrapper = document.getElementById("signin-wrapper");
const signupTxt = document.getElementById("signup-txt");
const signinTxt = document.getElementById("signin-txt");

function openAuth(){
	authWrapper.style.display = "grid";
}

function closeAuth(){
	authWrapper.style.display = "none";
}

function prepareSignup(){
	formTitle.innerHTML = "Sign Up";
	signupWrapper.style.display = "flex";
	signinWrapper.style.display = "none";
	signupTxt.style.display = "none";
	signinTxt.style.display = "unset";
}

function prepareSignin(){
	formTitle.innerHTML = "Sign In";
	signupWrapper.style.display = "none";
	signinWrapper.style.display = "flex";
	signupTxt.style.display = "unset";
	signinTxt.style.display = "none";
>>>>>>> 6101bbdd037310a622a4d5c0bd6ea2739d87ac57
}