/*jshint esversion: 6*/

function r(i) {
  if ("mousedown" !== i.type || 0 === i.button) {
    var t = this,
      e = t._rippleEl;
    if (!t.disabled) {
      if (!e) {
        var o = document.createElement("span");
        o.className = "mui-btn__ripple-container", o.innerHTML = '<span class="mui-ripple"></span>', t.appendChild(o), e = t._rippleEl = o.children[0], u.on(t, s, d);
      }
      var n, l, a = u.offset(t), r = "touchstart" === i.type ? i.touches[0] : i;

      l = 2 * (n = Math.sqrt(a.height * a.height + a.width * a.width)) + "px", u.css(e, { width: l, height: l, top: Math.round(r.pageY - a.top - n) + "px", left: Math.round(r.pageX - a.left - n) + "px" }), u.removeClass(e, "mui--is-animating"), u.addClass(e, "mui--is-visible"), m.requestAnimationFrame(function () { u.addClass(e, "mui--is-animating"); });
    }
  }
}