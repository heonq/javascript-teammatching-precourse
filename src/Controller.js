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
    $('body').addEventListener('click', (e) => {
      if (e.target.id === 'frontend-course' || e.target.id === 'backend-course') {
        this.crewManaging.selectCourse(e);
        this.initCrewInput();
        this.preventFormDefault();
        this.initDeleteButton();
      }
    });
  }

  initCrewInput() {
    $('#add-crew-button').addEventListener(
      'click',
      this.crewManaging.addCrew.bind(this.crewManaging),
    );
  }

  initDeleteButton() {
    $('#crew-table').addEventListener('click', (e) => {
      if (e.target.classList.contains('delete-crew-button')) {
        this.crewManaging.deleteCrew(e);
      }
    });
  }

  preventFormDefault() {
    document
      .querySelectorAll('form')
      .forEach((form) => form.addEventListener('submit', (e) => e.preventDefault()));
  }
}

export default Controller;
