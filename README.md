# Interactive Learning – The 8 Wastes

 Link to the wesite [here](https://stuchapman.github.io/IFD-MS-Online-Learning-8-Wastes/)

Create a web application that can be launched from the Continuous Engagement Ltd website; that allows the user to learn, and consolidate their learning through an interactive test, a topic that is fundamental to: Lean, 6 Sigma and Operational Excellence – namely, The 8 Wastes.
The branding is to match the Continuous Engagement ltd. website.
There should be a learning section, followed by a test. 
The site will be used to support engagements that Continuous Engagement makes with companies; by allowing an element of self-learning to support on-site training and coaching.
The app could also be licensed to users as a standalone product.

## UX

The app should be designed ‘mobile first’, and should be equally as accessible through desktop and laptop devices.

User Stories have been grouped into 2: Director of Continuous Engagement (site owner) and Clients (user)


### User Stories 

have been grouped into 2: Director of Continuous Engagement (site owner) and Clients/Recruiters (user)

### As the Director of Continuous Engagement, I …

1.	… want to create an online learning experience for my clients.
2.	… want the experience to be interactive as well as informative.
3.	… want the application to look professional.
4.	… want the information contained to be industry standard.
5.	… want the user to be able to intuitively complete the learning and the test, with as little prompting as possible.
6.	… want the user to be guided through the material via guided navigation devices.
7.	… want the progress for the user to be stored locally so that if there was issue with their device (accidental refresh/loss of power etc) they could pick up where they left off.
8.	… want the user to be able to ask questions via an email client, understanding that responses are not intended to be instant.
9.	… want there to be pass and fail criteria and the user to be informed via an online “certificate” of their result (preference is a printable .pdf format).
10.	… want to use this site as a means to link my consultancy work with my programming work – ultimately adding Agile and Web Development to the showcase.

### As the Client/Recruiter, I …

1.	… want to learn some of the basics of Operational Excellence.
2.	… want to know that what I am being taught is industry standard.
3.	… want to be able to roll the learning out to a large number of people.
4.	… want the learning to be fun.
5.	… want the learning to be interactive.
6.	… want the learning to be intuitive.
7.	… want the learning to contain a variety of visuals.
8.	… want the test to be challenging, yet achievable.
9.	… want to be able to move through the learning material at my own pace.
10.	… want to be able to return to a previous section of the material to re-confirm my learning.
11.	… want the material tested to be covered within the learning material – I don’t want to have to leave the app to find the answers.
12.	… want to know if I have passed or failed the test.
13.	… want to be able to resit the test if I have failed.

I designed the site around 2 sections:

**Interactive Learning** - for the user to gain the knowledge in an engaging experience.

This section comprises of:
* index.html - to intruduce the user to the 2 main concept (Value and Waste) and inform them of the test and pass mark.
* background.html - to inform the user of the origins of the terms Value and Waste.
* looking.html - a video of Mark Onetto ex of Amazon to bring the concept of Waste to life.
* definition.html - simple definitions of Value and Waste.
* value.html - 5 examples of Value.
* waste.html - 5 Examples of Waste.
* nonvalueadd.html - an additional concept that is neither Value nor Waste, but is relevant.
* eightwastes.html - The eight wastes, as described by Ohno and examples of each.

**Online Interactive Test** - for the user to consolidate their knowledge against a standard.

This section comprises of:
* test-intro.html - to launch the test and remind the user of the pass mark.
* question-one.html - a multi-choice question on the georgaphical origins of Waste and Value.
* question-two.html - a multi-choice question on the Japanese term for Waste.
* question-three.html - an interactive puzzle referring to the Marc Onetto video.
* question-four.html - a multi-option question on non value add.
* question-five.html - 
* question-six.html
* question-seven.html
* question-eight.html - a question where the user needs to deduce the acronym for the 8 Wastes.
* question-nine.html - an interactive puzzle for the user to move actions to boxes of: Value and Waste. 
* question-ten.html
* question-one.html
* test-summary.html

### Mockups:

As is now standard workflow for me; I produced detailed mockups for: phones, tablets and desktop devices prior to writing any code. Key design decisions are made at this stage to ensure the creation of code meets these designs, rather than designing the app at the same time as coding it.
(links to .pdfs to be included)
I used [figma](www.figma.com) to produce the mockups. 

[mockups](https://github.com/StuChapman/IFD-MS-Project-Online-Learning/blob/c8de4fce678a7d8c81fdf9835ea7480c7e69f37c/mockups)


### Colour Schemes and Fonts

I used the same branding as the Continuous Engagement Ltd. website [website](https://stuchapman.github.io/UCD-MS-Project-Continuous-Engagement/index.html).

The colours I used (by 'eyedropping' the image in PowerPoint to get the hex code) were:

1. #657486 for the navbar
2. #000000 for small sized text
3. #101828 for medium sized text and the footer
4. #CC613A for large text, banners and infographic backgrounds
5. #ffffff for banner text and infographic line/text
6. #D9D9D9 and #F0F0F0 for the photolink section (these were 'eyedropped' from the background image)

I used these colours exclusively to keep the 'brand' appearance across all pages.

The font I used exclusively is Cairo from Google fonts. I also used this for the 'brand image'.

### Approach

The approach I took for designing the site, was to start with the small media device, portrait view, design that, then make any adaptations
for a tablet, portrait view, and finally any changes for a large size, landscape view. I did this in the mockups first, then as I built the app.
I constructed the code in the mobile-first, portrait view, then added media queries purely for large size, landscape view.
I didn't want to have a multuitude of media queries for different sizes, I preferred to have a completely responsive approach.
For that, I set font sizes to be responsive, utilising some code from [css-tricks](https://css-tricks.com/books/fundamental-css-tactics/scale-typography-screen-size/) 
and [made by Mike](https://www.madebymike.com.au/writing/fluid-type-calc-examples/)

font-size: calc([minimum size] + ([maximum size] - [minimum size]) * ((100vw - [minimum viewport width]) / ([maximum viewport width] - [minimum viewport width])));

This code, along with using vw and vh for font sizes and certain features, such as banners and images, allowed the site to be almost fully responsive across different portrait view sizes.

I also discovered, through a Stack Overflow [discussion](https://stackoverflow.com/questions/43589507/how-can-you-have-bootstrap-responsiveness-based-on-screen-ratio-instead-of-scree),
the concepts of:
* @media screen and (orientation: portrait), and
* @media screen and (orientation: landscape)
This proved invaluable when designing the mobile device view in landscape mode (particulary eightwastes.html and question-nine.html), as the width of these devices is to small for a Bootstrap convention (md, lg, xl) or a Media Width specification.

## Features

### Existing Features

#### Standard Features

The standard features that are available on every page are:

1.	A Navigation bar, that is standard across all pages. It is made up of 3 sections:
    * A “brand image” that allows the user to hyperlink to the Continuous Engagement home page from any page, in all media device sizes.
        I created a Bootstrap Modal to "catch" the user if the try to navigate away from the application; to confirm if this is intentional. 
    * A "help" button to allow the user to send questions to the Continuous Engagment email inbox, via the [emailjs](https://www.emailjs.com/) API. This uses a Bootstrap Modal containing a form to collect information on:
        * The sender's name
        * The sender's email address
        * The question to be answered.
        * The current page title to allow Continuous Engagement Ltd to understand where the user was in the learning at the time the question arose.
    * A banner underneath the Navigation bar to remind the user they are in the "Continuous Engagement Ltd – online learning" application.

2.	I excluded a background image to keep the application clean and allow focus on the text.
3.	A large font header for each page that succinctly gets across to the user the purpose of each page.
4.	Supporting, smaller font text to give information to the user.
6.	A footer which contains the "prev", "next" and "submit" anchors where appropriate.
    * The "prev" anchor only occurs in the Interactive Learning section. It is not intended for the user to be able to go back and review questions in the test.
    * The "next" anchor only occurs in the Interactive Learning section (it is replaced by "submit" in the Test section). The "next" button is only visible once all of the interactive elements have been completed.
    * The "submit" anchor only occurs in the Test section. The "submit" anchor is only visible once the question has been answered (note: in multi-option questions, the "submit" button becomes visible after one option has been selected, but the correct answer may require more than one option).

#### Page-Specific Features

The features that are specific to individual pages are:

**index.html** 
1. A "Click to Begin" button to begin the Interactive Learning Section.

**looking.html** 
1. A video, liked via the [youTube](https://www.youtube.com/watch?v=5M0aUOudbx0) API of Marc Onetto [bio](https://www.marketscreener.com/business-leaders/Marc-Onetto-004R6M-E/biography/) (ex Amazon) talking about Waste in the publishing industry.
2. A bespoke "play/pause" video.
3. The "next" anchor is not visible until the video has played in full.

**definition.html** 
1. A div; containing a definition of Value, that is visible once the user taps on the word "Value".
2. A div; containing a definition of Waste, that is visible once the user taps on the word "Waste".
3. The "next" anchor is not visible until the both definitions have been revealed.

**value.html** 
1. 5 different examples of Value, each with an image, navigated by means of "<" and ">".
2. The "<" chevron is not visible on the 1st image (start).
3. The ">" chevron is not visible on the 5th image (end).
4. The "next" anchor is not visible until all 5 definitions have been veiwed.

**waste.html** 
1. 5 different examples of Waste, each with an image, navigated by means of "<" and ">".
2. The "<" chevron ton is not visible on the 1st image (start).
3. The ">" chevron is not visible on the 5th image (end).
4. The "next" anchor is not visible until all 5 definitions have been veiwed.

**nonvalueadd.html** 
1. 2 descriptions of Non Value Add, navigated by means of up and down chevrons.
2. The "up" chevron is not visible on the 1st definition (start).
3. The "down" chevron is not visible on the 2nd definition (end).
4. The "next" anchor is not visible until both definitions have been veiwed.

**eightwastes.html** 
1. The 8 Wastes, with an image and title.
2. A suplimentary div that is reavealed on the tapping of each image.
3. The div is adaptive; in that the text and image vary according to which image has been tapped.
4. Once tapped, the image will reduce opacity to allow the user to see which images remain (the opaque images can still be reviewed).
5. The "next" anchor is not visible until all images have been tapped.

**test-intro.html** 
1. A "Click to Begin" button to begin the Interactive Test Section.
2. A "secret" feature to be used by the site admin during application testing; where the test scores can be reset by clicking on the banner below the Navigation Bar.

**question-one.html** 
1. 4 Radio buttons, one of which is the correct answer.
2. The "submit" anchor is not visible until a radio button has been selected (the user can change their selection prior to tapping the "submit" anchor).
3. There is a variable called 'answerFlagOne' that is written to the local browser storage on tapping the "submit" anchor
    - 0 indicates incomplete (default).
    - 1 indicates a correct answer.
    - -1 indicates an incorrect answer.

    This variable will be used on completion of the test (with the other 9) to establish the test score.
    
    The 'answerFlagOne' variable is also used to check if this question has already been answered (say, for example, the user uses the 'back' or 'forward' browser navigation). If the value is not 0, an alert will appear informing the user the question has already been completed, and they will be navigated to the next question.

**question-two.html** 
1. An interactive puzzle where the user selects letters from a selection to populate 4 blank spaces, thus creating the answer 'MUDA'.
    The inspiration for this game is a game called 'Pictoword' available in the Apple App Store.
2. Once a letter has been selected, it is 'gray-ed' out and is no longer available for selection.
3. There is a 'reset' button to clear the restore the page to its original state if the user decided they want to change thier response (prior to tapping "submit").
4. The "submit" anchor is not visible until all images letter spaces have been populated.
5. There is a variable called 'answerFlagTwo' that is written to the local browser storage on tapping the "submit" anchor, and is used in the same way as 'answerFlagOne'.

**question-three.html** 
1. 4 Radio buttons, one of which is the correct answer.
2. The "submit" anchor is not visible until a radio button has been selected (the user can change their selection prior to tapping the "submit" anchor).
3. There is a variable called 'answerFlagThree' that is written to the local browser storage on tapping the "submit" anchor, and is used in the same way as 'answerFlagOne'.

**question-four.html** 
1. 4 check boxes, two of which are the correct answer.
2. The "submit" anchor is not visible until ONE check box has been selected (the user can change their selection prior to tapping the "submit" anchor).
3. There is a variable called 'answerFlagFour' that is written to the local browser storage on tapping the "submit" anchor, and is used in the same way as 'answerFlagOne'.

**question-eight.html** 
1. 4 Radio buttons, one of which is the correct answer.
2. The "submit" anchor is not visible until a radio button has been selected (the user can change their selection prior to tapping the "submit" anchor).
3. There is a variable called 'answerFlagEight' that is written to the local browser storage on tapping the "submit" anchor, and is used in the same way as 'answerFlagOne'.

**question-nine.html** 
1. An interactive puzzle where the user selects drags cards from the center of the screen and drops them, either in: Value or Waste boxes.
    The code for drag and drop on a desktop device is from [w3schools](https://www.w3schools.com/), specifically [drag and drop](https://www.w3schools.com/HTML/html5_draganddrop.asp)
    The code for drag and drop on a touch screen device is by [Bernardo Castilho](https://www.codeproject.com/script/Membership/View.aspx?mid=337492), specifically [DragDropTouch](https://www.codeproject.com/Articles/1091766/Add-support-for-standard-HTML-Drag-and-Drop-operat).
    Full credit to Bernardo - I have used his code complete in a seperate javascript file [DragDropTouch.js](https://github.com/StuChapman/IFD-MS-Project-Online-Learning/blob/c8de4fce678a7d8c81fdf9835ea7480c7e69f37c/assets/js/DragDropTouch.js).
2. Once a box has had a card dropped into it, it is not longer enabled (te prevent more than one card being dropped in the same box).
3. The user can change the location of cards as many times as they like before tapping the "submit" anchor.
4. The "submit" anchor is not visible until all 5 cards have been dropped into boxes.
5. There is a variable called 'answerFlagNine' that is written to the local browser storage on tapping the "submit" anchor, and is used in the same way as 'answerFlagOne'.


### Features Left to Implement

1.	Completing the “contact us” form functionality to enable the user to submit specific information about business need.
2.	Interactive learning that brings the methods further to life for the user (multi choice quiz etc.)
3.  The ability to link from the photolinks or infographics on index.html directly to the expanded section on the services.html and methods.html pages respectively (I believe this will utilise JavaScript).

## Technologies Used

1.	[html](https://en.wikipedia.org/wiki/HTML) - to create the structure and text of each page.
2.	[css](https://en.wikipedia.org/wiki/Cascading_Style_Sheets) - to style each page centrally and individually.
3.  [javascript](https://en.wikipedia.org/wiki/JavaScript) - to add interactivity to the application.
4.  [jquery](https://jquery.com/) - to add interactivity to the application.
3.	[Bootstrap](https://getbootstrap.com/) plugins - Responsive grid and prebuilt components to enable more responsive design; particularly “accordion” and “toggle” collapsed (hidden) content.
4.	[Font Awesome](https://fontawesome.com/v4.7.0/icons/) - for icons on contact.html.
5.	[Google Fonts](https://fonts.google.com/?query=cairo) - for the ‘Cairo’ font – used exclusively across the site.
6.	[Figma](http://www.figma.com) - to produce the mockups.
7.  [emailjs](https://www.emailjs.com/) - to send questions via email.

## Testing
My approach to testing was to test each of the features for functionality (operation) and rendering (visuals) against a variety of media devices, in both portrait and landscape orientation, as well as the 4 main browsers.
I would test ‘as-and-when’ I was building and enhancing features, then, when the site was nearing completion; I created a matrix to complete methodically to ensure all functions operated and rendered correctly.

I also completed some ‘user testing’ my asking my family to look at the site on mobile devices and laptops.

During the ongoing build test, I discovered an issue with the background image not rendering. It appeared fine in Gitpod, but when I first deployed to Github, the image was not visible. I tried a number of options to solve this, and found the only one that would work, was putting the **full** url from the image hosted on Github into the code. This is unsatisfactory for me, as it means the code is static and will not be portable without access to Github. I am still investigating a more satisfactory solution.

### Challenges

There were a few issues that needed research before I could solve them:

1. I discovered that using the accordion method of revealing hidden content on methods.html was not a great user experience, as the revealed content was off the bottom of the viewable screen. I believe the user would be unaware of this and feel that the link was broken. I initially tried adding a second set of code to allow the revealed content to appear *above* the banners, but this created duplicate ‘id’s in the code.
    After discussion with my mentor, I decided to use the carousel method (which I had seen on the Amazon site and liked). This works much better and the user experience is much cleaner. It also inspired me to add some images to help describe the content to the user.

2. The height of the iPhone X screen was a challenge as on designing index.html, there was a lot of blank space below the footer.
    There was a similar issue on the iPad Pro. Yet, the view fitted more regular phone sizes perfectly. I decided to style and size
    the app for the iPhone X first, and allow content to scroll off the bottom of the screen for smaller phones. I looked at other sites and this seems to be the norm for users to scroll down for more content.
    A trick that I used to help with this was to set a minimum vh for the background image and text section. this kept things spaced out nicely, and responded to different screen heights.

3. When I created the large, orange "banners" that link to further content on services.html and methods.html, I wanted the text centred both horizontally and vertically.
    Researching found that it has often been an ongoing issue with vertical alignment. I found a little trick at [webdevblog](https://webdevblog.com/css-vertical-align) to set: **display: flex;**
    and **align-items: center;** which solved the problem for me.

### Bugs and Errors

There were many situations through the course of coding this project - mostly sizing and layout issues due to using Bootstrap plugins. These were usually padding or marging related and were overcome by using Safari Developer Tools too identify 
which part of the css styling needed to be adjusted to suit my own application.

for example 

    .col-xl-4 {
        max-width: 33.3%;
    }
    
    .col-xl-3 {
        max-width: 25%;
    }

To ensure that there was no unwanted wraparound of cards that I wished to fit the Bootstrap grid system.

I created more formal [Testing Matrices](https://github.com/StuChapman/UCD-MS-Project-Continuous-Engagement/blob/195ffade32fdce65d439bf33c1f11352de30da86/testing) 
to ensure that I could periodically test the features and rendering in a systematic way. This was fundamental as there are often small errors like types or missing margins
that aren't immediately obvious 

The first pass of ‘completion’ testing revealed some particular errors:
1.	The background image was incorrectly sized on contact.html – I corrected this by adjusting the max-height
2.  The headers on case-studies.html were the wrong colour on small media devices – I also corrected this.
3.  The menu links are supposed to change to a slightly darker colour to indicate that the user is currently visiting that particular page
    - this functionality has broken and all pages were showing "home" as the active page. I realised that I had made some adjustments to the navbar in index.html, and copied the code
    into each of the other pages without adjusting the active pages.
4.  On checking the infographics; I realised that I had not creted hyperlinks to the methods.html page form the contact.html page. I added the hyperlinks.

### Solutions to User Stories

[Screenshots](https://github.com/StuChapman/UCD-MS-Project-Continuous-Engagement/blob/195ffade32fdce65d439bf33c1f11352de30da86/screenshots) that address the different User Stories.

## Deployment

I deployed to Github Pages by the following steps:
1.	From the UCD-MS-Project-Continuous-Engagement repository in Github, click ‘Settings’
2.	Scroll down to ‘GitHub Pages’
3.	From the ‘source’ drop-down, select ‘master branch’
4.	The url was then presented to me as https://stuchapman.github.io/IFD-MS-Project-Online-Learning/

#### To run the code locally;
1.	From the IFD-MS-Project-Online-Learning repository in Github, click ‘Clone or download’
2.	Copy the URL to your clipboard
3.	In Gitpod, open the terminal
4.	Change the directory to that where you wish to place the files
5.	Type ‘git clone’ then paste the URL

## Credits



### Content

1.	The formula (calc(10px + (48 - 10) * ((100vw - 300px) / (1800 - 300)))) for responsive font sizing is 
    from [css-tricks](https://www.css-tricks.com/books/fundamental-css-tactics/scale-typography-screen-size/) and 
    [made by Mike](www.madebymike.com.au/writing/fluid-type-calc-examples/)
2.	The method for aligning text vertically is from [webdevblog](www.webdevblog.com/css-vertical-align/) 
3.  The code for drag and drop on a touch screen device is by [Bernardo Castilho](https://www.codeproject.com/script/Membership/View.aspx?mid=337492), specifically [DragDropTouch](https://www.codeproject.com/Articles/1091766/Add-support-for-standard-HTML-Drag-and-Drop-operat).

### Media

1.	5.	All images were taken from [clipart-library](http://clipart-library.com).
2.	The infographics and ‘brand image’ were designed and created by me

### Acknowledgements

I would like to thank the following people for thier support and input:

1. My mentor, [Precious Ijege](https://www.linkedin.com/in/precious-ijege-908a00168/) for his knowledge and clear direction (it was he who made it very clear that a detailed set of mockups were vital - this is knowledge I will keep with me for the rest of my career!)
2. My partner, [Leah Harrison](https://www.facebook.com/leah.harrison.73744?eid=ARAmY9N1IiEptfP63TCAVnMZopPWxDv1tJL8BkuU9svBwDI3Eswr2C0RcoW-zx5We_ulMsujpIqL0-9B&timeline_context_item_type=intro_card_relationship&timeline_context_item_source=745641114) for the moral support and being my 'guinea pig' for live testing.
3. My friends [Scott](https://www.facebook.com/scott.mckellar.399) and [Magoo](https://www.facebook.com/carlos.fandango.56232), who I consulted before I started the FSD course, and gave me the confidence to go for it!