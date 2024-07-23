document.getElementById('active-software').addEventListener('click', function() {
    window.location.href = './application/application.html';
});

document.getElementById('fb-services').addEventListener('click', function() {
    window.location.href = './fb/fb.html';
});
window.addEventListener("load", () => {
    setTimeout(()=>{
      const preloader = document.getElementById("preloader");
      const mainContent = document.getElementById("main-content");
  
      preloader.classList.add("fade-out");
      mainContent.classList.add("show");
    },500);
  });