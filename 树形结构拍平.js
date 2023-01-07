const data = [
  {
    title: "父节点",
    key: "0",
    children: [
      {
        title: "子节点",
        key: "0-0",
        children: [
          {
            title: "孙节点",
            key: "0-0-0",
            children: [],
          },
        ],
      },
      {
        title: "子节点",
        key: "0-1",
        children: [
          {
            title: "孙节点",
            key: "0-1-0",
            children: [],
          },
        ],
      },
    ],
  },
];

function trans(data_, parentId) {
  let data = {};
  data_.forEach((el) => {
    data[el.key] = {
      childrenId: el.children.map((child) => child.key),
      title: el.title,
      parentId: parentId,
    };
    if (el.children.length > 0) {
      data = { ...data, ...trans(el.children, el.key) };
    }
  });
  return data;
}
console.log(trans(data));
