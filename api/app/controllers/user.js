const userService = require('../services/userService');

exports.create = async (req,res) => {
        
    try{
        const userData = req.body;

        const user = await userService.registerUser(userData);

        res.json(user);

    }
    catch(e){
        console.error(e);

        res.sendStatus(500);
    }
}