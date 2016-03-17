document.body.appendChild(document.importNode(document.getElementById('header-template').import.querySelector('header'), true));
document.body.appendChild(document.importNode(document.getElementById('footer-template').import.querySelector('footer'), true));


$('a').on('click', function(e) {
  if (this.hash) {
    e.preventDefault();
    var el = $(this.hash);
    console.log(el.offset());
    window.scrollTo(0, el.offset().top - 70);
  }
});
