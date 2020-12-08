export default function hamburguerMenu() {
  let show = true;
  const button = document.querySelector(".hamburger-button button");
  console.log(button);
  const menu = document.querySelector("nav");

  button.addEventListener("click", (e) => {
    menu.classList.toggle("active", show);
    show = !show;
    button.classList.toggle("menu-closed", show);
  });
}
