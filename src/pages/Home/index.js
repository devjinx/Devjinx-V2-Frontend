import React from 'react';

// Import Bootstrap and custom CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import devjinx from '../assets/img/index.png'

// FontAwesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faStar, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const App = () => {
  return (
    <div id="page-top">
      {/* Navigation */}
      <nav className="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
        <div className="container">
          <a className="navbar-brand" href="#page-top">DEVJINX</a>
          <button
            className="navbar-toggler text-uppercase font-weight-bold text-white rounded"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{ backgroundColor: '#354b60' }}
          >
            Menu
            <FontAwesomeIcon icon={faBars} />
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded" href="#about">About</a></li>
              <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded" href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Masthead */}
      <header className="masthead bg-white text-black text-center">
        <div className="container d-flex align-items-center flex-column">
          {/* Masthead Avatar Image */}
          <img className="masthead-avatar mb-5" src={devjinx} alt="..." />
          {/* Masthead Heading */}
          <h1 className="masthead-heading text-uppercase mb-0">DEVJINX</h1>
          {/* Icon Divider */}
          <div className="divider-custom divider-dark">
            <div className="divider-custom-line"></div>
            <div className="divider-custom-icon"><FontAwesomeIcon icon={faStar} /></div>
            <div className="divider-custom-line"></div>
          </div>
          {/* Masthead Subheading */}
          <p className="masthead-subheading font-weight-light mb-0">Software Engineering - Full Stack Developer - Student at SIT Kmutt</p>
        </div>
      </header>

      {/* About Section */}
      <section className="page-section bg-secondary text-white mb-0" id="about">
        <div className="container">
          {/* About Section Heading */}
          <h2 className="page-section-heading text-center text-uppercase text-white">About me</h2>
          {/* Icon Divider */}
          <div className="divider-custom divider-light">
            <div className="divider-custom-line"></div>
            <div className="divider-custom-icon"><FontAwesomeIcon icon={faStar} /></div>
            <div className="divider-custom-line"></div>
          </div>
          {/* About Section Content */}
          <div className="row">
            <div className="col-lg-4 ms-auto">
              <p className="lead">
                Hello! My name is Thanakorn Chareonlertkamol, but you can call me Jin. I'm currently a student at King Mongkut's University of Technology Thonburi, where I'm studying in the Faculty of Information Technology. I have two main passions: coding and cooking. I love the challenge and creativity involved in both, whether it's writing a complex piece of code or experimenting with new recipes in the kitchen. While I may not have notable achievements just yet, I'm determined to carve out a successful career in the IT industry. My ultimate goal is to become a senior manager and eventually own my own IT company. I believe that paying attention to the little details can make a big difference, and I apply this principle both in my studies and in my personal projects. I live by the motto: "Hard work produces luck and success." I am committed to working diligently towards my goals and believe that this hard work will pave the way to my success.
              </p>
            </div>
            <div className="col-lg-4 me-auto">
              <p className="lead">
                As a budding full stack developer, I have hands-on experience with a wide array of technologies. I am proficient in Next.js, React.js, Vue.js, TypeScript, Express.js, SQL, and more. My toolkit also includes Azure, Firebase, AWS, Cloudflare, MongoDB, Tailwind CSS, Bootstrap, Figma, MySQL, AngularJS, Apache HTTP Server, and Nginx. These skills enable me to build comprehensive, scalable, and efficient web applications from the ground up.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Separate Section */}
      <section className="page-section">
        <h1></h1>
      </section>

      {/* Footer */}
      <footer className="page-section bg-secondary text-center text-white mb-0" id="contact">
        <div className="container">
          {/* About Section Heading */}
          <h2 className="page-section-heading text-uppercase text-white">CONTACT ME</h2>
          {/* Icon Divider */}
          <div className="divider-custom divider-light">
            <div className="divider-custom-line"></div>
            <div className="divider-custom-icon"><FontAwesomeIcon icon={faStar} /></div>
            <div className="divider-custom-line"></div>
          </div>
          <div className="row">
            {/* Footer Location */}
            <div className="col-lg-4 mb-5 mb-lg-0">
              <h4 className="text-uppercase mb-4">Location</h4>
              <p className="lead mb-0">
                55/758 Soi 10/2 Prueklada1 Village Rangsit Khlong 4 Lat Sawai Subdistrict
                <br />Lam Luk Ka District Pathum Thani 12150
              </p>
            </div>
            {/* Footer Social Icons */}
            <div className="col-lg-4 mb-5 mb-lg-0">
              <h4 className="text-uppercase mb-4">Around the Web</h4>
              <a className="btn btn-outline-light btn-social mx-1" href="https://www.instagram.com/jinn_.near/"><FontAwesomeIcon icon={faInstagram} /></a>
              <a className="btn btn-outline-light btn-social mx-1" href="https://github.com/devjinx"><FontAwesomeIcon icon={faGithub} /></a>
              <a className="btn btn-outline-light btn-social mx-1" href="https://www.linkedin.com/in/thanakorn-chareonlertkamol-67974822a/"><FontAwesomeIcon icon={faLinkedinIn} /></a>
              <a className="btn btn-outline-light btn-social mx-1" href="mailto:contact@devjinx.com"><FontAwesomeIcon icon={faEnvelope} /></a>
              <a className="btn btn-outline-light btn-social mx-1" href="tel:+66624913982"><FontAwesomeIcon icon={faPhone} /></a>
            </div>
            {/* Footer About Text */}
            <div className="col-lg-4">
              <h4 className="text-uppercase mb-4">About Hiring Details</h4>
              <p className="lead mb-0">
                In case you want to make a programme with me you can contact me or have something is a big problem.
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Copyright Section */}
      <div className="copyright py-4 text-center text-white">
        <div className="container">
          <small>Copyright &copy; <span id="currentYear"></span> DEVJINX</small>
        </div>
      </div>

      {/* Bootstrap core JS */}
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
      {/* Core theme JS */}
      <script src="js/scripts.js"></script>
    </div>
  );
};

export default App;
