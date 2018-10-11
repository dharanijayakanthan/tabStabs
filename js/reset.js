function removeLocal(e) {
  console.log(e);
  if (e) {
    localStorage.removeItem(e);
    location.reload();
  } else {
    console.log(e);
  }
}

function displaySuccess() {
  let sub = document.querySelector("form");
  sub.style.visibility = "hidden";
  let submitted = document.createElement("div");
  submitted.innerText = "Submitted Successfully";
  submitted.style.color = "white";
  submitted.style.fontSize = "20px";
  submitted.style.padding = "20px";
  let head = document.querySelector("header");
  head.appendChild(submitted);
  sub.innerText = "Form submitted Successfully";
}
