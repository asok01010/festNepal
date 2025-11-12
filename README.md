<<<<<<< HEAD
# festNepal


# Start Backend
cd backend 
./mvnw spring-boot:run

# Start Frontend 
cd frontend
npm run dev 





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
git checkout <your-branch>                            # Example: git checkout sujal

# If your branch does not exist locally yet, create it and track remote
git checkout -b <your-branch> origin/<your-branch>    # Creates branch locally and links to remote

# 5. Work on your branch
# Make changes to code (frontend or backend)
# Add new files, modify existing files

# 6. Stage all changes for commit
git add .                                             # Stages all changed files

# 7. Commit changes with a descriptive message
git commit -m "Describe what you changed"           # Example: git commit -m "Add HelloController API"

# 8. Push changes to your remote branch
git push origin <your-branch>                        # Example: git push origin sujal

# 9. Keep your branch up-to-date with main branch
git checkout main                                     # Switch to main branch
git pull origin main                                  # Pull latest changes from remote main
git checkout <your-branch>                            # Go back to your branch
git merge main                                        # Merge latest main into your branch

# 10. Check status of your branch
git status                                           # Shows modified, added, or untracked files
git log --oneline                                    # Shows commit history in short format

# 11. After finishing your work, create a Pull Request (PR) on GitHub
#  - Go to your branch on GitHub
#  - Click "Compare & pull request"
#  - Assign a reviewer
#  - Merge your branch into main after review

# 12. Important Notes
#  - Always work on your own branch, never push directly to main
#  - Regularly pull latest main into your branch to avoid conflicts
#  - Use descriptive commit messages for clarity













festnepal
├─ README.md
├─ TODO.md
├─ backend
│  ├─ .mvn
│  │  └─ wrapper
│  │     └─ maven-wrapper.properties
│  ├─ HELP.md
│  ├─ mvnw
│  ├─ mvnw.cmd
│  ├─ package-lock.json
│  ├─ pom.xml
│  ├─ src
│  │  ├─ main
│  │  │  ├─ java
│  │  │  │  └─ com
│  │  │  │     └─ festnepal
│  │  │  │        └─ backend
│  │  │  │           ├─ AuthController.java
│  │  │  │           ├─ BackendApplication.java
│  │  │  │           ├─ HelloController.java
│  │  │  │           ├─ User.java
│  │  │  │           ├─ UserRepository.java
│  │  │  │           ├─ WebConfig.java
│  │  │  │           ├─ config
│  │  │  │           ├─ controller
│  │  │  │           ├─ model
│  │  │  │           ├─ repository
│  │  │  │           └─ service
│  │  │  └─ resources
│  │  │     ├─ application.properties
│  │  │     ├─ data.sql
│  │  │     ├─ static
│  │  │     └─ templates
│  │  └─ test
│  │     └─ java
│  │        └─ com
│  │           └─ festnepal
│  │              └─ backend
│  │                 └─ BackendApplicationTests.java
│  └─ target
│     ├─ classes
│     │  ├─ application.properties
│     │  ├─ com
│     │  │  └─ festnepal
│     │  │     └─ backend
│     │  │        ├─ AuthController$LoginRequest.class
│     │  │        ├─ AuthController$SignupRequest.class
│     │  │        ├─ AuthController.class
│     │  │        ├─ BackendApplication.class
│     │  │        ├─ HelloController.class
│     │  │        ├─ User.class
│     │  │        ├─ UserRepository.class
│     │  │        ├─ WebConfig$1.class
│     │  │        ├─ WebConfig.class
│     │  │        ├─ config
│     │  │        ├─ controller
│     │  │        ├─ model
│     │  │        ├─ repository
│     │  │        └─ service
│     │  └─ data.sql
│     ├─ generated-sources
│     │  └─ annotations
│     ├─ generated-test-sources
│     │  └─ test-annotations
│     ├─ maven-status
│     │  └─ maven-compiler-plugin
│     │     ├─ compile
│     │     │  └─ default-compile
│     │     │     ├─ createdFiles.lst
│     │     │     └─ inputFiles.lst
│     │     └─ testCompile
│     │        └─ default-testCompile
│     │           ├─ createdFiles.lst
│     │           └─ inputFiles.lst
│     ├─ surefire-reports
│     │  ├─ TEST-com.festnepal.backend.BackendApplicationTests.xml
│     │  └─ com.festnepal.backend.BackendApplicationTests.txt
│     └─ test-classes
│        └─ com
│           └─ festnepal
│              └─ backend
│                 └─ BackendApplicationTests.class
├─ frontend
│  ├─ dist
│  │  ├─ assets
│  │  │  ├─ background-CMT3gyKs.jpg
│  │  │  ├─ index-CQDFteGB.css
│  │  │  └─ index-fV4E0HeF.js
│  │  ├─ index.html
│  │  └─ vite.svg
│  ├─ eslint.config.js
│  ├─ index.html
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ public
│  │  └─ logo.png
│  ├─ src
│  │  ├─ App.css
│  │  ├─ App.tsx
│  │  ├─ assets
│  │  │  ├─ background.jpg
│  │  │  └─ logo.png
│  │  ├─ components
│  │  │  ├─ AuthLayout.tsx
│  │  │  ├─ Input.tsx
│  │  │  ├─ OTPModal.tsx
│  │  │  └─ ui
│  │  │     ├─ button.tsx
│  │  │     ├─ dialog.tsx
│  │  │     ├─ input-otp.tsx
│  │  │     ├─ input.tsx
│  │  │     └─ label.tsx
│  │  ├─ context
│  │  ├─ declarations.d.ts
│  │  ├─ hooks
│  │  ├─ index.css
│  │  ├─ lib
│  │  │  └─ utils.ts
│  │  ├─ main.tsx
│  │  ├─ pages
│  │  │  ├─ Index.tsx
│  │  │  ├─ NotFound.tsx
│  │  │  └─ auth
│  │  │     ├─ Login.tsx
│  │  │     ├─ Signup.tsx
│  │  │     └─ login.css
│  │  ├─ routes
│  │  │  └─ AppRoutes.tsx
│  │  └─ services
│  │     ├─ authService.js
│  │     └─ authService.ts
│  ├─ tsconfig.app.json
│  ├─ tsconfig.json
│  ├─ tsconfig.node.json
│  ├─ tsconfig.tsbuildinfo
│  └─ vite.config.ts
├─ package-lock.json
└─ package.json

