import $ from '../utils/querySelector.js';
import Tab from './Tab/Tab.js';
import CrewManaging from './CrewManaging/CrewManaging.js';

class Controller {
  constructor() {
    this.tab = new Tab();
    this.crewManaging = new CrewManaging();
  }

  init() {
    this.tab.initTab();
    this.setTabButton();
    this.initCrewManaging();
  }

  setTabButton() {
    $('#crew-tab').addEventListener('click', this.tab.toggleManageCrewTab);
    $('#team-tab').addEventListener('click', this.tab.toggleManageTeamTab);
  }

  initCrewManaging() {
    $('body').addEventListener('click', (e) => this.crewManaging.selectCourse(e));
  }
}

export default Controller;
