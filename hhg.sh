#!/bin/sh
turbo run build lint
npx tsx -r dotenv/config src/hhg.ts
