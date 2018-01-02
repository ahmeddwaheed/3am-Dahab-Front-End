import React, {Component} from 'react';
import { Spin, Alert} from 'antd';
import 'antd/lib/grid/style/index.css';
import 'antd/lib/spin/style/index.css';
import 'antd/lib/alert/style/index.css';
import { Card, Icon, Avatar } from 'antd';
const { Meta } = Card;
// import './style.css';


export default class UserCard extends Component {
    componentWillMount(){
        this.props.getUser(1);
    }
    render (){
        const { user, loading, error } = this.props;
        if(loading){
            return (
                <Spin />
            )
        }
        else if(error){
            return (
                <Alert
                    message={error}
                    type="error"
                />
            )
        }
        else{
            return (
                <Card bordered hoverable className="user-card"
                  cover={<img alt="picture" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
                >
                  <Meta
                    title={user.username}
                    description="This is the description"
                  />
                </Card>
              )
        }
    }
}
