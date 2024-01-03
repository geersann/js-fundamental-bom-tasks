// Для заданої HTML-сторінки - index.html коментар task1
// увійдіть у файл task1.js
// напишіть функцію changeCSS(), яка спрацьовуватиме по кліку на кнопку
//  і змінюватиме стиль вмісту тега <p>: колір шрифту – оранжевий, розмір шрифту 20px, шрифт сімейства "Comic Sans MS".
// Запустіть програму за допомогою Live Server
// перевірте виконання за допомогою команди node tests/task1.test.js

isStyleEnable = false;

function changeCSS() {
    const text = document.getElementById("text");
    if(isStyleEnable){
        text.style.color = "",
        text.style.fontSize = "",
        text.style.fontFamily =""
    }else {
        text.style.color = "orange",
        text.style.fontSize = "20px",
        text.style.fontFamily ="Comic Sans MS"
    }
    isStyleEnable = !isStyleEnable;
}


