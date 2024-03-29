const root = [
  {
    name: "可乐",
    categories: ["热门", "饮料"],
  },
  {
    name: "苹果",
    categories: ["热门", "食物"],
  },
  {
    name: "洗衣液",
    categories: ["生活用品"],
  },
];

// function trans(root) {
//   let set = [];
//   root.forEach((element) => {
//     set.push(...element.categories);
//   });
//   set = [...new Set(set)];
//   console.log(set);
//   return set.map((it) => {
//     const temp = {};
//     temp.name = it;
//     temp.categories = [];
//     for (let r of root) {
//       if (r.categories.includes(it)) {
//         temp.categories.push(r.name);
//       }
//     }
//     return temp;
//   });
// }

function trans(arrs) {
  const result = [];
  for (let arr of arrs) {
    arr.categories.forEach((element) => {
      let res;
      if ((res = result.find((it) => it.name === element))) {
        res.categories.push(arr.name);
      } else {
        result.push({ name: element, categories: [arr.name] });
      }
    });
  }
  return result;
}

console.log(trans(root));
