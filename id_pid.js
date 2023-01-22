// const list = [
//   { id: 04, pid: 03 },
//   { id: 01, pid: null },
//   { id: 02, pid: null },
//   { id: 03, pid: 01 },
//   { id: 05, pid: 01 },
//   { id: 06, pid: 03 },
//   { id: 07, pid: 02 },
//   { id: 09, pid: 02 },
//   { id: 10, pid: 07 },
// ];
// function trans() {
//   const temp = {};
//   const res = [];
//   for (const l of list) {
//     temp[l.id] = l;
//   }
//   for (const l of list) {
//     if (l.pid) {
//       temp[l.pid].children
//         ? temp[l.pid].children.push(l)
//         : (temp[l.pid].children = [l]);
//     } else {
//       res.push(l);
//     }
//   }
//   return res;
// }

// console.log("%j", trans(list));

let arr = [
  { id: 1, name: "部门1", pid: 0 },
  { id: 2, name: "部门2", pid: 1 },
  { id: 3, name: "部门3", pid: 1 },
  { id: 4, name: "部门4", pid: 3 },
  { id: 5, name: "部门5", pid: 4 },
  { id: 6, name: "部门6", pid: 0 },
];
function getTreeList(rootList, id, list) {
  for (const item of rootList) {
    if (item.pid === id) {
      list.push(item);
    }
  }
  for (const i of list) {
    i.children = [];
    getTreeList(rootList, i.id, i.children);
    if (i.children.length === 0) {
      delete i.children;
    }
  }
  return list;
}
const res = getTreeList(arr, 0, []);
console.dir(res);
