const login = (req, res) => {
    res.send("<h1>Login Successful!</h1>");
};

const resgister = (req, res) => {
    res.send("<h1>Register Here!</h1>");
};
module.exports = {
    login,
    register,
};