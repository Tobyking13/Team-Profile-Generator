# Team-Profile-Generator

## Description

I've built an application that prompts the user to enter data about their software team. The app first asks for basic information about the Manager, such as their name, ID, email, and office number. I've used a class with a constructor to create an object for the Manager, which stores all of the information provided.

Next, the user can input data about the Engineers and Interns on the team. For each Engineer, the user is asked to provide their name, ID, email, and GitHub username, while for each Intern, the user is asked to provide their name, ID, email, and school. Similar to the Manager object, I've used classes with constructors to store the data for each Engineer and Intern in their respective objects.

Once the user has finished inputting the team data, my application generates an HTML page with all the data displayed neatly in Bootstrap cards. I've used a template engine to create reusable HTML code with placeholders for dynamic data. This allows the application to generate the HTML code for each Bootstrap card based on the data in the objects created from the input.

Each Bootstrap card includes the team member's name, role, ID, email, and any additional data collected for that member (such as GitHub username or school). I've applied consistent formatting and styling to each card to make the page visually appealing and user-friendly.

To apply styling to the HTML page, I've used CSS. CSS allows me to modify the fonts, colors, margins, and other visual properties of the HTML elements generated by the template engine.

Overall, I've built an application that provides an easy-to-use tool for users to input and organize data about their software team. By using classes with constructors and a template engine, I've made it easy to store and manipulate the data, while the use of Bootstrap and CSS helps to create a professional-looking HTML page.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)

## Installation

Google Drive link to team.html:

https://drive.google.com/file/d/1XJgw7H_JU8jImwxP7CsB9bWoiUvIflPN/view?usp=sharing


## Usage

![Toby King Team-Profile-Generator](./assets/Screenshot.png "Toby King Team-Profile-Generator" )
Screenshot of the application.

## Features

* The application gathers data from the user about the work team and displays the information within neat bootstrap cards on an html page.
* Validation so the questions must have answers that are suitable.
* The application creates a unique HTML page for the user. 
