import React, {Component} from 'react';
import { Spin, Alert} from 'antd';
import 'antd/lib/grid/style/index.css';
import 'antd/lib/spin/style/index.css';
import 'antd/lib/alert/style/index.css';
import { Card, Icon, Avatar } from 'antd';
const { Meta } = Card;
// import './style.css';


export default class UserCard extends Component {
    constructor(){
        super()
        this.state= {
            check: false
        }
    }
    componentWillMount(){
        this.props.getUser(1);
    }
    handleAction(){
        this.props.getRequest(this.props.user_id);
        const request = this.props.request;
        if(request.is_accepted){
            this.setState({check: true});
        }
    }
    render (){
        const { user, loading, error} = this.props;
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
                <div>
                {
                    this.state.check || user.in_pool? 

                    <Card bordered hoverable className="user-card"
                      cover={<img alt="picture" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
                    >
                      <Meta
                        title={user.username}
                        description="This is the description"
                      />
                    </Card>
                    :
                    <Card bordered hoverable className="user-card"
                      cover={<img alt="picture" src="http://theusabulletin.com/wp-content/uploads/2017/03/grid-cell-14740-1490981787-7.jpg" />}
                    >
                      <Meta
                      />
                      <button onClick={this.handleAction.bind(this)}> + </button>
                    </Card>
                }
                </div>
              )
        }
    }
}