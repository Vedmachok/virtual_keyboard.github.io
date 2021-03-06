let keys = document.querySelectorAll('.key');
let display = document.querySelector('.display');
let clear = document.querySelector('.clear');

// проходится по масиву отлавливает клики на кнопки и
// добавляет значение кнопки в вывод текста дисплей
for ( let key of keys){
  key.onclick = function(){
    display.textContent = display.textContent + key.textContent;
    }
};
// отлавливае клик на кнопку и запускает функцию очистки экрана
clear.onclick = function(){
  display.textContent = '';
  }
/*
Кнопки с буквами и «пробел» имеют класс key, а дисплей — класс display.

При клике на кнопку с буквой или пробелом текстовое содержимое этой кнопки должно добавляться к текстовому содержимому дисплея.

Кнопка очистки имеет класс clear. При клике на неё весь текст внутри дисплея должен удаляться, для этого в текстовое содержимое дисплея нужно записать пустую строку.
*/
