hljs.highlightAll();

// ------------------------------sidebar js-------------------------------------------


$('.nav-links_item').on('click', function () {
  let item = this.parentElement;
  let needActive = item.querySelector('.is_parent');
  $(needActive).toggleClass('active');
  closeChildren(this);
})

$('.nav-links_item_parent').on('click', function () {
  closeChildren(this);
  changeIcon(this);
  let item = this.parentElement;
  let needActiveLink = item.querySelector('a');
  $(needActiveLink).toggleClass('active');
  let needActiveIcon = item.querySelector('.is_parent');
  $(needActiveIcon).toggleClass('active');
})

function closeChildren(link) {
  let linkElement = link.parentElement;
  let currentLi = linkElement.querySelector('.is_parent').children;
  for (let i = 0; i < currentLi.length; i++) {
    let check = currentLi[i].querySelector('.is_parent');
    if ($(check).hasClass('is_parent')) {
      $(check).removeClass('active')
      let deleteActiveStatusIcon = currentLi[i].querySelector('.chevron')
      $(deleteActiveStatusIcon).removeClass('active')
      let deleteActiveStatusLink = currentLi[i].querySelector('.nav-links_item_parent').children[0];
      $(deleteActiveStatusLink).removeClass('active')
    }
  }
}


function changeIcon(icon) {
  let changeIcon = icon.querySelector('.chevron')
  $(changeIcon).toggleClass('active');
}

$(".sbar").on("click", function () {
  $("aside").toggleClass("close-sm");
  $(".page_nav").toggleClass("page_nav-sm");
  $(".sbar").toggleClass("sbar-open");
  $(".getstarted").attr("data-tooltip", function (index, attr) {
    return attr == "Get started" ? null : "Get started";
  });
  $(".planningguides").attr("data-tooltip", function (index, attr) {
    return attr == "Planning guides" ? null : "Planning guides";
  });
  $(".concepts").attr("data-tooltip", function (index, attr) {
    return attr == "Concepts" ? null : "Concepts";
  });
  $(".references").attr("data-tooltip", function (index, attr) {
    return attr == "References" ? null : "References";
  });
  $(".releasenotes").attr("data-tooltip", function (index, attr) {
    return attr == "Release notes" ? null : "Release notes";
  });
  $(".howto").attr("data-tooltip", function (index, attr) {
    return attr == "How To!" ? null : "How To!";
  });
  // console.log($('.conf-par'));

  // $(".sbar").attr("data-tooltip", function (index, attr) {
  //   return attr == "Open sidebar" ? "Close sidebar" : "Open sidebar";
  // });
  // let allUL = document.getElementsByClassName("is_parent");
  // for (let i = 0; i < allUL.length; i++) {
  //   allUL[i].classList.remove("active");
  // }
  // let navLinksItemParents = document.getElementsByClassName(
  //   "nav-links_item_parent"
  // );
  // for (let i = 0; i < navLinksItemParents.length; i++) {
  //   let elem = navLinksItemParents[i].children[1];
  //   elem.parentElement.parentElement
  //     .querySelector(".is_parent")
  //     .classList.toggle("active");
  //   let val = elem.parentElement.querySelectorAll(".chevron");
  //   for (let i = 0; i < val.length; i++) {
  //     val[i].parentElement
  //       .querySelector(".chevron_right")
  //       .classList.remove("chevron_down");
  //   }
  // }  let checkOpenSbar = $(this).hasClass("sbar-open");
  let checkOpenSbar = $(this).hasClass("sbar-open");
  if (!checkOpenSbar) {
    removeIconEvents();
    $('.conf-par').toggleClass('over-y');
  } else {
    addIconEvents();
    $('.conf-par').toggleClass('over-y');
  }
  // console.log($(this).hasClass("sbar-open"));

});
let checkOpenSbar = $('.sbar').hasClass("sbar-open");

if (!checkOpenSbar) {
  removeIconEvents();
  $('.conf-par').removeClass('over-y');
} else {
  addIconEvents();
  $('.conf-par').addClass('over-y');
}

function removeIconEvents() {
  $(".getstarted").css("pointer-events", "none");
  $(".planningguides").css("pointer-events", "none");
  $(".concepts").css("pointer-events", "none");
  $(".references").css("pointer-events", "none");
  $(".releasenotes").css("pointer-events", "none");
}

function addIconEvents() {
  $(".getstarted").css("pointer-events", "auto");
  $(".planningguides").css("pointer-events", "auto");
  $(".concepts").css("pointer-events", "auto");
  $(".references").css("pointer-events", "auto");
  $(".releasenotes").css("pointer-events", "auto");
}
// -------------------------------/sidebar js---------------------------------------


function copyToClipboard(str) {
  var area = document.createElement('input');
  document.body.appendChild(area);
  area.value = str;
  area.select();
  document.execCommand("copy");
  document.body.removeChild(area);
}

$('.copy-button').on('click', function () {
  let code = this.parentElement.children[0].children[0].innerText;
  copyToClipboard(code);

  let blockCopied = this.children[1];
  $(this).css('background-image', 'url("/assets/images/copy-button-green.svg")')
  $(blockCopied).css('display', 'block')
})

$('.copy-button').on('mouseover', function () {
  let blockCopied = this.children[1];
  $(this).css('background-image', 'url("/assets/images/copy-button-blue.svg")')
  $(blockCopied).css('display', 'none')
})

$('.copy-button').on('mouseout', function () {
  let blockCopied = this.children[1];
  $(this).css('background-image', 'url("/assets/images/copy-button-grey.svg")')
  $(blockCopied).css('display', 'none')
})

$('.chevron-lg').on('click', function () {
  $(this).toggleClass('chevron_down-lg')
})


$('.block-howto-card').on('click', function () {
  console.log($(this.children[0].children[0]));
  $(this.children[0].children[0]).toggleClass('text-green')
  $(this).toggleClass('card-open')
})


$('.block-howto-card__text').on('click', function (event) {
  event.stopPropagation();
})


$('.popup-img').magnificPopup({
  type: 'image',
  mainClass: 'mfp-with-zoom', // this class is for CSS animation below
  zoom: {
    enabled: true, // By default it's false, so don't forget to enable it
    duration: 300, // duration of the effect, in milliseconds
    easing: 'ease-in-out', // CSS transition easing function
    opener: function (openerElement) {
      return openerElement.is('img') ? openerElement : openerElement.find('img');
    }
  }

});


$('.hljs').on('click', function () {
  console.log('test');
})



