# Card Games

![AmIResponsive Image](/assets/doc-media/doc-responsive.png)

## Intro

The purpose of this project is to create a website where the user can play the card game 'match'.
The goal of this website was to create it using HTML, CSS and JS.
Below I have outlined different design choices, features of the pages
and what things were used to create this website.

[Link to live website](https://kevinoh45tud.github.io/pp2_card_games/)

## Table of Contents

1. UX
   - User Stories
   - Site Owner Goals
   - Wireframes
   - Flow-Chart
   - Color Palette
   - Icons
   - Imagery
2. Features
   - Home
   - Header
   - Footer
   - Game
   - Info
   - Scoreboard
   - Restart / Quit
   - End game
   - Future Features
3. Technologies Used
   - Languages
   - Code
   - Testing
   - Font / Icons
   - Media
4. Testing
   - Validator
   - Lighthouse
   - Wave webaim - Accessibility testing
   - Manual Testing
5. Deployment
6. Credits
   - Code Institute
   - Media
   - Other

## UX

### User Stories

Here I have outlined some user stories of things the user might want from this website.

- As a user, I want to learn about the card game match.
- As a user, I want to play the card game match.
- As a user, I want to restart the game midway.
- As a user, I want to quit the game midway.
- As a user, I want to start a new game when I win.
- As a user, I wantto quit to the home screen when I win.
- As a user, I want to see my score as I'm playing.
- As a user, I want to see previous scores.

### Site Owner Goals

Like with the above section here I have outlined some requirements the site owner might have.

- Attract new users to my site.
- Teach users information about the game.
- Let users play the game.
- Ask users their name and validate it to avoid issues.
- Provide users with functional buttons to help navigate the website.
- Provide users with the ability to restart/quit the game.
- Store and display values relating to user's previous matches.

### Wireframes

I created my wireframes using [Balsamiq](https://balsamiq.com)

My initial concept was multiple pages and more focus on other card games.

![Home page wireframe](/assets/doc-media/wireframe-index.png)

- [Game page wireframe](/assets/doc-media/wireframe-game.png)
- [Info page wireframe](/assets/doc-media/wireframe-info.png)

From wireframe stage to final website the general layout of both the home and game page stayed the same.
The colors of the final website are generally quite similar to that of the wireframe.

The info page concept was removed, instead the information being shortened and put into a modal.
The final website focused more on features and modals.

### Flow Chart

I created a flow chart to show the general idea of how the user will navigate the website.
I used a website called 'Visual Paradigm'.

![Screenshot of flowchart](/assets/doc-media/doc-flowchart.png)

[Link to Visual Paradigm](https://online.visual-paradigm.com/diagrams/features/flowchart-tool/)

### Color Palette

My color palette features 5 main colors: White, Red, Gold, Green,and Black.

![Picture of color palette](/assets/doc-media/doc-palette.png)

I used the website called Coolors to create the above image showing the color palette with its hex values.

[Coolors](https://coolors.co/ffffff-920616-c8ac5f-275b32-000000)

I sourced my color palette from a website called 'SchemeColor'.

[SchemeColor](https://www.schemecolor.com/fine-jewellery.php)

Once I was happy with this color palette I used the website EightShapes to check the contrast between colors,
this helped me determine which color to use for text based on its background.

![Picture of EightShapes contrast](/assets/doc-media/doc-contrast.png)

[Link to EightShapes](https://contrast-grid.eightshapes.com/?version=1.1.0&background-colors=&foreground-colors=%23FFFFFF%0D%0A%23920616%0D%0A%23C8AC5F%0D%0A%23275B32%0D%0A%23000000&es-color-form__tile-size=compact&es-color-form__show-contrast=aaa&es-color-form__show-contrast=aa&es-color-form__show-contrast=aa18&es-color-form__show-contrast=dnp)

### Icons

I used [FontAwesome](https://fontawesome.com) to implement icons into the website.

There are six icons featured on this website:

1. Play Icon, to start the game.
2. Info Icon, to open the modal with information about the game.
3. Close/X Icon, to close the info modal.
4. Facebook Icon, opens facebook page on new tab.
5. Twitter Icon, opens twitter page on new tab.
6. Youtube Icon, opens youtube page on new tab.

I felt that these icons were both fitting for this website as they maintain an infomative and simplistic style.
While also being neccessary to emulate linking to potential social media pages.

The image used for my favicon was created by myself using FireAlpaca.

![Picture of favicon](/assets/images/heart-favicon.ico)

I chose to create a simple icon matching the heart icon found in the header of the website.

### Imagery

All the imagery found on my website that isn't FontAwesome was created by myself using FireAlpaca.

I chose to create icons that matched what I added in my wireframe for the header icons.
The red for the header icons is the 'Carmine' shade found in the main color palette.

![Picture of header icons](/assets/doc-media/pp2-docs-header.png)

The face of the cards feature either red or black coloring with a grey background.
I styled the art in a way so that the number and suit would remain large and clear for easier readability on smaller screen sizes.

![Picture of Card](/assets/images/card-art/spade3.png)

When creating the back of the cards I choose to give it the red 'Carmine' shade like with the icons.
Along with this white lines to create a diamond pattern, this would emulate a common card back found on actual cards.

![Picture of Card Back](/assets/images/card-art/card-back.png)

While creating all the imagery for this website I wanted keep in line with the color palette I choose, avoid contrast issues and make sure things remained readable while on smaller screen sizes.

[Back to top](#card-games)

## Features

### Home

The home screen is where the user will first arrive. It features text welcoming the user and two buttons: play and info.

![Picture of home screen](/assets/doc-media/pp2-docs-home.png)

Clicking the play button will ask the user for their name before starting the game.

![Picture of name modal](/assets/doc-media/pp2-docs-name.png)

Clicking the info button will show the user more information about 'match'.

Both of the buttons use the green/red shades from the color palette, while the background is gold.

### Header

The header of the page features both the title and icons of the page.

![Picture of header](/assets/doc-media/pp2-docs-header.png)

### Footer

The footer features 3 icons, each representing a link to a different social media.

![Picture of footer](/assets/doc-media/pp2-docs-footer.png)

### Game

The game screen features a 4 x 4 grid of images representing the cards.
When users click cards they will change image, based on what card value they are set to.
When a match is made the matched cards will be hidden by setting their z-index.

![Picture of game screen](/assets/doc-media/pp2-docs-game.png)

The top of the game screen features two buttons, Restart and Quit. Also featured is the players name and score.

![Picture of top of game sceen](/assets/doc-media/pp2-docs-above.png)

At the bottom of the game screen there are two other buttons, Info and Highscore

![Picture of bottom of game screen](/assets/doc-media/pp2-docs-below.png)

### Info

Regardless of where the info modal is opened from (on the home/game screen) the user will be show the same information.

![Picture of info modal](/assets/doc-media/pp2-docs-info.png)

The user may click either the 'X' or anywhere outside the modal to close it.

### Scoreboard

The scoreboard modal will show users details about previous succesful games.

![Picture of scoreboard](/assets/doc-media/pp2-docs-table.png)

If the user has no previous scores recorded a different modal will show to advise them this.

![Picture of no scores](/assets/doc-media/pp2-docs-nohighscore.png)

### Restart / Quit

At any point during a game of match the user may either restart or quit the game.
Both modals look similar for these two actions.

![Picture of quit](/assets/doc-media/pp2-docs-quit.png)
![Picture of restart](/assets/doc-media/pp2-docs-restart.png)

To close either of these modals the user must confirm an option.

### End Game

Once the user successfully finishes a game of match they will be presented an end screen congratulating them and showing them their score.

![Picture of endscreen](/assets/doc-media/pp2-docs-end.png)

They will have the option to restart or quit the game at this point.

### Future Features

There are many more features that could potentially be added to this website in the future. The two main ones I would focus on however are as follows:

1. Second player support:
   - I believe it would be a great feature to allow the player the option to select whether they want to play solo or with a friend.
     This would require an additional varible and an extra input in the name form modal.
2. Other Games:
   - I believe adding additional games would not be too difficult. It would require additional card art. An example could be 'Blackjack' another single player game.

Both of these future features may draw additional users to the site, which benefits the site owner.
They would also provide more enjoyment, which benefits the user.

[Back to top](#card-games)

## Technologies Used

### Languages

- This website was created using HTML, CSS and JavaScript languages.

- W3schools was used to reference the documentation for HTML, CSS and JavaScript [W3schools](https://www.w3schools.com)

### Code

- Github was used to both manage my repository and host my website using the pages functionality [Github](https://github.com)

- Codeanywhere was used as a cloud-based IDE [Codeanywhere](https://app.codeanywhere.com/)

### Testing

- CSS validator [CSS Validator](https://jigsaw.w3.org/css-validator/)
- HTML validator [HTML Validator](https://validator.w3.org)
- WAVE Accessibility [WAVE](https://wave.webaim.org)
- JSHint [JSHint](https://jshint.com)

### Icons

- Font Awesome was used for the icons featured on this website [Font Awesome](https://fontawesome.com)

- Faviconer was used to create an ICO file for the favicon icon [Faviconer](http://faviconer.com)

- FireAlpaca software was used to create the art for the favicon icons and card art [FireAlpaca](https://firealpaca.com)

### Color Palette

- Coolors was used to display an image of final color palette [Coolors](https://coolors.co)

- EightShapes Contrast Grid was used to test contrast of color palette [EightShapes](https://contrast-grid.eightshapes.com)

### Media

- Website used for initial image of this README [AmIResponsive](https://ui.dev/amiresponsive)

[Back to top](#card-games)

## Testing

Below I have provided both screenshots and links to various testing for this website. In addition manual testing results are provided at the end.
No majors issues are present on the website.

### Validator

#### W3C CSS

Screenshot of CSS validator results:

![Picture of CSS validator results](/assets/doc-media/doc-validator-css.png)

[Link to CSS validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fkevinoh45tud.github.io%2Fpp2_card_games%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)

No errors were present when testing the CSS validator.

#### HTML Validator

Screenshot of HTML validator results:

![Picture of HTML validator results](/assets/doc-media/doc-validator-html.png)

[Link to HTML validator results](https://validator.w3.org/nu/?doc=https%3A%2F%2Fkevinoh45tud.github.io%2Fpp2_card_games%2F)

No issues were present with the HTML validation.

Additional screenshot for when HTML changes:

![Picture of second HTML results](/assets/doc-media/doc-validator-html2.png)

I also tested the game screens HTML by viewing 'page source' and pasting the HTML into the validators 'text input' option.

#### JSHint

Screenshot of JSHint results:

![Picture of JSHint result](/assets/doc-media/doc-validator-js.png)

No issues/errors were present when testing the JS code.
The configure setting was set to 'Assume: New JavaScript extensions', as it presented warnings in relation to 'let' and 'const'.

#### Lighthouse

The lighthouse tests were done using Opera developer tools.

Screenshot of Lighthouse results for desktop:

![Lighthouse for desktop](/assets/doc-media/doc-lighthouse-desktop.png)

Screenshot of Lighthouse results for mobile:

![Lighthouse for mobile](/assets/doc-media/doc-lighthouse-mobile.png)

Both lighthouse tests returned very high results.

### Wave webaim - Accessibility testing

Screenshot of Wave Webaim results:

![Wave results screenshot](/assets/doc-media/doc-wave-accessibility.png)

[Link to Wave results](https://wave.webaim.org/report#/https://kevinoh45tud.github.io/pp2_card_games/)

No issues/errors were present when testing on Wave.

### Manual Testing

The website was tested on various devices using a different browser for each device.

- Windows Computer : Opera
- Huawei Tablet : Microsoft Edge
- Pixel 6 : Google Chrome

| Feature being tested                                        | Expected Outcome                               | Testing Performed                | Result |
| ----------------------------------------------------------- | ---------------------------------------------- | -------------------------------- | ------ |
| Home Screen: Pressing Info Button                           | Open Info Modal                                | Press info button                | Pass   |
| Home Screen: Pressing Any Social Media Icon                 | Open respective website in new tab             | Press each icon on footer        | Pass   |
| Home Screen: Pressing On Play Button                        | Open name modal                                | Press play button                | Pass   |
| Name Modal: Enter Invalid Name                              | Show text explaining issue                     | Enter invalid name, press button | Pass   |
| Name Modal: Press Submit With Valid Name                    | Close modal, start game                        | Enter valid name, press button   | Pass   |
| Game Screen: Press Any Card                                 | Flip card clicked                              | Flip a card                      | Pass   |
| Game Screen: Press Any Second Card                          | Flip second card, compare cards                | Flip a second card               | Pass   |
| Game Screen: No Match                                       | Flip both cards over                           | Don't match                      | Pass   |
| Game Screen: Match                                          | Hide cards from game                           | Match Two Cards                  | Pass   |
| Game Screen: Press Any Option (Restart,Quit,Info,Highscore) | Open respective modal                          | Press each button on game screen | Pass   |
| Game Screen: Win Game                                       | Open end game modal                            | Win Game                         | Pass   |
| Restart Modal: Confirm                                      | Clear current game card/score, spawn new cards | Press confirm on restart modal   | Pass   |
| Quit Modal: Confirm                                         | Set main content to home screen html           | Press confirm on quit modal      | Pass   |
| Quit/Restart Modal: Deny                                    | Close respective modal                         | Press deny for both restart/quit | Pass   |
| Info Modal: Press 'X'                                       | Close info modal                               | Press 'X' on info modal          | Pass   |
| Any Modal: Press Anywhere Other Than Modal                  | Close respective modal                         | Do action with each modal open   | Pass   |

Each feature was manually tested on each device mentioned above.

No issues were encountered when manually testing website.

[Back to top](#card-games)

## Deployment

My website was deployed using 'Github Pages'.

Steps taken to achieve this:

1. Go to repository page
2. Click 'Settings'
3. Click 'Pages'
4. Select 'main' branch to deploy from

[Back to top](#card-games)

## Credits

- A special thanks to my mentor Matt Boden for his assistance throughtout the project! [MattBCoding](https://github.com/MattBCoding)

### Code Institute

- Code Institute template used for repository [Template](https://github.com/Code-Institute-Org/ci-full-template)

- Code Institute learning modules used to learn different aspects of JavaScript [Code Institute](https://codeinstitute.net/ie/)

### Other

- An article on GitHub was used to help with creating this README doc [Article](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)

[Back to top](#card-games)
