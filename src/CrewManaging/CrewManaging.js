import { MANAGING_CREW_MARKUP, CREW_TABLE } from './CrewManagingComponent.js';
import $ from '../../utils/querySelector.js';
import Store from '../../utils/Store.js';

class CrewManaging {
  printCourse(course) {
    $('#managing-crew').innerHTML = MANAGING_CREW_MARKUP(course);
    this.printCourseCrew(course);
  }

  selectCourse(e) {
    if (e.target.id === 'frontend-course') this.printCourse('프론트엔드');
    if (e.target.id === 'backend-course') this.printCourse('백엔드');
  }

  printCourseCrew(course) {
    if (Store.getItem(course)) {
      const crews = Store.getItem(course);
      this.printTable(crews);
    }
  }

  printTable(crews) {
    const tableHTML = crews.map((crew, index) => CREW_TABLE(crew, index + 1)).join('');
    $('#crew-table').querySelector('tbody').innerHTML = tableHTML;
  }
}

export default CrewManaging;
