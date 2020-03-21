import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../../routes';

const styles = {
  container: { textAlign: 'center' },
  status: { fontSize: 96, marginBottom: 16 },
};

const NotFound = () => (
  <div style={styles.container}>
    <h1 style={styles.status}>404</h1>
    <p>
      Sorry, page not found, go to <Link to={routes.HOMEPAGE}>homepage</Link>.
    </p>
  </div>
);

export default NotFound;
