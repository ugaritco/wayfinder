# Contribution Guide

The Ugarit contributing guide can be found in the [Ugarit documentation](https://ugarit.com/docs/contributions).

## Installation and Setup

```sh
git clone https://github.com/ugarit/wayfinder.git wayfinder
cd wayfinder
composer install
npm install
```

## Testing

The tests are written using [Vitest](https://vitest.dev/) and can be found in `./tests`. To add a route and/or controller to test against, please reference the `./workbench` directory.
