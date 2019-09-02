FROM circleci/node:8.12.0

RUN echo '#!/usr/bin/env bash \n\
\n\
cd /workdir \n\
sudo rm -fr node_modules \n\
sudo npm install --unsafe-perm \n\
sudo npm run watch \n\
\n\
exec "$@"' > /tmp/start.sh

RUN chmod +x /tmp/start.sh

WORKDIR /workdir

ENTRYPOINT ["/tmp/start.sh"]
