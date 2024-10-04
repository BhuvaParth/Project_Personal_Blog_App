# Project_Personal_Blog_App
## Overview

The Blog App is a simple yet powerful application built using React.js and styled with Tailwind CSS. This project allows users to create, edit, delete, and view blog posts. The application utilizes JSON Server as a mock backend to handle data storage and retrieval.

## Features

- **Add Blog**: Users can create new blog posts by filling out a form with the blog title and content. The new post will be added to the list of blogs.
- **Edit Blog**: Users can edit existing blog posts. The application provides an option to update the title and content of any blog post.
- **Delete Blog**: Users can delete any blog post. Once deleted, the post will be removed from the list of blogs permanently.
- **View All Blogs**: Users can view a list of all blog posts in the application. Each post will display its title and a snippet of its content.
- **View Single Blog**: Users can click on a blog post to view its full content on a separate page. This allows for a more detailed view of each post.

## Technologies Used

- **Frontend**: 
  - [React.js](https://reactjs.org/) - A JavaScript library for building user interfaces.
  - [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework for styling the application.

- **Backend**: 
  - [JSON Server](https://github.com/typicode/json-server) - A simple and fast way to set up a REST API for development purposes.

## Getting Started

To get started with the Blog App, follow these steps:

### Prerequisites

- Node.js (v12 or above)
- npm (Node Package Manager)

## Installation

  ### Go to Frontend folder and enter this commands
   #### Please Check must be your localhost:3001 for frontend

  ``` bash
   npm install
   npm run start
  ```

  ##  Start Json Server
  
   ### Please Check must be your localhost:3000 for json server

  ``` bash
    npx json-server --watch db.json --port 3000
  ```

