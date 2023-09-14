let log = console.log;

// Завдання: 1

/**
 * Функція `customAssign` об'єднує властивості декількох об'єктів за допомогою методу `assign`.
 * Крім того, вона перетворює значення числових властивостей на рядки і замінює пробіли на підкреслення.
 * objects - Об'єкти, властивості яких будуть об'єднані.
 * Повертаємо - Новий об'єкт з об'єднаними властивостями.
 */
function customAssign(...objects) {
  //если объекты передаются в функцию через троеточие, то что бы такие объекты объединить в один используя Object.assign, то используем следующий код Object.assign(...objects)

  // Перевірка, чи передано достатньо об'єктів якщо ні повертаємо "Помилка: Має бути передано принаймні два об'єкти."
  if (objects.length < 2) {
    return "Помилка: Має бути передано принаймні два об'єкти.";
  }

  // Використання методу `assign` для об'єднання об'єктів
  let obj = Object.assign({}, ...objects);
  //   log(obj);
  // for (let i = 0; i <= objects.length; i++) {
  //   Object.assign(objects[0], objects[i]);
  // }

  //   Перетворення числових значень на рядки, ітеруємо об'єкт за допомогою for in
  for (let key in obj) {
    // якщо значення типу число конвертуємо його в рядок
    if (typeof obj[key] === "number") {
      //   log(typeof obj[key]);
      obj[key] = obj[key].toString();
    }
  }
  // Повернення нового об'єкта з об'єднаними та зміненими властивостями
  return obj;
}

// Приклад використання функції customAssign
console.log("Завдання: 1 ==============================");

console.log(customAssign({ a: 1, b: 2 }, { c: 3, d: 4 }, { e: 5, f: 6 }));
//Виведе: { a: '1', b: '2', c: '3', d: '4', e: '5', f: '6' }

// Завдання: 2

/**
 * Функція `customEntries` повертає масив, що містить усі властивості об'єкта та їх значення у вигляді масивів.
 * Використовується метод `entries`.
 * Об'єкт, властивості якого потрібно отримати.
 * Повертаємо - Масив, що містить усі властивості та їх значення.
 */
function customEntries(obj) {
  // Перевірка, чи переданий аргумент є об'єктом, якщо ні повертаємо "Помилка: Аргумент не є об'єктом."
  // Використання методу `entries` для отримання масиву з усіма властивостями та значеннями
  // Повернення масиву властивостей та значень
  if (typeof obj !== "object") {
    return "Помилка: Аргумент не є об'єктом.";
  }
  return Object.entries(obj);
}

// Приклад використання функції customEntries
console.log("Завдання: 2 ==============================");

console.log(
  customEntries({
    name: "John",
    age: 30,
    occupation: "Developer",
  })
); //Виведе:[ [ 'name', 'John' ], [ 'age', 30 ], [ 'occupation', 'Developer' ] ]

// Завдання: 3

/**
 * Функція `customObjectFromEntries` створює об'єкт з масиву записів, додатково обробляючи значення властивостей.
 * Значення числових властивостей перетворюються на рядки та замінюються пробіли на підкреслення.
 * Масив записів, кожен запис представлений як [key, value].
 * Повертаємо - Об'єкт, створений з записів з обробленими значеннями.
 */
function customObjectFromEntries(entries) {
  // Перевірка, чи вхідний аргумент є масивом,якщо ні повертаєм "Помилка: Вхідний аргумент має бути масивом."
  if (!Array.isArray(entries)) {
    return "Помилка: Вхідний аргумент має бути масивом.";
  }
  // Використання методу `map` для обробки значень властивостей
  let newEntries = entries.map(([key, value]) => {
    // Перевірка, чи ключ  є числом
    if (typeof key === "number") {
      // Перетворення числового значення на рядок
      value = key.toString(); //Эта запись говорит о том, что мы присваиваим значению преобразованный в строку ключ
    }
    // Повернення обробленого запису [key, value]
    // log([key, value]);
    return [key, value]; //Данная запись возвращает обработанные данные в виде массивов ---->  [ 'a', 1 ] [ 43, '43' ] [ 'c', 3.14 ] [ 'd', 'World' ] [ 56, '56' ]
  });
  // Використання методу `fromEntries` для створення об'єкта з масиву записів
  let obj = Object.fromEntries(newEntries); // Из возвращенных (return [key, value]) массивов создаем переработанный объект

  // Повернення створеного об'єкта
  return obj;
}

