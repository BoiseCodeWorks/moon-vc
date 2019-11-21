import STORE from "../store.js";
import GAME_SERVICE from "../services/GameService.js";
//PRIVATE PARTS

function _draw() {
  document.getElementById("game").innerHTML = /*html*/ `
  <div>
    <h3>${STORE.State.cheese.toFixed(2)}</h3>
    <div class="d-flex justify-content-around">
      ${_drawUpgrades()}
    </div>
  </div>
  `;
}

function _drawUpgrades() {
  let template = "";

  for (let key in STORE.State.clickMods) {
    let upgrade = STORE.State.clickMods[key];
    let disabled = "";
    if (upgrade.price > STORE.State.cheese) {
      disabled = "disabled";
    }
    template += /*html*/ `
      <div class="${disabled}">
        <h5>Quantity: ${upgrade.quantity}</h5>
        <h5>Price: ${upgrade.price}</h5>
        <button ${disabled} onclick="app.gameController.buy('${key}')">Buy ${upgrade.name}</button>
      </div>
    `;
  }
  return template;
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
