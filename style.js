// Make sure to include GSAP and ScrollTrigger CDN in your HTML <head> or before this script:
// <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
// <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>

gsap.registerPlugin(ScrollTrigger);

// Animate nav items on page load
gsap.from("nav ul li", {
  duration: 0.6,
  y: -20,
  opacity: 0,
  stagger: 0.15,
  ease: "power2.out"
});

// Hero text typing effect simulation with GSAP timeline
const typedText = document.querySelector(".typedText");
const words = ["from Kolkata", "Developer"];
let currentWord = 0;
let charIndex = 0;

function type() {
  if (charIndex <= words[currentWord].length) {
    typedText.textContent = words[currentWord].substring(0, charIndex);
    charIndex++;
    setTimeout(type, 150);
  } else {
    setTimeout(erase, 1500);
  }
}

function erase() {
  if (charIndex >= 0) {
    typedText.textContent = words[currentWord].substring(0, charIndex);
    charIndex--;
    setTimeout(erase, 100);
  } else {
    currentWord = (currentWord + 1) % words.length;
    setTimeout(type, 500);
  }
}

type();

// Featured image floating animation with GSAP repeat
gsap.to(".featured-image img", {
  y: 20,
  duration: 3.5,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut"
});

// Animate About section fade & slide on scroll
gsap.utils.toArray("#about .col, #about .skills-box").forEach(elem => {
  gsap.from(elem, {
    scrollTrigger: {
      trigger: elem,
      start: "top 80%",
      toggleActions: "play none none none",
    },
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power2.out",
    stagger: 0.2,
  });
});

// Animate Project cards on scroll
gsap.utils.toArray(".work").forEach(card => {
  gsap.from(card, {
    scrollTrigger: {
      trigger: card,
      start: "top 85%",
      toggleActions: "play none none none",
    },
    opacity: 0,
    scale: 0.9,
    y: 40,
    duration: 1,
    ease: "power2.out",
  });
});

// Animate Contact left and right on scroll
gsap.from(".contact-left", {
  scrollTrigger: {
    trigger: ".contact-left",
    start: "top 90%",
    toggleActions: "play none none none",
  },
  opacity: 0,
  x: -100,
  duration: 1,
  ease: "power2.out"
});

gsap.from(".contact-right", {
  scrollTrigger: {
    trigger: ".contact-right",
    start: "top 90%",
    toggleActions: "play none none none",
  },
  opacity: 0,
  x: 100,
  duration: 1,
  ease: "power2.out"
});

// Animate social icons fade in from bottom
gsap.from(".social-icons a", {
  scrollTrigger: {
    trigger: ".social-icons",
    start: "top 90%",
    toggleActions: "play none none none",
  },
  opacity: 0,
  y: 30,
  stagger: 0.15,
  duration: 0.8,
  ease: "power2.out",
});


  

const scriptURL =
  "https://script.google.com/macros/s/AKfycbwgmeadwML22oQbuoIWDCpn7hGKkCpaL4F1T0WOmwRCQoWFm2CXqLzmVsVpTXzm-gKKKQ/exec";
const form = document.forms["submit-to-google-sheet"];
const msg=document.getElementById("msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then(response=>{
        msg.innerHTML="Message sent successfully"
        setTimeout(function(){
            msg.innerHTML=""
        },5000)
        form.reset()
    })
    .catch((error) => console.error("Error!", error.message));
});
