import { MANAGING_CREW_MARKUP, CREW_TABLE } from './CrewManagingComponent.js';
import $ from '../../utils/querySelector.js';
import Store from '../../utils/Store.js';
import Validator from '../../utils/Validator.js';

class CrewManaging {
  #currentCourse;

  constructor() {
    this.#currentCourse = '';
  }

  printCourse(course) {
    $('#managing-crew').innerHTML = MANAGING_CREW_MARKUP(course);
    this.printCourseCrew(course);
    this.#currentCourse = course;
  }

  selectCourse(e) {
    if (e.target.id === 'frontend-course') this.printCourse('프론트엔드');
    if (e.target.id === 'backend-course') this.printCourse('백엔드');
  }

  printCourseCrew(course) {
    if (Store.getItem(course)) {
      this.printTable(Store.getItem(course));
    }
  }

  printTable(crews) {
    const tableHTML = crews.map((crew, index) => CREW_TABLE(crew, index + 1)).join('');
    $('#crew-table').querySelector('tbody').innerHTML = tableHTML;
  }

  addCrew() {
    const crewName = $('#crew-name-input').value;
    const previousCrews = Store.getItem(this.#currentCourse) ?? [];
    $('#crew-name-input').value = '';
    Store.setItem(this.#currentCourse, [...previousCrews, crewName]);
    this.printCourseCrew(this.#currentCourse);
  }
}

export default CrewManaging;
