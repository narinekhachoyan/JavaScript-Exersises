
const fs = require('fs');
// 1. Feb 20, 2012, 3:12am
const d = new Date(2012, 1, 21, 3, 12);
//console.log(d);

//2. Write a function getWeekDay(date) to show the weekday in short format: ‘MO’, ‘TU’, ‘WE’, ‘TH’, ‘FR’, ‘SA’, ‘SU’.

function getWeekDay(date) {
    let days = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];
    return days[date.getDay()]
}

//console.log(getWeekDay(d));

//3.Write a function getLocalDay(date) that returns the “European” day of week for date.

function getLocalDay(date) {
    let day = date.getDay();
    if (day === 0) day === 7;
    return day;
}
//console.log(getWeekDay(d));

//4.Create a function getDateAgo(date, days) to return the day of month days ago from the date.
function getDateAgo(date, days) {
    let dateCopy = new Date(date);
    dateCopy.setDate(date.getDate() - days);
    return dateCopy.getDate()
}
const today = new Date();
//console.log(getDateAgo(today,4));

//5. Write a function getLastDayOfMonth(year, month) that returns the last day of month. Sometimes it is 30th, 31st or even 28/29th for Feb.

function getLastDayOfMonth(year, month) {
    let date = new Date(year, month + 1, 0);
    return date.getDate();
}

//console.log(getLastDayOfMonth(2012,1));

//6. Write a function getSecondsToday() that returns the number of seconds from the beginning of today.

function getSecondsToday() {
    let now = new Date();
    let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    let diff = now - today;
    return Math.round(diff / 1000);

}
//console.log(getSecondsToday());

//7.Create a function getSecondsToTomorrow() that returns the number of seconds till tomorrow.

function getSecondsToTomorrow() {
    let now = new Date();
    let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
    let diff = tomorrow - now;
    return Math.round(diff / 1000);
}
//console.log(getSecondsToTomorrow());

//HOMEWORK



function getHoursOfMonth(month, year) {
    const days = new Date(year, month, 0).getDate();

    let str = '';
    for (let i = 1; i <= days; i++) {
        for (let j = 0; j < 24; j++) {

            const result = `year =  ${String(year)},month = ${String(month)},day = ${String(i)},hour = ${String(j)}\n`;
            str += result;
        }

    }
    fs.writeFile('data.json', str, (err) => {
        if (err) {
            console.error(err);
            return;
        }
    });
    return `The file is created`;
}


// console.log(getHoursOfMonth(11, 2023));



function getDaysAndHours(month, year) {
    let day = 1;
    let data = '';
    while (day <= 31) {
        let hour = 0;
        while (hour < 24) {
            try {
                const date = new Date(year, month - 1, day, hour);
                data += `${date.toString()}, ${String(hour)}\n`;
                hour++;
            } catch (error) {
                return error.message;
            }
        } day++;
    }
    fs.writeFile('data.json', data, (err) => {
        if (err) {
            console.error(err);
            return;
        }
    });
    return `File is created`
}
console.log(getDaysAndHours(11,2023));

const date1 = new Date('2023-11-2 00:00:00');
const date2 = new Date('2023-11-3 00:00:00');
// console.log(date1);
// console.log(date2);




function hourOfDay(year, month, day) {
    let hour = 0;
    let str = '';
    while (hour < 24) {
        const result = `year=${String(year)}, month=${String(month)}, day=${String(day)}, hour=${String(hour)}\n`;
        str += result;
        hour++;
    }
    return str;
}
// console.log(hourOfDay(2023,11,1));

function logDates(start, end) {
    let currentDate = new Date(start);
    currentDate.setHours(0, 0, 0, 0);
    let data = '';
    while (currentDate <= end) {
       String(currentDate.setHours(currentDate.getHours() + 1));
        data += `year=${currentDate.getFullYear()}, month=${currentDate.getMonth()}, day=${currentDate.getDate()}, hour=${currentDate.getHours()}\n`
    }
    fs.writeFile('data.json', data, (err) => {
        if (err) {
            console.error(err);
            return;
        }
    });
    return `File is created`


}
const startDate = new Date(2023, 11, 2);
const endDate = new Date(2023, 11, 3);
// console.log(logDates(startDate, endDate, 1));


let startPoint = new Date(start.getFullYear(), start.getMonth(), start.getDate()+1, 0, 0, 0);
let endPoint = new Date(end.getFullYear(), end.getMonth(), end.getDate()+1, 0, 0, 0);
// console.log(startPoint);
// console.log(endPoint);