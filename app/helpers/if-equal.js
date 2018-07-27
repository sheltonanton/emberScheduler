import { helper } from '@ember/component/helper';

export function ifEqual(value1,value2) {
  if(value2[0]===value2[1]){
    return true;
  }else{
    return false;
  }
}

export default helper(ifEqual);
