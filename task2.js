// Задано сторінку з 3 кнопками . Напишіть Javascript код і реалізуйте HTML-сторінку з відповідними подіями на кожному елементові:
//         1) 1-ша кнопка – при кліку на неї колір фону сторінки міняється на синій
//         2) 2-га кнопка – при подвійному кліку на неї колір фону сторінки міняється на рожевий
//         3) 3-я кнопка – при наведенні колір фону міняється на коричневий
//         
// Запустіть виконане завдання за допомогою Live Server 
// Перевірте виконання за допомогою команди node tests/task2.test.js

isStylesEnable = false;

const firstButton = document.getElementById("button1");
firstButton.addEventListener("click", () => {
    if(isStylesEnable) {
        document.body.style.backgroundColor = "";
    }else {
        document.body.style.backgroundColor = "blue";
    }
    isStylesEnable = !isStylesEnable;
});

isStylesEnable2 = false;
const secondButton = document.getElementById("button2");
secondButton.addEventListener("dblclick", () => {
    if(isStylesEnable2) {
        document.body.style.backgroundColor = "";
    }else {
        document.body.style.backgroundColor = "pink";
    }
    isStylesEnable2 = !isStylesEnable2;
});

const thirdButton = document.getElementById("button3");
thirdButton.addEventListener("mouseover", () => {
    document.body.style.backgroundColor = "brown";
});
thirdButton.addEventListener("mouseout", () => {
    document.body.style.backgroundColor = "";
});    