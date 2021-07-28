const express=require("express")
const Router=express.Router()
const multer=require("multer")
const Proof=require("../model/Proof")
const validateproof=require("../validations/validateproof")
const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
    cb(null,"./evidence")
    },
    
    filename:(req,file,cb)=>{
    cb(null,Math.random(17.1*3562*27285726272*382+91)+file.originalname)
    }
    
    })
    
    const FileFilter=(req,file,cb)=>{
        if(file.mimetype === 'image/png'|| file.mimetype === 'image/jpeg'){
             cb(null,true)
        }else{
     cb(null,false)
        }
        }
const uploads=multer({storage:storage,fileFilter:FileFilter})



Router.post("/",uploads.any("video"),async(req,res)=>{
if(req.files[0]){
    const proofisvalid=validateproof(req.body)
    if(proofisvalid===true){
        try{
          const proof=  await new Proof({
                amount:req.body.amount,
                name:req.body.name,
                screenshot:`http://localhost:8080/api/proof/one/${req.files[0].filename}`,
                email:req.body.email
            })
            await proof.save()
           res.status(200).json({error:false,message:proof})
        }catch(err){
            res.status(400).json({error:true,errMessage:err.message})
        }

    }
    else
    {
        res.status(400).json({error:true,errMessage:proofisvalid})
    }

}else{
    res.status(403).json({error:true,errMessage:"an error occured make sure image is of type 'png' or 'jpeg' "})
}

})


Router.get("/list",async(req,res)=>{
  const proof=  await Proof.find()
  if(proof[0]){
res.status(200).json({error:false,message:proof})
  }else{
      res.status(400).json({error:true,errMessage:"no proof has been uploaded here yet"})
  }
})


Router.get("/:id",async(req,res)=>{
    try{
   const proof= await Proof.findById(req.params.id)
   if(proof){
       console.log(proof)
    res.render('editupload.ejs', {
        title: 'HaHa',
    nav: ['Home','About','Contact'], 
    amount:proof.amount,
    name:proof.name,
    screenshot:proof.screenshot,
    email:proof.email
    // time:Date.now(),
  });
   }else{
       res.status(404).json({error:true,errMessage:"the given upload was not found"})
   }

}catch(err){
    res.status(400).json({error:true,errMessage:err.message})
}
})
module.exports=Router