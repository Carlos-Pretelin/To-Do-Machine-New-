import React, {useState} from 'react'

const useLocalStorage = (itemName, initialValue) => {
  
  //LOCAL STORAGE

  //This constant gets me whatever im storing in the local storage of the browser in this case im asking for the Item_V1 object
  //BONUS : now that all the logic is in this hook this will get me any item i want when using the hook
  const localStorageItem = localStorage.getItem(itemName);

  let parsedItem;

  //So if localstorage has something in it that means parsedItem will be equal to that parsed info
  //But if its empty i will say that parsed Item is only an empty array and set the localStorage to a string with an array inside "[]" like this so that the user can create their first todo
  if(!localStorageItem){
    localStorage.setItem(itemName, JSON.stringify(initialValue))
    parsedItem = initialValue;
  } else {
    parsedItem = JSON.parse(localStorageItem);
  }

  const [Item, setItem] = useState(parsedItem)


  const saveItem = (newItem) => {
    const stringifiedItem = JSON.stringify(newItem);
    localStorage.setItem(itemName, stringifiedItem),

    setItem(newItem)
  }


  return[
    Item,
    saveItem,
  ]
}

export default useLocalStorage