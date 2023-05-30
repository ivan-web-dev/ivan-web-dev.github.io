let ship = {
  "item": document.querySelector(".minigame-ship"),
  "firstSizeWidth": 800,
  "firstSizeHeight": 620,
  "top": 52,
  "right": 750,
  "class": "minigame-ship",
  "sizeWidthNow": 0,
  "sizeHeightNow": 0,
  "topNow": 0,
  "rightNow": 0
};
let train = {
  "item": document.querySelector(".minigame-train"),
  "firstSizeWidth": 216,
  "firstSizeHeight": 169,
  "top": 52,
  "right": 1204,
  "trainChild": {
    "item": document.querySelector(".railway-carriage"),
    "firstSizeWidth": 187,
    "firstSizeHeight": 113
  }
};

let objects = {
  ship
}

if (document.body.clientWidth < 1920 && document.body.clientWidth >= 1280) {
  let size = 1920 - document.body.clientWidth; // разница начальной ширины экрана от текущей
  
  for (const [key, value] of Object.entries(objects)) { // получаем "ключ: значение"
    let right = value.right - size; // получаем правильное значение для отступа справа
    
    value.item.style.right = `${right}px`; // подставляем правильное значение для отступа справа
  }
} else if (document.body.clientWidth < 1280 && document.body.clientWidth >= 960) {
  let size = 1280 - document.body.clientWidth; // разница начальной ширины экрана от текущей
  
  for (const [key, value] of Object.entries(objects)) { // получаем "ключ: значение"
    value.sizeWidthNow = document.querySelector(`.${value.class}`).clientWidth;
    value.sizeHeightNow = document.querySelector(`.${value.class}`).clientHeight;
    
    value.topNow = Number(getComputedStyle(value.item).top.replace('px', ''));
    value.rightNow = Number(getComputedStyle(value.item).right.replace('px', ''));
    
    let right = value.rightNow - size; // получаем правильное значение для отступа справа
    value.item.style.right = `${right}px`; // подставляем правильное значение для отступа справа
    
    console.log(value.topNow, value.rightNow);
  }
} else if (document.body.clientWidth < 960 && document.body.clientWidth >= 705) {
  let size = 960 - document.body.clientWidth; // разница начальной ширины экрана от текущей
  
  for (const [key, value] of Object.entries(objects)) { // получаем "ключ: значение"
    value.sizeWidthNow = document.querySelector(`.${value.class}`).clientWidth;
    value.sizeHeightNow = document.querySelector(`.${value.class}`).clientHeight;
    
    value.topNow = Number(getComputedStyle(value.item).top.replace('px', ''));
    value.rightNow = Number(getComputedStyle(value.item).right.replace('px', ''));
    
    let right = value.rightNow - size; // получаем правильное значение для отступа справа
    value.item.style.right = `${right}px`; // подставляем правильное значение для отступа справа
    
    console.log(value.topNow, value.rightNow);
  }
} else if (document.body.clientWidth < 960 && document.body.clientWidth >= 705 && document.body.clientHeight < 500) {
  let size = 960 - document.body.clientWidth; // разница начальной ширины экрана от текущей
  
  for (const [key, value] of Object.entries(objects)) { // получаем "ключ: значение"
    value.sizeWidthNow = document.querySelector(`.${value.class}`).clientWidth;
    value.sizeHeightNow = document.querySelector(`.${value.class}`).clientHeight;
    
    value.topNow = Number(getComputedStyle(value.item).top.replace('px', ''));
    value.rightNow = Number(getComputedStyle(value.item).right.replace('px', ''));
    
    let right = value.rightNow - size; // получаем правильное значение для отступа справа
    value.item.style.right = `${right}px`; // подставляем правильное значение для отступа справа
    
    console.log(value.topNow, value.rightNow);
  }
  
  function setBlockMinigameCSS() {
    let minigameSection = document.querySelector(".minigame");
    
    minigameSection.style.bacgroundSize = `${1000}px`;
    minigameSection.style.backgroundPositionX = `${0}`;
    minigameSection.style.backgroundPositionY = `-${1000}px`;
  }
}

screen.addEventListener("orientationchange", () => {
  alert("The orientation of the screen is: " + screen.orientation);
  console.log("The orientation of the screen is: " + screen.orientation);
});
//if (document.body.clientWidth < 1920 && document.body.clientWidth >= 1300) {
//   let size = 1920 - document.body.clientWidth; // разница начальной ширины от текущей
  
  
//   function proportionCalculator(objects) { // функция вычесляет пропорции для уменьшения картинки
//     for (const [key, value] of Object.entries(objects)) { // получаем "ключ: значение"
//       let proportionWidth = value.firstSizeWidth - size; // высчитываем ширину картинки относительно экрана
//       proportionHeight = (value.firstSizeHeight * proportionWidth) / value.firstSizeWidth; // высчитываем высоту относительно уменьшенной ширины
      
//       value.item.style.width = `${proportionWidth}px`; // подставляем значения ширины картинки
//       value.item.style.height = `${proportionHeight}px`; // подставляем значения высоты картинки
//     }
//   } proportionCalculator(objects);
  
//   console.log(document.body.clientWidth, document.body.clientHeight);
//}

// console.log(document.body.clientWidth, document.body.clientHeight);