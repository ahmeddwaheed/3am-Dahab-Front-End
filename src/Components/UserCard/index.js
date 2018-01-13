import React, {Component} from 'react';
import { Spin, Alert} from 'antd';
import 'antd/lib/grid/style/index.css';
import 'antd/lib/spin/style/index.css';
import 'antd/lib/alert/style/index.css';
import { Card } from 'antd';
const { Meta } = Card;
// import './style.css';


export default class UserCard extends Component {
    constructor(){
        super()
        this.state = {
            hamada: 0,
        }
    }
    handleDeleteSeat(){

    }
    render (){
        const { user, loading, error, card} = this.props;
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
                    // Users in the pool //
                    card.id?

                    <Card className="user-card"
                      cover={<img style={{'borderRadius': '50px', 'width': '100px', 'height': '100px'}} alt="picture1" src={`http://localhost:3001${card.avatar}`} />}
                    >
                    <h3>{card.position}</h3>
                      <Meta
                        title={card.name}
                        />
                    </Card>
                    // User try to join pool //
                    :
                    this.props.in_pool == card.position?

                    <Card className="user-card"
                      cover={<img style={{'borderRadius': '50px', 'width': '100px', 'height': '100px'}} alt="picture2" src={`http://localhost:3001${this.props.user.avatar.url}`} />}
                    >
                    <h3>{card.position}</h3>
                      <Meta
                        title={card.name}
                        />
                        <button className = 'button ' onClick= {this.handleDeleteSeat.bind(this)}> x </button>
                    </Card>
                    // Empty seats //
                    :
                    <Card className="user-card"
                      cover={<img style={{'borderRadius': '50px', 'width': '100px', 'height': '100px'}} alt="picture3" src={card.avatar}/>}
                    >
                    <h3>{card.position}</h3>
                      <Meta
                      />
                      {
                          !this.props.user.in_pool?
                          <button className = 'button ' onClick= {() => {this.props.addSeat(this.props.card.position, this.props.user.id)}}> + </button>
                          :
                          null

                      }
                    </Card>

                }
                </div>
              )
        }
    }
}
