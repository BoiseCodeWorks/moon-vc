import STORE from "../store.js";
import GAME_SERVICE from "../services/GameService.js";
//PRIVATE PARTS

function _draw() {
  document.getElementById("game").innerHTML = /*html*/ `
  <div>
    <h3>${STORE.State.cheese.toFixed(2)}</h3>
    <button onclick="app.gameController.dig()">DIG</button>
    <button onclick="app.gameController.buy('pick')">Buy Pick</button>
    <button onclick="app.gameController.buy('laser')">Buy Laser</button>
  </div>
  `;
}

function _start() {
  _draw();
}
_start();
export default class GameController {
  dig() {
    GAME_SERVICE.dig();
    _draw();
  }
  buy(itemName) {
    GAME_SERVICE.buy(itemName);
    _draw();
  }
}
