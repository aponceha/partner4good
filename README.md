# Partner For Good

## Description

Environmental and social governance (ESG) has become a hot topic in public markets over the last few years, with securities commissions like the OSC in Canada, or the SEC in the U.S., considering making ESG a reporting requirement for public companies. 

Partner for Good is a platform that allows charities, not-for-profits, and non-profit organizations to create profiles that demonstrate how they are contributing to a social or environmental good through creating an organizational profile. Companies interested in bolstering their ESG involvement and reporting can visit the Partner for Good platform to find causes that fulfill their particular ESG goals, while maintaining comfort that each cause listed on the platform has been vetted and is a credible organization. 

This application uses the MERN stack and GraphQL, and is hosted & deployed on Heroku.

## Table of Contents

- [Description](#description)
- [Requirements](#requirements)
- [Pre-requisites](#pre-requisites)
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Questions](#questions)

### Requirements

1. CAUSE representitive can create an USER account with an `email` and `password`

2. A *USER* can fill in their *CAUSE* with charity `name`, `description`, `picture`, `contact name`, `category`, `address`.
3. When creating a CAUSE, the USER can select from a predefined option list of CATEGORIES
    - LGBTQ
    - Food Security
    - Envrionmental 
    - Mental Health 
    - Diversity, Equity, and Inclusion 
4. As a USER, I want to be able to view my CAUSE, so that I can verify the information for my CAUSE is correct.
5. As a USER, I want to be able to edit my profile, so that I can make updates to some/all the fields
6. As a USER, when loging into tha app, I want to see a home page where a few CAUSES profiles are displayed, so that I can get interigued by them.
7. As a USER, when on the Home Page, I want to see a button to view more CAUSES which will redirect to the CAUSES Page when clicked so that I can find the CAUSE I'm interested in.
8. As a USER, when on the CAUSES Page, I want to have an infinite scroll of CAUSES cards so that I have an easy way to explore them.
9. A a USER, when on the CAUSES Page, I want to be able to narrow what CAUSES I view by category by clicking a filter dropdown menu. 

#### Domain

USER

- _id: ID
- email: string
- password: string

CAUSE

- _id: ID
- name: string
- description: string
- picture: TBD
- contactName: string
- category: ID
- address: string
- user: ID

CATEGORY

- _id: ID
- name: string

## Pre-requisites

If the user doesn't already have the following installed, follow the documentation provided:

- [Node.js](https://nodejs.org/en/download/)
- [Express.js](https://expressjs.com/en/starter/installing.html)
- [MySQL2](https://www.npmjs.com/package/mysql2)
- [Sequelize](https://www.npmjs.com/package/sequelize)
- [dotenv](https://www.npmjs.com/package/dotenv)

- Install NodeJs and npm https://nodejs.org/en/download/
- Install Mysql server on local or on cloud

## Installation
- Clone the repo
  ```sh
  git clone git@github.com:MadelineLowes/partner-for-good.git
  ```
- Install dependencies
  ```sh
  npm install
  ```
  
- Seed table to the database:

  ```sh
    npm run seed
  ```

- Start the app:
  ```sh
    npm start
  ```

## Usage

Users can get the most out of this app if they are registered with an account, however unregistered users are still able to browse the homepage, categories & posts. Once users have registered and/or logged into their account, they can interact with others by writing their own posts, as well as liking & commenting on other users' posts.

## Credits

- Big thanks to ... for their help with this project

## License

This project is covered by MIT licensing.
https://opensource.org/licenses/MIT

## Questions

Albin Ponce-Ha:

- email: aponceha@gmail.com
- github profile: https://github.com/aponceha

Madeline Lowes:

- email: madeline.e.lowes@gmail.com
- github profile: https://github.com/MadelineLowes

Max Schwartz

- email: max@marbl.app
- github profile: https://github.com/The-Schwiz

Robert Iatan:

- email: robertiatan@gmail.com
- github profile: https://github.com/robertiatan


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/MadelineLowes/partner-for-good.svg?style=for-the-badge
[contributors-url]: https://github.com/MadelineLowes/partner-for-good/graphs/contributors
[issues-shield]: https://img.shields.io/github/issues/MadelineLowes/partner-for-good.svg?style=for-the-badge
[issues-url]: https://github.com/MadelineLowes/partner-for-good/issues
[license-shield]: https://img.shields.io/github/license/MadelineLowes/partner-for-good.svg?style=for-the-badge
[license-url]: https://github.com/MadelineLowes/partner-for-good/blob/main/LICENSE
[github-shield]: https://img.shields.io/badge/-github-black.svg?style=for-the-badge&logo=github&colorB=555
[github-url]: https://github.com/MadelineLowes/partner-for-good
