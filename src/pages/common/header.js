import React from 'react';
// import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import makeStyles from '@material-ui/core/styles/makeStyles';
import { DARK_GREY, WHITE } from '../../colors';

const useStyles = makeStyles({
  wrapper: {
    display: 'flex',
    backgroundColor: WHITE,
    paddingLeft: '1rem',
    flex: 1,
    borderBottom: `5px solid ${DARK_GREY}`,
    maxHeight: '4rem',
  },
  anchor: {
    margin: '1rem 1rem 1rem 0rem',
    padding: '0rem 1rem 0rem 0rem',
    textDecoration: 'none',
    color: DARK_GREY,
    fontSize: '1.5rem',
    borderRight: `1px solid ${DARK_GREY}`,
  },
});

const Header = () => {
  const classes = useStyles();

  const links = [
    { title: 'Home', href: '/' },
    { title: 'About', href: '/about' },
    { title: 'Portfolio', href: '/portfolio' },
  ];

  const anchorDoms = links.map((link) => (
    <Link className={classes.anchor} to={link.href}>
      {link.title}
    </Link>
  ));

  return (
    <div className={classes.wrapper}>
      {anchorDoms}
    </div>
  );
};

Header.propTypes = {
};

export default Header;
