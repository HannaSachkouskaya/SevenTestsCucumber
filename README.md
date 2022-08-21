Discription

SevenTests is based on the cucumber framework.
SevenTests should:
1.	Log in home page 
2.	In Element’s module add scenarios for Text Box and Buttons
3.	In Forms module fill out the form and submit
4.	In Alerts, Frame & Windows module browser Windows and Modal Dialogs
5.	In Widget’s module verify Tabs and Menu
6.	In Interaction’s module move elements One and Two around in List Tab and move elements Seven and Eight around in Grid Tab
7.	In Book Store Application module choose check that ISBN matches pattern using Regular Expressions


Precondition

Node.js and Visual Studio Code should be installed

Create a folder in directory in your file system

Open the folder in Visual Studio Code

Open the terminal and run ‘npm init -y’ command

Run ‘npm install chromedriver’

Run ‘npm install cucumber’

Run ‘npm init wdio .’ and set all values - set framework=cucumber and other = default

Run ‘npm install chai’

Set a path to execute tests in package.json file to "scripts": { "test": "wdio wdio.conf.js", "wdio": "wdio run wdio.conf.js" },

To runing test use command ‘npm test’ in terminal