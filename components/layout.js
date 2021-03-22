import React from 'react';
import Header from './header';
import Head from 'next/head';
import { Container } from 'semantic-ui-react';

export default props => {
    return (
        <Container>
            <Head>
            <link
                async
                rel="stylesheet"
                href="//cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css"/>
            </Head>
            <Header/>
            {props.children}
        </Container>
    );
}