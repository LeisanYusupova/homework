// 1.Написать ответ - почему массивы в JS являются "неправильными" и совмещают в себе несколько структур данных? Какие ?
// Массивы в JavaScript являются "неправильными" с точки зрения строгой типизации, потому что они не требуют, чтобы все их элементы были одного типа. В отличие от некоторых других языков программирования, где массивы обычно ограничены элементами одного типа данных (например, только целочисленными или только строковыми элементами),
// массивы в JavaScript могут содержать элементы разных типов, включая числа, строки, объекты, другие массивы и т. д.Таким образом, массивы в JavaScript могут совмещать в себе различные структуры данных, включая списки, стеки, очереди и даже ассоциативные массивы (объекты). Это делает их мощным инструментом для работы с различными типами данных и решения разнообразных задач программирования. Однако это также требует осторожного обращения к массивам, чтобы избежать потенциальных проблем, связанных с неожиданным поведением из-за разнообразия типов данных.

//2.Привязать контекст объекта к функции logger, чтобы при вызове this.item выводило - some value (Привязать через bind, call, apply)

const obj = {
    item:  'some value'
}

function logger () {
    console.log(this.item)
}

const boundLogger = logger.bind(obj);
boundLogger();

logger.apply(obj);
logger.call(obj);

//3.Массивы:

// - Создайте массив чисел и найдите его сумму.

const arr1 = [1, 2, 3, 4, 5];
const sum = arr1.reduce((acc, currentVal) => acc+currentVal, 0);
console.log(sum);

// - Создайте массив строк и объедините их в одну строку.

const arr2 = ['a', 'b', 'c'];
const str = arr2.join('');
console.log(str);
// - Найдите максимальный и минимальный элементы в массиве чисел.

const arr3 = [1,22,3,4,5,7];

const max = Math.max(...arr3);
console.log("Максимальный элемент:", max);

const min = Math.min(...arr3);
console.log("Минимальный элемент:", min);

// 3.2 Stack (стек):
//
// - Реализуйте стек с использованием массива.
// Функция создания стека
function createStack() {
    const items = [];

    // Добавление элемента в стек
    function push(element) {
        items.push(element);
    }

    // Удаление элемента из стека
    function pop() {
        if (items.length === 0) {
            return "Стек пуст";
        }
        return items.pop();
    }

    // Получение верхнего элемента стека (без удаления)
    function peek() {
        return items[items.length - 1];
    }

    // Получение размера стека
    function size() {
        return items.length;
    }

    // Очистка стека
    function clear() {
        items.length = 0;
    }

    return {
        push,
        pop,
        peek,
        size,
    };
}

// Пример использования стека
const stack = createStack();
stack.push(10);
stack.push(20);
stack.push(30);

console.log("Верхний элемент стека:", stack.peek()); // Выведет: 30
console.log("Размер стека:", stack.size()); // Выведет: 3

console.log("Удаляем элемент из стека:", stack.pop()); // Выведет: 30
console.log("Размер стека после удаления:", stack.size()); // Выведет: 2

// 3.3 Queue (очередь):
const Queue = []

Queue.push('Costumer 1')
Queue.push('Costumer 2')
Queue.push('Costumer 3')

let removedElement = Queue.shift()