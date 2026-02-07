        // function updateNav() {
        //     const authButtons = document.getElementById('nav-auth-buttons');
        //     if (state.currentUser) {
        //         authButtons.innerHTML = `
        //             <span style="font-size: 0.875rem; color: var(--gray-500); margin-right: 1rem;">Hello, <b>${state.currentUser.name}</b></span>
        //             <button class="btn btn-outline" onclick="handleLogout()" style="border-radius: 0.5rem; padding: 0.5rem 1rem;">Logout</button>
        //         `;
        //     } else {
        //         authButtons.innerHTML = `
        //             <button class="btn" onclick="navigateTo('login')">Login</button>
        //             <button class="btn btn-primary" onclick="navigateTo('register')">Register</button>
        //         `;
        //     }
        // }

        // function handleLogin(e) {
        //     e.preventDefault();
        //     const role = document.getElementById('login-role').value;
        //     state.currentUser = {
        //         name: role === 'donor' ? 'Alex Doe' : role === 'hospital' ? 'Memorial Hospital' : 'Admin User',
        //         role: role
        //     };
        //     showToast(`Signing in as ${role}...`);
        //     setTimeout(() => {
        //         if (role === 'donor') navigateTo('donor-dashboard');
        //         else if (role === 'hospital') navigateTo('hospital-dashboard');
        //         else if (role === 'admin') navigateTo('admin-dashboard');
        //         else if (role === 'super-admin') navigateTo('super-admin-dashboard');
        //     }, 800);
        // }

        // function handleRegister(e) {
        //     e.preventDefault();
        //     showToast("Account created! Please login.");
        //     setTimeout(() => navigateTo('login'), 1200);
        // }

        // function handleLogout() {
        //     state.currentUser = null;
        //     navigateTo('home');
        //     showToast("Logged out successfully.");
        // }

        // function showToast(msg) {
        //     const toast = document.getElementById('toast');
        //     document.getElementById('toast-message').innerText = msg;
        //     toast.classList.add('show');
        //     setTimeout(() => toast.classList.remove('show'), 3000);
        // }

        // function showCertificate() {
        //     const overlay = document.createElement('div');
        //     overlay.id = "cert-overlay-container";
        //     overlay.innerHTML = certificateTemplate;
        //     document.body.appendChild(overlay);
        //     document.getElementById('cert-user-name').innerText = state.currentUser ? state.currentUser.name : 'Donor Name';
        //     lucide.createIcons();
        // }

        // function hideCertificate() {
        //     const el = document.getElementById('cert-overlay-container');
        //     if (el) el.remove();
        // }

        // function showModal() {
        //     showToast("Opening Request Form...");
        // }

        // window.onload = () => navigateTo('home');


const openLoginModel = document.getElementById('open-login-model');
const closeLoginModel = document.getElementById('close-login-btn');
const loginModal = document.getElementById('show-login-model');

openLoginModel.addEventListener('click', () => {
    loginModal.classList.add('login-active');
});

closeLoginModel.addEventListener('click', () => {
    loginModal.classList.remove('login-active');
});

const openRegisterModel = document.getElementById('open-register-model');
const closeRegisterModel = document.getElementById('close-register-btn');
const registerModal = document.getElementById('show-register-model');

openRegisterModel.addEventListener('click', () => {
    registerModal.classList.add('register-active');
     document.body.style.overflow = "auto"; 
});

closeRegisterModel.addEventListener('click', () => {
    registerModal.classList.remove('register-active');
     document.body.style.overflow = "auto"; 
});



// MAKE navigateTo GLOBAL (for inline onclick)
window.navigateTo = function (type) {
  if (type === "register") {
    loginModal.classList.remove("login-active");
    registerModal.classList.add("register-active");
    document.body.style.overflow = "hidden";
  }

  if (type === "login") {
    registerModal.classList.remove("register-active");
    loginModal.classList.add("login-active");
    document.body.style.overflow = "auto";
  }
};


// VARIABLES


let menu = document.querySelector("#hamburg-menu");
let popnav = document.querySelector(".hamburg-nav");
let navLinks = popnav.querySelectorAll("a");
const video = document.querySelector("#hero-video");
const heroImg = document.querySelector("#hero-img");



function hamburgMenu() {
  menu.addEventListener("click",function(){

   if (window.innerWidth > 768) return;

  // OPEN
  if (popnav.style.display !== "block") {
    popnav.style.display = "block";

    gsap.to(popnav, {
      right: "0%",
      duration: 0.5,
      ease: "power3.out"
    });

    menu.className = "ri-close-line";
  }

  // CLOSE
  else {
    gsap.to(popnav, {
      right: "-100%",
      duration: 0.4,
      ease: "power3.in",
      onComplete: function() {
        popnav.style.display = "none";
      }
    });

    menu.className = "ri-menu-3-line";
  }});



  

navLinks.forEach(function(link) {
  link.addEventListener("click", function(){
       gsap.to(popnav, {
      right: "-100%",
      duration: 0.4,
      ease: "power3.in",
      onComplete: function() {
        popnav.style.display = "none";
      }
    });

    menu.className = "ri-menu-line";
  });

});


}

function banner(){
  const images = [
  "https://images.pexels.com/photos/5340269/pexels-photo-5340269.jpeg",


  "https://images.pexels.com/photos/5922043/pexels-photo-5922043.jpeg",


  "https://images.pexels.com/photos/4040561/pexels-photo-4040561.jpeg"
];

let index = 0;

setInterval(function() {
  index = (index + 1) % images.length;
  heroImg.src = images[index];
}, 4000);


}

function scrollvideo (){
  ScrollTrigger.create({
  trigger: "#donateBlood",
  start: "top 80%",   
  end: "bottom 30%",
  // markers:true,
  
  onEnter: function() {
    video.play();
  },

  onLeave: function() {
    video.pause();
  },

  onEnterBack: function() {
    video.play();
  },

  onLeaveBack: function() {
    video.pause();
  }
});

}

hamburgMenu();
banner();
scrollvideo ();