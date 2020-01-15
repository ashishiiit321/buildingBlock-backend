const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const buildingSchema = new Schema({
	
    buildingName: {type: String},
    floor : [{
		type : Schema.Types.ObjectId, ref: 'floor'
	}]
    


}, { timestamps: true });

const building = mongoose.model('building', buildingSchema);

module.exports = building;