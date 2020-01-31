export default function(totalSave = {}, action){
  if (action.type === 'payOrder'){
    console.log(action)
    return action
  } else{
    return totalSave
  }
}