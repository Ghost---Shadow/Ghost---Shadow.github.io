import React from 'react';

import makeStyles from '@material-ui/core/styles/makeStyles';

import PortfolioCard from './portfolio-card';
import Header from '../common/header';

import { DARK_GREY, VERY_LIGHT_GREY, WHITE } from '../../colors';
import content from './content';

const useStyles = makeStyles({
  wrapper: {
    display: 'flex',
    backgroundColor: WHITE,
    flex: 1,
    flexDirection: 'column',
  },
  headerWrapper: {
    display: 'flex',
  },
  bodyWrapper: {
    display: 'flex',
    flex: 1,
    backgroundColor: VERY_LIGHT_GREY,
  },
  leftPane: {
    width: '10rem',
    borderRight: `5px solid ${DARK_GREY}`,
  },
  rightPane: {
    display: 'flex',
    flex: 1,
    marginRight: '10rem',
  },
  cardsWrapper: {
    // flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  cardWrapper: {
    margin: '10rem 0rem',
  },
  footer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '2rem',
    backgroundColor: WHITE,
    color: WHITE,
    borderTop: `5px solid ${DARK_GREY}`,
  },
});

const PortfolioPage = () => {
  const classes = useStyles();

  const cardDoms = content.map((project) => (
    <div className={classes.cardWrapper}>
      <PortfolioCard
        title={project.title}
        imgSrc={project.imgSrc}
        projectUrl={project.projectUrl}
        bodyText={project.bodyText}
      />
    </div>
  ));

  return (
    <div className={classes.wrapper}>
      <div className={classes.headerWrapper}>
        <Header />
      </div>
      <div className={classes.bodyWrapper}>
        <div className={classes.leftPane} />
        <div className={classes.rightPane}>
          <div className={classes.cardsWrapper}>
            {cardDoms}
          </div>
        </div>
      </div>
      <div className={classes.footer}>I am a ghost. Boo!</div>
    </div>
  );
};

PortfolioPage.propTypes = {
};

export default PortfolioPage;
