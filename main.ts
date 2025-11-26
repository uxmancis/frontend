/* Sidebar (files) appears when "Files" icon on the left menu is clicked */

// 1. Get references to the key DOM elements
const filesIconButton = document.getElementById('files-left-icon-btn');
const filesSidebar = document.getElementById('mid-files-sidebar');

// Use a type guard to ensure the elements exist before proceeding
/* Click 'Files' icon and Sidebar both Appears and Disappears */
if (filesIconButton && filesSidebar) 
{   
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







/* Files are displayed when filename on the sidebar menu is clicked */
// 1. Get references to the key DOM elements
const filenameButton = document.getElementById('filename');
const openedFile = document.getElementById('opened-file');

// Use a type guard to ensure the elements exist before proceeding
if (filenameButton && openedFile) {

    const showFileOnce = () => {
        if (openedFile.classList.contains('hidden'))
        {
            openedFile.classList.remove('hidden');
            console.log("Sidebar has been shown");
        }
        else
            console.log("Sidebar is already visible. Click ignored.");
            
    }

    // 3. Attach the event listener to the icon button
    filenameButton.addEventListener('click', showFileOnce);
    
    // Optional: Log a message to the console to confirm the script loaded
    console.log("TypeScript script loaded and ready to handle clicks!");

} else {
    console.error("One or more required elements (icon or sidebar) were not found in the DOM.");
}






const closeButton = document.getElementById('closeFile-btn');
if (closeButton && openedFile)
{
    const closeFile = () =>
    {
        openedFile.classList.toggle('hidden');
    }
    closeButton.addEventListener('click', closeFile);
}