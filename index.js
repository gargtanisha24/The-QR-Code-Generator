// Require the inquirer npm package to ask user input.
//Require the qr-image npm package to convert url into an image.


import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';

/*The .prompt() method takes an array of objects, each representing a question to ask the user. 
In this case, it asks for the URL and assigns the user's input to the property named 'URL'
 in the answers object.*/
 inquirer 
 .prompt([{

    message:"Type in your URL",
    name:"URL"

  }
])

/* It extracts the URL entered by the user from the answers object.
The qr.image(url) function generates a QR code image based on the provided URL.
qr_svg.pipe(fs.createWriteStream('qr_img.png')):
 It pipes the QR code image data to a write stream created by 
 fs.createWriteStream(), saving the image as 'qr_img.png' in the file system.*/
  .then((answers) => {
    const url= answers.URL;
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream('qr_image.png'));
 
})
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
