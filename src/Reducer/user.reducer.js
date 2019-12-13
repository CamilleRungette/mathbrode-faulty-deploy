export default function(userSave = {}, action){
  if (action.type == 'signin'){
    return action.userSigned
  } else{
    return userSave
  }
}