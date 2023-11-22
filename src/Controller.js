import $ from '../utils/querySelector.js';
import Tab from './Tab/Tab.js';

class Controller {
  constructor() {
    this.tab = new Tab();
  }

  init() {
    this.tab.initTab();
    this.setTabButton();
  }

  setTabButton() {
    $('#crew-tab').addEventListener('click', this.tab.toggleManageCrewTab);
    $('#team-tab').addEventListener('click', this.tab.toggleManageTeamTab);
  }
}

export default Controller;
