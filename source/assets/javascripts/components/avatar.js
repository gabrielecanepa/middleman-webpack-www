const mouth1 = document.getElementById("avatar-mouth-1");
const mouth2 = document.getElementById("avatar-mouth-2");

const showSmile = () => {
  mouth1.style.display = "none";
  mouth2.style.display = "block";
};
const showNormal = () => {
  mouth2.style.display = "none";
  mouth1.style.display = "block";
};

window.addEventListener("scroll", () => {
  showSmile();
  window.setTimeout(showNormal, 1000);
});
