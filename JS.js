/*let num;
num = 123;
alert(num);*/

/*let a = 1;
let b = 2;
let c = 3;
alert(a);*/


/*let a, b, c;
a = 1;
b = 2;
c = 3;
alert(b);*/


/*let a = 1, b = 2, c = 3;
alert(c);
alert(a);*/


/*let a; 
a = 1;  
alert(a); 
a = 2; 
alert(a);*/



/*let a = 1 + 2 + 3;
alert(a);*/



//alert(1 + 2 + 3);



/*let a = 10, b = 2;
alert(a + b);
alert( a - b);
alert(a * b);
alert(a / b);*/

/*let c = 10, d = 5;
let result = c + d;
alert(result);*/

/*let a = 1, b = 2, c = 3;
alert(a + b + c);*/

/*let a = 10, b = 5;
let c = a - b;
let d = 7;
let result = c + d;
alert(result);*/


/*let a = 1.5, b = 0.75;
alert(a + b);*/


/*let a = -100;
alert(a);*/

/*let a = 10, b = 3;
alert(a % b);*/



/*alert(2 ** 10);*/


/*let a = (3 * 2) ** 3;
alert(a);*/


/*let str = '!!!';
alert(str);*/


/*let str1 = "java", str2 = 'Script';
alert(str1 + str2);*/


/*let str1 = 'Hello', str2 = 'World';
alert(str1 + ' ' + str2);*/


/*let str = 'Almaz';
alert(str.length);*/

/*let a;
alert(a);*/

/*let a = null;
alert(a);*/

/*let a = true;
alert(a);*/

/*let a = false;
alert(a);*/

/*let a = 'al', b = 'maz';
alert(a * b);*/

/*alert(10 / 0);
alert(-10 / 0);*/


/*Константы*/
//Сделайте константу PI и с ее помощью вычислите длину какой-нибудь окружности по ее радиусу.
/*const PI = 3.14;
let a = 3;
let result = (PI * 2) * a;
alert(result);*/





//Найдите количество секунд в сутках.
/*alert((60 * 60)* 24);*/

//Найдите количество секунд в 30 сутках.
/*alert(((60 * 60)* 24) * 30);*/

//Найдите количество секунд в году.
/*alert(((60 * 60)* 24)* 365);*/

//Найдите количество минут в сутках.
//alert(60 * 24);

//Найдите количество минут в году.
//alert(60 * 24 * 365);


//Найдите количество байт в мегабайте.
//let k = 1024, m = 1024;
//alert(k * m);

//Найдите количество байт в гигабайте.
//alert(1024 * 1024 * 1024);


//Найдите количество байт в 10 гигабайтах.
//alert((1024 * 1024 * 1024)* 10);


/*const PI = 3.14;
let r = 10;
let s = PI * r ** 2;
alert(s);*/



/*let a = 5;
let s = a * 4;
alert(s);*/


//Пусть даны переменные a и b со сторонами прямоугольника. Найдите площадь прямоугольника и запишите ее в переменную s. Выведите содержимое этой переменной на экран.
/*let a = 10, b = 7;
let s = a * b;
alert(s);*/


//Пусть даны переменные a и b со сторонами прямоугольника. Найдите периметр прямоугольника и запишите его в переменную p. Выведите содержимое этой переменной на экран.
/*let a = 15, b = 10;
let p = a + a + b + b;
alert(p);*/



//Принудительное преобразование типов данных
/*let a = '10', b = '20';
alert(Number(a) + Number(b));*/


//alert( '2' + Number('3') );


/*let a = +'2';
let b = +'3';
alert(a + b);*/


//Дана переменная со значением '5px' и переменная со значением '6px'. Найдите сумму пикселей из значений этих переменных и выведите ее на экран.
/*let a = '6px', b = '5px';
alert(parseInt(a) + parseInt(b));*/


//Дана переменная со значением '5.5px' и переменная со значением '6.25px'. Найдите сумму пикселей из значений этих переменных и выведите ее на экран.
/*let a = '5.5px', b = '6.25px';
alert(parseFloat(a) + parseFloat(b));*/


/*let a = '5.5px', b = '6.25px';
alert(parseFloat(a) + parseFloat(b) + 'px');*/


/*let a = 10, b = 11, c = 12;
alert(String(a) + String(b) + String(c));*/

/*let a = 123456789;
alert(String(a).length);*/


//Даны две переменные с числами. Найдите количество цифр в одном и во втором числе, результаты сложите и выведите на экран.
/*let a = 123, b = 234;
let c = String(a).length + String(b).length;
alert(c);*/

//alert( String(true) + Number(true) );


/*let test = Boolean('false');
alert(test);*/


//Дана строка 'abcde'. Обращаясь к отдельным символам этой строки выведите на экран символ 'a', символ 'c', символ 'e'.
/*let str = 'abcde';
alert(str[0]);
alert(str[1]);
alert(str[3]);*/

