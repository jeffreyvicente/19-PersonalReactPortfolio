# 20-PersonalReactPortfolio

## Description
TextScribe is a  text editor that runs in the browser as a Progressive Web Application (PWA). It allows users to create, edit, and manage text documents seamlessly. The app incorporates data persistence techniques using IndexedDB, ensuring data redundancy and offline functionality.

## Table of Contents

- [Installation](#installation)
- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Preview](#preview)
- [Features](#features)
- [Technology Used](#technologies-used)


## Installation
To run TextScribe, follow these steps:

1. Clone this repository to your local machine.
2. Open the terminal and navigate to the project's root directory.
3. Install dependencies using npm install or yarn install.
4. Start the development server with npm start.
5. Open your browser and visit http://localhost:3000 to access TextScribe.

## User Story
```
AS AN employer looking for candidates with experience building single-page applications
I WANT to view a potential employee's deployed React portfolio of work samples
SO THAT I can assess whether they're a good candidate for an open position
```

## Acceptance Criteria
```
GIVEN a single-page application portfolio for a web developer
WHEN I load the portfolio
THEN I am presented with a page containing a header, a section for content, and a footer
WHEN I view the header
THEN I am presented with the developer's name and navigation with titles corresponding to different sections of the portfolio
WHEN I view the navigation titles
THEN I am presented with the titles About Me, Portfolio, Contact, and Resume, and the title corresponding to the current section is highlighted
WHEN I click on a navigation title
THEN I am presented with the corresponding section below the navigation without the page reloading and that title is highlighted
WHEN I load the portfolio the first time
THEN the About Me title and section are selected by default
WHEN I am presented with the About Me section
THEN I see a recent photo or avatar of the developer and a short bio about them
WHEN I am presented with the Portfolio section
THEN I see titled images of six of the developer’s applications with links to both the deployed applications and the corresponding GitHub repository
WHEN I am presented with the Contact section
THEN I see a contact form with fields for a name, an email address, and a message
WHEN I move my cursor out of one of the form fields without entering text
THEN I receive a notification that this field is required
WHEN I enter text into the email address field
THEN I receive a notification if I have entered an invalid email address
WHEN I am presented with the Resume section
THEN I see a link to a downloadable resume and a list of the developer’s proficiencies
WHEN I view the footer
THEN I am presented with text or icon links to the developer’s GitHub and LinkedIn profiles, and their profile on a third platform (Stack Overflow, Twitter) 
```

## Preview
View TextScribe hosted on [Heroku](https://textscribe-a44a925d489a.herokuapp.com/)

![alt text](/media/HomeScreenshot.png)
Project Homescreen to allow text to be typed

![alt text](/media/InstallApp.png)
Option to install the application as a PWA

## Features
The TextScrbe API has the following features:
- Create new text documents
- Save documents to IndexedDB for data persistence
- Supports markdown syntax for formatting

## Technologies Used
- IndexedDB: Local data storage
- idb: IndexedDB wrapper for simplified data handling
- Service Workers: Enabling PWA capabilities
