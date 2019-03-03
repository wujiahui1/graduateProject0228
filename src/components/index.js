import React, { Component } from 'react';
import { Layout, Button } from 'antd';
import Main from './main/index';
const {
    Header, Footer, Sider, Content,
} = Layout;

class Index extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Layout style={{height: "100vh"}}>
                <Header style={{color: "white"}}>导航栏</Header>
                <Content style={{padding: "0 4rem", flex: 1, background: "red"}}>
                    <Main />
                </Content>
                <Footer>底部</Footer>
            </Layout>
        )
    }
}

export default Index;