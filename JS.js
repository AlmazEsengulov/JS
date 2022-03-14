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


