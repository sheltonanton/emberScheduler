import { helper } from '@ember/component/helper';

export function reverse([value,...rest]) {
  let v = value;
  v = v.split("");
  v = v.reverse();
  v = v.join("");
  return v;
}

export default helper(reverse);