//Дана переменная со строкой 'abcde'. Обращаясь к отдельным символам этой строки запишите в новую переменную символы этой строки в обратном порядке, то есть 'edcba'.
/*let str1 = 'abcde';
let str2 = str1[4] + str1[3] + str1[2] + str1[1] + str1[0];
alert(str2);*/


//Дана строка. Выведите на экран ее последний символ.
/*let str = 'abcdef';
alert(str[str.length - 1]);*/


/*let str = 'abcdef';
alert(str[str.length - 2]);*/

//Дана строка '12345'. Найдите сумму цифр этой строки.
//let str = '12345';
//alert(Number(str[0]) + Number(str[1]) + Number(str[2]) + Number(str[3]) + Number(str[4]));


//Дано число 12345. Найдите сумму цифр этого числа.
/*let num = 12345;
num = String(12345);
alert(+(num[0]) + +(num[1]));*/


//Дано число 12345. Найдите произведение цифр этого числа.
/*let test = 12345;
test = String(12345);
alert(test[0] * test[4]);*/



//Дано число 12345. Переставьте цифры этого числа в обратном порядке.
/*let test = 12345;
test = String(12345);
alert(test[4] + test[3] + test[2] + test[1] + test[0]);*/



/*let num = 47;
num += 7;
num -= 18;
num *= 10;
num /= 15;
alert(num);*/

/*let num = 10;
num++;
num++;
num--;
alert(num);*/


/*let age = prompt('Ваш возраст?');
alert('Ваш возраст:' + age);*/

/*let num1 = prompt('Введите первое число');
let num2 = prompt('Введите второе число');

alert(Number(num1) + Number(num2));/*


/*С помощью функции prompt спросите у пользователя сторону квадрата. Выведите на экран площадь введенного квадрата.*/
/*let a = prompt('Сторона квадрата?');
alert(a * 4);*/



/*let a = prompt('Ширина?');
let b = prompt('Высота?');
alert(+a + +a + +b + +b);*/











//Массивы
/*let arr = ['a', 'b', 'c', 'd'];
alert(arr);
console.log(arr);*/



/*let arr = ['a', 'b', 'c', 'd'];
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);*/


//let arr = ['a', 'b', 'c', 'd'];
//console.log(arr[0] + '+' + arr[1] + '+' + arr[2] + '+' + arr[3]);


/*let ch = [1, 2, 3];
alert(ch[0] + ch[1] + ch[2]);*/



//Создайте массив с элементами 2, 5, 3, 9. Умножьте первый элемент массива на второй, а третий элемент на четвертый. Результаты сложите, присвойте переменной result. Выведите на экран значение этой переменной.
/*let a = ['2', '5', '3', '9'];
let result = a[0] * a[1] + a[2] * a[3];
alert(result);*/




/*let arr = ['a', 'b', 'c', 'd', 'f'];
alert(arr.length);*/

/*let arr = ['a', 'b', 'c', 'd', 'f'];
alert(arr[arr.length - 1]);*/


/*let arr = ['a', 'b', 'c', 'd'];
alert(arr[arr.length - 3]);*/

//Создайте массив с элементами 'a', 'b', 'c'. Запишите вместо первого элемента число 1, вместо второго - 2, вместо третьего - 3.
/*let arr = ['a', 'b', 'c'];
arr[0] = 1;
arr[1] = 2;
arr[2] = 3;
alert(arr);*/



//Создайте массив с числами. Прибавьте к каждому элементу массива число 3. Выведите на экран измененный массив.
/*let arr = [1, 2, 3, 4, 5];
arr[0] += '3';
arr[1] += '3';
arr[2] += '3';
arr[3] += '3';
arr[4] += '3';
alert(arr);*/



/*let arr = [1, 2, 3];
arr[0]++;
arr[1]++;
++arr[2];
alert(arr);*/



//С помощью описанного приема создайте массив с элементами 1, 2 и 3.
/*let arr = [];
arr[0] = 1;
arr[1] = 2;
arr[2] = 3;
alert(arr);*/


/*let arr = [1, 2, 3];
arr[3] = 4;
arr[4] = 5;
alert(arr);*/


/*let arr = [];
arr[3] = 'a';
arr[8] = 'b';
alert(arr.length);*/















//Обьекты
//Создайте объект с ключами 1, 2 и 3 и значениями 'a', 'b' и 'c'. Выведите на экран все его элементы.
/*let obj = {1: 'a', 2: 'b', 3: 'c'};
alert(obj[1]);
alert(obj[2]);
alert(obj[3]);*/



//Создайте объект с ключами a, b и c и значениями 1, 2 и 3. Найдите сумму его элементов.
/*let obj = {a: 1, b: 2, c: 3};
console.log(obj);*/


