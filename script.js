// цвет состояния кнопок
const [blueLight, blueDark] = ["rgb(173, 216, 230)", "rgb(49, 144, 204)"];

window.onload = () => {
  document.addEventListener(
    "keyup",
    // "DOMContentLoaded",
    (e) => {
      //слушает нажатие любой кнопки и показывает клаву
      const x = e.which || e.keyCode;
      if (typeof x == "number") {
        document.querySelector("div.startMsg").classList.toggle("hideToggle");
        document.querySelector("div.keyboard").classList.toggle("showToggle");
      }
      document.getElementById("textArea").disabled = false; // включает текстовое окно
      document.querySelector("#textArea").focus(); //переводит фокус на окно текста
    },
    { once: true }
  );

  window.addEventListener("mouseup", () => {
    document.querySelector("#textArea").focus(); //переводит фокус на textArea автоматом
  });
};

// хранит состояние капслока
let CapsOn;

document.addEventListener("keydown", (e) => {
  // проверка капслока
  if (e.getModifierState("CapsLock")) {
    CapsOn;
    document.querySelector("div.capslock").style.color = "rgb(120, 120, 25)"; // цвет капслока
    toUpCase();
    if (e.getModifierState("Shift")) {
      toLowCase();
    }
  } else {
    !CapsOn;
    document.querySelector("div.capslock").style.color = "black"; // цвет капслока
    toLowCase();
    if (e.getModifierState("Shift")) {
      toUpCase();
    }
  }
});

document.addEventListener("keydown", (event) => {
  // событие по нажатию любой кнопки down
  // подсветка нажатой кнопки
  const e = event.which;
  switch (e) {
    case 192:
      document.querySelector("div.blacktick").style.backgroundColor = blueDark;
      break;
    case 49:
      document.querySelector("div.one").style.backgroundColor = blueDark;
      break;
    case 50:
      document.querySelector("div.two").style.backgroundColor = blueDark;
      break;
    case 51:
      document.querySelector("div.three").style.backgroundColor = blueDark;
      break;
    case 52:
      document.querySelector("div.four").style.backgroundColor = blueDark;
      break;
    case 53:
      document.querySelector("div.five").style.backgroundColor = blueDark;
      break;
    case 54:
      document.querySelector("div.six").style.backgroundColor = blueDark;
      break;
    case 55:
      document.querySelector("div.seven").style.backgroundColor = blueDark;
      break;
    case 56:
      document.querySelector("div.eight").style.backgroundColor = blueDark;
      break;
    case 57:
      document.querySelector("div.nine").style.backgroundColor = blueDark;
      break;
    case 48:
      document.querySelector("div.zero").style.backgroundColor = blueDark;
      break;
    case 189 || 173:
      document.querySelector("div.minus").style.backgroundColor = blueDark;
      break;
    case 187 || 61:
      document.querySelector("div.equalsTo").style.backgroundColor = blueDark;
      break;
    case 8:
      document.querySelector("div.backspace").style.backgroundColor = blueDark;
      break;
    case 9:
      event.preventDefault();
      document.getElementById("textArea").value += "    ";
      document.querySelector("div.tab").style.backgroundColor = blueDark;
      break;
    case 81:
      document.querySelector("div.q").style.backgroundColor = blueDark;
      break;
    case 87:
      document.querySelector("div.w").style.backgroundColor = blueDark;
      break;
    case 69:
      document.querySelector("div.e").style.backgroundColor = blueDark;
      break;
    case 82:
      document.querySelector("div.r").style.backgroundColor = blueDark;
      break;
    case 84:
      document.querySelector("div.t").style.backgroundColor = blueDark;
      break;
    case 89:
      document.querySelector("div.y").style.backgroundColor = blueDark;
      break;
    case 85:
      document.querySelector("div.u").style.backgroundColor = blueDark;
      break;
    case 73:
      document.querySelector("div.i").style.backgroundColor = blueDark;
      break;
    case 79:
      document.querySelector("div.o").style.backgroundColor = blueDark;
      break;
    case 80:
      document.querySelector("div.p").style.backgroundColor = blueDark;
      break;
    case 219:
      document.querySelector("div.openedBracket").style.backgroundColor =
        blueDark;
      break;
    case 221:
      document.querySelector("div.closedBracket").style.backgroundColor =
        blueDark;
      break;
    case 220:
      document.querySelector("div.backSlash").style.backgroundColor = blueDark;
      break;
    case 20:
      document.querySelector("div.capslock").style.backgroundColor = blueDark;
      break;
    case 65:
      document.querySelector("div.a").style.backgroundColor = blueDark;
      break;
    case 83:
      document.querySelector("div.s").style.backgroundColor = blueDark;
      break;
    case 68:
      document.querySelector("div.d").style.backgroundColor = blueDark;
      break;
    case 70:
      document.querySelector("div.f").style.backgroundColor = blueDark;
      break;
    case 71:
      document.querySelector("div.g").style.backgroundColor = blueDark;
      break;
    case 72:
      document.querySelector("div.h").style.backgroundColor = blueDark;
      break;
    case 74:
      document.querySelector("div.j").style.backgroundColor = blueDark;
      break;
    case 75:
      document.querySelector("div.k").style.backgroundColor = blueDark;
      break;
    case 76:
      document.querySelector("div.l").style.backgroundColor = blueDark;
      break;
    case 186:
      document.querySelector("div.semicolon").style.backgroundColor = blueDark;
      break;
    case 222:
      document.querySelector("div.quote").style.backgroundColor = blueDark;
      break;
    case 13:
      document.querySelector("div.enter").style.backgroundColor = blueDark;
      break;
    case 16:
      document.querySelector("div.lShift").style.backgroundColor = blueDark;
      document.querySelector("div.rShift").style.backgroundColor = blueDark;
      specSymb();
      CapsOn ? toLowCase() : toUpCase();
      break;
    case 90:
      document.querySelector("div.z").style.backgroundColor = blueDark;
      break;
    case 88:
      document.querySelector("div.x").style.backgroundColor = blueDark;
      break;
    case 67:
      document.querySelector("div.c").style.backgroundColor = blueDark;
      break;
    case 86:
      document.querySelector("div.v").style.backgroundColor = blueDark;
      break;
    case 66:
      document.querySelector("div.b").style.backgroundColor = blueDark;
      break;
    case 78:
      document.querySelector("div.n").style.backgroundColor = blueDark;
      break;
    case 77:
      document.querySelector("div.m").style.backgroundColor = blueDark;
      break;
    case 188:
      document.querySelector("div.comma").style.backgroundColor = blueDark;
      break;
    case 190:
      document.querySelector("div.fullstop").style.backgroundColor = blueDark;
      break;
    case 191:
      document.querySelector("div.frontSlash").style.backgroundColor = blueDark;
      break;
    case 17:
      document.querySelector("div.lCtrl").style.backgroundColor = blueDark;
      document.querySelector("div.rCtrl").style.backgroundColor = blueDark;
      break;
    case 91:
      document.querySelector("div.win").style.backgroundColor = blueDark;
      break;
    case 18:
      event.preventDefault();
      document.querySelector("div.lAlt").style.backgroundColor = blueDark;
      document.querySelector("div.rAlt").style.backgroundColor = blueDark;
      break;
    case 32:
      document.querySelector("div.space").style.backgroundColor = blueDark;
      break;
    default:
      break;
  }
});

