#!/usr/bin/env bash

GREEN='\033[32m'
RESET='\033[0m'

set -euo pipefail

tsc -p tsconfig.config.json

printf "\n${GREEN}tickets${RESET}\n"
pnpm --filter tickets test:types
