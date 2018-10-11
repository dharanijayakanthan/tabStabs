if (localStorage.getItem("membershipFormArrayKey"))
  var membershipFormArray = JSON.parse(
    localStorage.getItem("membershipFormArrayKey")
  );
else {
  var membershipFormArray = [];
}

document.addEventListener("submit", function(e) {
  e.preventDefault();
  const name = document.querySelector('[name = "name"]');
  const duration = document.querySelector('[name = "duration"]');
  const membership = document.querySelector('[name = "membership"]');
  console.log(name, duration, membership);
  addItems(name, duration, membership).then(displayItems);
});

function addItems(n, d, l) {
  let formObj = {
    name: n.value,
    duration: d.value,
    membership: l.value
  };
  return new Promise((resolve, reject) => {
    if (membershipFormArray.push(formObj)) {
      resolve(membershipFormArray);
    } else reject("error adding it to the form");
  });
}
function displayItems() {
  localStorage.setItem(
    "membershipFormArrayKey",
    JSON.stringify(membershipFormArray)
  );
  displaySuccess();
}

let storedItemMems = JSON.parse(localStorage.getItem("membershipFormArrayKey"));
if (storedItemMems) {
  let tabs = document.querySelector(".p-table");

  // console.log(tab);
  storedItemMems.forEach(e => {
    let divs = document.createElement("div");
    divs.className = "p-row";
    let innerDivOne = document.createElement("div");
    innerDivOne.className = "p-cell";
    innerDivOne.innerText = e.name;
    let innerDivTwo = document.createElement("div");
    innerDivTwo.className = "p-cell";
    innerDivTwo.innerText = e.duration;
    let innerDivThree = document.createElement("div");
    innerDivThree.className = "p-cell";
    innerDivThree.innerText = e.membership;
    divs.appendChild(innerDivOne);
    divs.appendChild(innerDivTwo);
    divs.appendChild(innerDivThree);
    tabs.appendChild(divs);
    console.log(e.name);
  });
} else {
  console.log("no data stored yet");
}
