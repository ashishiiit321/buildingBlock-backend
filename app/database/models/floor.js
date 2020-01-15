const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const floorSchema = new Schema({
	
	buildingId: Schema.Types.ObjectId,
    floorName: {type: String},
   	description: {type: String},
    


}, { timestamps: true });

const floor = mongoose.model('Floor', floorSchema);

module.exports = floor;