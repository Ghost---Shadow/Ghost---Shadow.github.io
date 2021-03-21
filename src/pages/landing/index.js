import React from 'react';
// import PropTypes from "prop-types";

import makeStyles from '@material-ui/core/styles/makeStyles';
import Header from '../common/header';
import Card from './card';

import Art from '../../assets/art1.png';
import { VERY_LIGHT_GREY } from '../../colors';

const useStyles = makeStyles({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    backgroundColor: VERY_LIGHT_GREY,
  },
  headerWrapper: {
    display: 'flex',
    flexDirection: 'row',
    flex: 0.05,
  },
  bodyWrapper: {
    display: 'flex',
    flexDirection: 'row',
    flex: 0.95,
  },
  cardHalf: {
    display: 'flex',
    flexDirection: 'row',
    flex: 0.5,
    // justifyContent: 'center',
    alignItems: 'center',
  },
  cardWrapper: {
    display: 'flex',
    padding: '5rem',
  },
  visualHalf: {
    display: 'flex',
    flexDirection: 'row',
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const LandingPage = () => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <div className={classes.headerWrapper}>
        <Header />
      </div>

      <div className={classes.bodyWrapper}>
        <div className={classes.cardHalf}>
          <div className={classes.cardWrapper}>
            <Card />
          </div>
        </div>

        <div className={classes.visualHalf}>
          <img src={Art} alt="art" />
        </div>
      </div>
    </div>
  );
};

LandingPage.propTypes = {};

export default LandingPage;
