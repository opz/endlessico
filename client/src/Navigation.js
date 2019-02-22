import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Icon, Image, Menu, Responsive, Sidebar } from 'semantic-ui-react';
import NavigationItems from './NavigationItems';
import NetworkStatus from './NetworkStatus';

import './Navigation.css';

class Navigation extends Component {
  state = {
    visible: false
  };

  onSidebarClick = () => {
    const { visible } = this.state;
    this.setState({ visible: !visible });
  };

  onPusherClick = () => {
    const { visible } = this.state;

    if (visible) {
      this.setState({ visible: false });
    }
  }

  render() {
    const { web3, logo, children } = this.props;
    const { visible } = this.state;

    return (
      <div className="Navigation">
        <Sidebar.Pushable>
          <Sidebar as={Menu} animation="overlay" vertical visible={visible}>
            <NetworkStatus web3={web3} />
            <NavigationItems />
          </Sidebar>
          <Sidebar.Pusher onClick={this.onPusherClick} dimmed={visible}>
            <Menu fixed="top">
              <Menu.Item as={NavLink} exact to="/" header>
                <Image src={logo} />
              </Menu.Item>
              <Responsive
                as={Menu.Menu}
                minWidth={Responsive.onlyTablet.minWidth}
              >
                <NetworkStatus web3={web3} />
              </Responsive>
              <Responsive
                as={Menu.Menu}
                position="right"
                minWidth={Responsive.onlyTablet.minWidth}
              >
                <NavigationItems />
              </Responsive>
              <Responsive
                {...Responsive.onlyMobile}
                as={Menu.Menu}
                position="right"
              >
                <Menu.Item onClick={this.onSidebarClick}>
                  <Icon name="sidebar" />
                </Menu.Item>
              </Responsive>
            </Menu>
            <div className="SidebarPusherChildren">
              {children}
            </div>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    );
  }
}

export default Navigation;
