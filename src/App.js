import React from 'react';

import './App.css';


class App extends React.Component
{
  
  render()
  {
    
   
    return (
      <div>
          <div id="top-bar" class="container">
            <div class="row">
              <div class="span4">
                <form method="POST" class="search_form">
                  <input type="text" class="input-block-level search-query" Placeholder="eg. awesome table" />
                </form>
              </div>

            </div>
          </div>
          <div id="wrapper" class="container">
            <section class="navbar main-menu">
              <div class="navbar-inner main-menu">				
               
                <nav id="menu" class="pull-right">
                  <ul>
                    <li><a href="#">Indoor</a>	</li>										
                    <li><a href="#">Outdoor</a></li>
                    <li><a href="#">Best Sellers</a></li>
                  </ul>
                </nav>
              </div>
            </section>
            <section  class="homepage-slider" id="home-slider">
              <div class="flexslider">
                <ul class="slides">
                  <li>
                    <img src="assets/images/woodBG.jpg" alt="" />
                  </li>
                  <li>
                    <img src="assets/images/bigSwing.jpg" alt="" />
                    <div class="intro">
                      <h1>Mid season sale</h1>
                      <p><span>Up to 50% Off</span></p>
                      <p><span>On selected items online and in stores</span></p>
                    </div>
                  </li>
                </ul>
              </div>			
            </section>
            <section class="header_text">
              Website coming soon
            </section>
          </div>
      
      </div>
       
) } }
 export default App;