console.log("Завдання: 3 ==============================");

// Виведення результату в консоль
console.log(
  customObjectFromEntries([
    ["a", 1],
    [43, "Hello"],
    ["c", 3.14],
    ["d", "World"],
    [56, 42],
  ])
); //Виведе:{ '43': '43', '56': '56', a: 1, c: 3.14, d: 'World' }

// Завдання: 4

/**
 * Функція checkProperty приймає об'єкт та ключ. Функція перевіряє, чи має об'єкт вказану властивість.
 * Використовується метод hasOwnProperty() для реалізації.
 * obj - вхідний об'єкт, prop - ключ властивості.
 * Повертає - boolean - true, якщо об'єкт має властивість, інакше false.
 */

function checkProperty(obj, prop) {
  // Перевіряємо, чи вхідний параметр obj є об'єктом, якщо ні, повертаємо false
  // Перевіряємо, чи вхідний параметр prop є рядком, якщо ні, повертаємо false
  // Використовуємо метод hasOwnProperty() для перевірки наявності властивості в об'єкті
  // Повертаємо результат перевірки
  if (typeof obj !== "object") {
    return false;
  } else {
    if (typeof prop !== "string") {
      return false;
    }
  }
  return obj.hasOwnProperty(prop);
}
console.log("Завдання: 4 ==============================");
console.log(checkProperty({ a: 1, b: 2, c: 3 }, "b")); // Виведе true

// Завдання: 5

/**
 * Функція extendAndFreezeObject приймає два об'єкти, розширює перший властивостями другого і "заморожує" отриманий об'єкт, запобігаючи подальшим змінам.
 * Використовується методи Object.assign() та Object.freeze() для реалізації.
 * obj1, obj2 - вхідні об'єкти.
 * Повертає - obj1 - об'єкт, що було розширено властивостями obj2 і "заморожено".
 */

function extendAndFreezeObject(obj1, obj2) {
  // Перевіряємо, чи вхідні параметри є об'єктами, якщо ні, повертаємо null
  // Використовуємо метод Object.assign() для додавання властивостей obj2 до obj1
  // Використовуємо метод Object.freeze() для "заморожування" об'єкта, запобігаючи подальшим змінам
  // Перевіряємо, чи об'єкт "заморожено"
  // Повертаємо "заморожений" об'єкт, якщо все пройшло успішно
  // Повертаємо повідомлення про помилку, якщо об'єкт не було "заморожено"
  log(typeof (obj1 && obj2) !== "object");

  if (typeof (obj1 && obj2) !== "object") {
    return 0;
  }
  Object.assign(obj1, obj2);
  Object.freeze(obj1);
  if (Object.isFrozen(obj1)) {
    return obj1;
  } else {
    return "Error";
  }
}
console.log("Завдання: 5 ==============================");
console.log(extendAndFreezeObject({ a: 1, b: 2 }, { c: 3, d: 4 })); // Виведе {a: 1, b: 2, c: 3, d: 4}

// Завдання: 6

/**
 * Функція keysAndValues приймає об'єкт, виводить в консоль його ключі та значення, і повертає масив з масивами ключів та значень.
 * Використовуються методи Object.keys(), Object.values() та Object.entries() для реалізації.
 * obj - вхідний об'єкт.
 * Повертає - array - масив, що складається з масиву ключів та масиву значень.
 */

function keysAndValues(obj) {
  // Перевіряємо, чи вхідний параметр є об'єктом, якщо ні, повертаємо null
  // Використовуємо метод Object.keys() для отримання масиву ключів об'єкта
  // Використовуємо метод Object.values() для отримання масиву значень об'єкта
  // Повертаємо масив з масивами ключів та значень
  if (typeof obj !== "object") {
    return null;
  }
  let keys = Object.keys(obj);
  let values = Object.values(obj);
  return [keys, values];
}
console.log("Завдання: 6 ==============================");
console.log(keysAndValues({ a: 1, b: 2, c: 3, d: 4 })); // Виведе [['a', 'b', 'c', 'd'], [1, 2, 3, 4]]

