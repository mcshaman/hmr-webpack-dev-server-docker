# HMR through webpack-dev-server on Docker

This repo demonstrates hot module reloading on webpack-dev-server functioning from a Docker container with custom port mapping.

## Instructions

Note: you must have Docker installed and the Daemon running (duh).

1. Clone the repository and run `npm install`
2. Run `npm run dev`. This should download the official Node Docker image (if you don't already have it) and run it with the flowing options:
	* `-p 80:8080` for custom port mapping
	* `-v $(pwd):/usr/src/app` to mount the root directory of this repository as a directory in the container
	* `-w /usr/src/app` to set the working directory to the mounted directory
	* `npm run dev` the terminal command to run when the container is up
 
	There are options in the npm `dev` script that are critical to this configuration.
	
	* `--host 0.0.0.0` aides in communication between the host machine and the container by telling the container to respond to any incoming requests on the internally mapped port (8080).
	* `--public 0.0.0.0` is the same as writing `--public 0.0.0.0:80`.  without this option hot module reloading requests will default address and port configured in the container (`0.0.0.0:8080`) which will not resolve.

3. In the browser type in an address that will resolve to your own machine. e.g. `local.host`, `local.host:80`, `127.0.0.1`, `0.0.0.0`, etc. You should see a message that says **'Change this constant and watch me update automatically'**. This is being loaded by `scr/myModule.js`.

4. Change the `MESSAGE` constant in the module and watch it automatically update... Cool.