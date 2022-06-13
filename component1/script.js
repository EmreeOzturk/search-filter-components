const li = document.querySelectorAll("li");

function select() {
  li.forEach(function (item) {
    item.classList.remove("active");
    item.addEventListener("click", function () {
      document.querySelector(".search-container input").value = item.innerText;
      item.classList.add("active");
      value = item.innerText;
    });
  });
}
