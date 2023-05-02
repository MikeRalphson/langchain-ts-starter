# langchain-demo

Based on `langchain-ts-starter', boilerplate to get started quickly with the [Langchain Typescript SDK](https://github.com/hwchase17/langchainjs).

This uses the same tsconfig and build setup as the [examples repo](https://github.com/hwchase17/langchainjs/tree/main/examples), to ensure it's in sync with the official docs.

# What's included

- Typescript
- .env file configuration
- ESLint and Prettier for formatting
- Turborepo to quickly run build scripts
- `tsx` to quickly run compiled code

# How to use

- Clone this repository
- `npm install`
- Write your code in `src`
- `turbo run build lint` to run build scripts quickly in parallel
- `npm start` to run your program

# Bugs

* This repo is pinned to an older version of `langchain` because newer versions have bugs in the Zod schema used to process responses.

