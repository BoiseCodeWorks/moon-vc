let _state = {
  cheese: 0,
  clickMods: {
    pick: {
      name: "Pick",
      price: 5,
      quantity: 0,
      multiplier: 1
    },
    laser: {
      name: "Burninator 3000",
      price: 50,
      quantity: 0,
      multiplier: 100
    }
  }
};

class Store {
  get State() {
    return _state;
  }
}

const STORE = new Store();

export default STORE;
