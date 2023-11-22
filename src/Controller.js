import Tab from './Tab/Tab.js';

class Controller {
  constructor() {
    this.tab = new Tab();
  }

  init() {
    this.tab.initTab();
  }
}

export default Controller;
