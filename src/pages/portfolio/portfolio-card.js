import React from 'react';
import PropTypes from 'prop-types';

import makeStyles from '@material-ui/core/styles/makeStyles';
import { DARK_GREY, WHITE } from '../../colors';

const COMMON_PADDING_LEFT = '10rem';
const COMMON_MARGIN_RIGHT = '1rem';

const useStyles = makeStyles({
  wrapper00: {
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
    maxHeight: '30rem',
  },
  previewSection: {
    display: 'flex',
    flexDirection: 'column',
    flex: 0.51,
  },
  titleWrapper: {
    display: 'flex',
    flexDirection: 'row',
    flex: 0.15,
    paddingLeft: COMMON_PADDING_LEFT,
    marginRight: COMMON_MARGIN_RIGHT,
    borderBottom: `5px solid ${DARK_GREY}`,
  },
  title: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    fontSize: '2rem',
    color: DARK_GREY,
  },
  imgWrapper: {
    display: 'flex',
    flexDirection: 'row',
    flex: 0.71,
    marginRight: COMMON_MARGIN_RIGHT,
    paddingLeft: COMMON_PADDING_LEFT,
  },
  img: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  projectUrlWrapper: {
    display: 'flex',
    flexDirection: 'row',
    flex: 0.14,
    marginRight: COMMON_MARGIN_RIGHT,
    paddingLeft: COMMON_PADDING_LEFT,
  },
  projectUrl: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    paddingLeft: '1rem',
    backgroundColor: WHITE,
    color: DARK_GREY,
  },
  bodySection: {
    display: 'flex',
    flexDirection: 'row',
    flex: 0.49,
  },
  bodyWrapper: {
    flex: 1,
    display: 'flex',
    padding: '1rem',
    backgroundColor: WHITE,
    color: DARK_GREY,
    overflow: 'auto',
  },
});

const PortfolioCard = ({
  title, imgSrc, projectUrl, bodyText,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper00}>
      <div className={classes.previewSection}>
        <div className={classes.titleWrapper}>
          <div className={classes.title}>{title}</div>
        </div>

        <div className={classes.imgWrapper}>
          <img className={classes.img} alt={title} src={imgSrc} />
        </div>

        <div className={classes.projectUrlWrapper}>
          <a className={classes.projectUrl} href={projectUrl}>{projectUrl}</a>
        </div>
      </div>

      <div className={classes.bodySection}>
        <div className={classes.bodyWrapper}>{bodyText}</div>
      </div>
    </div>
  );
};

PortfolioCard.propTypes = {
  title: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  projectUrl: PropTypes.string.isRequired,
  bodyText: PropTypes.string.isRequired,
};

export default PortfolioCard;
