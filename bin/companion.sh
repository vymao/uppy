#!/usr/bin/env bash

# Load local env vars. In CI, these are injected.
if [ -f .env.local ]; then
  nodemon --watch packages/@uppy/companion/src ./bin/companion.js
else
  env \
    COMPANION_DATADIR="./output" \
    COMPANION_DOMAIN="localhost:3020" \
    COMPANION_PROTOCOL="http" \
    COMPANION_PORT=3020 \
    COMPANION_CLIENT_ORIGINS="" \
    COMPANION_SECRET="development" \
    nodemon --watch packages/@uppy/companion/src --exec node ./packages/@uppy/companion/src/standalone/start-server.js
fi

