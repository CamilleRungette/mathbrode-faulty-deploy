export default function(adminSave = {}, action){
  if (action.type == 'adminSignin'){
    console.log("from admin reduer:", action)
    return action
  // }else if (action.type == 'logout'){
  //   action.connected = false
  //   return action.connected
  } else{
    return adminSave
  }
}