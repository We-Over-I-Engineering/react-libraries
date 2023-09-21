# React Component Library

A versatile and modern React component library designed to simplify web development. With a focus on accessibility and responsiveness, this library offers a curated set of components that seamlessly integrate with any React project, ensuring a consistent and beautiful user experience across all devices.

![NPM version](https://www.npmjs.com/package/woi-react-storybook?activeTab=readme)

---

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [API](#api)
- [Contributing](#contributing)
- [License](#license)
- [Publish to NPM](#publish-to-npm)

---

## Installation

```bash
npm install woi-react-storybook
```

or

```bash
yarn add woi-react-storybook
```

---

## Usage

1. Import the necessary components/modules:

```typescript
import { ComponentName } from 'woi-react-storybook';
```

2. Use it in your Next.js project:

```typescript
function MyApp() {
  return <ComponentName />;
}
```

---

## Features

- Allows a wide range of props to customize the component
- Supports TypeScript
- Supports server-side rendering
- Allows animations
- Allows custom icons

---

## API

### `ComponentName`

| Prop Name | Type | Default | Description |
|-----------|------|---------|-------------|
| prop1     | `string` | `'default'` | Description for prop1 |
| prop2     | `number` | `0` | Description for prop2 |

---

## Contributing

1. Fork the repository.
2. Clone your fork.
3. Create a new branch.
4. Make your changes.
5. Commit and push your changes.
6. Create a pull request.

For more details, see [CONTRIBUTING.md](./CONTRIBUTING.md).

---

## License

This project is licensed under the [MIT License](./LICENSE).

---

## Credits

- Made with ❤️ by the talented team at We-Over-i

---

## Publish to NPM

1. Update the version number in `package.json` and `package-lock.json` files.
2. Make sure you are signed in to NPM. If not, run `npm login` to sign in.
3. Run `npm publish --access public` to publish the package to NPM.


Feel free to contact us for any questions or feedback!