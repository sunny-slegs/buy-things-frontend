// ***** https://nextjs.org/docs#custom-app  this overrides the App component to 
// control page initialization, what does that mean?

import App, { Container } from 'next/app';
import Page from '../components/Page';

class MyApp extends App {
    render() {
        const { Component } = this.props;

        return (
            <Container>
                <Page>
                    <Component />
                </Page>
            </Container>
        );
    }

}

export default MyApp;