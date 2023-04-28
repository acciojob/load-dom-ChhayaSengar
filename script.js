//your JS code here. If required.
// window.onload = (event) => {
// 	document.querySelector("body").
// 	innerHtml = "DOM load success";
// }
 function domLoaded() {
        const body = document.querySelector("body");
        body.innerHTML = "DOM load success";
      }

      document.addEventListener("DOMContentLoaded", domLoaded);