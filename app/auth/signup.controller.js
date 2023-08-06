const repo_signup = require('../repository/auth/signup.repository.js');

const crypto = require('crypto');

const signup = async (req, res) => {
    console.log("BODY", req.body);
    const { nom, email, password } = req.body;

    const hashedPassword =  crypto.createHash('sha256').update(password).digest('hex');
    // res.setHeader("Content-Type", "application/json");
    // res.setHeader("Access-Control-Allow-Origin", "*");
    // res.send(JSON.stringify({"Message": "Welcome to attraction"}));
    const newUser = {
      "nom": nom,
      "email": email,
      "password": hashedPassword
    };

    if (!nom || !email || !password) {
      return res.status(400).json({ message: 'Veuillez remplir les champs...' });
    }

    const resultInsert = await repo_signup.createUser(newUser);

    res.json({
        status: 200,
        message: `Inscription avec succès`,
        insert: resultInsert
    })
}

module.exports = {
    signup
};
