const express = require('express')
const router = express.Router();

//@Route               Post api/users
//@description         Register a user
//@access              Public
router.post('/', (req, res)=>{
    res.send('Register a user')
});

module.exports = router;