// Event listener for when the DOM content is loaded
document.addEventListener('DOMContentLoaded', function () {
    // Event listener for when the form is submitted
    document.getElementById('api-keys-form').addEventListener('submit', function (event) {
        event.preventDefault(); // Prevents the default form submission behavior

        // Get the values from the input fields
        const apiKey = document.getElementById('api-key').value;
        const apiEndpoint = document.getElementById('api-endpoint').value;

        // Save the values to Chrome storage
        chrome.storage.sync.set({ apiEndpoint: apiEndpoint, apiKey: apiKey }, function () {
            console.log('API Endpoint and Key saved');
        });
    });

    // Retrieve the values from Chrome storage and populate the input fields
    chrome.storage.sync.get(['apiKey', 'apiEndpoint'], function (result) {
        document.getElementById('api-key').value = result.apiKey ? result.apiKey : '';
        document.getElementById('api-endpoint').value = result.apiEndpoint ? result.apiEndpoint : '';
    });
});
