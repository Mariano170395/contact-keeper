const express = require('express')
const router = express.Router();

//@Route               Get api/auth
//@description         Get logged in user
//@access              Private
router.get('/', (req, res)=>{
    res.send('get logged in user')
});


//@Route               Get api/auth
//@description         Auth user and get token
//@access              Public
router.post('/', (req, res)=>{
    res.send('Log in user')
});

module.exports = router;