import $ from '../../utils/querySelector.js';
import HEADER_MARKUP from './TabComponent.js';

class Tab {
  initTab() {
    $('body').insertAdjacentHTML('beforebegin', HEADER_MARKUP);
  }

  toggleManageCrewTab() {}
}

export default Tab;
