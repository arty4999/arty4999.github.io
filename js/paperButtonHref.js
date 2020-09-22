function goToLink(el, href) {
  // Wait for ripple to finish.
  el.addEventListener('transitionend', function(e) {
    location.href = href;
  });
}