export default function(userSave = {}, action){
  if (action.type == 'signin'){
    return action.userSigned
  }else if (action.type == 'logout'){
    console.log("in the log out method")
    action.thisUser = null
    return action.thisUser
  } else{
    return userSave
  }
}