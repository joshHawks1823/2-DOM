// // Acessing Single Elements

// let Newt = document.getElementById("listTitle");
// console.log(Newt);

// let newtItem = document.querySelector("ul li");
// console.log(newtItem);

// Newt.style.textAlign = "center";
// newtItem.style.color = "red";

// console.log(Newt);
// console.log(newtItem);

// // Accessing multiple Items

// let grocery = document.getElementsByClassName("groceryItem");

// console.log(grocery);

// console.log(grocery instanceof Array);

// console.log(grocery[1]);

// console.log(grocery.item(2));

// // By Tag

let litTag = document.getElementsByTagName("li");
console.log(litTag);

// let selectAll = document.querySelectorAll("ul li");
// console.log(selectAll);

// console.log(document.body.childNodes);
// console.log(document.body.children);

// let listDiv = document.getElementById("list");

// console.log(listDiv.firstElementChild.nextElementSibling);

// // let items = document.getElementsByClassName("listItem.");
// // console.log(items.firstElementChild);
// // console.log(getElementsByClassName.(items).lastElementChild);

let liTag = document.getElementsByTagName("li");
console.log(liTag);
// console.(liTag);

for (tag of liTag) {
  // console.log(tag);
  tag.style.fontFamily = "cursive";
}

// document.getElementsByClassName("listItem")[4].innerText = "Buy a new cauldron";

// document.getElementsByClassName("groceryItem")[0].innerHTML = "Moondew Drops";

// Add event listener

document.getElementById("clickMe").addEventListener("click", event => {
  // console.log(event);
  event.target.style.backgroundColor = "red";
  event.target.style.color = "white";
});

document.getElementById("listInput").addEventListener("keyup", event => {
  console.log(event.target.value);
});

// createelement() and appendchild();

let newGrocery = document.createElement("li");

let groceryList = document.getElementById("groceryList");

groceryList.appendChild(newGrocery);

// document.getElementsById("")[4].innerText = "Buy a new cauldron";

newGrocery.innerText = "Pizza";

for (tag of liTag) {
  // console.log(tag);
  tag.style.fontFamily = "cursive";
}

//Let's do that again, but with a different tag.
// I don't currently know that they bottom three items of my list are ingredients that I need to pick up from the store. Let's create an <h3> tag that says 'Grocery List'.
let groceryTitle = document.createElement("h3");
// Even though I have created an element, I didn't specify where I wanted it. We can use the appendChild() method to specify under which parent node we want to add it.
// First I need to grab the element I want to add my <h3>tag to.
let groceryDiv = document.getElementById("groceryDiv");
// Then I can append my newly created <h3>tag to my groceryDiv;
// left side = parent node I want to append to ---- right side = child I want to append
groceryDiv.appendChild(groceryTitle);
// In my browser, it won't look like I have changed anything. Open up the dev/inspect tools and under the ELEMENTS tab, navigate to the groceryDiv. Notice, we now have an empty <h3> tag nested underneath my <ul>.
// Let's add some text content to this.
groceryTitle.innerText = "Grocery List";
// Great! But it's still underneath my list rather than above it. Let's change that!
groceryDiv.insertBefore(groceryTitle, groceryDiv.childNodes[0]);
// Syntax
// node.insertBefore(newnode, existingnode)
// newnode: The node object you want to insert (Required)
// existingnode: The child node you want to insert the new node before. If set to null, the insertBefore method will insert the newnode at the end (Required)
