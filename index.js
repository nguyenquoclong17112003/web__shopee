const modal1 = document.querySelector(".js-modal1");
const modal2 = document.querySelector(".js-modal2");
const btnRegister = document.querySelector(".js-btn-register");
const btnLogin = document.querySelector(".js-btn-login");
const backRegister = document.querySelector(".js-back-register");
const backLogin = document.querySelector(".js-back-login");
const clickLogin = document.querySelector(".js-click-login");
const pressRegister = document.querySelector(".js-press-register");
const iconList = document.querySelector(".js-icon-list");
const listCategory = document.querySelector(".js-container-category");
const modal3 = document.querySelector(".js-modal3");
const productItems = document.querySelectorAll(".js-product-item");
const leftIcon = document.querySelector(".js-left-add");
const modalContainer3 = document.querySelector(".js-modal-container3");

iconList.addEventListener("click", function () {
  listCategory.classList.add("opened");
});

btnRegister.addEventListener("click", function () {
  modal1.classList.add("open");
});

backRegister.addEventListener("click", function () {
  modal1.classList.remove("open");
});

clickLogin.addEventListener("click", function () {
  modal2.classList.add("open");
  modal1.classList.remove("open");
});

backLogin.addEventListener("click", function () {
  modal2.classList.remove("open");
});

btnLogin.addEventListener("click", function () {
  modal2.classList.add("open");
});

pressRegister.addEventListener("click", function () {
  modal1.classList.add("open");
  modal2.classList.remove("open");
});

for (let i = 0; i < productItems.length; i++) {
  const productItem = productItems[i];
  console.log(productItem);
  productItem.addEventListener("click", function () {
    modal3.classList.add("open");
  });
}

leftIcon.addEventListener("click", function () {
  modal3.classList.remove("open");
});

modal3.addEventListener("click", function () {
  modal3.classList.remove("open");
});

modalContainer3.addEventListener("click", function (event) {
  event.stopPropagation();
});
