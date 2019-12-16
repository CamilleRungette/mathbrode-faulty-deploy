export default function(itemSave = [], action){
  let itemSaveCopy;
  if (action.type === 'carted'){
    itemSaveCopy = [...itemSave]
    itemSaveCopy.push(action.item)
      console.log("item save copy", itemSaveCopy)
      console.log("item save", itemSave)
    return itemSaveCopy;
  } else {
    return itemSave;
  }
}