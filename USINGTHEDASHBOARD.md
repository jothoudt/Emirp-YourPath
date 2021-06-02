(View Raw will give you the markdown that you can copy to your repos!)


![MIT LICENSE](https://img.shields.io/github/license/scottbromander/the_marketplace.svg?style=flat-square)
![REPO SIZE](https://img.shields.io/github/repo-size/scottbromander/the_marketplace.svg?style=flat-square)
![TOP_LANGUAGE](https://img.shields.io/github/languages/top/scottbromander/the_marketplace.svg?style=flat-square)
![FORKS](https://img.shields.io/github/forks/scottbromander/the_marketplace.svg?style=social)

# YourPath Dashboard

## Description

 Your project description goes here. What problem did you solve? How did you solve it? 

The team at YourPath has been collecting data through assessment forms from their clients. They needed a way to organize
the data that they were gathering. We created a real time data visualization dashboard. Each user has the ability to customize
their home page to display the information that they prefer. To help the users navigate the large amounts of data we split the charts into four main catgegories:
Demographics, Drug Statistics, Health Statistics and user statistics.

To see the fully functional site, please visit: [DEPLOYED VERSION OF APP](www.heroku.com)

## Screen Shot

Include one or two screen shots of your project here (optional). Remove if unused.

### Prerequisites

Link to software that is required to install the app (e.g. node).

- [Node.js](https://nodejs.org/en/)

## Installation

How do you get your application up and running? This is a step by step list for how another developer could get this project up and running. The good target audience in terms of knowledge, would be a fellow Primer from another cohort being able to spin up this project. Note that you do not need a paragraph here to intro Installation. It should be step-by-step.

If your application has secret keys (for example --  Twilio), make sure you tell them how to set that up, both in getting the key and then what to call it in the `.env` file.

1. Create a database named `prime_app1`,
2. The queries in the `tables.sql` file are set up to create all the necessary tables and populate the needed data to allow the application to run correctly. The project is built on [Postgres](https://www.postgresql.org/download/), so you will need to make sure to have that installed. We recommend using Postico to run those queries as that was used to create the queries, 
3. Open up your editor of choice and run an `npm install`
4. Run `npm run server` in your terminal
5. Run `npm run client` in your terminal
6. The `npm run client` command will open up a new browser tab for you!

## Usage
How does someone use this application? Tell a user story here.

1. The user would register and login.
2. Upon login the user would be brought to their own custom dashboard where they can add or remove charts.
3. The user can navigate through the charts by using the menu in the upper right corner.
4. In each of the different categories of charts the user also has the ability to use the dropdown menu to easily navigate to other charts in that same category.
5. For each of the drug charts the user can toggle between two tabs to see that substance's use in the last month and all time.


## Built With

List technologies and frameworks here

--

-React
-Redux
-Node
-PostgreSQL
-MaterialUI
-Chartjs
-Jotform Api
-Javascript
-HTML
-CSS

Jotform Api
--
-The jotform API was used to pull the results of user submissions.
-The api has a limit of pulling 1000 results at a time. If there are more than 1000, it will pull the latest 1,000 submissions
-The information in each data chart is specific to a certain question number in the assesment form. If the form itself is reordered,
it could alter the accuracy of the results. The index that is targeted for each set of data could be changed to resolve this issue.


## License
[MIT](https://choosealicense.com/licenses/mit/)

_Note, include this only if you have a license file. GitHub will generate one for you if you want!_

## Acknowledgement
Thanks to [Prime Digital Academy](www.primeacademy.io) who equipped and helped me to make this application a reality. (Thank your people)

## Support
If you have suggestions or issues, please email me at [youremail@whatever.com](www.google.com)
