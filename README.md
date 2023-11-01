# **Cypress** With Easy POM -Rev Oct 31 2023

## Background
Some time ago I have created a test suite using Page Object Model for one of the projects I've worked. However, it was implemented using classes much selenium-style like, and our Lead was wondering if there was a "Cypress Way" to do it without implement such abstraction methods. After doing some research on my own and some back and forth, I reached the conclusion that there is no "Cypress Way", BUT... still.. there has to be a way to do so without such implementation, and I have found this way of handling things, which allowed me to respect Automated Best Practices, and keep away a class implementation. At the very end you'll find out which approach works best for your needs.

---

## General Details

*The Application under test can be found [here](https://angularjs.realworld.io/). Feel free to roam around and get familiar with it.*
This project was created using Cypress and Typescript.

---
## Cypress Run Results
Below you can find the results of test runs recorded on Cypress Dashboard for this project
[![CypressPOM](https://img.shields.io/endpoint?url=https://cloud.cypress.io/badge/detailed/ghkhiq&style=flat&logo=cypress)](https://cloud.cypress.io/projects/ghkhiq/runs)

## Goals

This project was created with the following goals in mind
1. Keep code simple, clean and readable.
2. Make tasks like code refactoring easier.
3. Implement Automation Best Practices.
4. Keep away some Selenium practices.
5. Rely on Cypress functionality as much as possible.

---

## Setup

Follow these steps in order to get a working copy of the project
1. Clone the project: `git clone https://github.com/josepavaa118/CypressPOM.git`
2. Open the project folder using VSCode or any IDE of your preference (Using terminal/console works too!).
3. Run the following command on a terminal window: `npm install` to get all Node Dependencies required
4. At the moment of creating the first version of the Readme file, you can open Cypress window using the following command: `npx cypress open`, more custom commands with different properties will be added down the road.

## Project Structure
*Below you'll find a brief description of the most relevant folder structure:*
1. Cypress Folder: Contains all Cypress related files for the overal testing functionality
2. 'e2e' Folder: Contains all the .spec files on their respective folders which contains the tests suite and their respective test cases
3. 'fixtures' Folder: This folder contains .json files that are required as part of the testing flows. Can be used to store data like usernames, passwords, input values and so on...
4. 'selectors' Folder: This folder contains all Web Elements/selector files that should be interacted/used as part of the testing flow, along with their respective methods for different user interactions.
5. 'support' Folder: Formerly contained custom commands on 'commands' file, now holds JAVADOCs information for Custom Commands

## Cypress Dashboard
This project is integrated with Cypress Dashboard. However if you want to setup your own Cypress Dashboard you'll need to follow the steps given on Cypress [Documentation](https://docs.cypress.io/guides/cloud/getting-started). You'll also need to setup the privacy of your Record Key. Otherwise unallowed people may be able to record test executions on your project and consume your monthly tests (or even unwanted charges for test execution). You can achieve this by setting it up on your `cypress.env.json` file, or as an OS Environment Variable (Check the instructions according to your OS, As for myself I'm mostly working this on Windows). This project has a custom script to run and record on console, just type `npm run-script run-dashboard`, remeber first to setup your Cypress Dashboard, otherwise you will get an error.

## Project Scripts
`npm run cypress:report` Will allow you to run the automation in headless mode with reports enabled. Default Browser: Electron (this can be changed if necessary)

## Upcoming updates
* Additional Test Cases and a heavy Refactor will be done*

## Discarded Work
* I was trying to set up this automation with Docker, however for some reason it simply didn't work. The idea was to get the generated reports from the Docker Image, but everytime all I've got was an empty folder. Since I was following some Cypress course I (of coursed) compared the situation with different course mates and even the instructor. But it seems like this is some weird issue not even the instructor was able to address. So after several attempts to solve it. I had no choice but to discard it

## Disclaimer
*As I move forward with this project this ReadMe file may change, along with any description or steps given previously*
