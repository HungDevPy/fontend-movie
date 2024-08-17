const header = document.querySelector(".header");
let prevScrollPos = window.pageYOffset;
// Event Header
window.addEventListener("scroll", function () {
  const currentScrollPos = window.pageYOffset;
  // Kiểm tra xem người dùng đang cuộn lên hay cuộn xuống
  if (prevScrollPos > currentScrollPos) {
    // Cuộn lên: hiển thị navbar
    header.style.backgroundColor = "transparent";
    header.style.borderBottom="none";
  } else {
    // Cuộn xuống: ẩn navbar
    header.style.backgroundColor = "black";
    header.style.borderBottom ="1px solid #2b2f3e";
  }
  prevScrollPos = currentScrollPos;
});

// Event Search
document
  .querySelector(".header__icon-btn")
  .addEventListener("click", function () {
    this.parentElement.classList.toggle("open");
    this.previousElementSibling.focus();
  });
// Event Setting User
document.querySelector(".header__user").addEventListener("click", (e) => {
    document.querySelector(".header__user-setting").style.display = "block";
});
// Event Left Right
// const listPosters = document.querySelectorAll(".row_posters1 .moviesposter-wrapper");
// const buttonNext = document.querySelector(".left");
// const buttonPrev = document.querySelector(".right");

// let currentIndex = 0;
// const maxIndex = listPosters.length - 1;

// function showPosters(index) {
//   const listPosters = document.querySelectorAll('.moviesposter-wrapper');

//   listPosters.forEach((poster, i) => {
//     if (i === index) {
      
//   });
// }

// buttonNext.addEventListener("click", function(e) {
//   currentIndex = Math.min(currentIndex + 1, maxIndex);
//   showPosters(currentIndex);
// });

// buttonPrev.addEventListener("click", function(e) {
//   currentIndex = Math.max(currentIndex - 1, 0);
//   showPosters(currentIndex);
// });

// // Initial render
// showPosters(currentIndex);
document.addEventListener("DOMContentLoaded", () => {
  const rightIcons = document.querySelectorAll(".content__main-icon.right");
  const leftIcons = document.querySelectorAll(".content__main-icon.left");
  const postersRows = document.querySelectorAll(".content__main-posters-row");

  function updateIconVisibility(row, leftIcon, rightIcon) {
      const maxScrollLeft = row.scrollWidth - row.clientWidth;
      leftIcon.style.visibility = row.scrollLeft > 0 ? "visible":"hidden" ;
      rightIcon.style.visibility = row.scrollLeft < maxScrollLeft ? "visible":"hidden";
  }

  postersRows.forEach((postersRow, index) => {
      const leftIcon = leftIcons[index];
      const rightIcon = rightIcons[index];

      // Initial check on load
      updateIconVisibility(postersRow, leftIcon, rightIcon);

      rightIcon.addEventListener("click", () => {
          const scrollAmount = postersRow.clientWidth;
          postersRow.scrollBy({ left: scrollAmount, behavior: "smooth" });
      });

      leftIcon.addEventListener("click", () => {
          const scrollAmount = -postersRow.clientWidth;
          postersRow.scrollBy({ left: scrollAmount, behavior: "smooth" });
      });

      postersRow.addEventListener("scroll", () => {
          updateIconVisibility(postersRow, leftIcon, rightIcon);
      });
  });
});
