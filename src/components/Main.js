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
          <h2 className="major">About</h2>
          <span className="image main"><img src={pic01} alt="" /></span>
          <p>Lindsay Brown is a millennial software developer and project manager who ran for the US House of Representatives (a.k.a. Congress) in the 2018 Republican primary in New Jersey's 7th district, ammassing nearly 15% of the vote while raising and spending only $5,000, while continuing to work her day job full-time. Lindsay is a leader for women and young people who wish to see a more diverse-looking Republican party to complement the party's acceptance of diverse ideologies. </p>
          <p>Lindsay grew up in the Philadelphia suburbs and attended Skidmore College in Saratoga Springs, NY for her bachelors in Psychology. Graduating in 2010 at the height of the 2008 Recession, Lindsay built her career from part-time administrative roles and climbed the ranks to lead digital projects and software development efforts at Townsquare Media, the New York Post, and experiential media agency Impact XM. </p>
          <p>Lindsay is a full-stack web developer with strong familiarity of the MERN stack, SQL databases, and AWS architecture. During her political campaign of 2018, Lindsay utilized the NJ voter rolls to develop her own open source canvassing app, utilizing the Google Maps API and the Data Science Toolkit library. She is currently working on a sales and data collection tool for FDA Outsourcing (503B) Facilities that specialize in drug shortage products. Lindsay is a fan of clean, well-commented code and enjoys fiddling with CSS to perfect frontend UI and UX components.</p>
          <p>In her wealth of spare time, Lindsay oggles home decor blogs and Instagram accounts, DIYs some successful house projects and plenty of Pintrosities, and acts as guardian and Food Lady to her rescue pets (dogs: Lily, Liza; cats: Rex, Archie, Alfie). When the occasion arises, Lindsay fosters for a local Pug rescue and for a kitten rescue out of Brooklyn. Her personal Instagram feed is 99% composed of the permanent and temporary furry residents of her home. </p>
          <p> Lindsay and her husband Andrew, a pharmacist who specializes in quality and operations in the Pharma industry, own their home in Clark, New Jersey. </p>
          {close}
        </article>

        <article id="work" className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Work</h2>
          <span className="image main"><img src={pic02} alt="" /></span>
          <p><a target="_blank" href="https://lindsayluwho.github.io">Web Development Portfolio</a></p>
          {close}
        </article>

        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Press</h2>
          <span className="image main"><img src={pic03} alt="" /></span>
          <p><a target="_blank" href="https://www.youtube.com/watch?v=EkJn9sST-Fw">Jersey Matters</a>, 2017</p><p><a target="_blank" href="https://www.pastemagazine.com/articles/2017/03/why-is-this-progressive-millennial-running-for-con.html">Paste Magazine</a>, 2017</p><p><a target="_blank" href="https://medium.com/@michaelanthony_40842/the-progressive-movement-is-breaking-down-political-boundaries-across-us-505489667ee1">Medium</a>,&nbsp;2017</p><p><a target="_blank" href="https://www.nytimes.com/2017/03/22/nyregion/women-state-local-government.html">The New York Times</a>, 2017</p><p><a target="_blank" href="http://salutemag.com/meet-lindsay-brown-coming-face-millennial-politics/">Salute Magazine</a>, 2017</p><p><a target="_blank" href="https://www.thecut.com/2018/01/10-women-running-for-political-office-to-watch-in-2018.html">New York Magazine:</a> The Cut, 2018</p><p><a target="_blank" href="https://www.insidernj.com/cd7-flashpoint-running-republican-brown-says-democrats-will-never-beat-lance/">Insider New Jersey</a>, 2018</p><p><a target="_blank" href="https://wamu.org/story/18/02/02/a-conservatives-view-of-the-trump-presidency-and-whats-next-for-metoo/">WMAU 88.5</a>, 2018</p><p><a target="_blank" href="https://www.yahoo.com/news/sister-act-us-women-stampede-toward-elected-office-013135613.html">Yahoo News</a>, 2018&nbsp;</p><p><a target="_blank" href="https://www.bustle.com/p/young-republican-women-are-ready-to-run-the-reasons-why-will-totally-surprise-you-8405339">Bustle,</a> 2018</p><p><a target="_blank" href="https://www.msnbc.com/katy-tur/watch/avengers-a-progressive-republican-and-software-engineer-challenge-incumbent-men-1180674116002">MSNBC</a>, 2018</p><p><a target="_blank" href="https://www.imdb.com/title/tt9070958/">The Pink Waves,</a> documentary, 2018</p>
          {close}
        </article>

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Contact</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li><input type="submit" value="Send Message" className="special" /></li>
              <li><input type="reset" value="Reset" /></li>
            </ul>
          </form>
          <ul className="icons">
            <li><a href="https://twitter.com/lindsaybrownnj7" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
            <li><a href="https://facebook.com/LindsayBrownforCongress" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
            <li><a href="https://instagram.com/lindsaybrownforcongress" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
            <li><a href="https://github.com/lindsayluwho" className="icon fa-github"><span className="label">GitHub</span></a></li>
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