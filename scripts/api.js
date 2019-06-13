'use strict';

const api = (function(){
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/coreyZane';
  function getItems () {
    return fetch(`${BASE_URL}/items`);
  }
  
  const createItem = function (name){
    let newItem = JSON.stringify({
      name: name
    });
    return fetch(`${BASE_URL}/items`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: newItem
    });
    
  };
   
  const updateItem=function(id,updateData){
    const jsonUpdate=JSON.stringify(
      updateData
    );console.log('updateItem Ran');
    return fetch(`${BASE_URL}/items/${id}`,{
      method: 'PATCH',
      headers:{
        'Content-Type': 'application/json'
      },
      body: jsonUpdate
    });
  };

  const deleteItem = function (id) {
    return fetch(`${BASE_URL}/items/${id}`, {
      method: 'DELETE'
    });
  };

  return {
    getItems,
    createItem,
    updateItem,
    deleteItem
  };

})();