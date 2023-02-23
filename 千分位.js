function formatNumber(num) {
  var source = String(num).split("."); //按小数点分成2部分
  source[0] = source[0].replace(new RegExp("(\\d)(?=(\\d{3})+$)", "ig"), "$1,"); //只将整数部分进行逗号分割
  source[1] = source[1].replace(new RegExp("(\\d{3})", "ig"), "$1,");
  return source.join("."); //再将小数部分合并进来
}

function trans(nums) {
  nums = "" + nums;
  let [fir, sec] = nums.split(".");
  fir = fir.replace(/(\d)(?=(\d{3})+$)/g, "$1,");
  sec = sec.replace(/(\d{3})/g, "$1,");
  console.log(fir + "." + sec);
}
trans(13246465.5454654654);
console.log(formatNumber(646132131.646546));
