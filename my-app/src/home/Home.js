import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Accordion from "react-bootstrap/Accordion";

import "./Home.css";
import Image1 from "../images/netflix-logo.PNG";
import Image2 from "../images/enjoySamartTv.PNG";
import Image3 from "../images/strangerThings.PNG";
import Image4 from "../images/kids.PNG";
const Home = () => {
  return (
    <React.Fragment>
      <section className="container-fluid m-0 p-0 bg-black hero">
        <div className="hero-border"></div>
        <div className="row mt-0 mx-0 p-0">
          <div className="col-md-12 m-0 p-0">
            <div className="bg m-0 p-0">
              <div className="image-overlay"></div>
            </div>
            <div className="row">
              <div className="col-md-6 logo">
                <div className="mt-3">
                  <a className="navbar-brand" href="#">
                    <img
                      src={Image1}
                      alt=""
                      className="img-fluid "
                      style={{ height: 27, width: 160 }}
                    />
                  </a>
                </div>
              </div>
              <div className="col-auto ms-auto logo-button">
                <button type="button" className="btn logo-color">
                  Sign in
                </button>
              </div>
            </div>
            <div className="content">
              <p className=" fs-1 fw-bold text-white content-hero text-center justify-content-center">
                Unlimited movies, TV shows, and more
              </p>
              <p className="watch text-white fs-3 fw-normal justify-content-center">
                Watch anywhere. Cancel anytime.
              </p>
              <p className="email text-white fs-3 fw-normal justify-content-center">
                Ready to watch? Enter your email to create or restart your
                membership.
              </p>
              <div className="d-flex">
                <div className="form-floating mb-3 ">
                  <input
                    type="email"
                    className="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                    style={{ width: 450 }}
                  />
                  <label for="floatingInput">Email address</label>
                </div>
                <button
                  type="button"
                  className="btn  btn-lg email-button rounded "
                  style={{ width: 180, height: 57 }}
                >
                  Get Started
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    class="bi bi-chevron-right"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* SECTION ENJOY */}
      <section className="bg-black py-5 border-top">
        <div className="container">
          <div className="row flex-lg-row justify-content-center align-items-center">
            <div className="col-sm-12 col-md-6 col-lg-6">
              <h1 className="fw-bold text-white heading">Enjoy on your TV</h1>
              <div className="m-0">
                <p className="fs-4 fw-normal text-white m-0 ">
                  Watch on Smart TVs, Playstation, Xbox,
                </p>
                <p className="fs-4 fw-normal text-white ">
                  Chromecast, Apple TV, Blu-ray players, and more.
                </p>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6">
              <div>
                <img
                  src={Image2}
                  alt=""
                  className="img-fluid "
                  style={{ height: 300, width: 600 }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* SECTION STRANGER */}
      <section className="bg-black py-5 border-top">
        <div className="container">
          <div className="row flex-lg-row justify-content-center align-items-center">
            <div className="col-sm-12 col-md-6 col-lg-6">
              <div>
                <img
                  src={Image3}
                  alt=""
                  className="img-fluid mx-5 "
                  style={{ height: 300, width: 300 }}
                />
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6">
              <h1 className="heading fw-bold text-white">
                Download your shows to watch offline
              </h1>
              <div className="m-0">
                <p className="fs-4 fw-normal text-white m-0 ">
                  Save your favorites easily and always have something to watch.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* SECTION WATCH */}
      <section className=" bg-black py-5 border-top">
        <div className="container">
          <div className="row flex-lg-row justify-content-center align-items-center">
            <div className="col-sm-12 col-md-6 col-lg-6">
              <h1 className="heading fw-bold text-white">Watch everywhere</h1>
              <div className="m-0">
                <p className="fs-4 fw-normal text-white m-0 lh-base">
                  Stream unlimited movies and TV shows on your phone, tablet,
                  laptop, and TV.
                </p>
                <p className="fs-4 fw-normal text-white lh-1 ">
                  Chromecast, Apple TV, Blu-ray players, and more.
                </p>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6"></div>
          </div>
        </div>
      </section>
      {/* SECTION STRANGER */}
      <section className=" bg-black border-top py-5 ">
        <div className="container">
          <div className="row flex-lg-row justify-content-center align-items-center">
            <div className="col-sm-12 col-md-6 col-lg-6">
              <div>
                <img
                  src={Image4}
                  alt=""
                  className="img-fluid mx-5 "
                  style={{ height: 300, width: 300 }}
                />
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6 ">
              <h1 className="heading fw-bold text-white">
                Create profiles for kids
              </h1>
              <div className="m-0">
                <p className="fs-4 fw-normal text-white m-0 lh-1">
                  Send kids on adventures with their favorite characters in a
                  space made just for them—free with your membership.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* FREQUENTLY ASKED QUESTION */}
      {/* <section className="bg-black p-0 m-0">
        <div className="line m-0 p-0"></div>
        <div className="container py-5 mx-5">
          <div className="text-center">
            <p className="heading text-white p-2 m-0 fw-bold">
              Frequently Asked Questions
            </p>
          </div>
          <div className="row align-items-center justify-content-center bg-black mx-4">
            <div className="col-md-10 mx-4 col-sm-6 ">
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header
                    className="fs-1 accordion-header"
                    style={{}}
                  >
                    <span className="fs-3 fw-normal text-white header">
                      What is Netflix?
                    </span>
                  </Accordion.Header>
                  <Accordion.Body className="fs-4 lh-base text-white">
                    Netflix is a streaming service that offers a wide variety of
                    award-winning TV shows, movies, anime, documentaries, and
                    more on thousands of internet-connected devices. You can
                    watch as much as you want, whenever you want without a
                    single commercial – all for one low monthly price. There's
                    always something new to discover and new TV shows and movies
                    are added every week!
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    <span className="fs-3 fw-normal text-white">
                      {" "}
                      How much does Netflix cost?{" "}
                    </span>
                  </Accordion.Header>
                  <Accordion.Body className="fs-4 lh-base text-white">
                    Watch Netflix on your smartphone, tablet, Smart TV, laptop,
                    or streaming device, all for one fixed monthly fee. Plans
                    range from ₦1,200 to ₦4,400 a month. No extra costs, no
                    contracts.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    <span className="fs-3 fw-normal text-white">
                      {" "}
                      Where can l watch?
                    </span>
                  </Accordion.Header>
                  <Accordion.Body className="fs-4 lh-base text-white">
                    Watch anywhere, anytime. Sign in with your Netflix account
                    to watch instantly on the web at netflix.com from your
                    personal computer or on any internet-connected device that
                    offers the Netflix app, including smart TVs, smartphones,
                    tablets, streaming media players and game consoles. You can
                    also download your favorite shows with the iOS, Android, or
                    Windows 10 app. Use downloads to watch while you're on the
                    go and without an internet connection. Take Netflix with you
                    anywhere.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    <span className="fs-3 fw-normal text-white">
                      How can l cancel ?
                    </span>
                  </Accordion.Header>
                  <Accordion.Body className="fs-4 lh-bae text-white">
                    Netflix is flexible. There are no pesky contracts and no
                    commitments. You can easily cancel your account online in
                    two clicks. There are no cancellation fees – start or stop
                    your account anytime.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    <span className="fs-3 fw-normal text-white">
                      What can l watch on Netflix ?
                    </span>
                  </Accordion.Header>
                  <Accordion.Body className="fs-4 lh-base text-white">
                    Netflix has an extensive library of feature films,
                    documentaries, TV shows, anime, award-winning Netflix
                    originals, and more. Watch as much as you want, anytime you
                    want.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    <span className="fs-4 fw-normal text-white">
                      Is Netflix good for kids?
                    </span>
                  </Accordion.Header>
                  <Accordion.Body className="fs-4 lh-base  text-white">
                    The Netflix Kids experience is included in your membership
                    to give parents control while kids enjoy family-friendly TV
                    shows and movies in their own space. Kids profiles come with
                    PIN-protected parental controls that let you restrict the
                    maturity rating of content kids can watch and block specific
                    titles you don’t want kids to see.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
        </div>
      </section> */}
      {/* FOOTER  */}
      <footer className="bg-black  text-white line">
        <div className="container">
          <ul className="m-0 p-5 nav">
            <li className="nav-item m-0">
              <a
                href="#"
                className="nav-link p-0 text-white text-decoration-underline link-footer"
              >
                Questions? Contact us.
              </a>
            </li>
          </ul>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-5 my-3 py-3  align-items-center">
            <div className="col mb-3">
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a
                    href="#"
                    className="nav-link p-0 text-white text-decoration-underline link-footer"
                  >
                    FAQ
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a
                    href="#"
                    className="nav-link p-0 text-white text-decoration-underline link"
                  >
                    Privacy
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a
                    href="#"
                    className="nav-link p-0 text-white text-decoration-underline link"
                  >
                    Speed Test
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a
                    href="#"
                    className="nav-link p-0 text-white text-decoration-underline link"
                  >
                    Investor Relations
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a
                    href="#"
                    className="nav-link p-0 text-white text-decoration-underline link"
                  >
                    ENGLISH
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a
                    href="#"
                    className="nav-link p-0 text-white text-decoration-underline link"
                  >
                    Speed Test
                  </a>
                </li>
              </ul>
            </div>

            <div className="col mb-3">
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a
                    href="#"
                    className="nav-link p-0 text-white text-decoration-underline link-footer"
                  >
                    Help Center
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a
                    href="#"
                    className="nav-link p-0 text-white text-decoration-underline link"
                  >
                    jobs
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a
                    href="#"
                    className="nav-link p-0 text-white text-decoration-underline link"
                  >
                    Cookie Preferences
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a
                    href="#"
                    className="nav-link p-0 text-white text-decoration-underline link"
                  >
                    Legal Notices
                  </a>
                </li>
              </ul>
            </div>

            <div className="col mb-3">
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a
                    href="#"
                    className="nav-link p-0 text-white text-decoration-underline link"
                  >
                    Account
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a
                    href="#"
                    className="nav-link p-0 text-white text-decoration-underline link"
                  >
                    Ways to Watch
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a
                    href="#"
                    className="nav-link p-0 text-white text-decoration-underline link"
                  >
                    Corporate Information
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a
                    href="#"
                    className="nav-link p-0 text-white text-decoration-underline link"
                  >
                    Only on Netflix
                  </a>
                </li>
              </ul>
            </div>

            <div className="col mb-3">
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a
                    href="#"
                    className="nav-link p-0 text-white text-decoration-underline link"
                  >
                    Media Center
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a
                    href="#"
                    className="nav-link p-0 text-white text-decoration-underline link"
                  >
                    Terms of Use
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a
                    href="#"
                    className="nav-link p-0 text-white text-decoration-underline link"
                  ></a>
                </li>
                <li className="nav-item mb-2">
                  <a
                    href="#"
                    className="nav-link p-0 text-white text-decoration-underline link"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Home;
