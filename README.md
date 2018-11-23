# Oferta del dia

Playing with React, Firebase and friends.

## 👾🤖🚀 Clone, install... GO 🚀🤖👾

```
❯ git clone git@github.com:iagocrespo/oferta-del-dia.git
❯ cd oferta-del-dia
❯ npm install
```

## 0. Installation and First Steps

### How to install Node

Since we are using [fish shell](https://fishshell.com/), we need to:

1. Install [NVM](https://github.com/creationix/nvm)

```
❯ curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash
```

2. Install [fish-nvm](https://github.com/FabioAntunes/fish-nvm)

```
❯ fisher add FabioAntunes/fish-nvm
```

3. Install [Node 8](https://nodejs.org/en/) with NVM

```
❯ nvm install 8
❯ node --version
v8.12.0
❯ nvm alias default 8.12.0
```

### How can I sync the project with a remote GitHub repository

```
❯ git remote add origin git@github.com:iagocrespo/oferta-del-dia.git
❯ git push -u origin master
```

### More tools

- [React Developer Tools](https://addons.mozilla.org/en-US/firefox/addon/react-devtools/) extension for Firefox.
- [CMDer](http://cmder.net/): Command Line Emulator for Windows.
- [Create React App 2](https://github.com/facebook/create-react-app)

### Troubleshooting

Try

```
❯ rm -rf node_modules/
❯ rm -rf package-lock.json
❯ npm install
❯ npm start
```

## 1. Intro to React

- Everything in react is a component!
- A component is a reusable piece of code.
- Webpack is a bundler.

### How to declare a component

Both are equivalent

```jsx
class Dave extends React.Component {
  render() {
    return <p>What do you think you are doing, Dave?</p>;
  }
}
```

```jsx
const Dave = () => {
  return <p>What do you think you are doing, Dave?</p>;
};
```

### Component structure

```jsx
// IMPORTS
import React from "react";

// COMPONENT
class Dave extends React.Component {
  render() {
    return <p>What do you think you are doing, Dave?</p>;
  }
}

// EXPORT
export default Dave;
```

### To JSX or to not JSX...

#### With only one tag

Both are equivalent

```jsx
<p>What do you think you are doing, Dave?</p>
```

```js
React.createElement("p", {}, "What do you think you are doing, Dave?");
```

#### With nested tags

Both are equivalent

```jsx
<div>
  <p>What do you think you are doing, Dave?</p>
</div>
```

```js
React.createElement(
  "div",
  {},
  React.createElement("p", {}, "What do you think you are doing, Dave?")
);
```

### JSX Gotchas!

#### Use `className` instead of `class`

```jsx
return <p className="my-class">What do you think you are doing, Dave?</p>;
```

#### Beware ASI (Automatic Semicolon Insertion)

If you leave `return` alone in one line a semicolon is automatically inserted! Use `return ( .... )`.

```jsx
return (
  <div>
    <p className="my-class">What do you think you are doing, Dave?</p>
  </div>
);
```

## 2. `props` and `state`

- `state`: where the data lives.
- `props`: a way to get data (`state`) into a component.

## 3. Functional Stateless Components

Five of them are equivalent

```jsx
class Header extends React.Component {
  render() {
    return (
      <h3 className="tagline">
        <span>{this.props.tagline}</span>
      </h3>
    );
  }
}
```

```jsx
const Header = props => {
  return (
    <h3 className="tagline">
      <span>{props.tagline}</span>
    </h3>
  );
};
```

```jsx
const Header = ({ tagline }) => {
  return (
    <h3 className="tagline">
      <span>{tagline}</span>
    </h3>
  );
};
```

```jsx
const Header = props => (
  <h3 className="tagline">
    <span>{props.tagline}</span>
  </h3>
);
```

```jsx
const Header = ({ tagline }) => (
  <h3 className="tagline">
    <span>{tagline}</span>
  </h3>
);
```

## 4. Routing and Routers

There's at least 3 great options for routing in React:

- [`react-router`](https://reacttraining.com/react-router/web/guides/quick-start)
- [`next.js`](https://github.com/zeit/next.js/#routing)
- [`@reach/router`](https://reach.tech/router)

We are going to use `@reach/router` but there's a branch with `react/router` too [here](https://github.com/davidgchaves/oferta-del-dia/tree/react-router)

## 5. Events in React

[Synthetic Events in React](https://reactjs.org/docs/events.html)

Hey React! When somebody clicks the button, execute this (`handleClick`) 👇 function, please:

```jsx
<button onClick={this.handleClick}>
```

## 6. Binding `this` inside a Component

Binding our own methods/functions inside a `component`.

### Method 1: Inside the `constructor`

```jsx
class StorePicker extends React.Component {
  constructor(props) {
    super(props);

    this.goToStore = this.goToStore.bind(this);
  }

  goToStore(event) {}
}
```

### Method 2: Declare a `property` instead of `method`/`function` inside the component

```jsx
class StorePicker extends React.Component {
  goToStore = event => {};
}
```

**Remember**: if you must access `this` inside a custom method/function in a component, you need to bind `this` with Method 1 or even better using Method 2.

## 7. State in React

- **State** is a JavaScript Object that lives inside a component and stores all the data that the component and probably its children need.
- **State** is just a JavaScript Object that holds data.

React philosophy: Update the data (state) and let it React take it and update components for us.

You can never pass data up, you can only pass data down.

Functions that update state and the state itself need to be in the same component.

## X. Production build

Just run 👇

```sh
❯ npm run build
```

### Deploying to `now`

- [Now — Global Serverless Deployments](https://zeit.co/now)
- [Create React App Example](https://github.com/zeit/now-examples/tree/master/create-react-app)

```
❯ npm install -g now
❯ now -v
12.1.3
```

Change `start` script to `dev` script.

```json
"scripts": {
  "dev": "react-scripts start"
}
```

Create a `now.json` file at the root of your project

```json
{
  "version": 2,
  "builds": [{ "src": "package.json", "use": "@now/static-build" }],
  "routes": [
    { "src": "^/static/(.*)", "dest": "/static/$1" },
    { "src": ".*", "dest": "/index.html" }
  ]
}
```

Create a custom alias 👇

```

❯now alias https://oferta-del-dia-2s72oqmaq.now.sh obradoiroteoKLK

You can enter to obradoiroteoKLK.now.sh

```

### Deploy to Netlify

```
❯ npm install -g netlify-cli
❯ netlify --version
netlify-cli/2.2.1 darwin-x64 node-v8.12.0
```

Create a `_redirects` file 👇

```
/*    /index.html   200
```

```
❯ cp _redirects build/
❯ netlify deploy
```
