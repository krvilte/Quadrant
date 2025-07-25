// @desc Register User
// @route POST "/api/v1/users/register"
// @access public

export const registerUser = (req, res) => {
  res.send("Register user");
};

// @desc Login User
// @route POST "/api/v1/users/login"
// @access public
export const loginUser = (req, res) => {
  res.send("Login user");
};

// @desc Logout User
// @route POST "/api/v1/users/logout"
// @access public
export const logoutUser = (req, res) => {
  res.send("Logout user");
};

// @desc Current User
// @route POST "/api/v1/users/current"
// @access public
export const currentUser = (req, res) => {
  res.send("Current user");
};
