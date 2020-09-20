const mongoose=require("mongoose")
const Schema = mongoose.Schema;

const cakeSchema = new Schema({
   label: {
       type: String,
       required: true
   },
   calories: {
       type: Number,
       required: true
   },
   image: { 
       type: String
    }
})
module.exports = mongoose.model("Cake", cakeSchema, "cakes")