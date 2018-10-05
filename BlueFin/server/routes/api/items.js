const express = require('express');
const router = express.Router();

//Item Model
const Item = require('../../models/Item');

//@route 	GET api/addresses
//@desc 	Get All addresses
//@access	Public
router.get('/', (req, res) => {
	Item.find()
		.then(items => res.json(items))
})

//@route 	POST api/addresses
//@desc 	Create an address
//@access	Public
router.post('/', (req, res) => {
	const newItem = new Item({
		address: req.body.address //from body-parser
	});
	newItem.save().then(item => res.json(item)); 
});

//@route 	DELETE api/addresses/:id
//@desc 	Delete and address
//@access	Public
router.delete('/:id', (req, res) => {
	Item.findById(req.params.id)
	.then(item => item.remove().then(() => res.json({success:true})))
	.catch(err => res.status(404).json({success: false}));
});

module.exports = router;
