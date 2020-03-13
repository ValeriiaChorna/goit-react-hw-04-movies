import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Layout from './Layout';
import Homepage from '../views/Homepage';
import MoviesPage from '../views/MoviesPage';
import MovieDetailsPage from '../views/MovieDetailsPage';
import NotFound from '../views/NotFound';
import routes from '../routes';

const App = () => (
  <Layout>
    <Switch>
      <Route path={routes.homepage} exact component={Homepage} />
      <Route path={routes.movies} exact component={MoviesPage} />
      <Route path={routes.movieId} component={MovieDetailsPage} />
      <Route component={NotFound} />
      {/* <Redirect to={routes.homepage} /> */}
    </Switch>
  </Layout>
);

export default App;
