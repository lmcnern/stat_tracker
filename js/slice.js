[].slice.call(document.querySelectorAll('.dotstyle > ul')).forEach(function(nav) {
  new DotNav(nav, {
    callback: function(idx) {
    }
  });
});