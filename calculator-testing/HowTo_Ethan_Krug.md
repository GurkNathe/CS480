# CS480 - Lab 5: Test Case Generator

### How to run the program:

##### **(Assuming you have unzipped the lab files into the same directory as the README.md file)**

- With the HTML file that is in the same folder as this file, open the HTML file in Chrome, Firefox, Edge, or Opera<strong>\*</strong>.
  - You can either double click on the index.html file or right click on the index.html file and select "Open with" and select the browser from there.
  - For terminal/command lines, navigate to the location where index.html is located in the terminal/command line:
    - Tested methods:
      - Windows Command Prompt: "index.html"
      - Window PowerShell: ".\index.html"
      - Git Bash: "start index.html"
      - Anaconda Powershell Prompt: "index.html"
      - Bash: "start _browsername_ index.html" (only worked with firefox for me)
    - Untested methods:
      - Ubuntu: "firefox index.html"
      - Ubuntu: "google-chrome index.html"
      - (Couldn't find anything for MacOS)
- The HTML file will have a two input boxes at the top left under "Expression Testing". Enter the size in the left box (only numbers > 0 work) and the number of unique test cases in the right box (only numbers > 0 work).
- Either click the <strong>Submit</strong> button or press the <strong>Enter</strong> key (if you are still clicked into one of the input boxes) after entering the size and number of test cases.
- The program will then generate the test cases and display them in the HTML file.
- Bellow the inputs, two tables will display the generated test cases, both incorrect and correct ones. It also shows the result from the two different evaluation methods (math.js and lab 3).

  - The first table displays the test cases that are incorrect.
  - The second table displays the test cases that are correct.
  - The color of the row signifies whether the result were equivalent or not. Green means they were equivalent, red means they were not.

- Under the "Results" header, the counts for the correct and incorrect test cases will be displayed, as well as the statistics for Lab 3 (my stats) and math.js results.
- The program will display the number of correct evaluations and the number of incorrect evaluations for each method under the "Results" header.
- The accuracy of each method will also be displayed under the "Results" header under their respective columns.

- Click the <strong>Submit</strong> button again to run the program.
