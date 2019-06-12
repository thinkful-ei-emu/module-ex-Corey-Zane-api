'use strict';
/* global shoppingList, store, Item */
// eslint-disable-next-line no-unused-vars
$(document).ready(function() {
  shoppingList.bindEventListeners();
  shoppingList.render();
});

store.items.push(Item.create('apples'));

//api.getItems()
// .then(response=>response.json())
// .then(responseJson=>
//   console.log(responseJson))
// .catch(error=>
//   alert(`There has been and error please try again later${error.message}`));


//console.log(api.BASE_URL);