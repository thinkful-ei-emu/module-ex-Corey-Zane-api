'use strict';

const api = (function(){
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/coreyZane';
  
  
  
  const listApiFetch = function(...args) {
    
    let error;
    return fetch(...args)
      .then(res => {
        if (!res.ok) {
        
          error = { code: res.status };

          if (!res.headers.get('content-type').includes('json')) {
            error.message = res.statusText;
            return Promise.reject(error);
          }
        }

        
        return res.json();
      })
      .then(data => {
      
        if (error) {
          error.message = data.message;
          return Promise.reject(error);
        }

        return data;
      });
  };
  
  
  
  
  
  
  
  
  
  
  function getItems () {
    return listApiFetch(`${BASE_URL}/items`);
  }
  
  const createItem = function (name){
    let newItem = JSON.stringify({
      name: name
    });
    return listApiFetch(`${BASE_URL}/items`, {
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
    return listApiFetch(`${BASE_URL}/items/${id}`,{
      method: 'PATCH',
      headers:{
        'Content-Type': 'application/json'
      },
      body: jsonUpdate
    });
  };

  const deleteItem = function (id) {
    return listApiFetch(`${BASE_URL}/items/${id}`, {
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