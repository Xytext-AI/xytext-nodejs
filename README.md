# xytext

`xytext` is a Node.js client library for interacting with the Xytext API. It provides a straightforward way to make requests to the Xytext API and process the responses efficiently. This package aims to facilitate the integration of Xytext API functionalities into Node.js applications.

## Installation

Install `xytext` using npm:

```npm install xytext```

## Usage

To use `xytext`, you need to have your Xytext API credentials: `FUNC_ID`, `STAGE`, and `AUTH_TOKEN`. These credentials are required to authenticate your requests.

## Basic Example

Here's a basic example of how to use `xytext`:

```
const Xytext = require('xytext');

async function exampleUsage() {
    const funcId = "your_func_id";
    const stage = "your_stage";
    const authToken = "your_auth_token";

    const xt = new Xytext(funcId, stage, authToken);
    try {
        const response = await xt.invoke("Your input text here");
        console.log(response.result);
    } catch (error) {
        console.error("Error:", error.message);
    }
}

exampleUsage();
```

## API Reference

### Xytext

This is the primary class used to interact with the Xytext API.

#### Constructor

`new Xytext(funcId, stage, authToken)`

Parameters:

- `funcId` (String): The function ID for the Xytext API.
- `stage` (String): The stage of the API environment ("staging", "prod").
- `authToken` (String): Your authorization token for the Xytext API.

#### Method: `invoke(inputText)`

Sends a request to the Xytext API.

Parameters:

- `inputText` (String): The text input for the API.

Returns:

- A promise that resolves to an instance of `XytextResponse`.

### XytextResponse

This class represents the response received from the Xytext API.

#### Properties

- `rawResponse`: The complete response from the API.
- `success`: Boolean indicating if the API request was successful.
- `message`: A message from the API, usually containing error details if any.
- `usage`: Details about the usage of the API for this call.
- `callId`: A unique identifier for the API call.
- `result`: The content returned by the API, either as an object or a string.

## Additional Information

Keep your API credentials secure. Do not expose them in client-side code. Consider using environment variables to better protect your auth token.

Properly handle API responses and exceptions in your application to ensure robustness.