=======
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


```
festnepal
├─ README.md
├─ TODO.md
├─ backend
│  ├─ .mvn
│  │  └─ wrapper
│  │     └─ maven-wrapper.properties
│  ├─ HELP.md
│  ├─ mvnw
│  ├─ mvnw.cmd
│  ├─ package-lock.json
│  ├─ pom.xml
│  ├─ src
│  │  ├─ main
│  │  │  ├─ java
│  │  │  │  └─ com
│  │  │  │     └─ festnepal
│  │  │  │        └─ backend
│  │  │  │           ├─ AuthController.java
│  │  │  │           ├─ BackendApplication.java
│  │  │  │           ├─ HelloController.java
│  │  │  │           ├─ User.java
│  │  │  │           ├─ UserRepository.java
│  │  │  │           ├─ WebConfig.java
│  │  │  │           ├─ config
│  │  │  │           ├─ controller
│  │  │  │           ├─ model
│  │  │  │           ├─ repository
│  │  │  │           └─ service
│  │  │  └─ resources
│  │  │     ├─ application.properties
│  │  │     ├─ data.sql
│  │  │     ├─ static
│  │  │     └─ templates
│  │  └─ test
│  │     └─ java
│  │        └─ com
│  │           └─ festnepal
│  │              └─ backend
│  │                 └─ BackendApplicationTests.java
│  └─ target
│     ├─ classes
│     │  ├─ application.properties
│     │  ├─ com
│     │  │  └─ festnepal
│     │  │     └─ backend
│     │  │        ├─ AuthController$LoginRequest.class
│     │  │        ├─ AuthController$SignupRequest.class
│     │  │        ├─ AuthController.class
│     │  │        ├─ BackendApplication.class
│     │  │        ├─ HelloController.class
│     │  │        ├─ User.class
│     │  │        ├─ UserRepository.class
│     │  │        ├─ WebConfig$1.class
│     │  │        ├─ WebConfig.class
│     │  │        ├─ config
│     │  │        ├─ controller
│     │  │        ├─ model
│     │  │        ├─ repository
│     │  │        └─ service
│     │  └─ data.sql
│     ├─ generated-sources
│     │  └─ annotations
│     ├─ generated-test-sources
│     │  └─ test-annotations
│     ├─ maven-status
│     │  └─ maven-compiler-plugin
│     │     ├─ compile
│     │     │  └─ default-compile
│     │     │     ├─ createdFiles.lst
│     │     │     └─ inputFiles.lst
│     │     └─ testCompile
│     │        └─ default-testCompile
│     │           ├─ createdFiles.lst
│     │           └─ inputFiles.lst
│     ├─ surefire-reports
│     │  ├─ TEST-com.festnepal.backend.BackendApplicationTests.xml
│     │  └─ com.festnepal.backend.BackendApplicationTests.txt
│     └─ test-classes
│        └─ com
│           └─ festnepal
│              └─ backend
│                 └─ BackendApplicationTests.class
├─ frontend
│  ├─ dist
│  │  ├─ assets
│  │  │  ├─ background-CMT3gyKs.jpg
│  │  │  ├─ index-CQDFteGB.css
│  │  │  └─ index-fV4E0HeF.js
│  │  ├─ index.html
│  │  └─ vite.svg
│  ├─ eslint.config.js
│  ├─ index.html
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ public
│  │  └─ logo.png
│  ├─ src
│  │  ├─ App.css
│  │  ├─ App.tsx
│  │  ├─ assets
│  │  │  ├─ background.jpg
│  │  │  └─ logo.png
│  │  ├─ components
│  │  │  ├─ AuthLayout.tsx
│  │  │  ├─ Input.tsx
│  │  │  ├─ OTPModal.tsx
│  │  │  └─ ui
│  │  │     ├─ button.tsx
│  │  │     ├─ dialog.tsx
│  │  │     ├─ input-otp.tsx
│  │  │     ├─ input.tsx
│  │  │     └─ label.tsx
│  │  ├─ context
│  │  ├─ declarations.d.ts
│  │  ├─ hooks
│  │  ├─ index.css
│  │  ├─ lib
│  │  │  └─ utils.ts
│  │  ├─ main.tsx
│  │  ├─ pages
│  │  │  ├─ Index.tsx
│  │  │  ├─ NotFound.tsx
│  │  │  └─ auth
│  │  │     ├─ Login.tsx
│  │  │     ├─ Signup.tsx
│  │  │     └─ login.css
│  │  ├─ routes
│  │  │  └─ AppRoutes.tsx
│  │  └─ services
│  │     ├─ authService.js
│  │     └─ authService.ts
│  ├─ tsconfig.app.json
│  ├─ tsconfig.json
│  ├─ tsconfig.node.json
│  ├─ tsconfig.tsbuildinfo
│  └─ vite.config.ts
├─ package-lock.json
└─ package.json

>>>>>>> main
```