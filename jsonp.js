function jsonp(url) {
  const script = document.createElement("script");
  script.src = url;
  script.type = "text/javascript";
  document.body.appendChild(`${jsonp}?callback=cb`);
  const cb = () => {
    console.log("josnp");
  };
}
