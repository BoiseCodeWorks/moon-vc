import GameController from "./controllers/GameController.js";

// ENTRY POINT
class App {
  gameController = new GameController
  
}



window["app"] = new App();
