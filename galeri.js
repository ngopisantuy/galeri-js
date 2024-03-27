// Navbar Menu
document.querySelectorAll(".gambar-container img").forEach((gmbr) => {
  gmbr.onclick = () => {
    document.querySelector(".popup-gambar").style.display = "block";
    document.querySelector(`.popup-gambar img`).src = gmbr.getAttribute("src");
  };
});
document.querySelector(`.popup-gambar span`).onclick = () => {
  document.querySelector(`.popup-gambar`).style.display = "none";
};

// content Gambar
const catagoryContainer = document.querySelectorAll(".filter li");
const catagoryPost = document.querySelectorAll(".gambar-container");
catagoryContainer.forEach((li) => {
  li.onclick = function () {
    //active
    catagoryContainer.forEach((li) => {
      li.className = "";
    });
    li.className = "active";

    console.log(li.textContent);
    const value = li.textContent;
    catagoryPost.forEach((content) => {
      content.classList.add("hide");
      if (
        content.getAttribute("data-filter") == value.toLowerCase() ||
        value == ".filter li"
      ) {
        content.classList.remove("hide");
      }
    });
  };
});

console.log(catagoryContainer, catagoryPost);
