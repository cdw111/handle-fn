async function todu(arr) {
  for (let i = 0; i < arr.length; i++) {
    await new Promise((res) =>
      setTimeout(() => {
        console.log(arr[i]);
        res();
      }, 1000)
    );
  }
}

todu([1, 2, 3, 4, 5, 6, 7]);
