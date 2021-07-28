// const express=require("express")
// const protectRoute=require("../secureapi/protectdata")
// const Router=express.Router()
// const User=require("../model/Register")
// // Router.set('views', __dirname + '/views');


// Router.get("/:token/:email",protectRoute,async(req,res)=>{
//   try{
//     const user=await User.findOne({email:req.params.email})
//     if(user){
//       console.log(req.params.email)
//       res.render('dashboard.ejs', {
//          title: 'HaHa',
//     //  nav: ['Home','About','Contact'], 
//     email:user.email,
//     balance:user.balance
//    });
   

//     }else{
//       //redirect to login page
//       res.json({error:true,errMessage:"please login to access this api"})
//     }


//   }catch(err){
// res.json({error:true,errMessage:err.message})
//   }

// })


// module.exports=Router



