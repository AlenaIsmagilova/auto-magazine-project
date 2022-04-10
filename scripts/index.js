//gallery
const galleryButtonBack = document.querySelector(".content__button-back");
const galleryButtonForward = document.querySelector(".content__button-forward");
const galleryContainer = document.querySelector(".content__gallery-container");
const humburgerMenuButton = document.querySelector(".humburger-menu__button");
const humburgerMenu = document.querySelector(".humburger_menu");
const humburgerButton = document.querySelector(".header__button");
const closedButton = document.querySelector(".header__button-closed");
const navList = document.querySelector(".header__list");
const logo = document.querySelector(".logo");
const header = document.querySelector(".header");
const leftButton = document.querySelector("#left-button");
const rightButton = document.querySelector("#right-button");
const excerptText = document.querySelector(".info__excerpt");
const anchor = document.querySelector(".info__button-anchor");
const inputFirstName = document.querySelector("#inputFirstName");
const inputSecondname = document.querySelector("#inputSecondName");
const inputEmail = document.querySelector("#inputEmail");
const footerFormButton = document.querySelector(".footer__form-button");

function goForward() {
  const value = galleryContainer.style.getPropertyValue("transform");
  if (value === "translateX(0px)") {
    galleryContainer.style.setProperty("transform", "translateX(-33.33%)");
  } else if (value === "translateX(-33.33%)") {
    galleryContainer.style.setProperty("transform", "translateX(-66.66%)");
  } else if (value === "translateX(-100%)") {
    return;
  }
}

function goBack() {
  const value = galleryContainer.style.getPropertyValue("transform");
  if (value === "translateX(-100%)") {
    galleryContainer.style.setProperty("transform", "translateX(-66.66%)");
  } else if (value === "translateX(-66.66%)") {
    galleryContainer.style.setProperty("transform", "translateX(-33.33%)");
  } else if (value === "translateX(-33.33%)") {
    galleryContainer.style.setProperty("transform", "translateX(0px)");
  } else if (value === "translateX(0px)") {
    return;
  }
}

const formActive = () => {
  if (
    inputFirstName.value.length === 0 ||
    inputSecondname.value.length === 0 ||
    inputEmail.value.length === 0
  ) {
    footerFormButton.textContent = "Подписка";
  } else {
    footerFormButton.textContent = "Готово!";
  }
};

galleryButtonForward.addEventListener("click", goForward);

galleryButtonBack.addEventListener("click", goBack);

//burger-button

humburgerButton.addEventListener("click", () => {
  header.classList.add("header_opened");
  navList.classList.add("header__list_opened");
  logo.classList.add("logo_opened");
  closedButton.classList.add("header__button-closed_opened");
  humburgerButton.classList.add("header__button_opened");
  header.classList.add("header_opened");
});

closedButton.addEventListener("click", () => {
  header.classList.remove("header_opened");
  navList.classList.remove("header__list_opened");
  logo.classList.remove("logo_opened");
  closedButton.classList.remove("header__button-closed_opened");
  humburgerButton.classList.remove("header__button_opened");
  header.classList.remove("header_opened");
});

// press

leftButton.addEventListener("click", () => {
  if (leftButton.classList.contains("info__button_active")) {
    return;
  } else {
    leftButton.classList.add("info__button_active");
    rightButton.classList.remove("info__button_active");
    excerptText.textContent =
      "Engadget: VW’s e-BULLI concept shows how your classic van can become an EV.";
    anchor.setAttribute(
      "href",
      "https://www.engadget.com/2020-03-20-vw-unveils-e-bulli-t1-electric-conversion.html"
    );
  }
});

rightButton.addEventListener("click", () => {
  if (rightButton.classList.contains("info__button_active")) {
    return;
  } else {
    rightButton.classList.add("info__button_active");
    leftButton.classList.remove("info__button_active");
    excerptText.textContent =
      "Drive.ru: Вэн Volkswagen e-Bulli скрестил классику с современной техникой.";
    anchor.setAttribute(
      "href",
      "https://www.drive.ru/news/volkswagen/5e7447bdec05c4b251000010.html"
    );
  }
});

// form

inputFirstName.addEventListener("input", formActive);

inputSecondname.addEventListener("input", formActive);

inputEmail.addEventListener("input", formActive);
