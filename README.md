# Full Stack Car Dealership Application

## Overview
A full stack web application for managing car dealerships, viewing dealer information, and submitting reviews. Built with Django (backend), React (frontend), Node.js/Express (dealership microservice), and Flask (sentiment analysis microservice).

## Architecture
- **Frontend**: React.js single-page application
- **Backend**: Django REST framework serving APIs
- **Database Microservice**: Node.js/Express with MongoDB for dealership and review data
- **Sentiment Analysis**: Flask microservice using NLTK VADER for review sentiment analysis
- **Database**: SQLite (Django models for CarMake/CarModel), MongoDB (dealerships/reviews)

## Features
- User authentication (login, logout, registration)
- View all car dealerships with state-based filtering
- View dealer details and customer reviews
- Submit reviews with sentiment analysis
- Admin panel for managing car makes and models
- Contact Us and About Us pages

## Project Structure
```
server/
  djangoproj/       - Django project settings and root URL config
  djangoapp/        - Main Django application (models, views, APIs)
    microservices/  - Flask sentiment analyzer
  frontend/         - React frontend application
    src/components/ - React components (Login, Register, Dealers, Header)
    static/         - Static HTML pages (Home, About, Contact)
  database/         - Node.js dealership/review database microservice
```

## Setup and Installation

### Prerequisites
- Python 3.9+
- Node.js 14+
- Docker (optional, for containerized deployment)

### Backend Setup
```bash
cd server
pip install -r requirements.txt
python manage.py makemigrations
python manage.py migrate
python manage.py runserver
```

### Frontend Setup
```bash
cd server/frontend
npm install
npm run build
```

### Sentiment Analysis Microservice
```bash
cd server/djangoapp/microservices
pip install -r requirements.txt
python app.py
```

### Database Microservice
```bash
cd server/database
npm install
docker-compose up
```

## Environment Variables
Create a `.env` file in `server/djangoapp/` with:
```
backend_url=http://localhost:3030
sentiment_analyzer_url=http://localhost:5050/
```

## Deployment
The application can be deployed using Docker containers. See `server/Dockerfile` and the CI/CD workflow in `.github/workflows/ci-cd.yml`.

## License
This project is part of the IBM Full Stack Software Developer Professional Certificate.
