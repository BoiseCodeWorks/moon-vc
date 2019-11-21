let _state = {
  cheese: 0,
  clickMods: {
    pick: {
      price: 5,
      quantity: 0,
      multiplier: 1
    },
    laser: {
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
