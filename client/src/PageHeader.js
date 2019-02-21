import React from 'react';
import { Button, Divider, Grid, Header } from 'semantic-ui-react';

import './PageHeader.css';

export default props => {
  const {
    title,
    subtitle,
    callToAction,
    onCallToAction
  } = props;

  return (
    <div className="PageHeader">
      <Grid verticalAlign="middle" textAlign="center">
        <Grid.Row>
          <Grid.Column>
            <Header as="h1" textAlign="center" className="title">
              {title}
              <Header.Subheader>
                {subtitle}
              </Header.Subheader>
            </Header>
            <Divider hidden />
            <Button primary onClick={onCallToAction}>{callToAction}</Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
