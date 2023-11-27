const fs = require('fs');

const moment = require('moment');

function getHoursWithDate(start, end) {

    let startPoint = new Date(start.getFullYear(), start.getMonth(), start.getDate() + 1, 0, 0, 0);
    let endPoint = new Date(end.getFullYear(), end.getMonth(), end.getDate() + 1, 0, 0, 0);
    let content = '';

    while (startPoint <= endPoint) {
        content += `year=${String(startPoint.getFullYear())}, month=${String(startPoint.getMonth())}, day=${String(startPoint.getDate() + 1)}, hour=${String(startPoint.getHours())}\n`;
    }
   

    fs.writeFile('file.json', content, (err) => {
        if (err) {
            console.error(err);
            return;
        }
    });
    return `File is created`
}
const start = new Date('2023-11-1');
const end = new Date('2023-11-30');

// console.log(getHoursWithDate(start, end));

function getHoursWithMoment(start, end) {
    let curDate = moment(start).startOf('hour')
    let data = '';
    while (curDate <= end) {
        data += `${curDate.add(1, 'hour')}\n`
    }
    fs.writeFile('dataMoment.json', data, (err) => {
        if (err) {
            console.error(err);
            return;
        }
    });
    return `File is created`
}
const startDate = moment('2023-11-01');
const endDate = moment('2023-11-03');
// console.log(getHoursWithMoment(startDate,endDate,1));

