const { collection, getDocs } = require('firebase/firestore')
const db = require('../db/db')

const imageSchema = require('../models/image')

const getVision = async (req,res,next) => {
    try {
        let practicesArr = [];
        let noDataArr = [];
        const docSnap = await getDocs(collection(db, "practices", "XCWYqxfiCDoBoshnlsnZ", "vision"));
        if (!docSnap.empty) {
            docSnap.forEach((doc) => {
                const practicesData = new imageSchema(
                    doc.data().id,
                    doc.data().image,
                    doc.data().title,
                    doc.data().location,
                    doc.data().description,
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

module.exports = getVision