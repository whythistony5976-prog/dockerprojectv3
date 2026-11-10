# Small, production-ready static web server
FROM nginx:1.27-alpine

# Replace the default config with ours
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy the website into nginx's web root
COPY site/ /usr/share/nginx/html/

EXPOSE 80

# Mark the container unhealthy if the site stops answering
HEALTHCHECK --interval=30s --timeout=3s CMD wget -qO- http://localhost/ >/dev/null || exit 1
