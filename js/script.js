var link = document.querySelector(".login-link");
	var popup = document.querySelector(".modal-login");
	var close = popup.querySelector(".modal-close");
	var login = popup.querySelector("[name=login]");
	var password = popup.querySelector("[name=password]")
	var form = popup.querySelector("form");
	var isStorageSupport = true;
	var storage = "";
	var overlayClick = document.querySelector(".modal-overlay");
	overlayClick.addEventListener("click", function(evt) {
		popup.classList.remove("modal-show");
		popup.classList.remove("modal-error");
		overlayClick.classList.remove("overlay-on");
	});
	try {
		storage = localStorage.getItem("login");
	} catch (err) {
		isStorageSupport = false;
	}
	link.addEventListener("click", function(evt) {
		evt.preventDefault();
		popup.classList.add("modal-show");
		overlayClick.classList.add("overlay-on");
		if (storage) {
			login.value = storage;
			password.focus()		
		} else {
		login.focus();
		}
	});
	close.addEventListener("click", function(evt) {
		evt.preventDefault();
		popup.classList.remove("modal-show");
		popup.classList.remove("modal-error");
		overlayClick.classList.remove("overlay-on");
	});
	form.addEventListener("submit", function(evt) {
		if (!login.value || !password.value) {
			evt.preventDefault();
			popup.classList.remove("modal-error");
			popup.offsetWidth = popup.offsetWidth;
			popup.classList.add("modal-error");
		} else {
			if (isStorageSupport) {
			localStorage.setItem("login", login.value);
			}
		}
	});
	window.addEventListener("keydown", function(evt) {
		if (evt.keyCode === 27) {
			evt.preventDefault();
			if (popup.classList.contains("modal-show")) {
				popup.classList.remove("modal-show");
				popup.classList.remove("modal-error");
			}
		}
	});