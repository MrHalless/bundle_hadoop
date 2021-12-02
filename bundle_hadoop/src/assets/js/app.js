hljs.highlightAll();

// ------------------------------sidebar js-------------------------------------------

$(".nav-links_item").on("click", function () {
  let item = this.parentElement;
  let needActive = item.querySelector(".is_parent");
  $(needActive).toggleClass("active");
  closeChildren(this);
});

$(".nav-links_item_parent").on("click", function () {
  closeChildren(this);
  changeIcon(this);
  let item = this.parentElement;
  let needActiveLink = item.querySelector("a");
  $(needActiveLink).toggleClass("active");
  let needActiveIcon = item.querySelector(".is_parent");
  $(needActiveIcon).toggleClass("active");

});

function closeChildren(link) {
  let linkElement = link.parentElement;
  let currentLi = linkElement.querySelector(".is_parent").children;
  for (let i = 0; i < currentLi.length; i++) {
    let check = currentLi[i].querySelector(".is_parent");
    if ($(check).hasClass("is_parent")) {
      $(check).removeClass("active");
      let deleteActiveStatusIcon = currentLi[i].querySelector(".chevron");
      $(deleteActiveStatusIcon).removeClass("active");
      let deleteActiveStatusLink = currentLi[i].querySelector(
        ".nav-links_item_parent"
      ).children[0];
      $(deleteActiveStatusLink).removeClass("active");
    }
  }
}

function closeAllParent() {
  let allLinks = $(".nav-links_item");
  for (let i = 0; i < allLinks.length; i++) {
    closeChildren(allLinks[i]);
    let item = allLinks[i].parentElement;
    let needRemoveActive = item.querySelector(".is_parent");
    $(needRemoveActive).removeClass("active");
  }
}

function changeIcon(icon) {
  let changeIcon = icon.querySelector(".chevron");
  $(changeIcon).toggleClass("active");
}

function changeContent() {

  if ($(".sidebar").hasClass("close-sm")) {
    $(".nav-links_item").on("click", function () {

      if ($(".sidebar").hasClass("close-sm")) {
        let checkFlag = $(this.parentElement.querySelector('.is_parent')).hasClass('active');
        if (!checkFlag) {
          $(this.parentElement.querySelector('.is_parent')).removeClass('active');
          removeClassActiveIcon(this);
          // $('.tooltip-top-left').removeClass('active')
        } else {
          $('.is_parent').removeClass('active')
          $('.is_parent').css('visibility', 'visible');

          // сюда функцию
          removeClassActiveIcon(this);

          // $('.tooltip-top-left').removeClass('active');
          $(this.children[0]).addClass('active')
          $(this.parentElement.querySelector('.is_parent')).addClass('active');
        }
      }


    });

    let closeLink = $(".sidebar.close-sm")[0].children[2].children[0].children;
    for (let i = 0; i < closeLink.length; i++) {
      $(closeLink[i]).on("click", function (event) {
        event.stopPropagation();



        $(".nav-links_item_parent").on("click", function (event) {
          event.stopPropagation();

          if ($(".sidebar").hasClass("close-sm")) {
            let currentLi = this.parentElement.querySelector(
              ".nav-links_item_parent"
            );
            let currentLink = $(currentLi.children[0]).attr("href");
            let currentTitle = currentLi.children[0].innerText;
            let isParentBlock = this.parentElement.querySelector(".is_parent");
            let checkBackTitle = $(isParentBlock.children[0]).hasClass(
              "backtitle"
            );
            if (checkBackTitle) {
              $(isParentBlock.querySelector(".backtitle")).css("display", "none");
              if ($(isParentBlock.querySelector(".backtitle")).css("display") == "none" && $(".sidebar").hasClass("close-sm")) {

                $(isParentBlock.querySelector(".backtitle")).css("display", "flex");
              } else {
                $(isParentBlock.querySelector(".backtitle")).css("display") == "none"
              }
            } else {
              $(isParentBlock).prepend(`<li class="backtitle">
                  <a href="${currentLink}">${currentTitle}</a>
                  <i class="backicon"></i>
                  </li>`);
              let LinksBackTitle = $('.backtitle');
              for (let i = 0; i < LinksBackTitle.length; i++) {
                $(LinksBackTitle[i].children[0]).on('click', function (event) {
                  event.stopPropagation();
                });
              }
            }
            $(this.parentElement.parentElement).css('visibility', 'hidden');
            $(this.parentElement.children[1]).css('visibility', 'visible');

            $(".backtitle").on("click", function (event) {
              event.stopPropagation();
              let changeItem = this.parentElement.parentElement.querySelector(
                ".nav-links_item_parent"
              );
              $(this.parentElement).removeClass("active");
              $(changeItem.children[0]).removeClass("active");
              $(changeItem.children[1]).removeClass("active");
              $(changeItem.parentElement.parentElement).css('visibility', 'visible')

            });
          } else {
            $(".backtitle").css("display", "none");
          }

        });
      });

    }
  }
}

