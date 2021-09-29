const express = require('express')
const router = express.Router();

//Crud

//@Route               Get api/contacts
//@description         Get all contacts
//@access              Private
router.get('/', (req, res)=>{
    res.send('Get all contacts')
});


//@Route               POST api/contacts
//@description         Add new contact
//@access              Private
router.post('/', (req, res)=>{
    res.send('Add contact')
});


//@Route               PUT api/contacts/:id
//@description         Update Contact
//@access              Private
router.put('/:id', (req, res)=>{
    res.send('Update contact')
});

//@Route               Delete api/contacts/:id
//@description         Delete Contact
//@access              Private
router.delete('/:id', (req, res)=>{
    res.send('Delete contact')
});

module.exports = router;