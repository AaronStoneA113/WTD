
const sendForm=async(req, res)=>{
    console.log(req.body)
    const {name, email, message} = req.body;
    console.log(name, email, message);
    console.log("helloo")
    
}

module.exports=sendForm