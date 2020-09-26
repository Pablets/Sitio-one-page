/*jshint esversion: 6*/

// if (navigator.serviceWorker) {
//     navigator.serviceWorker.register('/src/sw.js').then(function(registration) {
//       console.log('ServiceWorker registration successful with scope:',  registration.scope);
//     }).catch(function(error) {
//       console.log('ServiceWorker registration failed:', errror);
//     });
//   }


var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  let element = document.getElementById('btn');
  let elementStyle = window.getComputedStyle(element);
  let elementLeft = elementStyle.getPropertyValue('left');
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("menu").style.top = "0";
  } else if (elementLeft != 0) {
      setTimeout(function () { document.getElementById("menu").style.top = "-50px"; }, 5000);
  }else{
    document.getElementById("menu").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
};