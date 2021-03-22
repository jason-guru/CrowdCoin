import React, { Component } from 'react';
import { Form, Button, Input } from 'semantic-ui-react';
import Layout from '../../components/layout';
import web3 from '../../ethereum/web3';
import factory from '../../ethereum/factory';
import { Router } from '../../routes';

class CampaignNew extends Component {
    static async getInitialProps() {
        const accounts = await web3.eth.getAccounts();
        return {
            accounts
        }
    }
    componentDidMount() {
        console.log(this.props);
    }
    state = {
        minimumContribution: '',
        loading: false,
    }

    onSubmit = async event => {
        event.preventDefault();
        this.setState({loading: true})
        try {
            const accounts = await ethereum.request({ method: 'eth_accounts' });
            await factory.methods.createCampaign(this.state.minimumContribution)
                .send({
                    from: accounts[0]
                });
            Router.pushRoute('/');
        } catch (error) {
            console.log(error);
        }

        this.setState({ loading: false });
    }

    render() {
        return (
            <Layout>
                <h3>Create a Campaign</h3>
                <Form onSubmit={this.onSubmit}>
                    <Form.Field>
                        <label htmlFor="">Minimum Contribution</label>
                        <Input
                            label="wei"
                            labelPosition="right"
                            type="number"
                            value={this.state.minimumContribution}
                            onChange={
                                event => this.setState({minimumContribution: event.target.value})
                            }
                            />
                    </Form.Field>
                    <Button loading={this.state.loading}  type='submit' primary>Submit</Button>
                </Form>
            </Layout>
        );
    }
}

export default CampaignNew;