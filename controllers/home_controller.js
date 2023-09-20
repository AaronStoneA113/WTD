const { collection, query, getDocs, orderBy, limit } = require("firebase/firestore"); 
const db = require('../db/db');

const imageSchema = require('../models/image')

const getHomeImages = async(req, res, next) => {
    try {
        let imageArr = [];
        const first = query(collection(db, "image"), orderBy('id'), limit(8));
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
        }
        
    } catch (error) {
        res.status(400).send(error.message)
    }
};

module.exports = getHomeImages