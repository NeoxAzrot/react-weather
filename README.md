# What's the weather like today?

## Project expectations

**Objective:** Display the weather of a place

**Functionality:**

- Search for a city, with autocomplete
- Display of the weather
- Geolocation

**Resources:**

- [openweathermap.org](https://home.openweathermap.org)

## To see the project

### Netlify

You can find the project online directly at the following address [test-react-weather.netlify.app](https://test-react-weather.netlify.app)


## To contribute to the project

### Set up [Open weather map API](https://openweathermap.org/api)

You must add your API key from in a `.env` file

```bash
REACT_APP_WEATHER_API_KEY=YOUR_API_KEY
```

### Set up [Google APIs](https://console.cloud.google.com/apis/library?filter=category:maps)

You must add your API key in a `.env` file

```bash
REACT_APP_GOOGLE_API_KEY=YOUR_API_KEY
```

You must then create a **new project** on the Google APIs platform.

For the requests to work you will have to activate **2 APIs** on the same platform.

- [Places API](https://console.cloud.google.com/apis/library/places-backend.googleapis.com?filter=category:maps&id=ecefdd63-ee2b-4751-b6c3-8e9113791baf)
- [Maps JavaScript API](https://console.cloud.google.com/apis/library/maps-backend.googleapis.com?filter=category:maps&id=fd73ab50-9916-4cde-a0f6-dc8be0a0d425)

> ⚠️ For more protection, you can activate [restrictions](https://console.cloud.google.com/apis/credentials/key/2addfa09-f3f4-4b52-8d8c-7d9888d33461) on your API key

### `npm start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run build`

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Then you could see the project without running a `localhost` server.

---

[Sami Lafrance](https://www.samilafrance.com/)