//Создайте объект с ключами 1a, 2b и с-с и значениями 1, 2 и 3. Найдите сумму его элементов.
/*let obj = {'1a': 1, '2b': 2, 'c-c': 3};
console.log(obj);*/



/*let obj = {key1: 1, key2: 2, key3: 3};
alert(obj.key1 + obj.key2 + obj.key3);*/


/*let user = {name: 'Almaz', surname: 'Esengulov', patronymic: 'Almazovich'};
console.log(user.name, user.surname, user.patronymic);*/




/*let date = {yaer: 2022, month: 03, day: 15};
console.log(date.yaer, date.month, date.day);*/




//Создайте объект с ключами a, b и c и элементами 1, 2 и 3.
/*let obj ={};
obj['a'] = 1;
obj['b'] = 2;
obj['c'] = 3;
console.log(obj);*/



/*let arr = ['a', 'b', 'c'];
let key = 2;
alert(arr[key]);*/



/*let arr = [1, 2, 3, 4, 5];
let key1 = 1;
let key2 = 2;
alert(arr[key1] + arr[key2]);*/



/*let obj = {'a': 1, 'b': 2, 'c': 3};
let key = 'a';
alert(obj[key]);*/



/*let arr = ['1', '2', '3'];
console.log( typeof arr[0] );*/

/*let arr = ['a', 'b', 'c', 'd', 'e'];
delete arr[1];
delete arr[2];
alert(arr.length);*/



/*const arr = [1, 2, 3, 4, 5];
const res = arr[1] + arr[2];
console.log(res);*/



/*let arr = [1, 2, 3, 4, 5];
console.log(arr.length);*/



/*let arr = [1, 2, 3, 4, 5];
console.log(arr[0] + arr[1] + arr[2] + arr[3] + arr[4]);*/


/*let arr = [1, 2, 3, 4, 5];
console.log(arr.length);*/



/*let obj = {a: 1, b: 2, c: 3};
console.log(obj['a']);*/



/*let obj = {a: 1, b: 2, c: 3};
let key = 'a';
console.log(obj[key]);*/


/*let obj = {a: 1, b: 2, c: 3};
let sum = obj['a'] + obj['b'] + obj['c'];
console.log(sum);*/



//Условия
//Если переменная test больше 10, то выведите на экран слово 'верно', иначе выведите слово 'неверно'.
/*let test = 15;
if(test > 10){
    alert('Верно');
}else{
    alert('Неверно');
}*/



//Если переменная test меньше 10, то выведите на экран слово 'верно', иначе выведите слово 'неверно'.
/*let test = 8;
if(test<10){
    alert('Верно');

}else{
    alert('Неверно');
}*/



//Если переменная test больше или равна 10, то выведите на экран слово 'верно', иначе выведите слово 'неверно'.
/*let test = 15;
if(test >= 10){
    alert('Верно');
}else{
    alert('Неверно');
}*/


//Если переменная test меньше или равна 10, то выведите на экран слово 'верно', иначе выведите слово 'неверно'.
/*let test = 10;
if(test <= 10){
    alert('Верно');
}else{
    alert('Неверно');
}*/


//Если переменная test равна 10, то выведите на экран слово 'верно', иначе выведите слово 'неверно'.
/*let test = 1;
if(test == 10){
    alert('Верно');
}else{
    alert('Неверно');
}*/


//Если переменная test не равна 10, то выведите на экран слово 'верно', иначе выведите слово 'неверно'.
/*let test = 4;
if(test != 10){
    alert('Верно');
}else{
    alert('Неверно');
}*/


//Даны переменные test1 и test2. Проверьте, что значение какой из этих переменных больше и выведите соответствующее сообщение на экран.
/*let test1 = 10, test2 = 16;
if(test1 >= test2){
    alert('верно');
}else{
    alert('Неверно');
}*/


/*let test1 = 3;
let test2 = '3';
		
if (test1 == test2) {
	alert('верно');
} else {
	alert('неверно');
}*/


//Если переменная num больше нуля и меньше 5, то выведите на экран слово 'верно', иначе выведите слово 'неверно'.
/*let num = 3;
if(num > 0 && num < 5){
    alert('верно');
}else{
    alert('Неверно');
}*/



//Если переменная num больше или равна 10 и меньше или равна 20, то выведите на экран слово 'верно', иначе выведите слово 'неверно'.
/*let num = 9;
if(num >= 10 && num <= 20){
    alert('верно');
} else {
    alert('неверно');
}*/




//Если переменная num1 равна или меньше 1, а переменная num2 больше или равна 3, то
// выведите на экран слово 'верно', иначе выведите слово 'неверно'.

/*let num1 = 6, num2 = 19;
if(num1 <= 1 && num2 >= 19){
    alert('верно');
}else{
    alert('неверно');
}*/

//
let num = 3;
		
if ((num > 5) || (num > 0 && num < 3)) {
	alert('верно');
} else {
	alert('неверно');
}
