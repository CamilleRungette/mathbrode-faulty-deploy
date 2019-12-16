export default function(userSave = {}, action){
  if (action.type == 'signin'){
    return action
  }else if (action.type == 'logout'){
    console.log("IN THE LOG OUT METHOD REDUCER:", action)
    action.connected = false
    return action.connected
  } else{
    return userSave
  }
}