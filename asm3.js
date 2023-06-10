"use strict";

document.querySelector(".input-email").addEventListener("click", function () {
  const emailCheck = document.querySelector(".form-control").value;
  const filter =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (filter.test(emailCheck)) {
    document.querySelector(".info-hide").classList.remove("hidden");
    document.querySelector(".input-hide").classList.add("hidden");
  } else {
    alert("Email sai, vui lòng nhập lại!");
  }
});
// view more

const hideviewmore = function () {
  document.querySelector(".view").classList.add("hidden");
};
const appearviewmore = function () {
  document.querySelector(".view").classList.remove("hidden");
};

const nameinfo = [
  "kinhnghiem",
  "hocvan",
  "hoatdong",
  "sothich",
  "ngonngu",
  "kynang",
];
const nameinfohide = [
  "kinhnghiem-hide",
  "hocvan-hide",
  "hoatdong-hide",
  "sothich-hide",
  "ngonngu-hide",
  "kynang-hide",
];
const view = ["view", "view-1", "view-2", "view-3", "view-4", "view-5"];
const blank = ["blank", "blank-1", "blank-2", "blank-3", "blank-4", "blank-5"];

for (let i = 0; i < nameinfo.length; i++) {
  document
    .querySelector("." + nameinfo[i])
    .addEventListener("mouseover", function () {
      document.querySelector("." + view[i]).classList.remove("hidden");
      document.querySelector("." + blank[i]).classList.add("hidden");
    });
  document
    .querySelector("." + nameinfo[i])
    .addEventListener("mouseout", function () {
      document.querySelector("." + view[i]).classList.add("hidden");
      document.querySelector("." + blank[i]).classList.remove("hidden");
    });
}

for (let i = 0; i < nameinfo.length; i++) {
  document.querySelector("." + view[i]).addEventListener("click", function () {
    const testhidden = document
      .querySelector("." + nameinfohide[i])
      .classList.contains("hidden");
    if (testhidden) {
      document.querySelector("." + nameinfohide[i]).classList.remove("hidden");
      document.querySelector("." + view[i]).textContent = "View less ▲";
    } else {
      document.querySelector("." + nameinfohide[i]).classList.add("hidden");
      document.querySelector("." + view[i]).textContent = "View more ▼";
    }
  });
}

// project charter
// document.querySelector("liembt").addEventListener("click", function () {
//   history.back();
// });
