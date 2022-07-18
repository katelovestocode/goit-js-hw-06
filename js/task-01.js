/**
 *   
 * Write a script that:

Will count and display in the console the number of categories in ul#categories, 
that is, li.item elements.
For each li.item element in the ul#categories list, will find and display in the 
console the element header text (<h2> tag) and the number of elements in the category (all nested <li>).
As a result, the following messages will be displayed in the console. 

 * Number of categories: 3

Category: Animals
Elements: 4

Category: Products
Elements: 3

Category: Technologies
Elements: 5

 */

// Version #1

// const items = document.querySelectorAll(".item");
// const h2 = document.querySelectorAll(".item h2");
// const list = document.querySelectorAll(".item ul");
// const firstListChild = list[0];
// const secondListChild = list[1];
// const thirdListChild = list[2];

// console.log("Number of categories: ", items.length);
// console.log("Category: ", h2[0].textContent);
// console.log("Elements: ", firstListChild.children.length);

// console.log("Category: ", h2[1].textContent);
// console.log("Elements: ", secondListChild.children.length);

// console.log("Category: ", h2[2].textContent);
// console.log("Elements: ", thirdListChild.children.length);

// Version #2

const itemEl = document.querySelectorAll(".item");
console.log("Number of categories: ", itemEl.length);

itemEl.forEach((list) => {
  console.log("Category: ", `${list.firstElementChild.textContent}`);
  console.log("Elements: ", `${list.lastElementChild.children.length}`);
});
