# Fullstack Open
## Part2 Countries

The React exercises are done using [Vitejs](https://vitejs.dev/guide/)

### Planing the app
<pre>
src
    components
        Filter
        ListCountries
        ShowCountry
    services
        countries
    App.jsx
    main.jsx
    main.css
</pre>

```mermaid
stateDiagram-v2
App.jsx --> services/countries
services/countries --> App.jsx
App.jsx --> [*]
App.jsx --> ListCountries
App.jsx --> Filter
Filter --> ListCountries
ListCountries --> [*]
```
