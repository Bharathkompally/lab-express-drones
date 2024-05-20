// Iteration #1
const mangoose=require('mangoose')
const{Schema,model}=mangoose
const droneSchema=new Schema({
    name:{type:String,required:true},
    propellers: { type: Number, required: true },
   maxSpeed: { type: Number, required: true}
});
module.export=model('Drone',droneSchema);