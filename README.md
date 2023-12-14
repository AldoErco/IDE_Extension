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

## Usage

1. Navigate to the Anvil.works code editor.
2. Start typing your code.
3. When you need a code completion suggestion, use the extension to get a suggestion from the OpenAI API.

## Configuration

You need to set your OpenAI API key and endpoint in the extension's options page for it to work.

## Contributing

Contributions from "the experts" in 1) Chrome extensions, 2) JavaScript, and 3) Anvil are very welcome.
If someone from the Anvil team is willing to evolve this into something more integrated and sophisticated, they're very welcome.

## Known issues

1. Suggestions lose indentation.
2. ChatGPT is not the best code whisperer out there. But it's very simple to integrate (1 REST call) and a useful playground tool. I don't know how difficult integrating GitHub Copilot is.

## License

[MIT](https://choosealicense.com/licenses/mit/)