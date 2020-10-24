/*
    For this section of the skills check you will be putting together a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/

let gitDefinition = `Git is a control system that we use to track the progress of our  projects`//CODE HERE

//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what GitHub is.
*/

let gitHubDefinition = `Github is a website where repositories are stored`//CODE HERE

//////////////////PROBLEMS 3 - 9////////////////////
/*
    For the next several problems you will be creating objects containing information about different git 
    commands.  Each object should contain 'description' and 'code' properties.  The 'description' property 
    will be a string with a description of what that git command does.  The 'code' property should be a 
    string of the actual command (What you type into your terminal).
*/

//////////////////PROBLEM 3////////////////////
/*
    Create an object called 'init' with 'description' and 'code' properties 
    following the guidelines above to describe the init command.
*/

let init = {
    description: `Allows git to watch said files`,
    code: `git init`,
}//CODE HERE

//////////////////PROBLEM 4////////////////////
/*
    Create an object called 'clone' with 'description' and 'code' properties 
    following the guidelines above to describe the clone command.
*/

let clone = {
    description: `Clones files to your curent location in your computer`,
    code: `git clone`,
}//CODE HERE

//////////////////PROBLEM 5////////////////////
/*
    Create an object called 'status' with 'description' and 'code' properties 
    following the guidelines above to describe the status command.
*/

let status = {
    description: `shows what stage of the process you are on to push your code `,
    code: `git status`,
}//CODE HERE

//////////////////PROBLEM 6////////////////////
/*
    Create an object called 'add' with 'description' and 'code' properties 
    following the guidelines above to describe the add command.
*/

let add = {
    description: `tells git to track any changes that have been made `,
    code: `git add`,
}//CODE HERE

//////////////////PROBLEM 7////////////////////
/*
    Create an object called 'commit' with 'description' and 'code' properties
    following the guidelines above to describe the commit command.
*/

let commit = {
    description: `names the changes that you will be pushing `,
    code: `git commit -m 'message about your changes'`,
}//CODE HERE

//////////////////PROBLEM 8////////////////////
/*
    Create an object called 'addRemote' with 'description' and 'code' properties
    following the guidelines above to describe the command to add a remote location to your git repository.
*/

let addRemote = {
    description: `adds a place on the internet to store your code `,
    code: `git remote add origin https://github.com/jordan-valdez/JavaScript-Basics.git`,
}//CODE HERE

//////////////////PROBLEM 9////////////////////
/*
    Create an object called 'push' with 'description' and 'code' properties 
    following the guidelines above to describe the push command.
*/

let push = {
    description: `push's code to github to be stored`,
    code: `git push -u origin main`,
}//CODE HERE
