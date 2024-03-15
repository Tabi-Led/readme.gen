//re-wrote code portion due to busted laptop
const inquirer = require('inquirer');
const fs = require('fs');

const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'Project Title:',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Project Description:',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Installation Instructions:',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Usage Examples:',
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Contributing Guidelines:',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Test Instructions:',
  },
  {
    type: 'list',
    name: 'license',
    message: 'License:',
    choices: ['MIT', 'Apache 2.0', 'GPLv3'],
  },
  {
    type: 'input',
    name: 'github',
    message: 'GitHub Username:',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Email Address:',
  },
];

function generateReadme(answers) {
  const licenseBadge = {
    MIT: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    'Apache 2.0': '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
    GPLv3: '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
  }[answers.license];

  return `
# ${answers.title}

${licenseBadge}

## Description
${answers.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${answers.installation}

## Usage
${answers.usage}

## License
This project is covered under the ${answers.license} License.

## Contributing
${answers.contributing}

## Tests
${answers.tests}

## Questions
For any questions, please contact me via email at [${answers.email}](mailto:${answers.email}) or visit my GitHub profile at [https://github.com/${answers.github}](https://github.com/${answers.github}).
`.trim();
}

inquirer.prompt(questions).then((answers) => {
  const readmeContent = generateReadme(answers);
  fs.writeFile('README.md', readmeContent, (err) => {
    if (err) throw err;
    console.log('README.md generated successfully.');
  });
});
