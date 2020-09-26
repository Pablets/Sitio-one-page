if (navigator.serviceWorker) {
    navigator.serviceWorker.register('/src/sw.js').then(function(registration) {
      console.log('ServiceWorker registration successful with scope:',  registration.scope);
    }).catch(function(error) {
      console.log('ServiceWorker registration failed:', errror);
    });
  }


  var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("menu").style.top = "0";
  } else {
    // setTimeout(function(){}, 10000);
      document.getElementById("menu").style.top = "-50px";

  }
  prevScrollpos = currentScrollPos;
};