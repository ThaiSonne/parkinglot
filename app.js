  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCsNAx6-FtQxL8B22rHCImaqtAlfN_lQdM",
  authDomain: "smark-parking-storage.firebaseapp.com",
  databaseURL: "https://smark-parking-storage-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "smark-parking-storage",
  storageBucket: "smark-parking-storage.firebasestorage.app",
  messagingSenderId: "465216523868",
  appId: "1:465216523868:web:bc78ca045f88913b172099",
  measurementId: "G-0TXH7E6KGX"
};

if (typeof firebase !== "undefined") {
  firebase.initializeApp(firebaseConfig);
}

document.addEventListener("DOMContentLoaded", () => {
const loginForm = document.getElementById("loginForm");

if (loginForm) {
    loginForm.addEventListener("submit", (event) => {
      event.preventDefault();
      window.location.href = "overview.html";
    });
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  document.querySelectorAll('.scroll-animate').forEach((el) => {
    observer.observe(el);
  });
});
