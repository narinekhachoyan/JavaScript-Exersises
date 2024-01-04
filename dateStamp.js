//  Պետք է վերադարձնել այն Դոմեյնները որոնք երեք ժամ անընդմեջ ունեն >=1000 pubimps:
// Վերադարձվող տվյալներում պետք է Ժամը լինի YYYY-dd-mm ֆորմատով


const moment = require('moment');
const fs = require('fs');
const lodash = require('lodash');
const domains = require('./data.json');

const domainsList = lodash.orderBy(domains, 'DateStamp');

function groupAndFormat() {
  let count = 0
  const result = []

  domainsList.forEach((elem) => {
    if (elem.PubImps >= 1000) {
      count++
    } else {
      count = 0
    }

    if (count >= 3) {
      result.push(elem)
    }

  })
  const newData = [];
  result.forEach(obj => {
    const timestamp = obj.DateStamp * 100;
    const formatted = moment.unix(timestamp).format('YYYY-DD-MM');
    obj.DateStamp = formatted;
    newData.push(obj)
  })

  fs.writeFileSync("highPubImps.json", JSON.stringify(newData, null, 2))
  return `Data with PubImps more than 1000 is ready`
}

console.log(groupAndFormat());


