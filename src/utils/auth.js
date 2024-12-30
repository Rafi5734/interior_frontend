// auth.js (mock authentication utility)
export const isAuthenticated = () => {
  // Replace with real authentication logic
  return !!localStorage.getItem("user");
};

export const isAdmin = () => {
  // Replace with real role-checking logic
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  return user.role === "admin";
};
