/* eslint-disable no-alert */
const Validator = {
  vlaidateCrewName(inputName, crews) {
    if (inputName.length > 5)
      return this.alertWithBoolean('5글자가 넘는 이름은 입력할 수 없습니다.');
    if (crews && crews.includes(inputName))
      return alertWithBoolean('중복된 이름은 입력할 수 없습니다.');
    if (inputName.length === 0) return this.alertWithBoolean('이름을 입력해주세요.');
    if (inputName.match(/\s/g)) return this.alertWithBoolean('공백은 입력할 수 없습니다.');
    return true;
  },

  alertWithBoolean(message) {
    alert(message);
    return false;
  },
};

export default Validator;
