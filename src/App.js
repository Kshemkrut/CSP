import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header"; //Include Heder
import Footer from "./Footer"; //Include Footer
// import styles from "./module.css";
// import logo from "./logo.svg";
import pic from "./mypic.jpg";
///home/radhika/pavani/src/mypic.jpg
class App extends React.Component {
  render() {
    return (
      <div className="maincontainer">
        <Header></Header>
        <div className="container mb-5 mt-5">
          <img id="studentReading" className="pic" src={pic} alt="pic" />
          <h2>About Us</h2>
          <img className="pic imageRight" src={pic} alt="pic" />
          <h6>
            Career Saathi Program is a selective student support program for
            meritorious students who come from financially stressed backgrounds.
            CSP handpicks world-beating minds at young age’s, mentors & assists
            them with all kinds of support, tracking their growth all along
            until they’re successfully employed. The support to each child
            ranges from administering a psychometric test, aiding in admission
            into the course of their choice, various bridge programs for a
            medium switch, assistance in applications for higher studies,
            entrance exams, scholarships and much more, while also equipping
            with next-gen employability skills.
          </h6>
          <button type="button" onClick="red">
            Learn more
          </button>
        </div>
        <div className="container">
          <h4 id="timelineHeading">
            How we achieve <br />
            The <span style={{ color: "#8890AA" }}>Im</span>possible?{" "}
          </h4>
          <div className="row">
            <div className="col-md-12">
              <div className="main-timeline">
                <a href="#" className="timeline">
                  <div className="timeline-icon">
                    {/* <i className="fa fa-globe"></i> */}
                    <img
                      src={pic}
                      alt="Conference 1"
                      height="300px"
                      width="364px"
                    />
                  </div>
                  <div className="timeline-content">
                    <h3 className="title">SELECTION CONFERENCE</h3>
                    <p className="description">
                      Career Saathi Program conducts selection conference to the
                      select the meritorious yet underprivilized students from
                      governament schools every year after completion of their
                      tenth standard. They conducts written test, group
                      discussion and interviews for selection.
                    </p>
                  </div>
                </a>
                <a href="#" className="timeline">
                  <div className="timeline-icon">
                    <i className="fa fa-rocket"></i>
                  </div>
                  <div className="timeline-content">
                    <h3 className="title">Web Developer</h3>
                    <p className="description">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Cupiditate ducimus officiis quod! Aperiam eveniet nam
                      nostrum odit quasi ullam voluptatum.
                    </p>
                  </div>
                </a>
                <a href="#" className="timeline">
                  <div className="timeline-icon">
                    <i className="fa fa-briefcase"></i>
                  </div>
                  <div className="timeline-content">
                    <h3 className="title">Web Designer</h3>
                    <p className="description">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Cupiditate ducimus officiis quod! Aperiam eveniet nam
                      nostrum odit quasi ullam voluptatum.
                    </p>
                  </div>
                </a>
                <a href="#" className="timeline">
                  <div className="timeline-icon">
                    <i className="fa fa-mobile"></i>
                  </div>
                  <div className="timeline-content">
                    <h3 className="title">Web Developer</h3>
                    <p className="description">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Cupiditate ducimus officiis quod! Aperiam eveniet nam
                      nostrum odit quasi ullam voluptatum.
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}
export default App;
