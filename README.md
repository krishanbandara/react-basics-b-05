# Section 01: This is for learning version controlling.

# step 01 : Create a repository in github.com 

# step 02 : Create a folder in local machine

# step 03 : Open the project in VS code 

# step 04 : Open the terminal of this vscode 
- use one of (bash/cmd/git bash)

# step 05 : check the git version
```bash 
   git -v
```

# step 06 : Initialize a git repo using 
```bash 
   git init
```

# step 07 : Check the git status 
```bash 
   git status
```

# step 08 : Add files to the git  


```bash 
# add all files in the current folder 
   git add .

# or 
# add all files regarding the folder we are in
 git add -A 

```
# step 09 : commit the changes with a meaningful commit message 

```bash 
# always should be meaningful  concise and relevant.
   git commit -m"Your commit message" .
# ex : This commit will : "update the script file "
# ex : This commit will :  "Refactor current logic"

```

 # step 10 : Check if there is any remote urls 
```bash 
   git remote -v
```

 # step 11 : Check if there is any remote urls 
```bash 
   git git remote add origin <remote url>
   
   # ex : git remote add origin https://github.com/krishanbandara/react-basics-b-05.git
   
   
```

 # step 12 : Check if the remote url configured without a issue
```bash 
   git remote -v
```


 # step 13 : Make sure the default branch is your main branch

```bash 

   git branch -M main 

```

 # step 14 : Push the local commits to the remote/cloud branch

```bash 

   git push -u origin main

```

 # step 15 : Check if the changes are there in the remote 

-----

 # Section 02 

 # step 16 : Do a file change 

 # step 17 : Check the file change in vscode 

 # step 18 : Check the file change in the terminal using  

```bash 
   git status
```

 # step 19 : Repeat step 08 
 # step 20 : Proper Commit message 

 ```bash 
  git commit -m " Update the steps documentation"
```

# step 21 : Push the changes the existing branch

 ```bash 
  git push
```

# step 22 : Create a new branch called `dev` from `main` branch 

 ```bash 
  git checkout -b dev
```

# step 23 : Publish the branch to remote `origin dev`

 ```bash 
  git push -u origin dev
```

# step 24 : Repeat step 08

# step 25 : Create a PR ( Pull Request) from github and merge it to main

 ```bash 
 # Navigate between branches
  git checkout main 
  git checkout dev

# check the changes status between local and remote
  git fetch 

# checkout to main branch   
  git checkout main 

# Pull the changes to local from remote main branch
  git pull

```
 