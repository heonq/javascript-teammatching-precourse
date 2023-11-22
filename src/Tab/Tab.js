import $ from '../../utils/querySelector.js';
import HEADER_MARKUP from './TabComponent.js';
import { SELECT_COURSE_MARKUP } from '../CrewManaging/CrewManagingComponent.js';
import { MANAGING_TEAM_MATCHING_MARKUP } from '../TeamMatching/TeamMatchingComponent.js';

class Tab {
  initTab() {
    $('body').insertAdjacentHTML('beforebegin', HEADER_MARKUP);
  }

  toggleManageCrewTab() {
    $('#app').innerHTML = SELECT_COURSE_MARKUP;
  }

  toggleManageTeamTab() {
    $('#app').innerHTML = MANAGING_TEAM_MATCHING_MARKUP;
  }
}

export default Tab;
