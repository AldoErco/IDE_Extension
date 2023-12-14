// background.js

// Add a listener for incoming messages from the content script
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log('-------------WEB REQUEST-------------');
  let apiKey = '';
  let apiEndpoint = '';

  // Retrieve the API key and endpoint from Chrome storage
  chrome.storage.sync.get(['apiKey', 'apiEndpoint'], function (result) {
    apiKey = result.apiKey ? result.apiKey : '';
    apiEndpoint = result.apiEndpoint ? result.apiEndpoint : '';

    // If the API key or endpoint is missing, log an error and return
    if (apiKey == '' || apiEndpoint == '') {
      console.log('No OpenAI API Key and/or Endpoint found');
      return;
    }

    // Prepare the payload for the OpenAI API request
    payload = JSON.stringify({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content: 'You are a python professional software developer. You are not here to give explanations, just to provide code completions to the user. Your answers are simply made of code, not english sentences.'
        },
        {
          role: 'user',
          content: 'Given the context source code \n--- begin context source code --- \n' + request.context + ' --- end context source code --- \nComplete this line of code:\n ' + request.prompt + '\n. The code should be valid python code, complete of indentation and newlines.'
        }
      ],
      temperature: 1,
      max_tokens: 256,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0
    });

    // Log the payload
    console.log('payload ' + payload);

    // Send a POST request to the OpenAI API with the payload
    fetch(apiEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + apiKey
      },
      body: payload
    })
      .then(response => { return response.json() })
      .then(data => {
        console.log('data ' + data);

        // If there is an error in the response, log it and send a message to the content script
        // So the user can see the error in the code editor, as the suggestion :)
        if (data.error) {
          console.error('Error:', data.error);
          chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, { result: data.error.message });
          });
        } else {
          // Extract the returned code from the response and send it to the content script
          returned_code = data.choices[0].message.content;
          console.log('returned_code ' + returned_code);
          chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, { result: returned_code });
          });
        }
      });
  });
});
