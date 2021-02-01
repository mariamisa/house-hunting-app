const {Pool} = require('pg'); 
require('env2')('./config.env');
let dbUrl = ''; 
switch(process.env.NODE_ENV) {
    case 'production' :
        dbUrl = process.env.db_production_url;
        break;
    case 'development' :
        dbUrl = process.env.db_develop_url
        break;
    case 'test':
        dbUrl = process.env.db_test_url;
        break;
    default : 
    throw new Error("three is no database url  found ... ")        
}
const options = {
    connectionString: dbUrl,
    ssl: process.env.NODE_ENV === 'production',
  };
  const pool =  new Pool(options);
  
  module.exports =  pool