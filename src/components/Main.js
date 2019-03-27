import React from 'react'
import PropTypes from 'prop-types'

import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'

class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div ref={this.props.setWrapperRef} id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="intro" className={`${this.props.article === 'intro' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Intro</h2>
          <p> A retired Army combat veteran, Peter started yoga to manage the stress of living as a civilian with post-traumatic stress. </p>
          <span className="image main"><img src={pic01} style={{"width":"200px", "height":"200px", "borderRadius":"50%", "float":"left", "padding":"10px"}} alt="" /></span>
          <p>He has been teaching Korean yoga, meditation, and Qi Gong for the last three years, and has recently completed 200-hour vinyasa flow teacher training.</p>
          <p> His 22 years of bodywork experience in reiki, sport and deep tissue massage, provide him with a wealth of knowledge about body alignment, ergonomics, and an intuitive understanding of his student’s physical and energetic bodies. Peter’s teaching is always changing and evolving, and he brings a playful energy to classes that are often described as physically challenging and relaxing. </p>
          {close}
        </article>

        <article id="work" className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Work</h2>
          <span className="image main"><img src={pic02} alt="" /></span>
          <p><a href="https://www.yogaalliance.org/TeacherPublicProfile?tid=218980&fbclid=IwAR1b-02TXgih9VfUFh2AAFRqWWH4JQgFKlLjqBW6N9TPY5_UaVolqeOVsEY">Yoga Alliance</a></p>
          <p><strong>Power Brain Training Center, Fairfax, VA</strong><br/>
  Yoga Instructor / Assistant Studio Manager <em>June 2017 – December 2017</em><br/>
Taught between 3 to 8 group yoga classes for 4 to 16 students a week<br/>
Taught one Power Brain (kids yoga) class for 1 to 3 students a week<br/>
Taught 1 to 3 one-on-one individual yoga sessions a week<br/>
<br/>
<strong>Body and Brain Yoga, Alexandria, VA / Burke, VA</strong><br/>
  Outreach Coordinator / Yoga Instructor / Workshop Assistant   <em>April 2017 – June 2017</em><br/>
Taught between 1 to 3 group yoga classes for 3 to 9 students a week<br/><br/>

<strong>Body and Brain Yoga, Beltsville, MD</strong><br/>
  Yoga Instuctor   <em>December 2016 – January 2017</em><br/>
Taught a weekly group yoga class for 5 to15 students<br/>
  Assistant Yoga Instructor (September, 2014 – November, 2016)<br/>
Assisted primary instructors during outreach events, and group instruction<br/>
Maintained yoga studio, managed stock, and assisted with yoga studio marketing<br/>
Instructed yoga classes when primary instructors were unavalible<br/>
</p>
          {close}
        </article>

        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">About</h2>
          <span className="image main"><img src={pic03} alt="" /></span>
          <p>Lorem ipsum dolor sit amet, consectetur et adipiscing elit. Praesent eleifend dignissim arcu, at eleifend sapien imperdiet ac. Aliquam erat volutpat. Praesent urna nisi, fringila lorem et vehicula lacinia quam. Integer sollicitudin mauris nec lorem luctus ultrices. Aliquam libero et malesuada fames ac ante ipsum primis in faucibus. Cras viverra ligula sit amet ex mollis mattis lorem ipsum dolor sit amet.</p>
          {close}
        </article>

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <ul className="icons" style={{"textAlign":"center"}}>
            <li><a href="http://www.facebook.com/peterturtlewolf" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
          </ul>
          {close}
        </article>

      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main