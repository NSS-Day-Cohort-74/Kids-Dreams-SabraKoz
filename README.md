# Events and Debugging Assessment

Time to assess how well you have learned to use the debugging tools in Chrome Dev Tools, and writing click event listeners. This application is to show kids with illnesses and the memories the would like to make. Celebrities sign up to help kids make memories.

> 🧨 Make sure you answer the vocabulary and understanding questions at the end of this document before notifying your coaches that you are done with the project

## Event Listeners to Create

1. When the kid name is clicked, it should display their wish.
1. When the celebrity name is clicked, it should display their sport.
1. The pairings list should should contain the pairing in the following format.
    ```html
    {child name} will be making memories with {celebrity name}, a {celebrity sport} star, by {child wish}
    ```

Below is an animation showing how the application should look when complete and how the event listeners should work.

<img src="./images/debugging-events-assessment.gif" width="700px">

## Setup

Your instruction team will provide a link for you to create your assessment repository. Once your repo is created, clone it to your machine.

1. Make sure you are in your `workspace` directory.
1. `git clone {github repo SSH string}`.
1. `cd` into the directory it creates.
1. `code .` to open the project code.
1. Use the `serve` command to start the web server.
1. Open the URL provided in Chrome.

Make sure your Developer Tools are open at all times while working on this project. Use the messages provided in the Console to determine what code needs to be fixed or implemented, and use breakpoints in the Sources tab to step through your code as you debug.

## Vocabulary and Understanding

Before you click the "Complete Assessment" button on the Learning Platform, add your answers below each question and make a commit.

1. When a child is clicked on in the browser, which module contains the code that will execute on that event happening? Can you explain the algorithm of that logic?
   > The module that holds the click event for a child is Kids.js. In that module I have a document.addEventListener set to listen for a "click". Then I have an if statement that checks if the target clicked on has a dataset type of "child" that I have set in the hidden data in the HTML list item. This makes sure that the message does not pop up anywhere that is clicked on the page, but only when a list item with the data-type of "child" is clicked. If the item clicked is a "child" type, then I have a window.alert method that declares what will be shown when that child item is clicked. For the message I have a dataset in the HTML that references the children's name and wish, using a for..of loop to iterate through the copy of the children array, so I then use "kidClicked.dataset.name" and "kidClicked.dataset.wish" to display the name and wish for each child.

2. In the **Pairings** module, why must the `findCelebrityMatch()` function be invoked inside the `for..of` loop that iterates the kids array?
   > The findCelebrityMatch() function must be invoked inside the for..of loop because it needs to iterate through the array of all kids, and it uses a single kid object and the whole array of celebrities as arguments to compare each kid object, one at a time, to the celebrities array and find the celebrity id that matches the celebrityId of the kid.

3. In the **CelebrityList** module, can you describe how the name of the sport that the celebrity plays can be displayed in the window alert text?
   > The event listener in CelebrityList.js contains an if statement that is checking for the data-type of "celebrity", so that only when a user clicks on a celebrity name this click event is displayed, and not just when they click anywhere on the page. Once it finds only the celebrity dataset type, then it runs a window.alert that references the "data-name" and "data-sport" datasets in the HTML list item. These datasets are inside a for..of loop that access the copy of the celebrities array and call the .name and .sport properties inside each celebrity object in the array. 

4. Can you describe, in detail, the algorithm that is in the `main` module?
   > Inside the main.js module I am importing the 3 functions that create the lists we want to display on the browser from their respective modules. Next I have a variable "mainContainer" that is equal to a querySelector that is accessing the id of "container" in the index.html file. I have another variable "applicationHTML" that is set equal to the html format that I want to be displayed, and I am invoking the 3 functions that I imported, each in the sections that they coincide with. Then I set the "mainContainer.innerHTML" property to equal the "applicationHTML" so that the html stored in that variable will display inside the main section of the html with the id of "container".
