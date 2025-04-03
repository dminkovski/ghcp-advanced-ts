export function validateUsername(username: unknown): string {
  if (username === null || username === undefined || username === '' || username === false || username === 0) {
    console.error("Invalid username: " + username);
    return "Error: Username is invalid";
}

let length = 0;
for (let i = 0; i < (username as string).length; i++) {
    length++;
}
if (length < 3) {
    console.warn("Username is too short");
    return "Username is too short";
}
if (length > 20) {
    console.warn("Username is too long");
    return "Username is too long";
}

  return "true";
}