// content.js
// Initialize a variable to store the last content
let lastContent = '';

// Set up an interval to monitor changes in the code editor every 5 seconds
setInterval(() => {
  console.log("-------------monitoring-------------");
  
  // Log the last content
  console.log('lastContent ' + lastContent);
  
  // Get the currently active line in the code editor
  const activeLine = document.querySelector('.cm-activeLine');
  // Cast the active line to a string (sometimes it's not a string)
  const activeLineStr = activeLine ? String(activeLine.textContent) : '';
  console.log('activeLineStr="' + activeLineStr) + '"';
  
  // Get the last character of the active line to check if it's a question mark
  const lastChar = activeLineStr.slice(-1);
  
  // Check if the active line exists, is different from the last content, and ends with a question mark trigger the completion
  if (activeLine && activeLineStr !== lastContent && lastChar == '?') {
    // Save the active line as the last content to prevent multiple requests
    lastContent = activeLineStr;
    
    // Get the content of the code editor
    const content = String(document.querySelector('.cm-content').textContent);
    console.log('content ' + content);
    
    // Use the active line as a prompt and send a message to the runtime
    console.log('my_prompt ' + activeLineStr);
    chrome.runtime.sendMessage({ context: content, prompt: activeLineStr });
  } else if (activeLine) {
    // Save the active line as the last content to prevent multiple requests
    lastContent = activeLineStr;
    console.log('lastContent ' + lastContent);
  }
}, 5000);

// Listen for messages from the runtime
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  // Get the currently active line in the code editor
  const line = document.querySelector('.cm-activeLine');
  
  // Replace the content of the active line with the result of the completion
  console.log('prompt: ' + line.textContent);
  line.textContent = request.result;
  console.log('new: ' + line.textContent);
  
  // Update the last content with the modified line so that we don't trigger a completion
  lastContent = line.textContent;
});
