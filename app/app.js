import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'react-bootstrap';
import Header from './header';
import Content from './content';
import Footer from './footer';
import './style.scss';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Content />
        <Button>Click me!</Button>
        <Footer />
      </div>
    );
  }
}

if (module.hot) {
  module.hot.accept();
}

ReactDOM.render(
  <App />, document.getElementById('app')
);
