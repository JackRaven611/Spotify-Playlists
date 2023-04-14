export const LogOut = () => {
  const deleteToken = () => {
    localStorage.removeItem("access-token");
    localStorage.removeItem("code-verifier");
    window.location.reload();
  };
  return <button onClick={deleteToken}>Log Out</button>;
};
