const fs = require('fs');

// 1. Read data from a file.
// 2. Check the order of executing of asynchronized code.

const file = fs.readFile('readme.txt', 'utf8', function(err, data) {
	console.log(data);
});
console.log(file);
console.log('!!!');


// 3. Read a file and make an operation with its data.

fs.readFile('readme.txt', 'utf8', function(err, num) {
   console.log(num*num);
})


// 4. Read a file and check if it throws an error when cannot find the file.

fs.readFile('read.txt', 'utf8', function(err, data) {
	if (!err) {
		console.log(data);
	} else {
		console.log('ERROR', err);
	}
});


// 5. Check if it works correctly when the given file exists.

fs.readFile('readme.txt', 'utf8', function(err, data) {
	if (!err) {
		console.log(data);
	} else {
		console.log('ERROR', err);
	}
});

// 6. Write the given number to the file and check the error.

fs.writeFile('numbers.txt', '2', function(err) {
	if (err) {
		console.log('ERROR');
	} 
});

// 7. Read two files with numbers and print to the console the product of these numbers.

fs.readFile('readme1.txt', 'utf8', function(err, data1) {
	if (!err) {
		fs.readFile('readme2.txt', 'utf8', function(err, data2) {
			if (!err) {
				console.log(data1 * data2);
			} else {
				console.log('error no readme2');
			}
		});
	} else {
		console.log('error no readme1');
	}
});

// 8. Read numbers from three files and print to the console the sum of that numbers.

fs.readFile('readme1.txt', 'utf8', function(err, data1) {
    if(!err) {
        fs.readFile('readme2.txt', 'utf8', function(err, data2) {
            if(!err) {
                fs.readFile('readme3.txt', 'utf8', function(err, data3) {
                    if(!err){
                        console.log(`The sum is: ${Number(data1) + Number(data2) + Number(data3)}`);
                    } else {
                        console.log('data3 Not Found');
                    }
                })
            } else {
                console.log('data2 Not Found');
            }
        })
    } else {
        console.log('data1 Not Found');
    }
});

//  9. Read data from a file and write to the same file other information.

fs.readFile('readSample.txt', 'utf8', function(err, data) {
    if(!err) {
        fs.writeFile('readSample.txt', data + ' ' + 'Yerevan', function(err) {
            if(err) {
                console.log("Error during writing");
            }
        })
    } else {
        console.log("Error during reading");
    }
})

//  10. Read the number from a file and show the square of that number in the file.

fs.readFile('readme2.txt', 'utf8', function(err, data) {
    if(!err) {
        fs.writeFile('readme2.txt', data + '\n' +`Squared ${data} is`+ ' ' +data * +data, function(err) {
            if(err) {
                console.log('Cannot write');
            }
        })
    } else {
        console.log('Cannot read');
    }
})

//  11. Read three files with numbers and write the sum of that numbers to a new file.

fs.readFile('readme1.txt', 'utf8', function(err, data1) {
    if(!err) {
        fs.readFile('readme2.txt', 'utf8', function(err, data2) {
            if(!err) {
                fs.readFile('readme3.txt', 'utf8', function(err, data3) {
                    if(!err) {
                        fs.writeFile('writeSum.txt', `The sum is ${Number(data1) + Number(data2) + Number(data3)}`, function(err) {
                            if(err) {
                                console.log('Cannot write');
                            }
                        })
                    } else {
                        console.log("Cannot read data3");
                    }
                })
            } else {
                console.log("Cannot read data2");
            }
        })
    } else {
        console.log("Cannot read data3");
    }
})

// 12. Rewrite the code above using the arrow function.

fs.readFile('readme1.txt', 'utf8', (err, data1) => {
    if(!err) {
        fs.readFile('readme2.txt', 'utf8', (err, data2) => {
            if(!err) {
                fs.readFile('readme3.txt', 'utf8', (err, data3) => {
                    if(!err) {
                        fs.writeFile('writeSum.txt', `The sum is ${Number(data1) + Number(data2) + Number(data3)}`, err => {
                            if(err) {
                                console.log('Cannot write');
                            }
                        })
                    } else {
                        console.log("Cannot read data3");
                    }
                })
            } else {
                console.log("Cannot read data2");
            }
        })
    } else {
        console.log("Cannot read data3");
    }
})


