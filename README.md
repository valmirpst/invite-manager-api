# 🚀 Invite Manager API

**Invite Manager API** is a backend service developed during the **NLW Connect** event by **Rocketseat**. It provides endpoints to manage invitations, track accesses, registrations, and rankings for the Invite Manager web application.

---

## 🛠 Technologies Used

This project was built using the following technologies:

- 🌍 **Node.js** - JavaScript runtime for backend development
- ⚡ **Fastify** - High-performance web framework for Node.js
- 🗄 **PostgreSQL** - Relational database management system
- 🔥 **Redis** - In-memory data structure store for caching
- 🐳 **Docker** - Containerization for easy deployment
- 📜 **TypeScript** - Strongly typed JavaScript
- ✅ **Zod** - Schema validation for TypeScript
- 🔍 **Biome.js** - Code formatter and linter

---

## 📌 Features

✔️ API for managing invitations and user registrations
✔️ Tracks how many users accessed the invitation link
✔️ Stores and retrieves user ranking data
✔️ High-performance caching with Redis
✔️ Docker support for easy setup

---

## 🛠 Installation & Running

Follow these steps to run the API locally:

```bash
# Clone the repository
git clone https://github.com/valmirpst/invite-manager-api.git

# Navigate to the project folder
cd invite-manager-api

# Docker setup -> Install Docker in your machine first: https://www.docker.com/

# Run the docker-compose
docker compose up --build -d

# Install the dependencies
npm install

# Create a .env file at project root containing:
PORT=3333
WEB_URL="http://localhost:3000"
POSTGRES_URL="postgresql://docker:docker@localhost:5432/nlw-connect-nodejs"
REDIS_URL="redis://localhost:6379"

# Run the script to generate and migrate the models to the postgres database

npm run db:generate
npm run db:migrate

```

The API will be available at port 8080 with docs at: **http://localhost:8080/docs**

You can stop it from running just by executing the following command:

```bash
docker compose stop
```
