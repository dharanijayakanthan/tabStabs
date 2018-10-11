if (localStorage.getItem("formArrayKey")) {
  var formArray = JSON.parse(localStorage.getItem("formArrayKey"));
} else {
  var formArray = [];
}

document.addEventListener("submit", function(e) {
  e.preventDefault;
  console.log("e");
  const name = document.querySelector('[name = "name"]');
  const duration = document.querySelector('[name = "duration"]');
  const location = document.querySelector('[name = "location"]');
  addItems(name, duration, location).then(displayItems);
});

function addItems(n, d, l) {
  let formObj = {
    name: n.value,
    duration: d.value,
    location: l.value
  };
  return new Promise((resolve, reject) => {
    if (formArray.push(formObj)) {
      resolve(formArray);
    } else reject("error adding it to the form");
  });
}
function displayItems() {
  localStorage.setItem("formArrayKey", JSON.stringify(formArray));
  displaySuccess();
}
let storedItems = JSON.parse(localStorage.getItem("formArrayKey"));
if (storedItems) {
  let tab = document.querySelector(".table");
  storedItems.forEach(e => {
    let div = document.createElement("div");
    div.className = "row";
    let innerDivOne = document.createElement("div");
    innerDivOne.className = "cell";
    innerDivOne.innerText = e.name;
    let innerDivTwo = document.createElement("div");
    innerDivTwo.className = "cell";
    innerDivTwo.innerText = e.duration;
    let innerDivThree = document.createElement("div");
    innerDivThree.className = "cell";
    innerDivThree.innerText = e.location;
    div.appendChild(innerDivOne);
    div.appendChild(innerDivTwo);
    div.appendChild(innerDivThree);
    tab.appendChild(div);
    console.log(e.name);
  });
} else {
  console.log("no data stored yet");
}
