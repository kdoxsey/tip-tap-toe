#tip-tap-toe#

-This application is an interactive Tic Tac Toe game. It allows users to create a tip-tap-toe account where they can play the game and store the number of times that they've played.

Technologies used:
HTML
CSS/SASS
Javscript
Bootstrap
JQuery
Ajax

Application Issues:
-Line 68 of /assets/scripts/game/events.js creates an error in the console but the game still functions as needed.
-The code is not dry which may make future edits difficult.

Planning and Development:
-The game begins with the HTML and CSS. The nine boxes are defined in HTML and then given their dimensions in CSS using Bootsrap. In order for a win to be recorded and for the game to function in general, it was necessary to break the obstacles into the smallest steps possible. To get the win donition using this modular approach, the boxes are put inside of an array and given an index position. A win is determined with an if statement which logs all of the possible horizontal, vertical and diagonal wins using the index positions. In order for a tie to be recorded, I included a move counter that increments by one after each box click. When the counter reaches nine and there is yet to be a winner, the game results in a tie.
-The game uses an API to handle the authorization (sign up, sign in, sign out, change password) and the requests necessary for the game to function (create new game, update game state, show games). 

User Stories:
-As a new user I want to be able to create an account using an email address, password and password confirmation so that I can access all of the content within tip-tap-toe.
-As a registered user I want to start a new game so that I can start playing tip-tap-toe
-As a user in a new game, I want to start first as X and be able to click on any box in the game.
-As a user in the middle of a game, I want to respond to X with an 0 an any available box in the game, and then keep switching between X and 0 until the game results in a win. A win is achieved whenever either X or 0 creates a string of three in a row, column or diagonal.
-As a user in the middle of the game, I want each box click to be recorded with which box is being clicked and which letter is being placed in the box so that a win or a tie can be determined.
-As a user at the end of a game I want to be unable to click on any other boxes because the game is over.
-As a user at the end of a game I want to be able to start a new game when the current game is over.
-As an anxious user I want a soothing color scheme so that I can enjoy playing the game for extended periods of time.
-As a user I want to sign out when I am done playing the game so that I can do other things.
-As a user I want to be able to change my password when I feel my information has been compromised.

WIREFRAMES
Gameboard: https://imgur.com/9kPvhFw
Main Homepage: https://imgur.com/U1zTwNs
User Homespage: https://imgur.com/rBiLmgL
