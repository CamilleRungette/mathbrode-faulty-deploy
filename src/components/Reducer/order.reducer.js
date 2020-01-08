export default function(totalSave = {}, action){
  if (action.type === 'payOrder'){
    return action
  } else{
    return totalSave
  }
}