const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
    name: {
        type:String,
        required:[true,"Please Enter product Name"],
        trim:true
    },
    description:{
        type:String,
        required:[true,"Please Enter product Description"]
    },
    price:{
        type:String,
        required:[true,"Please Enter the Product Price"],
        maxLength:[8,"Price cannot exceed 8 Characters"]
    },
    rating:{
        type:Number,
        default:0,
    },
    image:[
       {
        public_id:{
            type:String,
            required:true
        },
        url:{
            type:String,
            required:true
        }
       }
    ],
    category:{
        type: String,
        required:[true,"Please Enter Product Category"],
    },
    Stock:{
        type:Number,
        required:[true,"Please Enter Product Stock"],
        maxLength:[4,"Stock cannot exceed 4 characters"],
        default:1
    },
    numOfReviews:[
        {
            name:{
                type:String,
                required:true
            },
            rating:{
                type:Number,
                required:true
            },
            comments:{
                type:String,
                required:true
            }

        }
    ],
    createdAt:{
        type:Date,
        default: Date.now
    }

  });


  module.exports = mongoose.model("Product",productSchema);