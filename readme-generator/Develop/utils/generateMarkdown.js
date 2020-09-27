// function to generate markdown for README
function renderBadge(license) {
  return `![GitHub license](https://img.shields.io/badge/license-${license}-blue)`
}

function generateMarkdown(data) {
  return `# ${data.name}
  ${renderBadge(data.license)}
  ##Description## ${data.description}

  ## Table of Contents  
  ---
  [1 Installation]:(https://github.com/sarahgambles/readme-generator/blob/master/README.md#installation)     
  ---
  [2 Usage]: (https://github.com/sarahgambles/readme-generator/blob/master/README.md#usage)   
  ---
  [3 Contributing]: (https://github.com/sarahgambles/readme-generator/blob/master/README.md#contributing)   
  ---
  [4 Tests]: (https://github.com/sarahgambles/readme-generator/blob/master/README.md#tests)  
  ---
  [5 Questions]: (https://github.com/sarahgambles/readme-generator/blob/master/README.md#questions)  
  ${data.table}  
  ### Installation ${data.installation}  
  ### Usage ${data.usage}  
  ### Contributing ${data.contributing}  
  ### Tests ${data.tests}  
  ### Questions ${data.questions}  
`;
}

module.exports = generateMarkdown 

