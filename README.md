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
❯ git remote add git@github.com:iagocrespo/oferta-del-dia.git
❯ git push -u origin master
```

### More tools

- [React Developer Tools](https://addons.mozilla.org/en-US/firefox/addon/react-devtools/) extension for Firefox.
- [CMDer](http://cmder.net/): Command Line Emulator for Windows.
- [Create React App 2](https://github.com/facebook/create-react-app)

### Info de React

- Todo en React es un componente.
- Un componente es una pieza reusable de tu pagina web.
- WebPack es un agrupador.
- Hot Reloading: es lo que hace que el navegador se vaya actualizando en tiempo real.

### How to declare a component

Both are equivalent

```jsx
class Dave extends React.Component {
  render() {
    return <p>"What do you think you are doing, Dave?"</p>;
  }
}
```

```jsx
const Dave = () => {
  return <p>"What do you think you are doing, Dave?"</p>;
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

## 6. Binding `this` inside a Component

Binding our own methods/functions inside a `component`

### Method 1: Inside a `constructor`

```jsx
class StorePicker extends React.Component {
constructor (props) {
  super(props)

  this.goToStore =this.goToStore.bind(this)
}


goToStore(event) {}
```

### Method 2: Declare a `property` instead of `method`/`function` inside the component

```jsx
class StorePicker extends React.Component {
  goToStore = event => {};
}
```

**Remember**: if you must accsess `this` inside a custom method/function in a component, you need to blind `this` with method 1 or even better using Method 2
