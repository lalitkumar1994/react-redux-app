import React, { Component } from 'react';
import './App.css';
import 'antd/dist/antd.css';
import {connect} from 'react-redux';
import {updateBankBalance,minusBankBalance,plusBankBalance,donateMyCashToCharity} from './bankbalanceAction';
import { Layout, Menu, Button  } from 'antd';

const { Header, Content, Footer } = Layout;


class App extends Component {
  constructor(props){
    super(props);
    this.onUpdateBalance = this.onUpdateBalance.bind(this);
    this.onPlusBankBalance = this.onPlusBankBalance.bind(this);
    this.onMinusBankBalance = this.onMinusBankBalance.bind(this);
    this.onDonateMyCashToCharity = this.onDonateMyCashToCharity.bind(this);
  }

  onUpdateBalance(){
    this.props.onUpdateBalance(10000);
  }

  onPlusBankBalance(){
    this.props.onPlusBankBalance(10000);
  }
  
  onMinusBankBalance(){
    this.props.onMinusBankBalance(10000);
  }

  onDonateMyCashToCharity(){
    this.props.onDonateMyCashToCharity(0);
  }

  render() {
    console.log(this.props);
    return (
          
      <Layout className="layout" style={{height:"100vh"}}>
      <Header>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item key="1">ACUMENTS</Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <div style={{ background: '#fff', padding: 24,marginTop:24, minHeight: 280,height:"100vh" }}>
        <h1>BANK BALAMCE : {this.props.bankbalance}</h1>
        
        <div>
        <Button onClick = {this.onUpdateBalance} type="primary">Reset Balance by 10000</Button>
        <Button onClick = {this.onPlusBankBalance} type="primary"   >+10000</Button>
        <Button onClick = {this.onMinusBankBalance} type="primary" disabled={!this.props.bankbalance} >-10000</Button>
        <Button onClick = {this.onDonateMyCashToCharity} type="primary" disabled={!this.props.bankbalance}>DonateMyCashToCharity</Button>
      
        </div>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        
      </Footer>
    </Layout>      
      
            
    );
  }
}

const mapStateToProps = state =>({
  bankbalance : state.bankbalance,
});

const mapActionToProps = {
  onUpdateBalance : updateBankBalance,
  onPlusBankBalance : plusBankBalance,
  onMinusBankBalance : minusBankBalance,
  onDonateMyCashToCharity : donateMyCashToCharity
};

export default connect(mapStateToProps,mapActionToProps)(App);
