function Cat(breed, age, gender, furColor, name, image, sleeping) {
    this.breed = breed;
    this.age = age;
    this.gender = gender;
    this.fur = furColor;
    this.name = name; 
    this.img = image;
    this.sleeping = sleeping;

    this.askForFood = function() {
        return this.sleeping ?  `${this.name} спить і не може попросити їсти` : `${this.name} просить їсти!`;
    };

    this.goToSleep = function() {
        this.sleeping = true;
        return `${this.name} ліг спати...`;
    };

    this.wakeUp = function() {
        this.sleeping = false;
        return `${this.name} прокинувся`;
    };
}


let cats = [
    new Cat("немає", 3, "male", "білий", "Сніжок", "./img/cat1.wakeUp.jpg", false),
    new Cat("сомалі", 6, "male", "рижий", "Рижик", "./img/cat2.sleeping.jpeg", true),
    new Cat("бобтейл", 1, "female", "трьох-колірний", "Мія", "./img/cat3.wantEat.jpg", false)
];


let images = document.querySelectorAll(".images img");
let infoList = document.querySelector(".list ul");
let buttons = document.querySelectorAll(".btn");


function updateCatInfo(cat, index) {
    images.forEach((image, i) => {
        if (i === index) {
            image.style.display = "inline"; 
        } else {
            image.style.display = "none";
        }
    });

    infoList.innerHTML = `
        <li>Порода: ${cat.breed}</li>
        <li>Вік: ${cat.age}</li>
        <li>Стать: ${cat.gender}</li>
        <li>Колір шерстки: ${cat.fur}</li>
        <li>Кличка: ${cat.name}</li>
        <li>Статус: ${cat.sleeping ? "спить" : "не спить"}</li>
    `;
}


buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
        updateCatInfo(cats[index], index);
    });
});


updateCatInfo(cats[0], 0);
