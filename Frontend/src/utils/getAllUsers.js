const getAllUsers = () => {
    return JSON.parse(localStorage.getItem("users"));
  };
  
  export default getAllUsers;