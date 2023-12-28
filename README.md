# TheBridge Landing Page Test
This is the front-end of the 9antra's landing page test for 2023-2024 end-of-study internship.
The Client side is made with React.
# Start App
To start the development server, run:

    npm i
	npm start
	
Note that the front-end uses an env-variable that indicates whether the app is going to consume the data from the LocalDB folder or send requests to the server.
In the .env.development file, a variable named REACT_APP_LOCALDB is defined.
If the latter is a truthy then the data from LocalDB folder is used otherwise the server's.
By default REACT_APP_LOCALDB is falsy, so you need to start the [server](https://github.com/AhmedAyachi/TheBridgeLandingPage-Server) first.