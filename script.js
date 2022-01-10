
window.onscroll = scrollFunction; 

function scrollFunction() { 
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
const video = document.getElementById('video');
video.oncanplaythrough = () => {
  if (navigator.userAgent.match("MSIE")) {
    const videoEL = document.getElementById('js-fullscreen-video');
    videoEL.setAttribute('class', 'fullscreen-video ie');
  }
};