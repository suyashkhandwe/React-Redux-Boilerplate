//Every action is sent to all reducers - always !!
//Default value of null will help avoid 'undefiend' errors.
export default function(state=null, action) {
  switch(action.type){
    case "USER_NAME_SELECTED":
      return action.payload;
      break;
    }
  return state;
}
