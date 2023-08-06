const repo_login = require('../repository/auth/login.repository.js');

const crypto = require('crypto');

const login = async (req, res) => {
    console.log("BODY", req.body);
    const { email, password } = req.body;

    const hashedPassword =  crypto.createHash('sha256').update(password).digest('hex');
    // res.setHeader("Content-Type", "application/json");
    // res.setHeader("Access-Control-Allow-Origin", "*");
    // res.send(JSON.stringify({"Message": "Welcome to attraction"}));
    const newUser = {
      "email": email,
      "password": hashedPassword
    };

    if (!email || !password) {
      return res.status(400).json({ message: 'Please provide all required fields.' });
    }

    const resultInsert = await repo_login.findUser(email, hashedPassword);

    if(resultInsert == 200){
      res.json({
          status: 200,
          message: `Connexion avec succès`,
          found: resultInsert
      })
    }else{
      res.json({
          status: 500,
          message: `Identifiants Incorrect`,
          found: 'Non trouvés'
      })
    }
}

module.exports = {
    login
};
