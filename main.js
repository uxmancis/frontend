"use strict";
/* Sidebar (files) appears when "Files" icon on the left menu is clicked */
// 1. Get references to the key DOM elements
const filesIconButton = document.getElementById('files-left-icon-btn');
const filesSidebar = document.getElementById('mid-files-sidebar');
// Use a type guard to ensure the elements exist before proceeding
/* Click 'Files' icon and Sidebar both Appears and Disappears */
if (filesIconButton && filesSidebar) {
    // 2. Define the event listener function
    const toggleSidebar = () => {
        // The core logic: Toggling the 'hidden' class
        // - If 'hidden' is present, the sidebar is hidden (display: none)
        // - If 'hidden' is removed, the sidebar appears (it defaults to display: flex/block based on its other classes)
        filesSidebar.classList.toggle('hidden');
    };
    // 3. Attach the event listener to the icon button
    filesIconButton.addEventListener('click', toggleSidebar);
    // Optional: Log a message to the console to confirm the script loaded
    console.log("TypeScript script loaded and ready to handle clicks!");
}
else
    console.error("One or more required elements (icon or sidebar) were not found in the DOM.");
/* Files are displayed when instructionsFile on the sidebar menu is clicked */
// 1. Get references to the key DOM elements
const instructionsFileButton = document.getElementById('instructionsFile');
const openedFile = document.getElementById('opened-file');
// Use a type guard to ensure the elements exist before proceeding
if (instructionsFileButton && openedFile) {
    const showFileOnce = () => {
        if (openedFile.classList.contains('hidden')) {
            openedFile.classList.remove('hidden');
            console.log("Sidebar has been shown");
        }
        else
            console.log("Sidebar is already visible. Click ignored.");
    };
    // 3. Attach the event listener to the icon button
    instructionsFileButton.addEventListener('click', showFileOnce);
    // Optional: Log a message to the console to confirm the script loaded
    console.log("TypeScript script loaded and ready to handle clicks!");
}
else {
    console.error("One or more required elements (icon or sidebar) were not found in the DOM.");
}
/* "x" button to close openedFile */
const closeButton = document.getElementById('closeFile-btn');
if (closeButton && openedFile) {
    const closeFile = () => {
        openedFile.classList.toggle('hidden');
    };
    closeButton.addEventListener('click', closeFile);
}
const renderInstructions = (targetDivId) => {
    // #1 Find the target element using its ID
    const targetDiv = document.getElementById(targetDivId);
    if (targetDiv) {
        // #2 Set te content
        targetDiv.innerHTML = '<div class="h-full w-full bg-blue-500">Instructions<div>';
    }
};
/* Define the possible 'states' or 'targets' for navigation */
// type navigationTarget = 'instructions' | 'PROFILE' | 'SETTINGS';
/* navtarget: Navigation Target
*
*   About enum Syntax in Typescript:
*       EnumMemberName (key) = 'Runtime value',
*  */
var navTarget;
(function (navTarget) {
    navTarget["Instructions"] = "instructions";
    navTarget["Profile"] = "PROFILE";
    navTarget["Settings"] = "SETTINGS";
})(navTarget || (navTarget = {}));
/* #2 Depending on which element have we previously clicked,
* handleNavigation will call to a different function.
*
*
*
* */
const handleNavigation = (target) => {
    console.log('Navigation triggered. Setting the current view to: ${target}');
    switch (target) {
        case navTarget.Instructions:
            renderInstructions("row-2-display");
            break;
    }
};
// #1 We click
if (instructionsFileButton) {
    instructionsFileButton.addEventListener('click', () => { handleNavigation(navTarget.Instructions); });
}
