export function displayUsers(users) {
  return {
    type: "DISPLAY_USERS",
    payload: users
  }
}