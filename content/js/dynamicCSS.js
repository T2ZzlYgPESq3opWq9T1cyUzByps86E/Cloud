/**
 * Dynamic CSS Loader
 * 
 * @author Meraz Alvee
 * @license MIT
 * @version 1.3
 * @description A utility to dynamically load CSS files from a base URL using JavaScript.
 */

// Base URL for CSS files
const baseUrl = 'https://domain.com/assets/css/';

// Array of CSS file names to load initially
const initialCSSFiles = ['style1', 'style2', 'style3']; // No need to add `.css` manually

/**
 * Function to dynamically load a CSS file
 * @param {string} filename - The name of the CSS file to load (with or without `.css` extension)
 */
function loadCSS(filename) {
    return new Promise((resolve, reject) => {
        // Append `.css` extension if not already present
        const cssFile = filename.endsWith('.css') ? filename : `${filename}.css`;

        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = baseUrl + cssFile;

        // Resolve the promise once the CSS file is loaded
        link.onload = () => resolve(`CSS file loaded: ${cssFile}`);
        link.onerror = () => reject(`Failed to load CSS file: ${cssFile}`);

        // Append the link element to the document head
        document.head.appendChild(link);
    });
}

/**
 * Function to load multiple CSS files
 * @param {string[]} files - Array of CSS file names to load (with or without `.css` extension)
 */
async function loadMultipleCSS(files) {
    for (const file of files) {
        try {
            await loadCSS(file);
            console.log(`Success: ${file} loaded successfully.`);
        } catch (error) {
            console.error(error);
        }
    }
}

// Load initial CSS files when the script runs
loadMultipleCSS(initialCSSFiles);
