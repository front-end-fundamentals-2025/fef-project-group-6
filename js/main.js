const buttonButton = document.getElementById("button");
const purchaseElement = document.getElementById("purchase-painting");
const trashcanButton = document.getElementById("trashcan");

buttonButton?.addEventListener("click", function () {
  localStorage.setItem("product", "true");
});

trashcanButton?.addEventListener("click", function () {
  localStorage.setItem("product", "false");
});

const paintingsInCart = localStorage.getItem("product");

if (paintingsInCart === "true") {
  purchaseElement.style.display = "block"; 
} else {
  purchaseElement.style.display = "none",
}



