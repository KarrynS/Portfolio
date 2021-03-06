$(document).ready(function() {
    $(".animateOne").animate({left: "45%"});


    //Hover function for cardOne
    var cardOne = $("#cardOne");

    var cardOneCollapse = function() {
        cardOne.empty();
        var cardDivHeight = $("<div class='card h-100'>");
        var cardDiv = $("<div class='card-body'>"); 
        var cardTitle = $("<h5 class='card-title'>Group Project | APPetite</h5>");
        var cardhr = $("<hr class='cardhr'>");
        var cardText = $("<p class='card-text' id='cardText'>");
        cardText.text("HTML, CSS, javaSript, JQuery, API, Local Storage, AJAX");
        var cardDemoLink = $("<a class='btn' target='_blank'>");
            cardDemoLink.attr("href", "https://karryns.github.io/Project_1/");
            cardDemoLink.text("Live Demo");
        var cardGithubLink = $("<a class='btn' target='_blank'>");
            cardGithubLink.attr("href", "https://github.com/KarrynS/Project_1.git");
            cardGithubLink.text("View Source Code");
        cardDiv.append(cardTitle, cardhr, cardText, cardDemoLink, cardGithubLink);
        cardDivHeight.append(cardDiv);
        cardOne.append(cardDiv);
    }
    cardOne.mouseenter(cardOneCollapse);

    var cardOneReplace = function() {
        cardOne.empty();
        var cardDivHeight = $("<div class='card h-100'>");
        var cardImg = $("<img class='card-img-top'>");
            cardImg.attr("src", "Assets/img/SS-Project_1.png");
            cardImg.attr("alt", "Project 1 screenshot");
        var cardDiv = $("<div class='card-body'>"); 
        var cardTitle = $("<h5 class='card-title'>Group Project | Appetite</h5>");
        var cardhr = $("<hr class='cardhr'>");
        var cardText = $("<p class='card-text' id='cardText'>");
        cardText.text("APPetite is a web browser based app that connects tourists to local cuisines in the area helping to generate sales for local businesses.");
        cardDiv.append(cardTitle, cardhr, cardText);
        cardDivHeight.append(cardImg, cardDiv);
        cardOne.append(cardDivHeight);

    }
    cardOne.mouseleave(cardOneReplace);
    
    //Hover function for cardTwo
    var cardTwo = $("#cardTwo");

    var cardTwoCollapse = function() {
        cardTwo.empty();
        var cardDivHeight = $("<div class='card h-100'>");
        var cardDiv = $("<div class='card-body'>");
        var cardTitle = $("<h5 class='card-title'>Group Project | Well❤️Me</h5>");
        var cardhr = $("<hr class='cardhr'>");
        var cardText = $("<p class='card-text' id='cardText'>");
        cardText.text("Node, Express, Handlebars.js, Sequelize ORM, MySQL, Heroku, API, HTML, CSS, JavaScript, JQuery");
        var cardDemoLink = $("<a class='btn' target='_blank'>");
            cardDemoLink.attr("href", "https://wellme.herokuapp.com/");
            cardDemoLink.text("Live Demo");
        var cardGithubLink = $("<a class='btn' target='_blank'>");
            cardGithubLink.attr("href", "https://github.com/KarrynS/WellMe.git");
            cardGithubLink.text("View Source Code");
        cardDiv.append(cardTitle, cardhr, cardText, cardText, cardDemoLink, cardGithubLink);
        cardDivHeight.append(cardDiv);
        cardTwo.append(cardDiv);
    }
    cardTwo.mouseenter(cardTwoCollapse);

    var cardTwoReplace = function() {
        cardTwo.empty();
        var cardDivHeight = $("<div class='card h-100'>");
        var cardImg = $("<img class='card-img-top'>");
            cardImg.attr("src", "Assets/img/wellme.png");
            cardImg.attr("alt", "WellMe app");
        var cardDiv = $("<div class='card-body'>"); 
        var cardTitle = $("<h5 class='card-title'>Group Project | Well❤️Me</h5>");
        var cardhr = $("<hr class='cardhr'>");
        var cardText = $("<p class='card-text' id='cardText'>");
        cardText.text("A full stack application that allows users to track their wellness journey and reach their fitness goals faster");
        cardDiv.append(cardTitle, cardhr, cardText);
        cardDivHeight.append(cardImg, cardDiv)
        cardTwo.append(cardDivHeight);
    }
    cardTwo.mouseleave(cardTwoReplace);

    

    //Hover function for cardThree
    var cardThree = $("#cardThree");

    var cardThreeCollapse = function() {
        cardThree.empty();
        var cardDivHeight = $("<div class='card h-100'>");
        var cardDiv = $("<div class='card-body'>");
        var cardTitle = $("<h5 class='card-title'>Random Password Generator</h5>");
        var cardhr = $("<hr class='cardhr'>");
        var cardText = $("<p class='card-text' id='cardText'>");
        cardText.text("HTML, CSS, javaSript");
        var cardDemoLink = $("<a class='btn' target='_blank'>");
            cardDemoLink.attr("href", "https://karryns.github.io/Password-Generator/");
            cardDemoLink.text("Live Demo");
        var cardGithubLink = $("<a class='btn' target='_blank'>");
            cardGithubLink.attr("href", "https://github.com/KarrynS/Password-Generator.git");
            cardGithubLink.text("View Source Code");
        cardDiv.append(cardTitle, cardhr, cardText, cardText, cardDemoLink, cardGithubLink);
        cardDivHeight.append(cardDiv);
        cardThree.append(cardDiv);
    }
    cardThree.mouseenter(cardThreeCollapse);

    var cardThreeReplace = function() {
        cardThree.empty();
        var cardDivHeight = $("<div class='card h-100'>");
        var cardImg = $("<img class='card-img-top'>");
            cardImg.attr("src", "Assets/img/SS-PasswordGenerator.png");
            cardImg.attr("alt", "password generator screenshot");
        var cardDiv = $("<div class='card-body'>"); 
        var cardTitle = $("<h5 class='card-title'>Random Password Generator</h5>");
        var cardhr = $("<hr class='cardhr'>");
        var cardText = $("<p class='card-text' id='cardText'>");
        cardText.text("A browser application which generates a randomised password based on user-selected criteria. Parameters that can be included for the password are min-max length, lowercase letters, uppercase letters, numbers and special characters.");
        cardDiv.append(cardTitle, cardhr, cardText);
        cardDivHeight.append(cardImg, cardDiv)
        cardThree.append(cardDivHeight);

    }
    cardThree.mouseleave(cardThreeReplace);

    //Hover function for cardFour
    var cardFour = $("#cardFour");

    var cardFourCollapse = function() {
        cardFour.empty();
        var cardDivHeight = $("<div class='card h-100'>");
        var cardDiv = $("<div class='card-body'>");
        var cardTitle = $("<h5 class='card-title'>Code Quiz</h5>");
        var cardhr = $("<hr class='cardhr'>");
        var cardText = $("<p class='card-text' id='cardText'>");
        cardText.text("HTML, CSS, javaSript, jQuery, localStorage, web API's");
        var cardDemoLink = $("<a class='btn' target='_blank'>");
            cardDemoLink.attr("href", "https://karryns.github.io/Code-Quiz/");
            cardDemoLink.text("Live Demo");
        var cardGithubLink = $("<a class='btn' target='_blank'>");
            cardGithubLink.attr("href", "https://github.com/KarrynS/Code-Quiz.git");
            cardGithubLink.text("View Source Code");
        cardDiv.append(cardTitle, cardhr, cardText, cardText, cardDemoLink, cardGithubLink);
        cardDivHeight.append(cardDiv);
        cardFour.append(cardDiv);
    }
    cardFour.mouseenter(cardFourCollapse);

    var cardFourReplace = function() {
        cardFour.empty();
        var cardDivHeight = $("<div class='card h-100'>");
        var cardImg = $("<img class='card-img-top'>");
            cardImg.attr("src", "Assets/img/SS-CodeQuiz.png");
            cardImg.attr("alt", "Code quiz screenshot");
        var cardDiv = $("<div class='card-body'>"); 
        var cardTitle = $("<h5 class='card-title'>Random Password Generator</h5>");
        var cardhr = $("<hr class='cardhr'>");
        var cardText = $("<p class='card-text' id='cardText'>");
        cardText.text("A browser application which generates a randomised password based on user-selected criteria. Parameters that can be included for the password are min-max length, lowercase letters, uppercase letters, numbers and special characters.");
        cardDiv.append(cardTitle, cardhr, cardText);
        cardDivHeight.append(cardImg, cardDiv)
        cardFour.append(cardDivHeight);

    }
    cardFour.mouseleave(cardFourReplace);

    //Hover function for cardFive
    var cardFive = $("#cardFive");

    var cardFiveCollapse = function() {
        cardFive.empty();
        var cardDivHeight = $("<div class='card h-100'>");
        var cardDiv = $("<div class='card-body'>");
        var cardTitle = $("<h5 class='card-title'>Work Day Scheduler</h5>");
        var cardhr = $("<hr class='cardhr'>");
        var cardText = $("<p class='card-text' id='cardText'>");
        cardText.text("HTML, CSS, javaSript, jQuery, localStorage, moment.js");
        var cardDemoLink = $("<a class='btn' target='_blank'>");
            cardDemoLink.attr("href", "https://karryns.github.io/Work-Day-Scheduler/");
            cardDemoLink.text("Live Demo");
        var cardGithubLink = $("<a class='btn' target='_blank'>");
            cardGithubLink.attr("href", "https://github.com/KarrynS/Work-Day-Scheduler.git");
            cardGithubLink.text("View Source Code");
        cardDiv.append(cardTitle, cardhr, cardText, cardText, cardDemoLink, cardGithubLink);
        cardDivHeight.append(cardDiv);
        cardFive.append(cardDiv);
    }
    cardFive.mouseenter(cardFiveCollapse);

    var cardFiveReplace = function() {
        cardFive.empty();
        var cardDivHeight = $("<div class='card h-100'>");
        var cardImg = $("<img class='card-img-top'>");
            cardImg.attr("src", "Assets/img/SS-DayPlanner.png");
            cardImg.attr("alt", "Day Planner screenshot");
        var cardDiv = $("<div class='card-body'>"); 
        var cardTitle = $("<h5 class='card-title'>Work Day Scheduler</h5>");
        var cardhr = $("<hr class='cardhr'>");
        var cardText = $("<p class='card-text' id='cardText'>");
        cardText.text("A simple browser run application that allows user to save events for each hour of the work day. The app is set up to have past, present and future time blocks where events can be stored and cleared from local storage.");
        cardDiv.append(cardTitle, cardhr, cardText);
        cardDivHeight.append(cardImg, cardDiv)
        cardFive.append(cardDivHeight);

    }
    cardFive.mouseleave(cardFiveReplace);

    //Hover function for cardSix
    var cardSix = $("#cardSix");

    var cardSixCollapse = function() {
        cardSix.empty();
        var cardDivHeight = $("<div class='card h-100'>");
        var cardDiv = $("<div class='card-body'>");
        var cardTitle = $("<h5 class='card-title'>Eat-Da-Burger</h5>");
        var cardhr = $("<hr class='cardhr'>");
        var cardText = $("<p class='card-text' id='cardText'>");
        cardText.text("Node.js, mySQL, Express, Handlebars, Heroku and ORM");
        var cardDemoLink = $("<a class='btn' target='_blank'>");
            cardDemoLink.attr("href", "https://polar-spire-98874.herokuapp.com/");
            cardDemoLink.text("Live Demo");
        var cardGithubLink = $("<a class='btn' target='_blank'>");
            cardGithubLink.attr("href", "https://github.com/KarrynS/Eat-Da-Burger.git");
            cardGithubLink.text("View Source Code");
        cardDiv.append(cardTitle, cardhr, cardText, cardText, cardDemoLink, cardGithubLink);
        cardDivHeight.append(cardDiv);
        cardSix.append(cardDiv);
    }
    cardSix.mouseenter(cardSixCollapse);

    var cardSixReplace = function() {
        cardSix.empty();
        var cardDivHeight = $("<div class='card h-100'>");
        var cardImg = $("<img class='card-img-top'>");
            cardImg.attr("src", "Assets/img/SS-Eat-Da-Burger.png");
            cardImg.attr("alt", "Eat-Da-Bruger app");
        var cardDiv = $("<div class='card-body'>"); 
        var cardTitle = $("<h5 class='card-title'>Eat-Da-Burger</h5>");
        var cardhr = $("<hr class='cardhr'>");
        var cardText = $("<p class='card-text' id='cardText'>");
        cardText.text("A restaraunt app that lets users input the names of burgers they'd like to eat and devour them. This app will store every burger whether eaten or not in a database.");
        cardDiv.append(cardTitle, cardhr, cardText);
        cardDivHeight.append(cardImg, cardDiv)
        cardSix.append(cardDivHeight);
    }
    cardSix.mouseleave(cardSixReplace);

        //Hover function for cardSeven
        var cardSeven = $("#cardSeven");

        var cardSevenCollapse = function() {
            cardSeven.empty();
            var cardDivHeight = $("<div class='card h-100'>");
            var cardDiv = $("<div class='card-body'>");
            var cardTitle = $("<h5 class='card-title'>Employee Tracker</h5>");
            var cardhr = $("<hr class='cardhr'>");
            var cardText = $("<p class='card-text' id='cardText'>");
            cardText.text("Node.js, mySQL, inquirer");
            var cardDemoLink = $("<a class='btn' target='_blank'>");
                cardDemoLink.attr("href", "https://drive.google.com/file/d/1aBkEXWRnTvBFzcb40cxsyagBeSSDWhyw/view");
                cardDemoLink.text("Live Demo");
            var cardGithubLink = $("<a class='btn' target='_blank'>");
                cardGithubLink.attr("href", "https://github.com/KarrynS/Employee-Tracker.git");
                cardGithubLink.text("View Source Code");
            cardDiv.append(cardTitle, cardhr, cardText, cardText, cardDemoLink, cardGithubLink);
            cardDivHeight.append(cardDiv);
            cardSeven.append(cardDiv);
        }
        cardSeven.mouseenter(cardSevenCollapse);
    
        var cardSevenReplace = function() {
            cardSeven.empty();
            var cardDivHeight = $("<div class='card h-100'>");
            var cardImg = $("<img class='card-img-top'>");
                cardImg.attr("src", "Assets/img/Employee_Tracker_ScreenShot.png");
                cardImg.attr("alt", "Employee Tracker app");
            var cardDiv = $("<div class='card-body'>"); 
            var cardTitle = $("<h5 class='card-title'>Employee Tracker</h5>");
            var cardhr = $("<hr class='cardhr'>");
            var cardText = $("<p class='card-text' id='cardText'>");
            cardText.text("A CLI application that allows for easier management of a company's employess. Features include viewing, adding and deleting employees, departments and roles as well as updating employee roles and viewing total department salary budget.");
            cardDiv.append(cardTitle, cardhr, cardText);
            cardDivHeight.append(cardImg, cardDiv)
            cardSeven.append(cardDivHeight);
        }
        cardSeven.mouseleave(cardSevenReplace);

            //Hover function for cardEight
    var cardEight = $("#cardEight");

    var cardEightCollapse = function() {
        cardEight.empty();
        var cardDivHeight = $("<div class='card h-100'>");
        var cardDiv = $("<div class='card-body'>");
        var cardTitle = $("<h5 class='card-title'>Note Taker</h5>");
        var cardhr = $("<hr class='cardhr'>");
        var cardText = $("<p class='card-text' id='cardText'>");
        cardText.text("Express.js, Heroku, Javascript, HTML, CSS");
        var cardDemoLink = $("<a class='btn' target='_blank'>");
            cardDemoLink.attr("href", "https://secret-woodland-41524.herokuapp.com/");
            cardDemoLink.text("Live Demo");
        var cardGithubLink = $("<a class='btn' target='_blank'>");
            cardGithubLink.attr("href", "https://github.com/KarrynS/Note-Taker.git");
            cardGithubLink.text("View Source Code");
        cardDiv.append(cardTitle, cardhr, cardText, cardText, cardDemoLink, cardGithubLink);
        cardDivHeight.append(cardDiv);
        cardEight.append(cardDiv);
    }
    cardEight.mouseenter(cardEightCollapse);

    var cardEightReplace = function() {
        cardEight.empty();
        var cardDivHeight = $("<div class='card h-100'>");
        var cardImg = $("<img class='card-img-top'>");
            cardImg.attr("src", "Assets/img/SavedNotes.png");
            cardImg.attr("alt", "Note Taker app");
        var cardDiv = $("<div class='card-body'>"); 
        var cardTitle = $("<h5 class='card-title'>Note Taker</h5>");
        var cardhr = $("<hr class='cardhr'>");
        var cardText = $("<p class='card-text' id='cardText'>");
        cardText.text("An application utilising backend Express.js to allow users to write, store and delete notes.");
        cardDiv.append(cardTitle, cardhr, cardText);
        cardDivHeight.append(cardImg, cardDiv)
        cardEight.append(cardDivHeight);
    }
    cardEight.mouseleave(cardEightReplace);

    //Hover function for cardNine
    var cardNine= $("#cardNine");

    var cardNineCollapse = function() {
        cardNine.empty();
        var cardDivHeight = $("<div class='card h-100'>");
        var cardDiv = $("<div class='card-body'>");
        var cardTitle = $("<h5 class='card-title'>Weather Dashboard</h5>");
        var cardhr = $("<hr class='cardhr'>");
        var cardText = $("<p class='card-text' id='cardText'>");
        cardText.text("HTML, CSS, javaSript, JQuery, Third Party API's, Local Storage");
        var cardDemoLink = $("<a class='btn' target='_blank'>");
            cardDemoLink.attr("href", "https://karryns.github.io/Weather-Dashboard/");
            cardDemoLink.text("Live Demo");
        var cardGithubLink = $("<a class='btn' target='_blank'>");
            cardGithubLink.attr("href", "https://github.com/KarrynS/Weather-Dashboard.git");
            cardGithubLink.text("View Source Code");
        cardDiv.append(cardTitle, cardhr, cardText, cardText, cardDemoLink, cardGithubLink);
        cardDivHeight.append(cardDiv);
        cardNine.append(cardDiv);
    }
    cardNine.mouseenter(cardNineCollapse);

    var cardNineReplace = function() {
        cardNine.empty();
        var cardDivHeight = $("<div class='card h-100'>");
        var cardImg = $("<img class='card-img-top'>");
            cardImg.attr("src", "Assets/img/SS-WeatherDashboard.png");
            cardImg.attr("alt", "weather dashboard screenshot");
        var cardDiv = $("<div class='card-body'>"); 
        var cardTitle = $("<h5 class='card-title'>Weather Dashboard</h5>");
        var cardhr = $("<hr class='cardhr'>");
        var cardText = $("<p class='card-text' id='cardText'>");
        cardText.text("A weather dashboard built for travellers allowing them to see the weather outlook for cities around the world to help them plan their trip.");
        cardDiv.append(cardTitle, cardhr, cardText);
        cardDivHeight.append(cardImg, cardDiv)
        cardNine.append(cardDivHeight);

    }
    cardNine.mouseleave(cardNineReplace);
});