$(".collapse")
  .on("shown.bs.collapse", function () {
    $(this).parent()[0].children[0].children[3].style.display = "none";
    $(this).parent()[0].children[0].children[2].style.display = "block";
  })
  .on("hidden.bs.collapse", function () {
    $(this).parent()[0].children[0].children[2].style.display = "none";
    $(this).parent()[0].children[0].children[3].style.display = "block";
  });

$("#list-tab a").on("click", function (event) {
  event.preventDefault();
  $(this).tab("show");
});

hljs.highlightAll();

// ------------------------------sidebar js-------------------------------------------

let navLinksItem = document.getElementsByClassName("nav-links_item");

for (let i = 0; i < navLinksItem.length; i++) {
  navLinksItem[i].addEventListener("click", function () {
    let flag = this.parentElement
      .querySelector(".is_parent")
      .classList.contains("active");

    if (flag) {
      let allUL = document.getElementsByClassName("is_parent");
      for (let i = 0; i < allUL.length; i++) {
        allUL[i].classList.remove("active");
      }
      let removeChevron = document.getElementsByClassName("chevron");
      for (let i = 0; i < removeChevron.length; i++) {
        removeChevron[i].classList.remove("chevron_down");
      }

      let navLinksItemParents = document.getElementsByClassName(
        "nav-links_item_parent"
      );
      for (let i = 0; i < navLinksItemParents.length; i++) {
        let elem = navLinksItemParents[i].children[1];
        elem.parentElement.parentElement
          .querySelector(".is_parent")
          .classList.toggle("active");
        let val = elem.parentElement.querySelectorAll(".chevron");

        for (let i = 0; i < val.length; i++) {
          val[i].parentElement
            .querySelector(".chevron")
            .classList.remove("chevron_down");
        }
      }
    } else {
      let allUL = document.getElementsByClassName("is_parent");
      for (let i = 0; i < allUL.length; i++) {
        allUL[i].classList.remove("active");
      }
      let removeChevron = document.getElementsByClassName("chevron");
      for (let i = 0; i < removeChevron.length; i++) {
        removeChevron[i].classList.remove("chevron_down");
      }
      this.parentElement.querySelector(".is_parent").classList.toggle("active");
    }
  });
}

let navLinksItemParents = document.getElementsByClassName(
  "nav-links_item_parent"
);
for (let i = 0; i < navLinksItemParents.length; i++) {
  navLinksItemParents[i].children[1].addEventListener("click", function () {
    this.parentElement.parentElement
      .querySelector(".is_parent")
      .classList.toggle("active");
    let val = this.parentElement.querySelector(".chevron");
    if (val) {
      this.parentElement
        .querySelector(".chevron_right")
        .classList.toggle("chevron_down");
    }
  });
}

$(".nav-links_item_release").on("click", function () {
  let allUL = document.getElementsByClassName("is_parent");
  for (let i = 0; i < allUL.length; i++) {
    allUL[i].classList.remove("active");
  }
  let navLinksItemParents = document.getElementsByClassName(
    "nav-links_item_parent"
  );
  for (let i = 0; i < navLinksItemParents.length; i++) {
    let elem = navLinksItemParents[i].children[1];
    elem.parentElement.parentElement
      .querySelector(".is_parent")
      .classList.toggle("active");
    let val = elem.parentElement.querySelectorAll(".chevron");
    for (let i = 0; i < val.length; i++) {
      val[i].parentElement
        .querySelector(".chevron_right")
        .classList.remove("chevron_down");
    }
  }
});

$(".sbar").on("click", function () {
  $("aside").toggleClass("close-sm");
  $(".page_nav").toggleClass("page_nav-sm");
});
