# Blockchain-Sim by Ian Franklin

A blockchain cryptocurrency simulator web application. My final project for SE 575.

## Setup

To set up Blockchain-Sim, ensure you have `npm` installed, as well as `docker`.

There are two running servers for this project, an Angular front-end application and a Python web service back-end.

1. Clone the repository and navigate to it.
2. Run `npm install` to install dependencies.
3. To run the Angular server, run `ng serve`.
4. Navigate to `http://localhost:4201/` in a web browser.

To run the Python server, navigate to the `webservice/` directory.

1. `cd ./webservice`
2. Build a new docker image with command: `docker build -t blockchain-server .`
3. `docker run -p 5000:5000 blockchain-server`
