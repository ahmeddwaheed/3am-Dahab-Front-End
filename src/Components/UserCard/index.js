import React, {Component} from 'react';
import { Spin, Alert} from 'antd';
import 'antd/lib/grid/style/index.css';
import 'antd/lib/spin/style/index.css';
import 'antd/lib/alert/style/index.css';
import { Card } from 'antd';
const { Meta } = Card;
// import './style.css';


export default class UserCard extends Component {
    handleAddSeat(){
        const seat = {user_id: this.props.user_id, pool_id: this.props.pool_id, position: this.props.card.position};
        this.props.addSeat(seat);
    }
    handleDeleteSeat(){

    }
    render (){
        const { user, loading, error, card } = this.props;
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
                    card.id?
                    <Card className="user-card"
                      cover={<img style={{'borderRadius': '50px', 'width': '100px', 'height': '100px'}} alt="picture" src="http://www.elzmannews.com/upload/library/images/18970732.jpg" />}
                    >
                    <h3>{card.position}</h3>
                      <Meta
                        title={card.name}
                        />
                    </Card>
                    :
                    user.in_pool?

                    <Card className="user-card"
                      cover={<img style={{'borderRadius': '50px', 'width': '100px', 'height': '100px'}} alt="picture" src="http://www.elzmannews.com/upload/library/images/18970732.jpg" />}
                    >
                    <h3>{card.position}</h3>
                      <Meta
                        title={card.name}
                        />
                        <button onClick={this.handleDeleteSeat.bind(this)}> x </button>
                    </Card>
                    :
                    <Card className="user-card"
                      cover={<img style={{'borderRadius': '50px', 'width': '100px', 'height': '100px'}} alt="picture" src="http://www.shuuf.com/shof/uploads/2013/09/29/jpg/shof_3e886a816901fc9.jpg" />}
                    >
                    <h3>{card.position}</h3>
                      <Meta
                      />
                      <button onClick={this.handleAddSeat.bind(this)} > + </button>
                    </Card>
                }
                </div>
              )
        }
    }
}