import React, { Component } from 'react';
import styled, { ThemeProvider, injectGlobal } from 'styled-components';
import Header from './Header';
import Meta from './Meta';

class Page extends Component {
    render() {
        return (
            <div>
                <div>
                    <Meta /> 
                    <Header />
                </div>   
            </div>
        );
    }
}

export default Page;