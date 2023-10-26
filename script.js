let menuBar = document.querySelector(".menu-bar");
menuBar.addEventListener("click", openNavBar);

function openNavBar() {
  let navigation = document.querySelector(".navigation");
  navigation.classList.toggle("open");
  if (navigation.classList.contains("open")) {
    navigation.style.maxHeight = navigation.scrollHeight + "px";
  } else {
    navigation.removeAttribute("style");
  }
}
