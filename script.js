// Задание 1: Найти сумму всех элементов массива

function sumArray(arr) {
    let sum = 0; // Инициализируем переменную для суммы
    
    // Используем цикл for для прохода по всем элементам массива
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]; // Добавляем текущий элемент к сумме
    }
    
    return sum; // Возвращаем итоговую сумму
}

let numbers = [1, 2, 3, 4, 5]; // Пример массива
console.log(sumArray(numbers));

// Задание 2: Найти максимальный элемент массива

function findMax(arr) {
    let max = arr[0]; // Инициализируем max первым элементом массива

    // Используем цикл for для прохода по всем элементам массива
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) { // Сравниваем текущий элемент с max
            max = arr[i]; // Обновляем max, если текущий элемент больше
        }
    }

    return max; // Возвращаем максимальный элемент
}

let numbers = [3, 1, 4, 1, 5, 9]; // Пример массива
console.log(findMax(numbers));

// Задание 3: Фильтрация массива по условию

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // Пример массива

function filterArray(arr) {
    let result = []; // Новый массив для хранения четных чисел

    // Цикл for для перебора элементов массива
    for (let i = 0; i < arr.length; i++) {
        // Проверка, является ли число четным
        if (arr[i] % 2 === 0) {
            result.push(arr[i]); // Добавляем четное число в новый массив
        }
    }

    return result; // Возвращаем новый массив
}

console.log(filterArray(numbers)); 

//Задание 4: Реализация метода массива "map" через цикл

let numbers = [1, 2, 3, 4, 5]; // Пример массива

// Пример функции-преобразователя:
function multiplyByTwo(num) {
    return num * 2;
}

// Функция mapArray
function mapArray(arr, callback) {
    let result = []; // Новый массив для хранения преобразованных значений

    // Цикл for для перебора элементов массива
    for (let i = 0; i < arr.length; i++) {
        result.push(callback(arr[i])); // Применяем функцию-преобразователь и добавляем результат в новый массив
    }

    return result; // Возвращаем новый массив
}

console.log(mapArray(numbers, multiplyByTwo));

// Задание 5: Реализация метода массива "forEach" через цикл

let numbers = [1, 2, 3, 4, 5]; // Пример массива

// Пример функции для вывода:
function printElement(element) {
    console.log(element);
}

// Функция forEachArray
function forEachArray(arr, callback) {
    // Цикл for для перебора элементов массива
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i]); // Применяем функцию к текущему элементу
    }
}

// Вызов функции forEachArray
forEachArray(numbers, printElement); 

// Задание 6: Развернуть массив

let numbers = [1, 2, 3, 4, 5]; // Пример массива

function reverseArray(arr) {
    let reversed = []; // Создаем новый массив для хранения развернутых элементов
    for (let i = arr.length - 1; i >= 0; i--) { // Проходим по массиву в обратном порядке
        reversed.push(arr[i]); // Добавляем элементы в новый массив
    }
    return reversed; // Возвращаем развернутый массив
}

console.log(reverseArray(numbers)); 