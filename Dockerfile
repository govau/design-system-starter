FROM circleci/node:8.12.0

RUN echo '#!/usr/bin/env bash \n\
\n\
cd /app \n\
sudo rm -rf node_modules \n\
sudo npm install --unsafe-perm \n\
sudo npm run watch \n\
\n\
exec "$@"' > /tmp/start.sh

RUN chmod +x /tmp/start.sh

WORKDIR /app

ENTRYPOINT ["/tmp/start.sh"]
