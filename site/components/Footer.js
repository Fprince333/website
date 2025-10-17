import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { withStyles, Footer as ArwesFooter, Row } from 'arwes';

import TextIcon from './TextIcon';
import Wrap from './Wrap';
import Link from './Link';

const styles = theme => ({
  root: {
    textAlign: 'center',
  },
  wrap: {
    padding: [theme.padding, 0],
  },
  content: {},
  center: {
    marginBottom: theme.margin / 2,
  },
  // medium +
  [`@media screen and (min-width: ${theme.responsive.small + 1}px)`]: {
    root: {
      textAlign: 'center',
    },
    content: {
      display: 'flex',
    },
    center: {
      margin: '0 auto',
      flex: '1 1 auto',
    }
  }
});

const Footer = props => {
  const {
    theme,
    classes,
    className,
    onLink,
    ...etc
  } = props;
  const cls = cx(classes.root, className);
  return (
    <ArwesFooter className={cls} {...etc}>
      {anim => (
        <Wrap className={classes.wrap}>
          <Row noMargin col s={12}>
            <div className={classes.content}>
              <div className={classes.center}>
                <TextIcon show={anim.entered} icon='copyright'>2025 Will Smith</TextIcon>
              </div>
            </div>
          </Row>
        </Wrap>
      )}
    </ArwesFooter>
  );
};

Footer.propTypes = {
  onLink: PropTypes.func,
};

export default withStyles(styles)(Footer);
