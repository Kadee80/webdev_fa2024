# Git/Github Cheatsheet

The following is the typical workflow for adding your assignments to your repo via Terminal.

First things first, Git only knows about the files _within your repostory_. Anything outside of the main folder is not tracked.

## Naming Files and Folders

When you are naming a file/folder:

- _Do NOT have any spaces in your filename!!!_
- Pick a convention and stick with it!
  - `CamelCase`
  - `snake_case`
  - `kebab-case`
- Don't forget the file extension! `index` wont work, VS code won't know how to code hint or highlight. `index.html` is what we are looking for!

### Example HW Submission

Class has ended, you have your assignment, and your'e ready to get to work!

1. Make a folder in your class notes/hw repository, not my repo, which has the notes and in class examples. If you are submitting your assignment for Week01, make a folder inside your repo named Week01. It should look something like `YourRepoFolder/Week01/`
2. Create and work on your assignment files here. If you made the files elsewhere, now is the time to drag and drop them into the `Week{Number}` folder you created. _HINT: If you opened your repo, or assignment week folder in VSCode, you will see Green and Orange highlighting for new or modified folders in the sidebar_
3. Now, its time for terminal. Open a new terminal window and `cd` into your class repo. The easiest way to do this is type `cd` and `[spacebar]` and then drag and drop your repo folder onto that terminal window. Hit `[enter]`.
4. In terminal type the following and then hit `[enter]`

```bash
ls
```

Now you should see the top level of folders/files inside your repo. For now, you might see `README.md` and `Week01` listed. 5. Check the status of your repo. This is how we see what files have been added, modified, or deleted:

```bash
git status
```

You should see a list of what has changed since your last commit! Make sure you are at the top level of your repo, if you for some reason `cd`-ed into a sub-folder, you wont see changes from other folders! 6. Now that we have confirmed files exist, and have been added, editted, or deleted, we need to add these changes to Git's awareness:
This command adds ALL changes:

```bash
git add .
```

If you for some reason, do not wish to add all of the files you saw when you typed `git status`, you can add them individually:

```bash
git add Week01/
git add README.md
```

7. Now that we have a snapshot of these files, in thier current state, we need to commit this to memory. This is where we label our commit, so we should be sure to add a descriptive message here for our timeline.

```bash
git commit -m "Your accurate and descriptive commit message inside quotes"
```

8. Now we have a version of our repo, and all of its files in thier current state added to `Git`. Fantastic! Remember, if you changed these files further, you need to `git add .` and `git commit -m "another message"` to make sure those changes are added as well. At this point, we are all set on _your local machine_. We now need to sync this up with what is on `GitHub`.

```bash
git push
```

After you push your local changes, they should be visible on GitHub. There are many reasons a `git push` may not work. We can discuss those in class and add a new section of notes below!
