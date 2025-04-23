# Eve Wormhole Mapper Documentation

This repository contains the documentation for the **Eve Wormhole Mapper** tool, built using [Docusaurus](https://docusaurus.io/), a modern static site generator.

## Table of Contents

- [Getting Started](#getting-started)
- [Development](#development)
- [Building the Documentation](#building-the-documentation)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

To get started with the documentation locally, clone the repository and install the dependencies:

```bash
git clone https://github.com/pfh59/eve-whmapper-docs.git
cd eve-whmapper-docs
yarn
```

## Development

Run the following command to start a local development server:

```bash
yarn start
```

This will open the documentation in your browser. Changes to the source files will be reflected live.

## Building the Documentation

To generate the static site, use:

```bash
yarn build
```

The static files will be output to the `build` directory. You can serve these files using any static hosting service.

## Deployment

To deploy the documentation to GitHub Pages, use:

### Using SSH:

```bash
USE_SSH=true yarn deploy
```

### Without SSH:

```bash
GIT_USER=<Your GitHub username> yarn deploy
```

This will build the site and push it to the `gh-pages` branch of the repository.

## Contributing

We welcome contributions! If you find any issues or have suggestions for improvement, feel free to open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).