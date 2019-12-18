export default function(itemSave = [], action){
  let itemSaveCopy;
  if (action.type === 'carted'){
    itemSaveCopy = [...itemSave]
    itemSaveCopy.push(action.item)
      console.log("item save copy", itemSaveCopy)
      console.log("item save", itemSave)
    return itemSaveCopy;
  }else if (action.type === 'delete'){
    console.log("FROM THE DELETE REDUCE", action)
    itemSaveCopy = [...itemSave]
    itemSaveCopy.splice(action.position, 1)
    return itemSaveCopy
  } else {
    return itemSave;
  }
}