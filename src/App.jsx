import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation,  Content } from 'react-mdl';
import Main from './components/main';


class App extends Component {
    render() {
        return ( 
            <div className="demo-big-content">
                <Layout>
                    <Header className="header-color" title={<a href="/"  style={{textDecoration: 'none', color: 'white'}}> به وب سایت پیمانکاری رنگ و سندبلاست نجفی  خوش آمدید </a>} scroll>
                        <Navigation>
                            <a href="/aboutme"> تماس با ما</a>
                            <a href="/resume">درباره ما</a>
                            <a href="/">صفحه اصلی</a>
                        </Navigation>
                    </Header>
                    <Main />
                    <Content>
                        <div className="page-content" />
                    </Content>

                </Layout>
            </div>
        
        );
    }
}
export default App;