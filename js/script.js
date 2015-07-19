//============================================================
//для модального окно входа в личный кабинет
//============================================================
var btn_on = document.querySelector(".login"); //логин
var popup = document.querySelector(".login_window"); //модальное окно
var btn_off = document.querySelector(".close_login"); //кнопка закрывания окна
var login = popup.querySelector("[name='login']"); //поле логина
var password = popup.querySelector("[name='pass']"); //поле пароля
var form = popup.querySelector("form"); //форма
var storage = localStorage.getItem("login"); //запись логина

btn_on.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.add("login_window_on"); //открытие окна
    if (storage) { //если логин сохранен, то фокус на пароль
        login.value = storage;
        password.focus();
    } else {
        login.focus();
    }
});

btn_off.addEventListener("click", function() {
    popup.classList.remove("login_window_on"); //закрытие окна
});

form.addEventListener("submit", function(event) {
    if (!(login.value && password.value)) { //если поля не заполнены, то форма не отправляется
        event.preventDefault();
        popup.classList.remove("modal-error"); //сначало надо удалить анимацию
        popup.classList.add("modal-error"); //добавляем анимацию
    } else {
        localStorage.setItem("login", login.value); //сохраняем логин
    }
});

window.addEventListener("keydown", function(event) {
    if (event.keyCode == 27) { //закрытие формы по Esc
        if (popup.classList.contains("login_window_on")) {
            popup.classList.remove("login_window_on");
        }
    }
});
//============================================================
//для интерактивной карты
//============================================================
var btn_on_map = document.querySelector(".toggle_map");
var popup_map = document.querySelector(".map");
var btn_off_map = document.querySelector(".close_map");

btn_on_map.addEventListener("click", function(e) {
    e.preventDefault();
    popup_map.classList.toggle("show_map"); //открытие карты
    var text = btn_on_map.innerHTML;
    if (text == "Как проехать") {
        btn_on_map.innerHTML = "скрыть карту"; //замена содержимого кнопки
    } else {
        btn_on_map.innerHTML = "Как проехать"; //возвращение содержимого кнопки
    };
});

btn_off_map.addEventListener("click", function() {
    popup_map.classList.remove("show_map"); //закрытие карты
});

window.addEventListener("keydown", function(event) {
    if (event.keyCode == 27) { //закрытие карты по Esc
        if (popup_map.classList.contains("show_map")) {
            popup_map.classList.remove("show_map");
        }
    }
});
//============================================================
//Gallery
//============================================================
document.querySelector(".img-figure").classList.add("nosccript-a-figire")
document.querySelector(".img-figure").onclick = function(e) {
    e.preventDefault();
};