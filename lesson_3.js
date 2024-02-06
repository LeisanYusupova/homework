//1.Создать объект counter всеми возможными способами

const counter_1 = {};
const counter_2 = Object.create({});
function MakeCounter () {
}
const counter_3 = new MakeCounter();

class Counter {
    constructor() {

    }
};
const counter_4 = new Counter();

//2.Скопировать объект counter всеми возможными способами;
//3.Создать функцию makeCounter всеми описанными и возможными способами;
function makeCounter1() {
    console.log('yes');
}

const makeCounter2 = function() {
    console.log('yes');
}

const makeCounter3 = () => {
    console.log('yes');
}

//4.Прочитать и описать работу глобальной функции structuredClone()
// Алгоритм структурированного клонирования — это новый алгоритм, определённый спецификацией HTML5 для сериализации комплексных JavaScript объектов. Он более функционален, чем JSON в том что способен поддерживать сериализацию объектов содержащих циклические графы — первичные объекты, которые ссылаются на другие объекты у которых есть ссылка на первичные объекты в том же графе. В дополнение, в некоторых других случаях алгоритм структурированного клонирования может быть более эффективен, чем JSON.
//Алгоритм, по существу, перебирает все поля оригинального объекта, дублируя значения каждого поля в новый объект. Если поле представляет из себя объект с собственными полями, то эти дочерние поля также перебираются рекурсивно, пока каждое поле и все дочерние поля не будут продублированы в новый объект.

//5.
const deepEqual = (obj1, obj2) => {
    // Проверяем, являются ли оба аргумента объектами
    if (typeof obj1 !== 'object' || typeof obj2 !== 'object' || obj1 === null || obj2 === null) {
        return obj1 === obj2; // Если оба аргумента не объекты, то просто сравниваем их
    }

    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    // Если количество ключей в объектах разное, они не равны
    if (keys1.length !== keys2.length) {
        return false;
    }

    // Проверяем каждый ключ и его значение
    for (let key of keys1) {
        // Если ключ отсутствует во втором объекте или их значения не равны, объекты не равны
        if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) {
            return false;
        }
    }

    // Если все ключи и значения совпадают, объекты равны
    return true;
};

// Пример использования
const obj1 = { here: { is: "on", other: "3" }, object: "Y" };
const obj2 = { here: { is: "on", other: "2" }, object: "Y" };

console.log(deepEqual(obj1, obj2)); // Выведет: false

//6.
function reverseStr(str) {
    return str.split('').reverse().join('');
}


