function formatTime(data, format = "yy-MM-dd hh:mm:ss") {
  const timeDate = new Date(data);
  const hash = {
    yy: timeDate.getFullYear(),
    MM: timeDate.getMonth() + 1,
    dd: timeDate.getDate(),
    hh: timeDate.getHours(),
    mm: timeDate.getMinutes(),
    ss: timeDate.getSeconds(),
  };
  Object.keys(hash).forEach((key) => {
    format = format.replace(key, (_, match) => hash[key]);
  });
  return format;
}

console.log(formatTime(Date.now(), "hh-mm-ss"));
