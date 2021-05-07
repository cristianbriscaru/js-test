require('dotenv').config()
const { app } = require('./app');
const db = require('./app/db/db');
const config = require('./app/config');


const bootstrap = async  () => {
    try{
        await db.connectToDB();

        app.listen( config.server.port , () => console.info(`Node Server listening on port: ${config.server.port}`) );
    }
    catch(e){

        console.error(`Node Server Error Booting Up ERR: ${e}`);
        process.exit(1)
    }
}

bootstrap().then();

const closeOnExit = async (event) => {
    try{
        await db.closeDBConnection(); 

        console.info(`Node Server Shuting Down : ${event}`) ;
        process.exit(0);
    }
    catch(e){
        console.error(`Node Server Crashed Shuting Down : ${event}, ERR: ${e}}`) ;
        process.exit(1);
    }
}


process.once('SIGINT', async () =>  await closeOnExit('SIGINT') );
process.once('SIGTERM', async () =>  await closeOnExit('SIGTERM') );


module.exports = app;
