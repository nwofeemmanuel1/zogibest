const Joi=require("joi")

const validatevideo=(req)=>{
const schema=Joi.object({
    thumbnail_id:Joi.string()
    .required(),
    preview_id:Joi.string()
     .required()

})

const result=schema.validate({thumbnail_id:req.thumbnail_id,preview_id:req.preview_id})
if(result.error)return result.error.message
return true

}

// const result=validatevideo({thumbnail_id:"iquuiuwuuo",preview_id:"shhssjhsjh"})
// console.log(result)
module.exports=validatevideo