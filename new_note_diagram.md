Sequence diagram on creating a new note on the page https://studies.cs.helsinki.fi/exampleapp/notes

```mermaid
sequenceDiagram
participant browser
participant server

browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note HTML Payload: Form data
loop ServerSide 
    server->>server: Server gets access to the data via request objects body field. Then server processes it with python or similar back-end language.
end
server-->>browser: Status Code 302, URL redirect

browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
activate server
server-->>browser: HTML document
deactivate server

browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
server-->>browser: the css file

browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
server-->>browser: the JavaScript file

Note right of browser: The browser starts executing the JavaScript code that fetches the JSON from the server

browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
server-->>browser: [{content: "Hello", date: "2023-06-01T04:36:50828Z"},…]
Note right of browser: The browser executes the callback function that renders the notes
```