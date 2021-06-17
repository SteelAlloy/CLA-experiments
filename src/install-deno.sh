#!/bin/bash

curl -fsSL https://deno.land/x/install/install.sh | sh -s v1.0.0
DENO_INSTALL="$HOME/.deno"
echo "DENO_INSTALL=$DENO_INSTALL" >> GITHUB_ENV
echo "$DENO_INSTALL/bin" >> $GITHUB_PATH
