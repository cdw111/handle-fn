const root = [
  {
    id: 1,
    text: "节点1",
    parentId: 0, //这里用0表示为顶级节点
  },
  {
    id: 2,
    text: "节点1_1",
    parentId: 1, //通过这个字段来确定子父级
  },
];

// 转成
// [
//   {
//     id: 1,
//     text: "节点1",
//     parentId: 0,
//     children: [
//       {
//         id: 2,
//         text: "节点1_1",
//         parentId: 1,
//       },
//     ],
//   },
// ];

function transform(arrs) {
  const temp = {};
  const res = [];
  for (let arr of arrs) {
    temp[arr.id] = arr;
  }
  for (let arr of arrs) {
    if (temp[arr.parentId]) {
      if (temp[arr.parentId].children) {
        temp[arr.parentId].children.push(arr);
      } else {
        temp[arr.parentId].children = [arr];
      }
    } else {
      res.push(arr);
    }
  }
  return res;
}

console.log(transform(root));
