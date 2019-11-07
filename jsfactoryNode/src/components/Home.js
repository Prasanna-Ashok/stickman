import React from 'react';
import background from '../images/counter_background.jpg';
import '../styles/main_styles.css';
import courseb from "../images/courses_background.jpg";
import teamb from "../images/team_background.jpg";
import { Link, withRouter } from 'react-router-dom';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      course: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    let courseType = e.target.value;
    this.setState({
      course: courseType
    });
  }

  render() {
    const courseUrl = '/enroll?type=' + this.state.course;
    return (
      <div className="home-container">
        <div className="menu d-flex flex-column align-items-end justify-content-start text-right menu_mm trans_400">
          <div className="menu_close_container"><div className="menu_close"><div /><div /></div></div>
          <div className="search">
            <form action="#" className="header_search_form menu_mm">
              <input type="search" className="search_input menu_mm" placeholder="Search" required="required" />
              <button className="header_search_button d-flex flex-column align-items-center justify-content-center menu_mm">
                <i className="fa fa-search menu_mm" aria-hidden="true" />
              </button>
            </form>
          </div>
          <nav className="menu_nav">
            <ul className="menu_mm">
              <li className="menu_mm"><a href="#">Home</a></li>
              <li className="menu_mm"><a href="#">About</a></li>
              <li className="menu_mm"><a href="#">Courses</a></li>
              <li className="menu_mm"><a href="#">Contact</a></li>
            </ul>
          </nav>
        </div>
        <div className="counter">
          <div className="counter_background" style={{ backgroundImage: `url(${background})` }} />
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="counter_content">
                  <h2 className="counter_title">Book Your Slot Now</h2>
                  <div className="counter_text"><h2>We Make <strong id="strong">JavaScript Experts</strong> from Fresh Talents</h2></div>
                  <div className="milestones d-flex flex-md-row flex-column align-items-center justify-content-between">
                    <div className="milestone">
                      <div className="milestone_counter" data-end-value={15}>0</div>
                      <div className="milestone_text">years</div>
                    </div>
                    <div className="milestone">
                      <div className="milestone_counter" data-end-value={120} data-sign-after="k">0</div>
                      <div className="milestone_text">years</div>
                    </div>
                    <div className="milestone">
                      <div className="milestone_counter" data-end-value={670} data-sign-after="+">0</div>
                      <div className="milestone_text">years</div>
                    </div>
                    <div className="milestone">
                      <div className="milestone_counter" data-end-value={320}>0</div>
                      <div className="milestone_text">years</div>
                    </div>
                  </div>
                  <select name="counter_select" id="counter_select" className="counter_input counter_options sel" onChange={this.handleChange}>
                    <option>Choose Subject</option>
                    <option value="angular">Angular JS</option>
                    <option value="react">React JS</option>
                    <option value="node">Node JS</option>
                  </select>
                  <a href = {courseUrl} className = "counter_form_link"> Enroll </a>
                </div>
              </div>
              </div>
              <div className="counter_form">
                <div className="row fill_height">
                  <div className="col fill_height">
                    <form className="counter_form_content d-flex flex-column align-items-center justify-content-center" action="#">
                      <div className="counter_form_title">courses</div>
                      <input type="text" className="counter_input" placeholder="Your Name:" required="required" />
                      <input type="tel" className="counter_input" placeholder="Phone:" required="required" />
                      <input type="email" className="counter_input" placeholder="Email:" required="required" />
                      <select name="counter_select" id="counter_select" className="counter_input counter_options ">
                        <option>Choose Subject</option>
                        <option>Angular JS</option>
                        <option>React JS</option>
                        <option>Node JS</option>
                      </select>
                      <textarea className="counter_input counter_text_input" placeholder="Message:" required="required" defaultValue={""} />
                      <button type="submit" className="counter_form_button">ENQUIRE</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="features">
            <div className="container">
              <div className="row">
                <div className="col">
                  <div className="section_title_container text-center">
                    <h2 className="section_title">Welcome To JSFactory</h2>
                    <div className="section_subtitle"></div>
                  </div>
                </div>
              </div>
              <div className="row features_row">
                <div className="col-lg-3 feature_col">
                  <div className="feature text-center trans_400">
                    <div className="feature_icon"><img src="images/icon_1.png" alt="yoyo" /></div>
                    <h3 className="feature_title">The Experts</h3>
                    <div className="feature_text"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p></div>
                  </div>
                </div>
                <div className="col-lg-3 feature_col">
                  <div className="feature text-center trans_400">
                    <div className="feature_icon"><img src="images/icon_2.png" alt="yoyo" /></div>
                    <h3 className="feature_title">Book &amp; Library</h3>
                    <div className="feature_text"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p></div>
                  </div>
                </div>
                <div className="col-lg-3 feature_col">
                  <div className="feature text-center trans_400">
                    <div className="feature_icon"><img src="images/icon_3.png" alt='yoyo' /></div>
                    <h3 className="feature_title">Best Courses</h3>
                    <div className="feature_text"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p></div>
                  </div>
                </div>
                <div className="col-lg-3 feature_col">
                  <div className="feature text-center trans_400">
                    <div className="feature_icon"><img src="images/icon_4.png" alt='yoyo' /></div>
                    <h3 className="feature_title">Award &amp; Reward</h3>
                    <div className="feature_text"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="courses">
            <div className="section_background parallax-window" data-parallax="scroll" style={{ backgroundImage: `url(${courseb})` }} data-speed="0.8" />
            <div className="container">
              <div className="row">
                <div className="col">
                  <div className="section_title_container text-center">
                    <h2 className="section_title">Popular Courses</h2>
                  </div>
                </div>
              </div>
              <div className="row courses_row">
                <div className="col-lg-4 course_col">
                  <div className="course">
                    <div className="course_image"><img src="images/course_1.jpg" alt='yoyo' /></div>
                    <div className="course_body">
                      <h3 className="course_title"><a href="course.html">ReactJS</a></h3>
                      <div className="course_teacher">Vilva Athiban</div>
                      <div className="course_text">
                        <p>Lorem ipsum dolor sit amet, consectetur adipi elitsed do eiusmod tempor</p>
                      </div>
                    </div>
                    <div className="course_footer">
                      <div className="course_footer_content d-flex flex-row align-items-center justify-content-start">
                        <div className="course_info">
                          <i className="fa fa-graduation-cap" aria-hidden="true" />
                          <span>20 Student</span>
                        </div>
                        <div className="course_info">
                          <i className="fa fa-star" aria-hidden="true" />
                          <span>5 Ratings</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 course_col">
                  <div className="course">
                    <div className="course_image"><img src="images/course_2.jpg" alt='yoyo' /></div>
                    <div className="course_body">
                      <h3 className="course_title"><a href="course.html">NodeJS</a></h3>
                      <div className="course_teacher">Mohammed Sadiq</div>
                      <div className="course_text">
                        <p>Lorem ipsum dolor sit amet, consectetur adipi elitsed do eiusmod tempor</p>
                      </div>
                    </div>
                    <div className="course_footer">
                      <div className="course_footer_content d-flex flex-row align-items-center justify-content-start">
                        <div className="course_info">
                          <i className="fa fa-graduation-cap" aria-hidden="true" />
                          <span>20 Student</span>
                        </div>
                        <div className="course_info">
                          <i className="fa fa-star" aria-hidden="true" />
                          <span>5 Ratings</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 course_col">
                  <div className="course">
                    <div className="course_image"><img src="images/course_3.jpg" alt='yoyo' /></div>
                    <div className="course_body">
                      <h3 className="course_title"><a href="course.html">AngularJS</a></h3>
                      <div className="course_teacher">Senthur Athiban</div>
                      <div className="course_text">
                        <p>Lorem ipsum dolor sit amet, consectetur adipi elitsed do eiusmod tempor</p>
                      </div>
                    </div>
                    <div className="course_footer">
                      <div className="course_footer_content d-flex flex-row align-items-center justify-content-start">
                        <div className="course_info">
                          <i className="fa fa-graduation-cap" aria-hidden="true" />
                          <span>20 Student</span>
                        </div>
                        <div className="course_info">
                          <i className="fa fa-star" aria-hidden="true" />
                          <span>5 Ratings</span>
                        </div>
                        <div className="course_price ml-auto"><span>$320</span>$220</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="team">
            <div className="team_background parallax-window" data-parallax="scroll" style={{ backgroundImage: `url(${teamb}` }} data-speed="0.8" />
            <div className="container">
              <div className="row">
                <div className="col">
                  <div className="section_title_container text-center">
                    <h2 className="section_title">Meet the Tutors </h2>
                    <div className="section_subtitle"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel gravida arcu. Vestibulum feugiat, sapien ultrices fermentum congue, quam velit venenatis sem</p></div>
                  </div>
                </div>
              </div>
              <div className="row team_row">
                <div className="col-lg-4 col-md-6 team_col">
                  <div className="team_item">
                    <div className="team_image"><img src="images/team_1.jpg" alt='yoyo' /></div>
                    <div className="team_body">
                      <div className="team_title"><a href="#">Vilva Athiban</a></div>
                      <div className="team_subtitle">Reactjs Developer at Flipkart</div>
                      <div className="social_list">
                        <ul>
                          <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true" style={{ fontSize: 28 }} /></a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 team_col">
                  <div className="team_item">
                    <div className="team_image"><img src="images/team_3.jpg" alt='yoyo' /></div>
                    <div className="team_body">
                      <div className="team_title"><a href="#">Mohammed Sadiq</a></div>
                      <div className="team_subtitle">MEAN Stack developer at Flipkart</div>
                      <div className="social_list">
                        <ul>
                          <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true" style={{ fontSize: 28 }} /></a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 team_col">
                  <div className="team_item">
                    <div className="team_image"><img src="images/team_4.jpg" alt='yoyo' /></div>
                    <div className="team_body">
                      <div className="team_title"><a href="#">Prasanna Ashok</a></div>
                      <div className="team_subtitle">Technical Consultant</div>
                      <div className="social_list">
                        <ul>
                          <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true" style={{ fontSize: 28 }} /></a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        );
      }
    }
    
    export default withRouter(Home);
