// In React world, Action = type + payload. While the function below is action creator
export const selectUser = (user) => {
  console.log('Clicked - ', user.first);
  return {
    type: "USER_NAME_SELECTED",
    payload: user
  }
};
