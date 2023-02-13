// function render(str, data) {
//   return str.replace(/{{[.\s\S]*?}}/g, (match) => {
//     console.log(match);
//     if ((match = match.substring(2, match.length - 2).trim()) == "") {
//       return "";
//     } else {
//       return data[match];
//     }
//   });
// }
const data = {
  name: "小明",
  age: 16,
  school: "第三中学",
  classroom: "教室2",
};

console.log(
  render(
    "{{ name }} 今年 {{ age }} 岁，就读于 {{ school }} 今天在 {{ classroom }} 上课，{{ name }} {{ #data.age >= 18 ? '成年了' : '未成年' }}",
    data
  )
);

function render(source, data) {
  return String(source).replace(/{{[\s\S]*?}}/g, (match) => {
    const res = match.slice(2, -2).trim();
    if (String(res).startsWith("#")) {
      return eval(res.slice(1));
    } else {
      return data[res];
    }
  });
}
