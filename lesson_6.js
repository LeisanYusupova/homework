//1 задание

let promiseTwo = new Promise((resolve, reject) => {
    resolve("a");
});

promiseTwo
    .then((res) => {
        return res + "b";
    })
    .then((res) => {
        return res + "с";
    })
    .finally((res) => {
        return res + "!!!!!!!";
    })
    .catch((res) => {
        return res + "d";
    })
    .then((res) => {
        console.log(res);
    }); //ответ abc

//2   задание
function doSmth() {
    return Promise.resolve("123");
}

doSmth()
    .then(function (a) {
        console.log("1", a); // 1 , 123
        return a;
    })
    .then(function (b) {
        console.log("2", b); //2, 123
        return Promise.reject("321");
    })
    .catch(function (err) {
        console.log("3", err); //3  321
    })
    .then(function (c) {
        console.log("4", c);
        return c;
    });

//3) Напишите функцию, которая будет проходить через массив целых чисел и выводить индекс каждого элемента с задержкой в 3 секунды.
//    Входные данные: [10, 12, 15, 21]

function showIndexesWithDelay(arr) {
    arr.forEach((_, index) => {
        setTimeout(() => {
            console.log(`Index ${index}: ${arr[index]}`);
        }, index * 3000);
    });
}

//4.Прочитать про Top Level Await (можно ли использовать await вне функции async)
//C версии ECMAScript 2022 (ES12) появилась поддержка Top Level Await, что означает возможность использования оператора await вне асинхронной функции на верхнем уровне вашего скрипта. Это позволяет делать асинхронные вызовы и ждать результатов прямо на верхнем уровне.

//5./* Необходимо реализовать функцию fetchUrl, которая будет использоваться следующим образом.
// Внутри fetchUrl можно использовать условный метод fetch, который просто возвращает
// Promise с содержимым страницы или вызывает reject */
// fetchUrl('https://google/com&#39;)
// .then(...)
// .catch(...) // сatch должен сработать только после 5 неудачных попыток
// получить содержимое страницы внутри fetchUrl

async function fetchUrl(url) {
    let attempts = 0;

    while (attempts < 5) {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Failed to fetch');
            }
            return await response.text();
        } catch (error) {
            if (attempts >= 4) {
                throw new Error('Error');
            }
            attempts++;
        }
    }
}

