import { helper } from '@ember/component/helper';

export function displayHelper(params/*, hash*/) {
  alert(params[0]);
  console.log(params);
  return params;
}

export default helper(displayHelper);
