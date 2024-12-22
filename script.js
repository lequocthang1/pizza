document.addEventListener("DOMContentLoaded", function () {
  const changeBgIcon = document.querySelector(".change-bg-icon");
  const body = document.querySelector("body");
  const header = document.querySelector("header");
  const footer = document.querySelector("footer");
  const nav = document.querySelector("nav");

  changeBgIcon.addEventListener("click", function () {
    // Toggle background colors
    body.classList.toggle("changed-background");
    header.classList.toggle("changed-background");
    footer.classList.toggle("changed-background");
    nav.classList.toggle("changed-background");

    // Check current text colors and toggle
    const currentColor = window.getComputedStyle(body).color;
    if (currentColor === "rgb(0, 0, 0)") {
      // Black
      body.style.color = "white";
      header.style.color = "white";
      footer.style.color = "white";
      // Change icon to sun
      changeBgIcon.classList.remove("fa-paint-brush");
      changeBgIcon.classList.add("fa-sun");
    } else {
      body.style.color = "black";
      header.style.color = "black";
      footer.style.color = "black";
      // Change icon back to paintbrush
      changeBgIcon.classList.remove("fa-sun");
      changeBgIcon.classList.add("fa-paint-brush");
    }
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".section");

  const options = {
    root: null, // Sử dụng viewport làm root
    rootMargin: "0px",
    threshold: 0.1, // Kích hoạt khi 10% của phần tử được hiển thị
  };

  const callback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible"); // Thêm lớp 'visible' khi phần tử vào vùng nhìn thấy
      } else {
        entry.target.classList.remove("visible"); // Xóa lớp 'visible' khi phần tử ra khỏi vùng nhìn thấy
      }
    });
  };

  const observer = new IntersectionObserver(callback, options);

  sections.forEach((section) => {
    observer.observe(section); // Quan sát từng phần tử
  });
});
