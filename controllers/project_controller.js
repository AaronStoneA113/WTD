const { collection, query, orderBy, startAfter, limit, getDocs  } = require("firebase/firestore"); 
const db = require('../db/db');

const imageSchema = require('../models/image')

const getProjectImages = async(req, res, next) => {
    try {
        const skip = req.query.skip? parseInt(req.query.skip) : 0;
        let imageArr = [];
        let noDataArr = [];
        const first = query(collection(db, "image"), orderBy('id'),startAfter(skip), limit(6));
        const docSnap = await getDocs(first);
        if(!docSnap.empty){
            docSnap.forEach((doc)=>{
                const imageData = new imageSchema(     
                    doc.data().id,
                    doc.data().image,
                    doc.data().title,
                    doc.data().location,
                    doc.data().description,
                    );
                    imageArr.push(imageData);
            })
            res.send(imageArr);
        }else{
             res.send(noDataArr);
        }
        
    } catch (error) {
        res.status(400).send(error.message)
    }
};

module.exports = getProjectImages