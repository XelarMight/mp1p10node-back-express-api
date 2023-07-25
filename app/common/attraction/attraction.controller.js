const findAllAttraction = async (req, res) => {
    res.json({
        status: 200,
        message: `Liste de toutes les Attractions`
    })
}

module.exports = findAllAttraction;