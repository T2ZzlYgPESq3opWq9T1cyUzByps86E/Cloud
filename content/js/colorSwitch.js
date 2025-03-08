/**
 * Random Hex Color Changer for --linkC
 * 
 * @author Meraz Alvee
 * @license MIT
 * @version 1.0
 * @description This script changes the --linkC CSS variable to a random hex color every 5 seconds.
 */

// Function to generate a random hex color
function getRandomHexColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
}

// Function to change the color of --linkC dynamically
function changeLinkColor() {
    const color = getRandomHexColor();
    document.documentElement.style.setProperty('--linkC', color);
}

// Change the color every 5 seconds
setInterval(changeLinkColor, 5000);

// Initial call to set the first color immediately
changeLinkColor();
