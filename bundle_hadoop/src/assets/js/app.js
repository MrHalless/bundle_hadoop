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

// sidebar js

let navLinksItem = document.getElementsByClassName("nav-links_item");

for (let i = 0; i < navLinksItem.length; i++) {
  navLinksItem[i].addEventListener("click", function () {
    console.log(this.parentElement);
    this.parentElement.querySelector(".is_parent").classList.toggle("active");
  });
}

let navLinksItemParents = document.getElementsByClassName(
  "nav-links_item_parent"
);
// console.log("35", navLinksItemParents[0].children[1]);
for (let i = 0; i < navLinksItemParents.length; i++) {
  navLinksItemParents[i].children[1].addEventListener("click", function () {
    // console.log(this.parentElement.parentElement);
    this.parentElement.parentElement
      .querySelector(".is_parent")
      .classList.toggle("active");
    let val = this.parentElement.querySelector(".chevron_right");
    if (val) {
      this.parentElement
        .querySelector(".chevron_right")
        .classList.toggle("chevron_down");
    }
  });
}

// let sidebar = document.querySelector(".sidebar");

// let getStarted = document.querySelector(".get");
// console.log(getStarted);

// getStarted.addEventListener("click", function () {
//   $(".sub-menu-get").toggle("");
// });

// let subMenuGet = document.querySelector(".sub-menu-get");

// subMenuGet.addEventListener("click", function () {
//   // console.log(this);
//   $(".more-1-sub-menu").toggle("");
// });

// // let navLink = document.querySelectorAll(".sidebar-menu");
// let navLinks = document.querySelector(".nav-links");
// console.log(navLinks);

// let started = document.querySelector(".get");
// // let planning =

// started.onclick = function () {
//   navLinks.classList.toggle("show-get");
// };

// for (let i = 0; i < navLink.children.length; i++) {
//   const element = navLink.children[i];
//   element.addEventListener("click", function () {
//     // console.log(1);
//     // console.log($(this.children[2]).toggle(""));
//     $(this.children[2]).toggleClass("sub-menu-show");
//   });
// }
// navLink.children.forEach((element) => {
//   element.children[1].addEventListener("click", function () {
//     console.log(this);
//   });
// });
