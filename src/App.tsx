import { Fragment } from 'react';
import { Header } from './components';
import { HomePage } from './pages';

export function App() {
  console.log('App.render');
  return (
    <Fragment>
      <Header />
      <HomePage />
    </Fragment>
  );
}
