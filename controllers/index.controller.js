const welcome = (req, res) => {
    res.send("<h1>Hello😁, Mommy</h1>");
};

const greet = (req, res) => {
    res.send("<h1>hello🙌,bossu</h1>");
};

module.exports = {
    welcome,
    greet,
};