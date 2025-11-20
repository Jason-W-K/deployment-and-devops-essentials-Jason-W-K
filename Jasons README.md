# MERN Blog App

A full-stack blogging platform built with the MERN stack (MongoDB, Express.js, React, Node.js). Users can register, log in, create and edit posts, and view content by category. This project demonstrates production-ready deployment, CI/CD automation, and monitoring strategies using modern DevOps tools.

---

## 🌐 Live Demo

- **Frontend:** [https://mernappfrontend.netlify.app](https://mernappfrontend.netlify.app)
- **Backend API:** [https://mern-app-backend-rw4b.onrender.com](https://mern-app-backend-rw4b.onrender.com)

---
## 📸 CI/CD Pipeline in Action

Below is a screenshot of the GitHub Actions workflow that builds and deploys the frontend automatically on every push to `main`.

![CI/CD Workflow Screenshot](./screenshots/CICD.png)



## 🛠️ Tech Stack

| Layer       | Technology                     |
|-------------|---------------------------------|
| Frontend    | React + Vite                   |
| Backend     | Express.js + Node.js           |
| Database    | MongoDB Atlas                  |
| Auth        | JWT-based authentication       |
| Deployment  | Netlify (frontend), Render (backend) |
| CI/CD       | GitHub Actions                 |
| Monitoring  | Render logs, Netlify deploy history |

---

## ✨ Features

- User registration and login
- Create, edit, and delete blog posts
- View single posts and post lists
- Category tagging
- Protected routes (dashboard, post creation)
- Responsive UI with clean layout
- Backend connectivity check on load

---

## 📁 Folder Structure
client/               # React frontend └── src/ └── components/ └── pages/ └── context/ └── App.jsx server/               # Express backend └── routes/ └── controllers/ └── models/ └── index.js .github/ └── workflows/      # GitHub Actions CI/CD deployment/           # Deployment scripts and configs monitoring/           # Monitoring setup examples .env.example          # Environment variable template


---

## ⚙️ Environment Variables

Create a `.env` file in both `client/` and `server/` directories based on the `.env.example` template.

### Example (`server/.env`)
```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

Running Locally
1. Clone the repository
git clone https://github.com/your-username/your-repo.git
cd your-repo


###### 2. Install dependencies
cd server
npm install

cd ../client
npm install


3.   Set up environment variables
Create .env files in both client/ and server/ using .env.example as a guide.
4. Start development servers
# In one terminal
cd server
npm run dev

# In another terminal
cd client
npm run dev

CI/CD Pipeline
This project uses GitHub Actions to automate deployment of the frontend to GitHub Pages or Netlify.
✅ Current Workflow
- Trigger: Push to main
- Steps:
- Checkout code
- Setup Node.js
- Install dependencies
- Build Vite app
- Deploy to GitHub Pages using peaceiris/actions-gh-pages


📁 Workflow File
- Location: client/.github/workflows/deploy.yml


🔜 Future Improvements
- Add CI for frontend (linting, testing)
- Add CI/CD for backend (Render deploy hook or CLI)

📸 CI/CD Pipeline Screenshots
Include screenshots here showing GitHub Actions running your deploy workflow.

Example:
- ✅ Build and deploy job passing
- ✅ GitHub Pages or Netlify deployment logs

📊 Monitoring & Maintenance
- Render Dashboard: Monitor backend logs, restarts, and health checks
- Netlify Deploy Logs: Track frontend build and deploy history
- Error Handling: Backend logs errors to console; frontend displays fallback messages
- Health Check: /api/posts endpoint confirms backend connectivity

📜 License
This project is licensed under the MIT License.

🙌 Acknowledgments
- MongoDB Atlas for cloud database hosting
- Render and Netlify for free-tier deployment
- GitHub Actions for CI/CD automation


