import React, { Component } from 'react';
import 'antd/dist/antd.css';
import {connect} from 'react-redux';
import {updateBankBalance,minusBankBalance,plusBankBalance,donateMyCashToCharity} from './bankbalanceAction';
import { Layout, Menu, Button,Card,Icon,message} from 'antd';
import {
  List, Avatar, Skeleton,
} from 'antd';

const { Header, Content, Footer } = Layout;


class App extends Component {
  constructor(props){
    super(props);
    this.onPlusBankBalance = this.onPlusBankBalance.bind(this);
    this.onMinusBankBalance = this.onMinusBankBalance.bind(this);
    this.onDonateMyCashToCharity = this.onDonateMyCashToCharity.bind(this);
  }

  onPlusBankBalance(){
    this.props.onPlusBankBalance(10000);
  }
  
  onMinusBankBalance(){
    this.props.onMinusBankBalance(10000);
  }

  onDonateMyCashToCharity(){
    if(this.props.bankbalance){
      const msg = "Thank you for donation of "+this.props.bankbalance;
      message.success(msg);
      this.props.onDonateMyCashToCharity(0);
    }else{
      const msg = "You don't have enough bank balance for donation";
      message.info(msg);
      
    }
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
          <Menu.Item key="1">ACUMENTS BANK</Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <div style={{ background: '#fff', padding: 24,marginTop:24, minHeight: 280,height:"100vh" }}>
        <Card
      style={{ marginTop: 16 }}
      type="inner"
      title="Bank Balance"
      extra={[
      <Button onClick = {this.onPlusBankBalance} type="primary"   ><Icon type="plus" />10000</Button>
      ,"  ",
      <Button onClick = {this.onMinusBankBalance} type="primary" disabled={!this.props.bankbalance} ><Icon type="minus" />10000</Button>
      ,"  ",
      <Button onClick = {this.onDonateMyCashToCharity} type="primary" ><Icon type="home" /> Donate My Cash To Charity</Button>
    
    ]}
    >Balance : {this.props.bankbalance}
    </Card>
      
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
  onPlusBankBalance : plusBankBalance,
  onMinusBankBalance : minusBankBalance,
  onDonateMyCashToCharity : donateMyCashToCharity
};

export default connect(mapStateToProps,mapActionToProps)(App);
