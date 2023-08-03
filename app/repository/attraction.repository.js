// const getIndemniteKmTableFormat = async(idTypeVehicule, exercice) => {
//     const result = await getIndemniteKm(idTypeVehicule, exercice)
//     const rowData = [] // All the datas in the table
//     const columns = [] // All the columns for the table
//     const distanceKm = [] // Raw Data fot the distance
//     const puissanceCV = [] // Raw Data for the puissance
//     let alreadyPuissance = false
//     result.forEach((element) => {
//         columns.push(element.libelle) // Add to the columns
//         distanceKm.push({
//             id: element.id,
//             libelle: element.libelle,
//             min: element.min,
//             max: element.max
//         })
//         const temp_all_puiss = element.ndf_indemnite_km
//         temp_all_puiss.forEach((puissance, j) => {
//             // Add to puissance
//             if (!alreadyPuissance) {
//                 puissanceCV.push({
//                     id: puissance.ndf_puissance_fiscal.id,
//                     libelle: puissance.ndf_puissance_fiscal.libelle,
//                     min: puissance.ndf_puissance_fiscal.min,
//                     max: puissance.ndf_puissance_fiscal.max
//                 })
//             }
//             // Const Obj for the table datas
//             const temp_obj = {
//                 ik_id: puissance.id,
//                 distance: element.libelle,
//                 puiss: puissance.ndf_puissance_fiscal.libelle,
//                 formule: puissance.formule
//             }
//             if (rowData[j]) {
//                 rowData[j].push(temp_obj)
//             } else {
//                 rowData[j] = []
//                 rowData[j].push(temp_obj)
//             }
//         })
//         alreadyPuissance = true
//     })

const MongoClient = require('mongodb').MongoClient;

const connectionString = 'mongodb+srv://repairadmin:dbTourist4321@cluster0.eeaglqg.mongodb.net/?retryWrites=true&w=majority';

const getAllAttractions = async () => {
    let result = null;
    MongoClient.connect(connectionString, { useUnifiedTopology: true })
  .then(client => {
    const db = client.db('db_secteur_tourist');
    const collection = db.collection('attraction');
    collection
    .find()
    .toArray()
    .then((attractions) => {
        console.log(attractions);
        result = attractions;
        //res.json(attractions);
    })
    .catch((error) => {
      result = { message: `Error fetching attractions ${error}` };
    });
   })
  .catch(error => { { message: 'Error Connecting to Database' }; console.error(error)});
  return result;
}

module.exports = {
    getAllAttractions
}