//parsing price data and storing in array
if (localStorage.getItem("priceFormArrayKey"))
  var priceFormArray = JSON.parse(localStorage.getItem("priceFormArrayKey"));
else {
  var priceFormArray = [];
}

document.addEventListener("submit", function(e) {
  e.preventDefault();
  const name = document.querySelector('[name = "price"]');
  const program = document.querySelector('[name = "program"]');
  const duration = document.querySelector('[name = "duration"]');
  addItems(name, program, duration).then(displayItems);
});

function addItems(n, d, l) {
  let formObj = {
    name: n.value,
    program: d.value,
    duration: l.value
  };
  return new Promise((resolve, reject) => {
    if (priceFormArray.push(formObj)) {
      resolve(priceFormArray);
    } else reject("error adding it to the form");
  });
}
function displayItems() {
  localStorage.setItem("priceFormArrayKey", JSON.stringify(priceFormArray));
  displaySuccess();
}

let priceStoredItems = JSON.parse(localStorage.getItem("priceFormArrayKey"));
if (priceStoredItems) {
  let tabPrice = document.querySelector(".items");
  // console.log(tab);
  priceStoredItems.forEach(e => {
    let div = document.createElement("div");
    div.className = "item";
    let innerDivOne = document.createElement("div");
    innerDivOne.className = "price";
    innerDivOne.innerText = e.name;
    let innerDivTwo = document.createElement("div");
    innerDivTwo.className = "program";
    innerDivTwo.innerText = e.program;
    let innerDivThree = document.createElement("div");
    innerDivThree.className = "duration";
    innerDivThree.innerText = e.duration;
    let innerDivFour = document.createElement("div");
    innerDivFour.className = "btn";
    innerDivFour.innerHTML = `<input type="button" value="BUY">`;
    div.appendChild(innerDivOne);
    div.appendChild(innerDivTwo);
    div.appendChild(innerDivThree);
    div.appendChild(innerDivFour);
    tabPrice.appendChild(div);
    // console.log(e.name);
  });
} else {
  console.log("no data stored yet");
}

//Slider

const slider = document.querySelector(".items");
let isDown = false;
let startX;
let scrollLeft;
slider.addEventListener("mousedown", e => {
  isDown = true;
  slider.classList.add("active");
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener("mouseleave", () => {
  isDown = false;
  slider.classList.remove("active");
});
slider.addEventListener("mouseup", () => {
  isDown = false;
  slider.classList.remove("active");
});
slider.addEventListener("mousemove", e => {
  if (!isDown) return; // stop the fn from running
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 3;
  slider.scrollLeft = scrollLeft - walk;
});
