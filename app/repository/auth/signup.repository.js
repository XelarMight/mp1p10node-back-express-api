const MongoClient = require('mongodb').MongoClient;

const connectionString = 'mongodb+srv://repairadmin:dbTourist4321@cluster0.eeaglqg.mongodb.net/?retryWrites=true&w=majority';

const createUser = async (newUser) => {
  try {
    const client = await MongoClient.connect(connectionString, {
      useUnifiedTopology: true
    });

    const db = client.db('db_secteur_tourist');
    const collection = db.collection('user');
    collection.insertOne(newUser, (err, result) => {
      if (err) {
        console.error('Error creating user:', err);
        client.close();
        return 500;
      }
    });
  } catch (error) {
    console.error('Error connecting to database', error);
    return null; // or throw an error depending on how you want to handle it
  }
};

module.exports = {
    createUser
}
