// [14:01, 12/14/2025] ISMAIL NOUH HUDHUUN: / ================================
// // SMOOTH SCROLL NAVIGATION
// // ================================
// document.querySelectorAll("nav a").forEach(link => {
//   link.addEventListener("click", function (e) {
//     e.preventDefault();

//     const targetId = this.getAttribute("href");
//     const targetSection = document.querySelector(targetId);

//     if (targetSection) {
//       targetSection.scrollIntoView({
//         behavior: "smooth",
//         block: "start"
//       });
//     }
//   });
// });


// // ================================
// // NAVBAR ACTIVE LINK
// // ================================
// const sections = document.querySelectorAll("section");
// const navLinks = document.querySelectorAll("nav a");

// window.addEventListener("scroll", () => {
//   let current = "";

//   sections.forEach(section…
// [14:10, 12/14/2025] ISMAIL NOUH HUDHUUN: document.addEventListener("DOMContentLoaded", () => {

//   /* ==============================
//      SMOOTH SCROLL (NAV LINKS)
//   ============================== */
//   const navLinks = document.querySelectorAll("nav a");

//   navLinks.forEach(link => {
//     link.addEventListener("click", e => {
//       const targetId = link.getAttribute("href");

//       if (targetId && targetId.startsWith("#")) {
//         const target = document.querySelector(targetId);
//         if (target) {
//           e.preventDefault();
//           target.scrollIntoView({ behavior: "smooth" });
//         }
//       }
//     });
//   });


//   /* ==============================
//      NAVBAR ACTIVE LINK (SCROLL)
//   ============================== */
//   const sections = document.querySelectorAll("section");

//   window.addEventListener("scroll", () => {
//     let currentSection = "";

//     sections.forEach(section => {
//       const sectionTop = section.offsetTop - 150;
//       if (window.scrollY >= sectionTop) {
//         currentSection = section.getAttribute("id");
//       }
//     });

//     navLinks.forEach(link => {
//       link.classList.remove("active");
//       if (link.getAttribute("href") === #${currentSection}) {
//         link.classList.add("active");
//       }
//     });
//   });


//   /* ==============================
//      LOGO AUTO ANIMATION (SAFE)
//   ============================== */
//   const logo = document.querySelector(".hudhuun-logo");
//   if (logo) {
//     logo.classList.add("animate");
//   }


//   /* ==============================
//      ENROLL BUTTON → REGISTER
//   ============================== */
//   const enrollBtn = document.querySelector(".navbar .btn");
//   const registerSection = document.querySelector("#register");

//   if (enrollBtn && registerSection) {
//     enrollBtn.addEventListener("click", () => {
//       registerSection.scrollIntoView({ behavior: "smooth" });
//     });
//   }


//   /* ==============================
//      REGISTER FORM VALIDATION
//   ============================== */
//   const form = document.querySelector(".register form");

//   if (form) {
//     form.addEventListener("submit", e => {
//       e.preventDefault();

//       const inputs = form.querySelectorAll("input");
//       let valid = true;

//       inputs.forEach(input => {
//         if (input.value.trim() === "") {
//           input.style.border = "2px solid red";
//           valid = false;
//         } else {
//           input.style.border = "none";
//         }
//       });

//       if (valid) {
//         alert("✅ Registration Successful!");
//         form.reset();
//       }
//     });
//   }

// });



const observerOptions = {
  threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
  section.style.opacity = "0";
  section.style.transform = "translateY(50px)";
  section.style.transition = "all 0.8s ease-out";
  observer.observe(section);
});