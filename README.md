# Vaccine Survey App
Spring'22 Bilkent University CS458: Software Verification and Validation Project 2

**Project Members:**
  - Ahmet Ayberk Yılmaz - 21702250
  - Ege Şahin - 21702300
  - Yiğit Erkal - 21601521
  - Gökberk Boz - 21602558


# Setup
- Download the project and open a terminal. 
- Run command "yarn install" on your terminal at the project folder.
- Run command "expo doctor --fix-dependencies" on the terminal at the project folder.

- After that open android stduio and run an emulator.
- After emulator opens, run "expo start" command on terminal.
- When terminal asks for an input press "a" for android. The survey app will be opened on your emulator.

- In order to run the test, download appium and adjust necessary settings such as ANDROID_HOME and JAVA_HOME.
- After the installation and adjustments are completed open and run the appium server via either desktop app or from terminal.
- Open a new terminal and come the project folder.
- Run command "yarn add -D webdriverio jest jasmine" on your new terminal at the project folder.
- After the above processes are completed. Run command "yarn jest" on the new terminal and the test will be runned and result will be returned.

# Description
- This app have three different screens and they are in the screens folder.
- The appium folder has one file with name "TestAppium.test.js". All test cases in this file.
- There is a test function in this file and test cases are in it.
- All test cases are commented.
- All test cases are labeled.
- To run any test case just remove the comment from it and run command "yarn jest".
- Before running any test case be sure that the app is on home screen.
- All other folders and files are created by the expo.