// /createnewblocksidebar

$(".sbar").on("click", function () {
  closeAllParent();

  $("aside").toggleClass("close-sm");
  $(".article").toggleClass("article-sm");
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
  $('.getstarted').removeClass('active');
  $('.planningguides').removeClass('active');
  $('.concepts').removeClass('active');
  $('.references').removeClass('active');
  $('.releasenotes').removeClass('active');
  $('.howto').removeClass('active');

  $('.is_parent').removeClass('active')
  $('.is_parent').css('visibility', 'visible');
  // let links = $(".nav-links_item");
  // removeClassActiveIcon(links);
  checkOpenSbar();
  changeContent();
});

function removeClassActiveIcon(item) {
  let icons = $(item.parentElement.parentElement)[0].children;

  for (let i = 0; i < icons.length; i++) {
    let items = icons[i].querySelector('.nav-links_item');
    if (items) {
      // console.log(items.children[0]);
      $(items.children[0]).removeClass('active');
    }
  }
}

function checkOpenSbar() {
  let checkOpenSbar = $(".sbar").hasClass("sbar-open");

  if (!checkOpenSbar) {
    removeIconEvents();
    $(".conf-par").toggleClass("over-y");
    $('.sidebar-head').removeClass('close-head');
  } else {
    addIconEvents();
    $(".conf-par").toggleClass("over-y");
    $('.sidebar-head').addClass('close-head');
  }
}
checkOpenSbar();



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
  var area = document.createElement("input");
  document.body.appendChild(area);
  area.value = str;
  area.select();
  document.execCommand("copy");
  document.body.removeChild(area);
}

$(".copy-button").on("click", function () {
  let code = this.parentElement.children[0].children[0].innerText;
  copyToClipboard(code);

  let blockCopied = this.children[1];
  $(this).css(
    "background-image",
    'url("/assets/images/copy-button-green.svg")'
  );
  $(blockCopied).css("display", "block");
});

$(".copy-button").on("mouseover", function () {
  let blockCopied = this.children[1];
  $(this).css("background-image", 'url("/assets/images/copy-button-blue.svg")');
  $(blockCopied).css("display", "none");
});

$(".copy-button").on("mouseout", function () {
  let blockCopied = this.children[1];
  $(this).css("background-image", 'url("/assets/images/copy-button-grey.svg")');
  $(blockCopied).css("display", "none");
});

$(".chevron-lg").on("click", function () {
  $(this).toggleClass("chevron_down-lg");
});

Array.from(document.querySelectorAll('.chevron-footer-right')).forEach(el => {
  el.addEventListener('click', (e) => {
    e.preventDefault();
    el.classList.toggle('chevron-footer-down');
  })
})

$(".block-howto-card").on("click", function () {
  console.log($(this.children[0].children[0]));
  $(this.children[0].children[0]).toggleClass("text-green");
  $(this).toggleClass("card-open");
});

$(".block-howto-card__text").on("click", function (event) {
  event.stopPropagation();
});


$(".popup-img").magnificPopup({
  type: "image",
  mainClass: "mfp-with-zoom", // this class is for CSS animation below
  zoom: {
    enabled: true, // By default it's false, so don't forget to enable it
    duration: 300, // duration of the effect, in milliseconds
    easing: "ease-in-out", // CSS transition easing function
    opener: function (openerElement) {
      return openerElement.is("img")
        ? openerElement
        : openerElement.find("img");
    },
  },
});

setTimeout(() => {
  let LinksStopProp = $('.nav-links_item_parent');
  for (let i = 0; i < LinksStopProp.length; i++) {
    $(LinksStopProp[i].children[0]).on('click', function (event) {
      event.stopPropagation();
    });
  }
}, 100);



