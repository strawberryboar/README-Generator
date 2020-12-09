function generateMarkdown(userResponses, userInfo) {

    // Generate Table of Contents
    let draftToC = `## Table of Contents`;
  
    if (userResponses.installation !== '') { draftToC += `
    * [Installation](#installation)` };
  
    if (userResponses.usage !== '') { draftToC += `
    * [Usage](#usage)` };
  
    if (userResponses.contributing !== '') { draftToC += `
    * [Contributing](#contributing)` };
  
    if (userResponses.tests !== '') { draftToC += `
    * [Tests](#tests)` };
  
  
    // Generate markdown for the top required portions of the README
    let draftMarkdown = 
    `# ${userResponses.title}
    ![Badge for GitHub repo top language](https://img.shields.io/github/languages/top/${userResponses.username}/${userResponses.repo}?style=flat&logo=appveyor) ![Badge for GitHub last commit](https://img.shields.io/github/last-commit/${userResponses.username}/${userResponses.repo}?style=flat&logo=appveyor)
    
    Badges hosted by [shields.io](https://shields.io/).
    
    
    ## Description 
    
    
    ${userResponses.description}
    `
  
    // Add Table of Contents to markdown
    draftMarkdown += draftToC;
   
    // Add License section
    draftMarkdown += `
    * [License](#license)`;
    
  
    if (userResponses.installation !== '') {
    
    draftMarkdown +=
    `
    
    ## Installation
    
    *Steps required to install project and how to get the development environment running:*
    
    ${userResponses.installation}`
    };
    
  
    // Optional usage section
    if (userResponses.usage !== '') {
    
    draftMarkdown +=
    
    `
    
    ## Usage 
    
    *Instructions and examples for use:*
    
    ${userResponses.usage}`
    };
    
    
    // Optional Contributing section
    if (userResponses.contributing !== '') {
    `
    
    ## Contributing
    
    *If you'd like to contribute, you can follow these guidelines for how to do so.*
    
    ${userResponses.contributing}`
    };
    
  
    // Optional Tests section
    if (userResponses.tests !== '') {
    
    draftMarkdown +=
    `
    
    ## Tests
    
    *Tests for application and how to run them:*
    
    ${userResponses.tests}`
    };
  
  
    // License section is required
    draftMarkdown +=
    `
    
    ## License
    
    ${userResponses.license}
    `;
  
  
    // Questions / About Developer section
    let draftDev = 
    `
    ---
    
    ## Questions?
    
    ![Developer Profile Picture](${userInfo.avatar_url}) 
    
    Contact me:
   
    GitHub: [@${userInfo.login}](${userInfo.url})
    `;
  
    // If GitHub email is not null, add to Developer section
    if (userInfo.email !== null) {
    
    draftDev +=
    `
    Email: ${userInfo.email}
    `};
  
    // Add developer section to markdown
    draftMarkdown += draftDev;
  
    // Return markdown
    return draftMarkdown;
    
  }
  
  module.exports = generateMarkdown;