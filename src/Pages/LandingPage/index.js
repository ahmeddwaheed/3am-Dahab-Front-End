import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import {UserHeader} from '../../Containers/UserCardContainer/nav_bar'
import Coursel from '../../Components/Coursel';

export default class LandingPage extends Component {
  render (){
    return (
      <div>
      <UserHeader />
        <section>
            <h1>What is 3am Dahab?</h1>
            <p>
                3am Dahab is a website that adopt the idea of "جمعية" in the egyptian popular term.
                It's defined as ROSCA (Rotating Savings and Credit Association) in the world of economy.
                Simply the "جمعية" is a group of individuals who agree to meet for a defined period
                in order to save and borrow together, a form of combined peer-to-peer banking and peer-to-peer lending.
            </p>
        </section>
        <section>
            <h1>Why 3am Dahab?</h1>
            <div>
                <h2>Join Easily</h2>
                <p>
                    You can join a pool very easily and have your share, pay the monthly amount with just a click
                </p>
                <h2>Variety</h2>
                <p>
                    We have a variety of pools that suits your financials
                </p>
                <h2>Payment</h2>
                <p>
                    We offer multiple ways of payment. Either online payment with your credit card or offline through us.
                </p>
            </div>
        </section>
        <section>
            <h1>Pool System</h1>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/x9XTFvLCn4U" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        </section>
        <section>
            <h1>What People Say About 3am Dahab</h1>
            <Coursel />
        </section>
      </div>
    )
  }
}