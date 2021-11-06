/*Напишите функцию funcName( loremString ) , которая будет возвращать "true" если строка
"loremString" содержит подстроки "lorem", "ipsum" и "amet"*строку loremString я буду вводить
вручную при вызове функции
** Учтите случайное нажатие на CapsLock и случайный пробел в начале ;)*/


let srt = "loremString";
function checkName(str) {
    str = "loremString".includes("lorem");
    str = "loremString".includes("ipsum");
    str = "loremString".includes("amet");
}
console.log(checkName(loremString))
str.trim()
//loremString
//str.trim()
//str.trim(loremString)
//str.includes("ipsum")
//str.includes("amet");