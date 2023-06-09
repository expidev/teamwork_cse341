const data = require("../data")

const getData = async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.json(data);
}

module.exports = { getData }