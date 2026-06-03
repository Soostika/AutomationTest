export function generateTestEmail() {
  const timestamp = Date.now().toString().slice(-6); // 6 digits for uniqueness
  return `test${timestamp}@example.com`;
}

export function getRandomUsername() {
  const usernames = ["Admin", "Manager", "Supervisor"];
  return usernames[Math.floor(Math.random() * usernames.length)];
}

export function generateNewPassword() {
  // Stronger and more unique password
  const randomPart = Math.random().toString(36).slice(-6);
  const timePart = Date.now().toString().slice(-4);
  return `Pass${randomPart}${timePart}!`;
}

export const staticCredentials = {
  currentPassword: "admin123",
  defaultAdmin: "Admin",
};
