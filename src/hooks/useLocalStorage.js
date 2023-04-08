import React, {useEffect, useState} from 'react'

const useLocalStorage = (itemName, initialValue) => {
    
    const [Item, setItem] = useState(initialValue)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)


    useEffect( ()=> {

        setTimeout(()=>{
            try{
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
    
                setItem(parsedItem)
                setLoading(false)
                
            } catch(error){
                console.log("Que rico culo oye")
                setError(error)
            }
        }, 2000)
    }, [])
  
 


  const saveItem = (newItem) => {
    try{
        const stringifiedItem = JSON.stringify(newItem);
    localStorage.setItem(itemName, stringifiedItem),

    setItem(newItem)
    } catch(error){
        setError(error)
    }
  }


  return{
    Item,
    saveItem,
    loading,
    error
  }
}

export default useLocalStorage