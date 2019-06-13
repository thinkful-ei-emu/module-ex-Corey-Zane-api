'use strict';
/* global shoppingList, store, Item */
// eslint-disable-next-line no-unused-vars
$(document).ready(function() {
  shoppingList.bindEventListeners();
  shoppingList.render();
  api.getItems()
    .then((items) => {
      items.forEach((item) => store.addItem(item));
      shoppingList.render();
    });
});




//store.items.push(Item.create('apples'));


// //api.createItem('no more pears')
//   .then(res => res.json())
//   .then((newItem) => {
//     return api.getItems();
//   })
//   .then(res => res.json())
//   .then((items) => {
//     console.log(items);
//   });

// api.getItems()
// .then(response=>response.json())
// .then(responseJson=>
//   console.log(responseJson))
// .catch(error=>
//   alert(`There has been and error please try again later${error.message}`));


// console.log(api.BASE_URL);