// Завдання: 7

/**
 * Функція filterObjectsByKey приймає масив об'єктів та ім'я ключа.
 * Функція повертає новий масив об'єктів, в яких існує вказаний ключ.
 * Використовується метод hasOwnProperty для перевірки наявності ключа в об'єкті.
 * arr - вхідний масив об'єктів.
 * key - ключ, який потрібно знайти.
 * Повертає - новий масив об'єктів, в яких існує вказаний ключ.
 */
function filterObjectsByKey(arr, key) {
  // Перевіряємо, чи вхідний параметр є масивом, якщо ні, повертаємо пустий масив
  // Використовуємо метод filter() для вибірки об'єктів, що містять вказаний ключ
  // Повертаємо новий масив з об'єктами, що містять вказаний ключ
  if (!Array.isArray(arr)) {
    return [];
  }
  let newArr = arr.filter((item) => item[key]);
  return newArr;
}
console.log("Завдання: 7 ==============================");
console.log(
  filterObjectsByKey([{ a: 1, b: 2 }, { a: 3, b: 4 }, { a: 5 }], "b")
); // Виведе [{a: 1, b: 2}, {a: 3, b: 4}]

// Завдання: 8

/**
 * Функція checkAndPreventExtensions приймає об'єкт.
 * Функція перевіряє, чи можливо додати нові властивості до об'єкта,
 * якщо так - вона запобігає подальшому додаванню властивостей до об'єкта.
 * Використовуються методи preventExtensions та isExtensible для запобігання додаванню нових властивостей до об'єкта та перевірки стану об'єкта відповідно.
 * obj - вхідний об'єкт.
 * Повертає - булеве значення, що вказує, чи можна додати нові властивості до об'єкта.
 */
function checkAndPreventExtensions(obj) {
  // Перевіряємо, чи вхідний параметр є об'єктом, якщо ні, повертаємо false
  // Перевіряємо, чи можна додати нові властивості до об'єкта
  // Якщо можна, запобігаємо подальшому додаванню властивостей
  // Повторно перевіряємо, чи можна додати нові властивості до об'єкта, та повертаємо результат
  if (typeof obj !== "object") {
    return false;
  }
  log(Object.isExtensible(obj));
  if (Object.isExtensible(obj)) {
    Object.preventExtensions(obj);
    return Object.isExtensible(obj);
  }
}
console.log("Завдання: 8 ==============================");
console.log(checkAndPreventExtensions({ a: 1, b: 2 })); // Виведе false

// Завдання: 9

/**
 * Функція sealAndCheck приймає об'єкт.
 * Функція запечатовує об'єкт, а потім перевіряє, чи запечатаний об'єкт.
 * Використовуються методи seal та isSealed для запечатування об'єкта та перевірки стану об'єкта відповідно.
 * obj - вхідний об'єкт.
 * Повертає - булеве значення, що вказує, чи запечатаний об'єкт.
 */
function sealAndCheck(obj) {
  // Перевіряємо, чи вхідний параметр є об'єктом, якщо ні, повертаємо false
  // Запечатовуємо об'єкт
  // Перевіряємо, чи запечатаний об'єкт, та повертаємо результат
  if (typeof obj !== "object") {
    return false;
  }
  Object.seal(obj);
  return Object.isSealed(obj);
}
console.log("Завдання: 9 ==============================");
console.log(sealAndCheck({ a: 1, b: 2 })); // Виведе true

// Завдання: 10

/**
	* Функція checkOwnership приймає два об'єкти та ключ як рядок.
	* Функція використовує метод hasOwnProperty() для перевірки, чи мають обидва об'єкти вказаний ключ.
	* Якщо так, вона порівнює їх значення за допомогою строгого оператора порівняння (===).
	* Якщо значення відрізняються, повертає false, в іншому випадку повертає true.

	*  obj1 - Перший вхідний об'єкт.
	*  obj2 - Другий вхідний об'єкт.
	*  key - Ключ для перевірки в обох об'єктах.
	* Повертаємо - Результат порівняння.
	*/

