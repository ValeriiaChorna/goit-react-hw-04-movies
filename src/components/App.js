import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import Layout from './Layout';
import routes from '../routes';

const Homepage = lazy(() => import('../views/Homepage'));
const MovieDetailsPage = lazy(() => import('../views/MovieDetailsPage'));
const MoviesPage = lazy(() => import('../views/MoviesPage'));
const NotFound = lazy(() => import('../views/NotFound'));

const App = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Layout>
      <Switch>
        <Route path={routes.HOMEPAGE} exact component={Homepage} />
        <Route path={routes.MOVIES} exact component={MoviesPage} />
        <Route path={routes.MOVIE_DETAILS_PAGE} component={MovieDetailsPage} />
        <Route component={NotFound} />
        {/* <Redirect to={routes.homepage} /> */}
      </Switch>
    </Layout>
  </Suspense>
);

export default App;
