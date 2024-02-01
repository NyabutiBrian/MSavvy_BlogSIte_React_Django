## MSAVVY BLOGSITE

## Table of contents

- [Overview](#overview)
    - [Introduction](#introduction)
- [Features](#features)
- [Technologies](#technologies)
- [Getting Started](#getting-started)
- [Contributions](#contributions)
- [License](#license)
- [Acknowledgments](#acknowledgments)
- [Author](#author)

## Overview

### Introduction
- MSavvy_Blog_React_Django is a blog site built with React for the frontend and Django REST Framework for the backend. This project aims to provide a dynamic and interactive platform for creating and sharing blog posts.


## Features
- **Blog Posts**: Admin creates, edits and deletes blog posts.
- **Comments**: Enable users to comment on blog posts.
- **Responsive Design**: Ensure a seamless user experience across different devices.
- **API Integration**: Fetch and display data from the Django backend.
- **The website will have an admin interface and user interface**
- Admin inerface allows an authenticated user to create, edit and delete blog posts
- The user interface allows all readers to read and make comments on selected blog posts.
- Blog posts will have various categories like: Front-end Development, AI Best Friend, UI/UX Design and Back_end Development. Each category will have various posts
- Blog Posts can be categorised into popular, most recent and highly featured posts.


## Technologies

- HTML, CSS, JavaScript, Bootstrap 5 CSS framework and React for building the frontend
- Django (Python) and Django REST Framework for my backend
- PostgreSQL Database
- Vercel for hosting
- Git for Version Control System

## Getting Started

- There are two main folders, backend contains the relevant code for Django REST Framework and frontend contains relevant code for React.
- To run the project locally, follow these steps:

1. **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/MSavvy_BlogSite_React_Django.git
    cd MSavvy_BlogSite_React_Django
    ```

2. **Setup Django Backend:**

    ```bash
    cd backend
    # Create and activate a virtual environment (optional but recommended)
    python -m venv venv
    source venv/bin/activate  # On Windows, use `venv\Scripts\activate`
    # Install dependencies
    pip install -r requirements.txt
    # Apply migrations
    python manage.py migrate
    # Run the development server
    python manage.py runserver
    ```

3. **Setup React Frontend:**

    ```bash
    cd frontend
    # Install dependencies
    npm install
    # Start the development server
    npm start
    ```

4. **Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to view the application.**

## Msavvy Blog Website
- Link - [Msavvy Blog Website](https://msavvy-blog-site-react-django.vercel.app/)

## Contributions

If you'd like to contribute to this project, please reach out.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

- [Django REST Framework](https://www.django-rest-framework.org/)
- [React](https://reactjs.org/)

## Author

- Momanyi Brian - [Portfolio Website](https://momanyi-brian-portfolio.vercel.app)
