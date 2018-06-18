import { helper } from '@ember/component/helper';

export function universal([scope, fn, ...rest]) {
  let args = rest;
  let res = fn.apply(scope,args);
  return res;
}

export default helper(universal);
