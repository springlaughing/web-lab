# Git Flow Lab

A small front-end project built while practising the Git Flow branching model.

## Running it

Open `index.html` in a browser. No build step, no dependencies.

## Features

### Dark mode toggle

The header has a button that switches the page between light and dark.
Clicking it flips a `data-theme` attribute on `<body>` between `light` and
`dark`; `styles.css` reacts to that attribute. The button label and its
`aria-pressed` state update to match.

The choice is not persisted — reloading returns the page to light mode.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for branch naming and commit conventions.