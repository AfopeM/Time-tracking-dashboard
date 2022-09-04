"use strict";

const timeFrame = document.querySelector(".card-profile__bottom");
const card = document.querySelectorAll(".card");

// How to Obtain the information in an external File.
async function dayData() {
  return (await fetch("./script/data.json")).json();
}

document.addEventListener("DOMContentLoaded", async () => {
  let data;
  try {
    data = await dayData();
  } catch (e) {
    console.log("error");
  }

  //Select Time Frame
  timeFrame.addEventListener("click", function (e) {
    const period = e.target;
    const periodID = period.innerHTML.toLowerCase();
    const allPeriods = period
      .closest(".card-profile__bottom")
      .querySelectorAll("li");

    if (!period) return;
    if (!allPeriods) return;

    allPeriods.forEach(function (f) {
      f.classList.remove("active");
    });

    period.classList.add("active");

    //Display Hours
    card.forEach(function (c) {
      data.forEach(function (d) {
        if (c.id === d.title.toLowerCase()) {
          let it;
          if (d.timeframes.hasOwnProperty(periodID)) {
            it = d.timeframes[periodID]; // values inside of key

            c.querySelector(".current-val").textContent = `${it.current} hrs`;
            c.querySelector(".previous-val").textContent = `${it.previous} hrs`;
          }
        }
      });
    });
  });
});
