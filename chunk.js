function chunck(arr, size) {
  let len = arr.length;
  while (len) {
    const curLen = Math.min(len, size);
    arr.push(arr.splice(0, curLen));
    len -= curLen;
  }
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8];
chunck(arr, 3);
console.log(arr);
