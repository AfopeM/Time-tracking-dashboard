"use strict";
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
});