// Розпочинаємо визначення функції.
function checkOwnership(obj1, obj2, key) {
  // Використовуємо метод hasOwnProperty() для перевірки наявності ключа в обох об'єктах.
  // Якщо обидва об'єкти мають вказаний ключ повертаємо результат порівняння їх значень.
  // Якщо значення однакові, повернемо true.
  // Якщо відрізняються, повернемо false.
  // Якщо хоч один з об'єктів не має вказаного ключа, повернемо false.
  //   log(obj1[key]);
  //   log(obj2[key]);
  if (obj1.hasOwnProperty(key) && obj2.hasOwnProperty(key)) {
    if (obj1[key] === obj2[key]) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

// Приклад використання функції:
console.log("Завдання: 10 ==============================");

console.log(checkOwnership({ a: 1, b: 2, c: 3 }, { a: 1, b: 2, c: 4 }, "a")); // true

// Завдання: 11

/**
 * Функція getObjectValuesSum приймає об'єкт, в якому значення є числами, і повертає суму всіх значень.
 * Використовується метод Object.values() для отримання всіх значень об'єкта, а потім метод reduce() для обчислення суми значень.
 *
 *  obj - Об'єкт, для якого потрібно обчислити суму значень.
 * Повертаємо - Сума всіх значень об'єкта.
 */
function getObjectValuesSum(obj) {
  // Перевірка, чи є аргумент об'єктом,якщо ні повертаємо 0
  // Отримуємо всі значення об'єкта
  // Обчислюємо суму значень
  // Повертаємо суму
  if (typeof obj !== "object") {
    return 0;
  }
  let num = Object.values(obj);
  let sum = 0;

  for (let i = 0; i < num.length; i++) {
    sum += num[i];
  }
  return sum;
  //   return (num += Object.values(obj));
}

console.log("Завдання: 11 ==============================");
console.log(getObjectValuesSum({ a: 1, b: 2, c: 3 })); // Виведе 6

// Завдання: 12

/**
 * Функція convertArrayToObj приймає масив масивів, де кожний підмасив має два елементи - ключ та значення.
 * Функція перетворює масив у об'єкт за допомогою методу Object.fromEntries().
 * Якщо у масиві є дубльовані ключі, функція видасть повідомлення про це.
 *
 *  arr - Масив масивів, де кожний підмасив має два елементи - ключ та значення.
 * Повертаємо - Об'єкт, створений з масиву.
 */
function convertArrayToObj(arr) {
  // Перевіряємо, чи вхідний параметр є масивом, якщо ні, повертаємо пустий об'єкт
  if (!Array.isArray(arr)) {
    return {};
  }
  // Створюємо пустий об'єкт який записуємо в змінну
  let newArr = {};
  // Проходимося по кожному підмасиву в масиві за допопмогою циклу for, лічильник від нуля до довжини масиву
  for (let i = 0; i < arr.length; i++) {
    // Розпаковуємо підмасив за допомогою деструктурізації на окремі змінні для ключа та значення
    let [key, value] = arr[i];
    // log(`${key}`);

    // Перевіряємо, чи існує вже ключ в об'єкті,якщо так виводимо в консоль повідомлення `У масиві є дубльований ключ: ${key}`
    if (newArr.hasOwnProperty(key)) {
      log(`У масиві є дубльований ключ: ${key}`);
    }

    // Додаємо ключ та значення до об'єкта
    newArr[key] = value;
  }
  // Застосовуємо метод Object.fromEntries() для створення об'єкта
  return Object.fromEntries(arr);
}

console.log("Завдання: 12 ==============================");
const arr = [
  ["a", 1],
  ["b", 2],
  ["c", 3],
  ["a", 4],
];
console.log(convertArrayToObj(arr)); // Виведе {a: 4, b: 2, c: 3}
