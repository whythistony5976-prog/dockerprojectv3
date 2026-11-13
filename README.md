# Pour & Co. website

Run with plain Docker:

    docker build -t pour-site .
    docker run -d --name pour-site -p 8080:80 pour-site

Open http://localhost:8080

Stop and remove: `docker rm -f pour-site` (or `docker compose down`).
Edit files in `site/`, then rebuild the image to see changes.
