import React, { Component } from 'react'
import './home.sass'
import { Layout, Button } from 'antd'

const { Header, Footer, Sider, Content } = Layout

class Home extends Component {
  render() {
    return (
      <div className="p-home">
        <Layout>
          <Sider>Sider</Sider>
          <Layout>
            <Header>Header</Header>
            <Content>
              <Button type="primary">按钮</Button>
            </Content>
            <Footer>Footer</Footer>
          </Layout>
        </Layout>
      </div>
    )
  }
}

export default Home
