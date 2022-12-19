function red() {
  console.log("red");
}
function green() {
  console.log("green");
}
function yellow() {
  console.log("yellow");
}
const time = new Date().getTime();
async function todu() {
  while (100) {
    await new Promise((res) => {
      setTimeout(() => {
        red();
        console.log(new Date().getTime() - time);
        res();
      }, 1000);
    });
    await new Promise((res) => {
      setTimeout(() => {
        yellow();
        console.log(new Date().getTime() - time);
        res();
      }, 1000);
    });
    await new Promise((res) => {
      setTimeout(() => {
        green();
        console.log(new Date().getTime() - time);
        res();
      }, 1000);
    });
  }
}
todu();
