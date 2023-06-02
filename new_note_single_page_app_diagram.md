Sequence diagram on creating a new note on the single-app page at https://studies.cs.helsinki.fi/exampleapp/spa

```mermaid
sequenceDiagram
participant browser
participant server


loop ServerSide 
    server->>server: Server gets access to the data via request objects body field. Then server processes it with python or similar back-end language.
end