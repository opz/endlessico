import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Container,
  Grid,
  Header,
  Image,
  List,
  Segment
} from 'semantic-ui-react';

import './Footer.css';

import logo from './EndlessICO.svg';

export default () => {
  return (
    <div className="Footer">
      <Segment secondary vertical padded="very">
        <Container>
          <Grid stackable relaxed>
            <Grid.Row columns={3} divided>
              <Grid.Column textAlign="center">
                <Image src={logo} centered className="logo" />
                <Header as="h3" className="title">
                  <span className="secondary color">&Sigma;</span>NDLESS
                  <Header.Subheader>The ICO that never ends</Header.Subheader>
                </Header>
              </Grid.Column>
              <Grid.Column>
                <Header as="h3">Contact</Header>
                <List>
                  <List.Item>
                    <List.Icon name="globe" />
                    <List.Content>
                      <a href="http://willshahda.com">
                        willshahda.com
                      </a>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Icon name="marker" />
                    <List.Content>
                      <a href="https://goo.gl/maps/W9ifePppaNm">
                        223 Bedford Ave #71, Brooklyn, NY 11211
                      </a>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Icon name="phone" />
                    <List.Content>
                      <a href="tel:3473954679">
                        (347) 395-4679
                      </a>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Icon name="mail" />
                    <List.Content>
                      <a href="mailto:will.shahda@gmail.com">
                        will.shahda@gmail.com
                      </a>
                    </List.Content>
                  </List.Item>
                </List>
              </Grid.Column>
              <Grid.Column>
                <Header as="h3">Links</Header>
                <List>
                  <List.Item>
                    <List.Content>
                      <NavLink exact to="/">About</NavLink>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Content>
                      <NavLink exact to="/terms">Terms and Conditions</NavLink>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Content>
                      <NavLink exact to="/privacy">Privacy Policy</NavLink>
                    </List.Content>
                  </List.Item>
                </List>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
      <Segment vertical padded="very" textAlign="center">
        <Container>
          Copyright &copy; 2019 Will Shahda. All Rights Reserved.
        </Container>
      </Segment>
    </div>
  );
};
