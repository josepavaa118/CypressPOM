# **Cypress** With Easy POM -Rev April 1st 2023

## Background
Some time ago I have created a test suite using Page Object Model for one of the projects I've worked. However, it was implemented using classes much selenium-style like, and our Lead was wondering if there was a "Cypress Way" to do it without implement such abstraction methods. After doing some research on my own and some back and forth, I reached the conclusion that there is no "Cypress Way", BUT... still.. there has to be a way to do so without such implementation, and I have found this way of handling things, which allowed me to respect Automated Best Practices, and keep away a class implementation. At the very end you'll find out which approach works best for your needs.

---

## General Details

*The Application under test can be found [here](https://angularjs.realworld.io/). Feel free to roam around and get familiar with it.*
This project was created using Cypress and Typescript.

---

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
    Cypress Folder: Contains all Cypress related files for the overal testing functionality
        'e2e' Folder: Contains all the .spec files which contains the tests suite and their respective test cases
        'fixtures' Folder: This folder contains .json files that are required as part of the testing flows. Can be used to store data like usernames, passwords, input values and so on...
        'selectors' Folder: This folder contains all Web Elements/selector files that should be interacted/used as part of the testing flow, along with their respective methods for different user interactions.
        'support' Folder: The only relevant file here is 'commands' which includes the custom Cypress commands created for this project's usage

## Disclaimer
*As I move forward with this project this ReadMe file may change, along with any description or steps given previously*

## Upcoming updates
*I plan to keep improving this project, and as such I will work on adding additional tests for the time being.*