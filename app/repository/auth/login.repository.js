const MongoClient = require('mongodb').MongoClient;

const connectionString = 'mongodb+srv://repairadmin:dbTourist4321@cluster0.eeaglqg.mongodb.net/?retryWrites=true&w=majority';

const findUser = async (email, passwords) => {
  try {
    const client = await MongoClient.connect(connectionString, {
      useUnifiedTopology: true
    });

    const db = client.db('db_secteur_tourist');
    const collection = db.collection('user');

    const clientData = await collection.findOne({ email, password: passwords });

    if (clientData) {
      return 200;
    } else {
      throw new Error('Invalid email or password');
    }

  } catch (error) {
    console.error('Error connecting to database', error);
    return null;
  }
};

module.exports = {
    findUser
}
