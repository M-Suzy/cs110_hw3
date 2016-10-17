const reverse= function(arr) {
  let ret = '';
  for (let i = arr.length - 1; i >= 0; i--)
    ret += arr[i];
  return ret;
}
const a = [1,2,3,4];
const b = reverse(a);
console.log(b);
