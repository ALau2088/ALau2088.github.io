const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const ItemSchema = new Schema({
	address: {
		type: String,
		required: true
	}
})

module.exports = Item = mongoose.model('address', ItemSchema);//.model() makes a copy of ItemSchema and names it address. Name of mlab collection would be plural 'addresses'