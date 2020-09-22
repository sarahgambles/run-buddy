const inquirer = require('inquirer');
inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?'
    }
])
.then(answers => console.log(answers));


// const fs = require('fs');
// const generatePage = require('./src');

// const pageHTML = generatePage(portfolioData);

// fs.writeFile('./index.html', pageHTML, err => {
    // if (err) throw new Error(err);

  //  console.log('Portfolio complete! Check out index.html to see the output!');
// });
// const profileDataArgs = process.argv.slice(2, process.argv.length);
// console.log(profileDataArgs);

// // Notice the lack of parentheses around the 'profileDataArr' parameter?
// const printProfileData = (profileDataArr) => {
//     for (let i = 0; i < profileDataArr.length; i += 1) {
//         console.log(proilfeDataArr[i]);
//     }
//     console.lot('===========')

//     profileDataArr.forEach(profileItem => console.log(profileItem));

// };

// printProfileData(profileDataArgs);