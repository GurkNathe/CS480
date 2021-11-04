# CS480 - Lab 3: Calculator

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
- The HTML file will have a text box at the top. Enter the expression you want to calculate in the text box and hit the enter key
  or click the **=** sign at the bottom right. The image should look like [this.](Expected_UI.JPG)
- If the expression is valid, the text box will display the result of the calculation.
  - If the answer is **NaN**, that means the expression returned as undefined (i.e. ∞, -∞, or an unevaluatable expression like 0/0).
- If the expression is invalid, the text box will display an error message:
  - "Invalid expression!"
  - "No expression entered."
  - Expression highlighted in red from the point of the error in the expression.
- The **Clear** button will clear the text box.
- The **Total Clear** button will clear the text box and the history.
- The **Delete** button deletes the rightmost character in the text box.

#### **Notes:**

- The calculator only handles the functions displayed on the UI.
- I have not tested this on MacOS or Linux, so I don't know if it will display properly.

##### <strong>\*</strong> The Opera browser functions properly, but the UI is not displayed correctly.
