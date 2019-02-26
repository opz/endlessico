import React from 'react';
import { Button, Container, Divider, Grid, Header } from 'semantic-ui-react';
import classNames from 'classnames';

import './PageHeader.css';

export default props => {
  const {
    children,
    title,
    subtitle,
    callToAction,
    onCallToAction,
    fullscreen
  } = props;

  const classes = classNames('PageHeader', fullscreen && 'fullscreen');

  return (
    <div className={classes}>
      <Container>
        <Grid verticalAlign="middle">
          <Grid.Row>
            <Grid.Column textAlign="center">
              <Header as="h1" textAlign="center" className="title">
                {title}
                <Header.Subheader>
                  {subtitle}
                </Header.Subheader>
              </Header>
              <Divider hidden />
              <Button primary onClick={onCallToAction}>{callToAction}</Button>
              {children && (<Divider hidden />)}
              {children}
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </div>
  );
};
