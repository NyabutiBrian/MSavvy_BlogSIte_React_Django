## MSAVVY BLOGSITE - BACKEND DEVELOPMENT

## Table of contents

- [Overview](#overview)
    - [Introduction](#introduction)
- [Process + Development](#process-+-development)
    - [Creating a Django Project](#creating-a-django-project)
- [Author](#author)

## Overview

### Introduction
- MSavvy_Blog_React_Django is a blog site built with Django REST Framework for the backend. This project aims to provide a dynamic and interactive platform for creating and sharing blog posts.

## Process + Development

### Creating a Django Project

1. **Install Python:**

    ```bash
    # Check python version
    python --version
    ```

2. **Install Virtual Environment:**

    ```bash
    pip3 install pipenv
    ```

3. **Install Django Project:**

    ```bash
    mkdir BackEnd
    cd BackEnd
    pipenv install django
    pip install djangorestframework
    pip install django-cors-headers
    pipenv shell
    python -m pip install Pillow
    django-admin startproject djangoapp .
    python manage.py runserver
    ```

4. **Setup Database, createsuperuser and makemigrations**
    ```bash
    # setup postgresql database
    pip install psycopg2
    pip install python-decouple
    # create createsuperuser
    python manage.py createsuperuser
    # make migrations
    python manage.py makemigrations
    python manage.py migrate
    python manage.py runserver
    ```

## Author

- Momanyi Brian - [Portfolio Website](https://momanyi-brian-portfolio.vercel.app)