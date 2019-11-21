import STORE from "../store.js";

class GameService {
  buy(itemName) {
    let item = STORE.State.clickMods[itemName];
    if (STORE.State.cheese < item.price) {
      throw new Error("NOT ENOUGH CHEESE");
    }
    //TODO: send buy request to server (much l8er 🐊)

    STORE.State.cheese -= item.price;
    item.quantity++;
    item.price *= 1.25;
  }
  dig() {
    let n = 1;
    for (let key in STORE.State.clickMods) {
      let upgrade = STORE.State.clickMods[key];
      n += upgrade.multiplier * upgrade.quantity;
    }
    STORE.State.cheese += n;
  }
}

const GAME_SERVICE = new GameService();

export default GAME_SERVICE;
