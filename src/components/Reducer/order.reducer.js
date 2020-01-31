export default function(totalSave = {}, action){
  if (action.type === 'payOrder'){
    console.log(action)
    return action
  }else if(action.type=== 'payPersoOrder'){
    console.log("coucou")
    return action
  } else{
    return totalSave
  }
}