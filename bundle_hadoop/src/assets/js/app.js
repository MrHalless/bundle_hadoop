$('.collapse').on('shown.bs.collapse', function () {
  $(this).parent()[0].children[0].children[3].style.display = "none";
  $(this).parent()[0].children[0].children[2].style.display = 'block';
}).on('hidden.bs.collapse', function () {
  $(this).parent()[0].children[0].children[2].style.display = "none";
  $(this).parent()[0].children[0].children[3].style.display = 'block';
});

