import React, { Component } from 'react';
import withWeb3 from './utils/withWeb3';
import withContract from './utils/withContract';
import { Container, Form, Input, Message } from 'semantic-ui-react';
import Layout from './Layout';
import PageHeader from './PageHeader';
import EndlessCrowdsale from './contracts/EndlessCrowdsale.json';

class BuyTokens extends Component {
  state = {
    address: '',
    value: '0.5',
    loading: false,
    errorMessage: ''
  };

  constructor(props) {
    super(props);
    this.formRef = React.createRef();
  }

  componentDidUpdate(prevProps) {
    const { accounts } = this.props;

    if (accounts !== prevProps.accounts) {
      this.setState({ address: accounts && accounts[0] });
    }
  }

  onChange = (event, { name, value }) => this.setState({ [name]: value });

  onCallToAction = () => {
    this.formRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  onSubmit = async event => {
    event.preventDefault();

    this.setState({ loading: true, errorMessage: '' });

    const { web3, accounts, contract } = this.props;
    const { address, value } = this.state;

    try {
      await contract.methods.buyTokens(address).send({
        from: accounts[0],
        value: web3.utils.toWei(value, 'ether')
      });

      this.setState({ value: '' });
    } catch(error) {
      this.setState({ errorMessage: error.message });
    }

    this.setState({ loading: false });
  };

  render() {
    const { web3, accounts } = this.props;
    const { address, value, loading, errorMessage } = this.state;

    const title = (
      <>
        <span className="secondary color">&Sigma;</span>
        NDLESS
      </>
    );

    return (
      <Layout web3={web3} accounts={accounts}>
        <div className="BuyTokens">
          <PageHeader
            title={title}
            subtitle="The ICO that never ends"
            callToAction="Purchase Tokens"
            onCallToAction={this.onCallToAction}
          />
          <Container text>
            <div ref={this.formRef}>
              <Form
                loading={loading}
                error={!!errorMessage}
                onSubmit={this.onSubmit}
              >
                <Form.Input
                  required
                  label="Address"
                  name="address"
                  value={address}
                  onChange={this.onChange}
                />
                <Form.Field required>
                  <label>Amount (ETH)</label>
                  <Input
                    label={{ basic: true, content: <>&Xi;</> }}
                    name="value"
                    value={value}
                    onChange={this.onChange}
                  />
                </Form.Field>
                <Message error header="Error" content={errorMessage} />
                <Form.Button primary>Purchase Tokens</Form.Button>
              </Form>
            </div>
          </Container>
        </div>
      </Layout>
    );
  }
}

export default withWeb3(true)(withContract(EndlessCrowdsale)(BuyTokens));
