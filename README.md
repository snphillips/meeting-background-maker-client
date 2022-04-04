## About Meeting Background Maker Client

See project deployed here (in development...is still a little buggy): https://meeting-background-maker.surge.sh/ 

_Companion to Meeting Background Maker Server: https://github.com/snphillips/meeting-background-maker-server_

This web app allows users to select images of items from the Cooper Hewitt Design Museum's collection to be used as backgrounds for online meetings. The user may browse through the museum's collection using keywords such as "bauhaus" or "modernism", or the the user may download existing sets curated by me.

<img src="https://i.imgur.com/4mN13AS.png" width="500" alt="screengrab of app">
<img src="https://i.imgur.com/zePmX1v.png" width="500" alt="screengrab of app">

The user may select up to 20 images in thier collection. Using the jimp image processing library, the images are resized and have descriptive text added before being saved to an AWS S3 bucket. The image manipulation happens with the node/express server.

When users are satisfied with a collection of images they've curated, they may download the images to thier hard drive as a zip folder. I use the package s3-zip to zip the selected images in the AWS S3 bucket and make them available for the user to download.

### Getting Started

This app assumes you have an aws s3 bucket to save images in. 

Follow the instructions to install the server first, then come back here to: https://github.com/snphillips/meeting-background-maker-server

After you've set up the server, clone this repo:

`````````
`git clone https://github.com/snphillips/meeting-background-maker-client.git`
`````````
 
Change directories into the project folder:

`````````
cd meeting-background-maker-client
`````````


🛠 Run npm to install all the dependencies:

`````````
`npm install`
`````````

🪄 Start the React server:

`````````
`npm start`
`````````
Your browser should open to http://localhost:3000/ Voila! 🥂


### Made With
* Cooper Hewitt Museum API
* Create-React-App
* react-masonry-css
* axios
* react-spinners




