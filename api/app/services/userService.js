const userRepository = require('../repositories/user');
const cryptService = require('./cryptService');

exports.createUser = async (userData) => {

    const hashedPassword = await cryptService.hashPassword(userData.password)

    const userDataHashedPassword = {
        name: userData.name,
        email: userData.email,
        hashedPassword: hashedPassword,
    }

    const user = await userRepository.create(userDataHashedPassword);

    return {
        id: user.id,
        name: user.name,
        email: user.email
    }
    
}
