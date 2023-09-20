const { collection, getDocs } = require('firebase/firestore')
const db = require('../db/db')

const practicesSchema = require('../models/practices_schema')

const getPractices = async (req,res,next) => {
    try {
        let practicesArr = [];
        let noDataArr = [];
        const docSnap = await getDocs(collection(db, "practices", "XCWYqxfiCDoBoshnlsnZ", "dragonflies"));
        if (!docSnap.empty) {
            docSnap.forEach((doc) => {
                const practicesData = new practicesSchema(
                    doc.data().id,
                    doc.data().image,
                    doc.data().name,
                    doc.data().subtitle,
                );
                practicesArr.push(practicesData);
            })
            res.send(practicesArr);
        } else {
            res.send(noDataArr);
        }

    } catch (error) {
        res.status(400).send(error.message)
    }
}

module.exports = getPractices