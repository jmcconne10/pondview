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
              This is a surprise number 3! 
              <br/>Don't miss to use our cheap abd best bootstrap templates.
            </section>
            <section class="main-content">
              <div class="row">
                <div class="span12">													
                  <div class="row">
                    <div class="span12">
                      <h4 class="title">
                        <span class="pull-left"><span class="text"><span class="line">Featured <strong>Products</strong></span></span></span>
                        <span class="pull-right">
                          <a class="left button" href="#myCarousel" data-slide="prev"></a><a class="right button" href="#myCarousel" data-slide="next"></a>
                        </span>
                      </h4>
                      <div id="myCarousel" class="myCarousel carousel slide">
                        <div class="carousel-inner">
                          <div class="active item">
                            <ul class="thumbnails">												
                              <li class="span3">
                                <div class="product-box">
                                  <span class="sale_tag"></span>
                                  <p><a href="#"><img src="assets/images/items/christmas.jpg" alt="" /></a></p>
                                  <a href="#" class="title">Ut wisi enim ad</a><br/>
                                  <a href="#" class="category">Commodo consequat</a>
                                  <p class="price">$17.25</p>
                                </div>
                              </li>
                              <li class="span3">
                                <div class="product-box">
                                  <span class="sale_tag"></span>
                                  <p><a href="#"><img src="assets/images/items/swing.jpg" alt="" /></a></p>
                                  <a href="#" class="title">Quis nostrud exerci tation</a><br/>
                                  <a href="#" class="category">Quis nostrud</a>
                                  <p class="price">$32.50</p>
                                </div>
                              </li>
                              <li class="span3">
                                <div class="product-box">
                                  <p><a href="#"><img src="assets/images/items/table.jpg" alt="" /></a></p>
                                  <a href="#" class="title">Know exactly turned</a><br/>
                                  <a href="#" class="category">Quis nostrud</a>
                                  <p class="price">$14.20</p>
                                </div>
                              </li>
                              <li class="span3">
                                <div class="product-box">
                                  <p><a href="#"><img src="assets/images/items/tubTray.jpg" alt="" /></a></p>
                                  <a href="#" class="title">You think fast</a><br/>
                                  <a href="#" class="category">World once</a>
                                  <p class="price">$31.45</p>
                                </div>
                              </li>
                            </ul>
                          </div>
                          <div class="item">
                            <ul class="thumbnails">
                              <li class="span3">
                                <div class="product-box">
                                  <p><a href="#"><img src="assets/images/items/laundry.jpg" alt="" /></a></p>
                                  <a href="#" class="title">Know exactly</a><br/>
                                  <a href="#" class="category">Quis nostrud</a>
                                  <p class="price">$22.30</p>
                                </div>
                              </li>

                              <li class="span3">
                                <div class="product-box">
                                  <p><a href="#"><img src="assets/images/items/stoveCover.jpg" alt="" /></a></p>
                                  <a href="#" class="title">Quis nostrud exerci</a><br/>
                                  <a href="#" class="category">Quis nostrud</a>
                                  <p class="price">$35.50</p>
                                </div>
                              </li>																																	
                            </ul>
                          </div>
                        </div>							
                      </div>
                    </div>						
                  </div>
                  <br/>
                  <div class="row">
                    <div class="span12">
                      <h4 class="title">
                        <span class="pull-left"><span class="text"><span class="line">Latest <strong>Products</strong></span></span></span>
                        <span class="pull-right">
                          <a class="left button" href="#myCarousel-2" data-slide="prev"></a><a class="right button" href="#myCarousel-2" data-slide="next"></a>
                        </span>
                      </h4>
                      <div id="myCarousel-2" class="myCarousel carousel slide">
                        <div class="carousel-inner">
                          <div class="active item">
                            <ul class="thumbnails">												
                              <li class="span3">
                                <div class="product-box">
                                  <span class="sale_tag"></span>
                                  <p><a href="#"><img src="assets/images/items/Yardzee.jpg" alt="" /></a></p>
                                  <a href="#" class="title">Ut wisi enim ad</a><br/>
                                  <a href="#" class="category">Commodo consequat</a>
                                  <p class="price">$25.50</p>
                                </div>
                              </li>
                              <li class="span3">
                                <div class="product-box">
                                  <p><a href="#"><img src="assets/images/items/tubTray.jpg" alt="" /></a></p>
                                  <a href="#" class="title">Quis nostrud exerci tation</a><br/>
                                  <a href="#" class="category">Quis nostrud</a>
                                  <p class="price">$17.55</p>
                                </div>
                              </li>
                              <li class="span3">
                                <div class="product-box">
                                  <p><a href="#"><img src="assets/images/items/table.jpg" alt="" /></a></p>
                                  <a href="#" class="title">Know exactly turned</a><br/>
                                  <a href="#" class="category">Quis nostrud</a>
                                  <p class="price">$25.30</p>
                                </div>
                              </li>
                              <li class="span3">
                                <div class="product-box">
                                  <p><a href="#"><img src="assets/images/items/swing.jpg" alt="" /></a></p>
                                  <a href="#" class="title">You think fast</a><br/>
                                  <a href="#" class="category">World once</a>
                                  <p class="price">$25.60</p>
                                </div>
                              </li>
                            </ul>
                          </div>
                          <div class="item">
                            <ul class="thumbnails">
                              <li class="span3">
                                <div class="product-box">
                                  <p><a href="#"><img src="assets/images/items/stoveCover.jpg" alt="" /></a></p>
                                  <a href="#" class="title">Know exactly</a><br/>
                                  <a href="#" class="category">Quis nostrud</a>
                                  <p class="price">$45.50</p>
                                </div>
                              </li>
                             																															
                            </ul>
                          </div>
                        </div>							
                      </div>
                    </div>						
                  </div>
                  <div class="row feature_box">						
                    <div class="span4">
                      <div class="service">
                        <div class="responsive">	
                          <img src="assets/images/feature_img_2.png" alt="" />
                          <h4>MODERN <strong>DESIGN</strong></h4>
                          <p>Lorem Ipsum is simply dummy text of the printing and printing industry unknown printer.</p>									
                        </div>
                      </div>
                    </div>
                    <div class="span4">	
                      <div class="service">
                        <div class="customize">			
                          <img src="assets/images/feature_img_1.png" alt="" />
                          <h4>AFFORDABLE <strong>PRICES</strong></h4>
                          <p>Lorem Ipsum is simply dummy text of the printing and printing industry unknown printer.</p>
                        </div>
                      </div>
                    </div>
                    <div class="span4">
                      <div class="service">
                        <div class="support">	
                          <img src="assets/images/feature_img_3.png" alt="" />
                          <h4>PERSONALIZED <strong>GIFTS</strong></h4>
                          <p>Lorem Ipsum is simply dummy text of the printing and printing industry unknown printer.</p>
                        </div>
                      </div>
                    </div>	
                  </div>		
                </div>				
              </div>
            </section>
            <section class="our_client">
              <h4 class="title"><span class="text">Wood</span></h4>
              <div class="row">					
                <div class="span2">
                  <a href="#">Pine</a>
                </div>
                <div class="span2">
                  <a href="#">Treated Pine</a>
                </div>
                <div class="span2">
                  <a href="#">Oak</a>
                </div>
                <div class="span2">
                  <a href="#">Cedar</a>
                </div>

              </div>
            </section>
            <section id="footer-bar">
              <div class="row">
                <div class="span3">
                  <h4>Navigation</h4>
                  <ul class="nav">
                    <li><a href="#">Homepage</a></li>  
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Contac Us</a></li>
                    <li><a href="#">Your Cart</a></li>
                    <li><a href="#">Login</a></li>							
                  </ul>					
                </div>
                <div class="span4">
                  <h4>My Account</h4>
                  <ul class="nav">
                    <li><a href="#">My Account</a></li>
                    <li><a href="#">Order History</a></li>
                    <li><a href="#">Wish List</a></li>
                    <li><a href="#">Newsletter</a></li>
                  </ul>
                </div>
                <div class="span5">
                  <p class="logo">TheRichShop</p>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. the  Lorem Ipsum has been the industry's standard dummy text ever since the you.</p>
                  <br/>
                  <span class="social_icons">
                    <a class="facebook" href="#">Facebook</a>
                    <a class="twitter" href="#">Twitter</a>
                    <a class="skype" href="#">Skype</a>
                    <a class="vimeo" href="#">Vimeo</a>
                  </span>
                </div>					
              </div>	
            </section>
            <section id="copyright">
              <span>Copyright@2020.</span>
            </section>
          </div>
      
      </div>
       
) } }
 export default App;