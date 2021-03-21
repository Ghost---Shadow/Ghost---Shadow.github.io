import React from 'react';

import makeStyles from '@material-ui/core/styles/makeStyles';
import Typography from '@material-ui/core/Typography';
import { DARK_GREY, VERY_LIGHT_GREY } from '../../colors';

import Icon from './icon';

import GithubIcon from '../../assets/github.svg';
import LinkedinIcon from '../../assets/linkedin.svg';
import stackoverflowIcon from '../../assets/stackoverflow.svg';

const useStyles = makeStyles({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    width: '25rem',
  },
  name: {
    display: 'flex',
    flexDirection: 'row',
    flex: 0.27,
    alignItems: 'center',
    fontSize: '3rem',
  },
  role: {
    display: 'flex',
    flexDirection: 'row',
    flex: 0.18,
    fontSize: '1.475rem',
    alignItems: 'center',
  },
  buttonRow: {
    display: 'flex',
    flexDirection: 'row',
    flex: 0.28,
    margin: '1rem 0rem',
  },
  downloadButton: {
    display: 'flex',
    flexDirection: 'row',
    flex: 0.5,
    backgroundColor: DARK_GREY,
    borderRadius: '0px',
    margin: '0.1rem',
    color: VERY_LIGHT_GREY,
    height: '3rem',
    textDecoration: 'none',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.25rem',
  },
  iconsWrapper: {
    display: 'flex',
    flexDirection: 'row',
    flex: 0.28,
  },
});

const Card = () => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <Typography className={classes.name}>Souradeep Nanda</Typography>

      <Typography className={classes.role}>Full Stack + Devops (tech generalist)</Typography>

      <div className={classes.buttonRow}>
        <a className={classes.downloadButton} href="http://www.google.com">Resume</a>

        <a className={classes.downloadButton} href="http://www.google.com">One-Pager</a>
      </div>

      <div className={classes.iconsWrapper}>
        <Icon src={LinkedinIcon} alt="linkedin" href="http://www.google.com" />
        <Icon src={GithubIcon} alt="github" href="http://www.google.com" />
        <Icon src={stackoverflowIcon} alt="stackoverflow" href="http://www.google.com" />
      </div>
    </div>
  );
};

export default Card;
