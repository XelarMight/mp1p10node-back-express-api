const repo_attraction = require('../../repository/attraction.repository.js');

const findAllAttraction = async (req, res) => {
    // res.setHeader("Content-Type", "application/json");
    // res.setHeader("Access-Control-Allow-Origin", "*");
    // res.send(JSON.stringify({"Message": "Welcome to attraction"}));
    const result = await repo_attraction.getAllAttractions();
    res.json({
        status: 200,
        message: `Liste de toutes les Attractions`,
        attractions: result
    })
}

const findAnother = async (req, res) => {
    res.json({
        status: 200,
        message: `Liste d'autres attractions`
    })
}

module.exports = {
    findAllAttraction, 
    findAnother
};