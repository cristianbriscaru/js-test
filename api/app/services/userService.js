const userRepository = require('../repositories/user');
const cryptService = require('./cryptService');

exports.registerUser = async (userData) => {

    const hashPassword = await cryptService.hashPassword(userData.password)

    const userDataHashPassword = {
        name: userData.name,
        email: userData.email,
        password: hashPassword,
    }

    const user = await userRepository.create(userDataHashPassword);

    return {
        id: user.id,
        name: user.name,
        email: user.email
    }
    
}
