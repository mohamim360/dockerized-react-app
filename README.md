# 🚀 React + Node.js Application (Dockerized)

This project is a full-stack web application consisting of a **React frontend** served by **Nginx** and a **Node.js backend**. The app is fully containerized using **Docker** and managed with **Docker Compose**.

---

## Project Structure

```
.
├── client/                  # React frontend source
│   ├── public/              # Static files
│   ├── src/                 # React components and logic
│   ├── package.json         # Frontend dependencies
│   └── Dockerfile           # Frontend Docker configuration
├── server/                  # Node.js backend source
│   ├── src/                 # API source code
│   ├── package.json         # Backend dependencies
│   └── Dockerfile           # Backend Docker configuration
├── docker-compose.yml       # Orchestration configuration
└── README.md                # This file
```


---

## 🐳 Dockerized Setup

This project uses Docker for both the frontend and backend services. Here's how the containers are structured:

### 🔧 Backend Service (`backend`)

* **Language:** Node.js
* **Port:** `5000`
* **Purpose:** Serves API data to frontend

### 🌐 Frontend Service (`client`)

* **Framework:** React
* **Server:** Nginx
* **Port:** `3000` (maps to Nginx `80`)
* **Purpose:** Serves React frontend, communicates with backend

---

## 🛠️ Prerequisites

* Docker installed: [Install Docker](https://docs.docker.com/get-docker/)
* Docker Compose installed: [Install Docker Compose](https://docs.docker.com/compose/install/)

---

## 🧪 How to Run the App

### 1. Clone the Repository

```bash
git clone https://github.com/mohamim360/dockerized-react-app.git
cd dockerized-react-app
```

### 2. Run the App with Docker Compose

```bash
docker-compose up --build
```

### 3. Access the App

* **Frontend:** [http://localhost:3000](http://localhost:3000)
* **Backend API:** [http://localhost:5000](http://localhost:5000)

---

## 📦 Docker Images Used

* **Frontend:** [`mehedihasan11/myreactapp-frontend:latest`](https://hub.docker.com/r/mehedihasan11/myreactapp-frontend)
* **Backend:** [`mehedihasan11/myreactapp-node:latest`](https://hub.docker.com/r/mehedihasan11/myreactapp-node)

---

## ✅ Features

* 🧩 **Modular Architecture** (Frontend + Backend separation)
* 🐳 **Fully Dockerized** with Compose
* 🚀 **Optimized Nginx Setup** for React
* 🌐 **Port Mapping** for local development

---

## 🧼 Cleanup

To stop and remove containers:

```bash
docker-compose down
```
---

## 🙋‍♂️ Author

**Mehedi Hasan**
GitHub: [@mohamim360](https://github.com/mohamim360)
Docker Hub: [mehedihasan11](https://hub.docker.com/u/mehedihasan11)

---
