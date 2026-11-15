#!/usr/bin/env bash

GREEN='\033[32m'
RESET='\033[0m'

set -euo pipefail

duplojs-oxlint --quiet --config oxlint.config.ts

printf "\n${GREEN}tickets${RESET}\n"
pnpm --filter tickets test:lint
