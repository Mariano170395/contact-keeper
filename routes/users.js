const express = require('express')
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const User = require('../models/User')

//@Route               Post api/users
//@description         Register a user
//@access              Public
router.post(
    '/', 
    [
    body('name', 'Necesitas poner un nombre').not().isEmpty(),
    body('email','Pon un correo válido').isEmail(),
    body('password', 'La contraseña debe incluir mas de 6 carácteres').isLength({min:6})
],
async(req, res)=>{
    const errors = validationResult(req)
    if(!errors.isEmpty()){
            return res.status(400).json({errors: errors.array()})
        }  
        res.send('passed')

        const {name, email, password} = req.body

        try {
            
          let user = await User.findOne({email});

          if(user){
            return res.status(400).json({msg: 'Ya existe ese usuario'})
          } 

          user = new User ({
              name,
              email,
              password,
          });

          const salt = await bcrypt.genSalt(10)

          user.password = await bcrypt.hash(password, salt);

          await user.save();

          res.send('User Saved')

        } catch (err) {
            console.error(err.message)
            res.status(500).send('Fallo esto')
        }
    }
);

module.exports = router;