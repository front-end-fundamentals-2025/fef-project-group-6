const buttonButton = document.getElementById("button");
const purchaseElement = document.getElementById("purchase");
const trashcanButton = document.getElementById("trashcan");

buttonButton?.addEventListener("click", function () {
  purchaseElement.style.display = "block";
  localStorage.setItem("product", "true");
});

trashcanButton?.addEventListener("click", function () {
  purchaseElement.style.display = "none";
  localStorage.setItem("product", "false");
});
