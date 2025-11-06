# festNepal

# Start Backend
cd backend                                   # Move to backend folder
./mvnw spring-boot:run                       # Start Spring Boot backend

# Start Frontend
cd frontend                                 # Move to frontend folder
npm run dev                                 # Start React frontend


# ------------------------------
# FestNepal Project Git Setup
# ------------------------------

# 1. Clone the repository from GitHub
git clone https://github.com/asok01010/festNepal.git   # Clone the repo to local machine
cd festNepal                                          # Move into project folder

# 2. Check which branch you are currently on
git branch                                            # Shows all local branches and highlights current branch with *

# 3. Check remote branches
git branch -r                                         # Shows branches available on GitHub

# 4. Switch to your personal branch (replace <your-branch> with your name)
git checkout <your-branch>                            # Example: git checkout ashok

# If your branch does not exist locally yet, create it and track remote
git checkout -b <your-branch> origin/<your-branch>    # Creates branch locally and links to remote

# 5. Work on your branch
# Make changes to code (frontend or backend)
# Add new files, modify existing files

# 6. Stage all changes for commit
git add .                                             # Stages all changed files

# 7. Commit changes with a descriptive message
git commit -m "Describe what you changed"            # Example: git commit -m "Add HelloController API"

# 8. Push changes to your remote branch
git push origin <your-branch>                         # Example: git push origin ashok

# 9. Keep your branch up-to-date with main branch
git checkout main                                     # Switch to main branch
git pull origin main                                  # Pull latest changes from remote main
git checkout <your-branch>                            # Go back to your branch
git merge main                                        # Merge latest main into your branch


# 10. Git Scenarios

# Scenario 1: Completed work on your branch → update main
git checkout main                                     # Switch to main branch
git pull origin main                                  # Pull latest main updates
git merge <your-branch>                               # Merge your branch into main (Example: git merge ashok)
git push origin main                                  # Push merged main to GitHub
# Result: Your completed work is now on main

# Scenario 2: Teammates updated main → update your branch
git checkout main                                     # Switch to main branch
git pull origin main                                  # Pull latest main updates
git checkout <your-branch>                            # Switch back to your branch (Example: git checkout ashok)
git merge main                                        # Merge latest main into your branch
# Resolve any conflicts if they appear
git add .                                             # Stage resolved files
git commit -m "Merge latest main updates into <your-branch>"  # Commit merge
git push origin <your-branch>                         # Push updated branch to GitHub
# Result: Your branch now has all the latest updates from main


# 11. Check status of your branch
git status                                           # Shows modified, added, or untracked files
git log --oneline                                    # Shows commit history in short format

# 12. After finishing your work, create a Pull Request (PR) on GitHub
# - Go to your branch on GitHub
# - Click "Compare & pull request"
# - Assign a reviewer
# - Merge your branch into main after review

# 13. Important Notes
# - Always work on your own branch; never push directly to main
# - Regularly pull latest main into your branch to avoid conflicts
# - Use descriptive commit messages


# Project Structure

festnepal/
│
├── README.md
├── .gitignore
├── package.json             # (optional root scripts, like setup, install-all)
│
├── frontend/                # React (Vite) Frontend
│   ├── public/
│   ├── src/
│   │   ├── assets/          # images, icons, etc.
│   │   ├── components/      # reusable UI components
│   │   ├── pages/           # page-level views (Home, Events, About, etc.)
│   │   ├── hooks/           # custom React hooks
│   │   ├── context/         # global state or theme context
│   │   ├── services/        # API calls using Axios or Fetch
│   │   ├── routes/          # route configuration
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── vite.config.js
│   ├── package.json
│   └── README.md
│
├── backend/                 # Spring Boot Backend
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/com/festnepal/backend/
│   │   │   │   ├── controller/     # REST controllers (API endpoints)
│   │   │   │   ├── service/        # Business logic
│   │   │   │   ├── repository/     # JPA Repositories (DB interaction)
│   │   │   │   ├── model/          # Entities / Data models
│   │   │   │   ├── config/         # Security, CORS, and DB config
│   │   │   │   └── BackendApplication.java
│   │   │   └── resources/
│   │   │       ├── application.properties  # DB, port, config
│   │   │       └── static/ and templates/  # optional for serving static files
│   │   └── test/
│   │       └── java/com/festnepal/backend/ # Unit and integration tests
│   ├── pom.xml
│   └── README.md
