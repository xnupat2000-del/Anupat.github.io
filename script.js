// แสดงปีปัจจุบันใน Footer
document.getElementById("year").textContent =
    new Date().getFullYear();


// ระบบเปิด-ปิดเมนูบนโทรศัพท์
const menuToggle = document.getElementById("menuToggle");

const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", function () {

    navLinks.classList.toggle("active");

});


// ปิดเมนูเมื่อกดเลือกลิงก์
document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

    });

});


// ปุ่มกลับขึ้นด้านบน
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", function () {

    if (window.scrollY > 300) {

        backToTop.style.display = "block";

    } else {

        backToTop.style.display = "none";

    }

});


// เมื่อกดปุ่มให้กลับไปด้านบน
backToTop.addEventListener("click", function () {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});
