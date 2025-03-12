/**
 * Onclicka Ads Script Load
 * 
 * @author Meraz Alvee
 * @license MIT
 * @version 1.0
 * @description A script to dynamically load the onclickaLoader.js file with a configurable admpid value.
 */

// Configuration
const enableScript = true; // Set to false to disable the script
const admpid = '000000';   // Change this value as needed

// Function to load the script dynamically
function onclickaScript() {
  if (enableScript) {
    const script = document.createElement('script');
    script.async = true;
    script.dataset.admpid = admpid;
    script.src = 'https://js.onclckmn.com/static/onclicka.js';
    document.head.appendChild(script);
  }
}

// Execute the function
onclickaScript();