document.addEventListener("keyup", (event) => {
  // событие на нажатие любой кнопки Up
  // возвращает кнопке нормальное состояние
  const e = event.which;
  switch (e) {
    case 192:
      document.querySelector("div.blacktick").style.backgroundColor = blueLight;
      break;
    case 49:
      document.querySelector("div.one").style.backgroundColor = blueLight;
      break;
    case 50:
      document.querySelector("div.two").style.backgroundColor = blueLight;
      break;
    case 51:
      document.querySelector("div.three").style.backgroundColor = blueLight;
      break;
    case 52:
      document.querySelector("div.four").style.backgroundColor = blueLight;
      break;
    case 53:
      document.querySelector("div.five").style.backgroundColor = blueLight;
      break;
    case 54:
      document.querySelector("div.six").style.backgroundColor = blueLight;
      break;
    case 55:
      document.querySelector("div.seven").style.backgroundColor = blueLight;
      break;
    case 56:
      document.querySelector("div.eight").style.backgroundColor = blueLight;
      break;
    case 57:
      document.querySelector("div.nine").style.backgroundColor = blueLight;
      break;
    case 48:
      document.querySelector("div.zero").style.backgroundColor = blueLight;
      break;
    case 189 || 173:
      document.querySelector("div.minus").style.backgroundColor = blueLight;
      break;
    case 187 || 61:
      document.querySelector("div.equalsTo").style.backgroundColor = blueLight;
      break;
    case 8:
      document.querySelector("div.backspace").style.backgroundColor = blueLight;
      break;
    case 9:
      document.querySelector("div.tab").style.backgroundColor = blueLight;
      break;
    case 81:
      document.querySelector("div.q").style.backgroundColor = blueLight;
      break;
    case 87:
      document.querySelector("div.w").style.backgroundColor = blueLight;
      break;
    case 69:
      document.querySelector("div.e").style.backgroundColor = blueLight;
      break;
    case 82:
      document.querySelector("div.r").style.backgroundColor = blueLight;
      break;
    case 84:
      document.querySelector("div.t").style.backgroundColor = blueLight;
      break;
    case 89:
      document.querySelector("div.y").style.backgroundColor = blueLight;
      break;
    case 85:
      document.querySelector("div.u").style.backgroundColor = blueLight;
      break;
    case 73:
      document.querySelector("div.i").style.backgroundColor = blueLight;
      break;
    case 79:
      document.querySelector("div.o").style.backgroundColor = blueLight;
      break;
    case 80:
      document.querySelector("div.p").style.backgroundColor = blueLight;
      break;
    case 219:
      document.querySelector("div.openedBracket").style.backgroundColor =
        blueLight;
      break;
    case 221:
      document.querySelector("div.closedBracket").style.backgroundColor =
        blueLight;
      break;
    case 220:
      document.querySelector("div.backSlash").style.backgroundColor = blueLight;
      break;
    case 20:
      document.querySelector("div.capslock").style.backgroundColor = blueLight;
      break;
    case 65:
      document.querySelector("div.a").style.backgroundColor = blueLight;
      break;
    case 83:
      document.querySelector("div.s").style.backgroundColor = blueLight;
      break;
    case 68:
      document.querySelector("div.d").style.backgroundColor = blueLight;
      break;
    case 70:
      document.querySelector("div.f").style.backgroundColor = blueLight;
      break;
    case 71:
      document.querySelector("div.g").style.backgroundColor = blueLight;
      break;
    case 72:
      document.querySelector("div.h").style.backgroundColor = blueLight;
      break;
    case 74:
      document.querySelector("div.j").style.backgroundColor = blueLight;
      break;
    case 75:
      document.querySelector("div.k").style.backgroundColor = blueLight;
      break;
    case 76:
      document.querySelector("div.l").style.backgroundColor = blueLight;
      break;
    case 186:
      document.querySelector("div.semicolon").style.backgroundColor = blueLight;
      break;
    case 222:
      document.querySelector("div.quote").style.backgroundColor = blueLight;
      break;
    case 13:
      document.querySelector("div.enter").style.backgroundColor = blueLight;
      break;
    case 16:
      document.querySelector("div.lShift").style.backgroundColor = blueLight;
      document.querySelector("div.rShift").style.backgroundColor = blueLight;
      normalSymbols();
      CapsOn ? toUpCase() : toLowCase();
      break;
    case 90:
      document.querySelector("div.z").style.backgroundColor = blueLight;
      break;
    case 88:
      document.querySelector("div.x").style.backgroundColor = blueLight;
      break;
    case 67:
      document.querySelector("div.c").style.backgroundColor = blueLight;
      break;
    case 86:
      document.querySelector("div.v").style.backgroundColor = blueLight;
      break;
    case 66:
      document.querySelector("div.b").style.backgroundColor = blueLight;
      break;
    case 78:
      document.querySelector("div.n").style.backgroundColor = blueLight;
      break;
    case 77:
      document.querySelector("div.m").style.backgroundColor = blueLight;
      break;
    case 188:
      document.querySelector("div.comma").style.backgroundColor = blueLight;
      break;
    case 190:
      document.querySelector("div.fullstop").style.backgroundColor = blueLight;
      break;
    case 191:
      document.querySelector("div.frontSlash").style.backgroundColor =
        blueLight;
      break;
    case 17:
      document.querySelector("div.lCtrl").style.backgroundColor = blueLight;
      document.querySelector("div.rCtrl").style.backgroundColor = blueLight;
      break;
    case 91:
      document.querySelector("div.win").style.backgroundColor = blueLight;
      break;
    case 18:
      document.querySelector("div.lAlt").style.backgroundColor = blueLight;
      document.querySelector("div.rAlt").style.backgroundColor = blueLight;
      break;
    case 32:
      document.querySelector("div.space").style.backgroundColor = blueLight;
      break;
    default:
      break;
  }
});

window.addEventListener("blur", (i) => {
  // возврат состояния кнопок к нормальному при потере фокуса
  document.querySelector("div.lAlt").style.backgroundColor = blueLight;
  document.querySelector("div.rAlt").style.backgroundColor = blueLight;
});
