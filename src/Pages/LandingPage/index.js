import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import {UserHeader} from '../../Containers/UserCardContainer/nav_bar';
import './style.css';
import pay from './payment-method.svg';
import bag from './money-bag-with-dollar-symbol.svg';
import lock from './padlock.svg';

import joe from './joe.jpeg';
import kamal from './kamal.jpeg';
import hady from './hady.jpeg';
// import Carousel from '../../Components/Carousel';

export default class LandingPage extends Component {
  render (){
    return (
      <div>
        <UserHeader />
        <main className = 'main'>
          <section className = 'section'>
              <h1>What is Dahab?</h1>
              <p>
                   Dahab is a website that adopt the idea of "جمعية" in the egyptian popular term.
                  Its defined as ROSCA (Rotating Savings and Credit Association) in the world of economy.
                  Simply the "جمعية" is a group of individuals who agree to meet for a defined period
                  in order to save and borrow together, a form of combined peer-to-peer banking and peer-to-peer lending.
              </p>
          </section>
          <section className = 'section about'>
            <div className = 'section'>
              <h1>Why Dahab?</h1>
              <div className = 'clearfix'>
                  <div className = 'start child clearfix'>
                    <p className = 'start child-img pic'>
                      <img src = {lock} className = 'nav-img' />
                    </p>

                    <div className = 'start text'>
                      <h2>Security</h2>
                      <p>
                          You can join a pool very easily and have your share, pay the monthly amount with just a click
                      </p>
                    </div>
                  </div>
                  <div className = 'start child clearfix'>
                    <p className = 'start child-img pic'>
                      <img src = {bag} className = 'nav-img' />
                    </p>
                    <div className = 'start text'>
                      <h2>Variety</h2>
                      <p>
                          We have a variety of pools that suits your financials
                      </p>
                    </div>
                  </div>
                  <div className = 'start child clearfix '>
                    <p className = 'start child-img pic'>
                      <img src = {pay} className = 'nav-img' />
                    </p>
                    <div className = 'start text'>
                      <h2>Payment</h2>
                      <p>
                          We offer multiple ways of payment. Either online payment with your credit card or offline through us.
                      </p>
                    </div>
                  </div>
              </div>
            </div>
          </section>
          <section className = 'section'>
              <h1>Pool System</h1>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/x9XTFvLCn4U" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
          </section>
          <section className = ' clearfix  testimonials'>
            <div className = 'section'>
              <h1 className="title" >What People Say About Dahab</h1>
              <div className= 'start child'>
                <p><img className = 'testimonial-img ' src = {joe}/></p>
                <p>Joe</p>
                <q>
                  A great experience in dahab foundation!
                </q>
              </div>
              <div className= 'start child'>
                <p><img className = 'testimonial-img' src = {kamal}/></p>
                <p>Kamal</p>
                <q>
                  u r in safe hands with those guys
                </q>
              </div>
              <div className= 'start child'>
                <p><img className = 'testimonial-img' src = {hady}/></p>
                <p>Hady</p>
                <q>
                  Incredible variety of  pools , excellent experience. You rock Dahab
                </q>
              </div>
            </div>
          </section>

        </main>
      </div>
    )
  }
}
