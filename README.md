# Intro to Git and JavaScript Pairing Lab

The purpose of this lab is to get you and your partner familiar with `git`, specifically, how to:
* Fork a repository
* `git clone` down a remote repository
* `git add` to stage and `git commit` to commit changes
* `git push` to push up commited changes from a local repo to a remote repo
* `git pull` to pull down changes from a remote repo to a local repo
* Use git to work collaboratively on a shared code base!

## Instructions

> Remember, paired programming means both partner are always looking at, and working off of the same screen! When you are the driver, you group should be working off your computer. And when you switch, you should be working off your partner's computer. By doing so, you will get practice with push and pull using git!

0. You will work in groups of two (no more than three) to implement various JavaScript functions.  
1. One group member, Partner A, will [fork](https://guides.github.com/activities/forking/) this repository. Only one group memebr should fork the repo. Partner B does not need to fork anything.
2. In the **forked repository**, Partner A needs to add Partner B as a [collaborator](https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-github-user-account/managing-access-to-your-personal-repositories/inviting-collaborators-to-a-personal-repository). This means that both groups members will have read and write (edit) access to the forked repo. 
3. Both partners should `git clone` the forked repo to their AWS Cloud9 using SSH. 
4. Partner A will drive first with Partner B being the navigator. Partner A will implement the first function, then stage, commit, and push the changes up to the remote repo (make sure you are in the correct folder in the terminal). 
5. Double check the remote repo on Github to ensure the latest commit was successfully pushed up. 
6. Then, it will be Partner B's turn to drive and Partner A will be the navigator. Partner B needs to `git pull` down the latest commit (make sure you are in the correct folder in the terminal). Once the the code for the first function has been pulled down, Partner B will implement the second function, then push their changes up.
7. Continue switching driver-navigator roles *for every function,* with Partner A implementing all the odd numbered questions and Partner B implementing the even numbers questions. Every time you push up a commit, your partner will need to pull down the changes to their local repo.


## Problems

Be sure to test your functions as you write them! You can invoke the functions after they have been implemented or use `console.log` to print out their return value.

1. Write a function `OneHundredToFive` that console logs all numbers starting from 100 **down to** 5.

2. Write a function `absoluteValue` that **returns** the absolute value of a number. If the value is not a number, it returns `null`.
```
absoluteValue(-4)     //returns 4
absoluteValue(7.33)   //returns 7.33
absoluteValue("hi")   //returns null
```
3. Write a function `multiplesOfFourOrSeven` that console logs all positive numbers to 100 if that number is either a mulitple of 4 or a mutliple of 7.
> `4, 7, 8, 12, 14, 16, 20, 21, 24, 28, ...`

4. Write a function `square` that takes in an integer parameter and **returns** the square of the number **unless** that number is a perfect square, in which case, return the square root of the number instead!
```
square(5)    //return 25
square(7)    //return 49
square(25)   //return 5 because 25 is a perfect square with a root of 5
square(36)   //return 6 because 36 is a perfect square with a root of 6.
```
