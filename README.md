# Tech Crunch Munch
## Git Your Sh*t Out There 
(aka an introduction to Continuous Integration / Continuous Deployment)

Topics Covered:

<ol>
<li>Step 1 - Perform/Install Prerequisites [to be done before the session!]
    <ol>
        <li>Create free Heroku account (http://heroku.com)</li>
        <li>Create free CodeShip account (http://codeship.io) using your Github ID</li>
        <li>Install NodeJS (http://nodejs.org)</li>
        <li>Clone the Github Repo: https://github.com/icfi-tech-crunch-munch/get_your_stuff_out_there.git</li>
        <li>Create a site similar to what you had done for the last session to run the site locally (optional but highly recommended).<b>Do not expect the site to load.  We'll cover this during the session.</b></li>
    </ol>
</li>
<li>Step 2 - BRIEF Introduction to Karma and Chai</li>
<li>Step 3 - Configure Local Environment</li>
<li>Step 4 - Creation of a Unit Test using ngMock</li>
<li>Step 5 - Configuring the CI/CD environment</li>
<li>Step 6 - Deploying the code</li>
<li>Step 7 - Discussion</li>
</ol>

### Create an empty local website

You can create and IIS/Apache/Node...etc application root, or just reuse one that you already have. The code needs to be run within a context of an application so the JavaScript permissions behave.

For this particular session, we'll be working with your command prompt more so than your IDE.

### Clone this entire repo, and copy the files to the root of that application.

Open the root of the application in a code editor such as Sublime Text or Visual Studio.

### CodeShip Test Settings
SETUP
nvm install 0.12.4
nvm use 0.12.4


TEST
npm install mocha -g
npm install karma-cli -g
karma start
