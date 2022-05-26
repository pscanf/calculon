# Calculon

Simple calculator app used to showcase how to test React web apps.

## Setting up

> Requires `node@16` & `yarn` (classic) to be installed.

First of all:

- Clone the repository.
- Run `yarn install` to install dependencies.

Then:

- To run unit and integration tests: `yarn test`.
- To run e2e tests:
  - Only the first time, to set up [Playwright](https://playwright.dev/):
    `yarn playwright install`.
  - `yarn e2e:test`.
