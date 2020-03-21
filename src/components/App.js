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
      <Route path={routes.HOMEPAGE} exact component={Homepage} />
      <Route path={routes.MOVIES} exact component={MoviesPage} />
      <Route path={routes.MOVIE_DETAILS_PAGE} component={MovieDetailsPage} />
      <Route component={NotFound} />
      {/* <Redirect to={routes.homepage} /> */}
    </Switch>
  </Layout>
);

export default App;
