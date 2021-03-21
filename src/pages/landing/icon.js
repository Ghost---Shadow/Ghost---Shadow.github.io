import React from 'react';
import PropTypes from 'prop-types';

import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles({
  href: {
    display: 'flex',
  },
  img: {
    width: '2.5rem',
    height: '2.5rem',
    marginRight: '1rem',
  },
});

const Icon = ({ src, alt, href }) => {
  const classes = useStyles();
  return (
    <a className={classes.href} href={href}>
      <img className={classes.img} src={src} alt={alt} />
    </a>
  );
};

Icon.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};

export default Icon;
