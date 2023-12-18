// Return all values and instead of Datestmp return Date 
// (you can convert datestmp to regular data in moment (format yyyy-dd-mm))

const moment = require('moment');
const data = require('./data.json');
const fs = require('fs');

const newData =[];
data.forEach(obj => {
    const timestamp = obj.DateStamp*100;
    const formatted = moment.unix(timestamp).format('YYYY-DD-MM');
    obj.DateStamp = formatted;
    newData.push(obj)
})

const finalData = newData.map(obj => JSON.stringify(obj)).join('\n');
try {
    fs.writeFileSync('./newData.json', finalData, null,2, 'utf-8')
    console.log('Data successfully saved to disk');
  } catch (err) {
    console.error(err)
  }
  
