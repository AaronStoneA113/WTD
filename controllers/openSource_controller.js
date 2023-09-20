const { collection, query, orderBy, limit, getDocs  } = require("firebase/firestore"); 
const db = require('../db/db');

const openSource = require('../models/openSource_schema')

const getOpenSource = async(req, res, next) => {
    try {
        let openSourceArr = [];
        let noDataArr = [];
        const first = query(collection(db, "openSource"), orderBy('id'), limit(6));
        const docSnap = await getDocs(first);
        if(!docSnap.empty){
            docSnap.forEach((doc)=>{
                const data = new openSource(     
                    doc.data().id,
                    doc.data().image,
                    doc.data().title,
                    doc.data().location,
                    doc.data().description,
                    );
                    openSourceArr.push(data);
            })
            res.send(openSourceArr);
        }else{
             res.send(noDataArr);
        }
        
    } catch (error) {
        res.status(400).send(error.message)
    }
};

module.exports = getOpenSource