# OpenAI Code Completion Chrome Extension

This is a stub example of a Chrome extension that uses the OpenAI API to provide code completion suggestions in the Anvil.works web code editor.

I have never created a Chrome extension before, and I do not usually code in JavaScript, and I find the promises construct almost impossible to understand.
This was put together with a great amount of help from GitHub Copilot.
So forgive the poor code and stuff... it just shows a working example of a concept.

## Features

- Provides code completion suggestions in the Anvil.works code editor.
- Uses the OpenAI API to generate the suggestions.

## Installation

1. Download or clone this repository to your local machine.
2. Open the Chrome browser and navigate to `chrome://extensions`.
3. Enable "Developer mode" in the top right corner.
4. Click on "Load unpacked" and select the directory where you downloaded or cloned this repository.

## Configuration
You need to have an OpenAI API Key to use for this.
After installation:
1. Open the extension popup, clicking on the extension icon (near the URL address bar)
2. In the API Endpoint, insert: https://api.openai.com/v1/chat/completions
3. In the API Key, insert your OpenAI key.
4. Click Save
I decided to leave the endpoint as a configuration parameter in order to update it in case newer versions come (v1, v2, etc).

## Usage

1. After installation, or each reload, make sure that the plugin is active.
3. Navigate to the Anvil.works code editor. Refresh (F5) the page after each plugin reload (if you change code).
4. Start typing your code.
5. When you need a code completion suggestion, end your current line of code with a question mark (?) and wait.

## How to check it's active
If installation is correct, when you're inside Anvil code editor, open the Chrome console.
You should see a "--- monitoring ---" bunch of console.logs every 5 secs.

## Configuration

You need to set your OpenAI API key and endpoint in the extension's options page for it to work. Just click on the extension icon near the URL address bar to access the pop-up.

## Contributing

Contributions from "the experts" in 1) Chrome extensions, 2) JavaScript, and 3) Anvil are very welcome.
If someone from the Anvil team is willing to evolve this into something more integrated and sophisticated, they're very welcome.

## Known issues

1. Suggestions lose indentation.
2. ChatGPT is not the best code whisperer out there. But it's very simple to integrate (1 REST call) and a useful playground tool. I don't know how difficult integrating GitHub Copilot is.

## License

[MIT](https://choosealicense.com/licenses/mit/)
