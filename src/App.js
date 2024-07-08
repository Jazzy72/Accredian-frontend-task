import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Navbar from './Navbar';
import referImage from './refer.png';
import Benefits from './Benefits'; // Import Benefits component
import Faqs from './Faqs'; // Import Faqs component
import Footer from './Footer';
import './App.css';

const validationSchema = Yup.object({
  referrerName: Yup.string().required('Required'),
  referrerEmail: Yup.string().email('Invalid email').required('Required'),
  refereeName: Yup.string().required('Required'),
  refereeEmail: Yup.string().email('Invalid email').required('Required'),
});

const App = () => {
  const [open, setOpen] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Navbar />
      <div className="app-container">
        <div className="hero-section">
        <img src={referImage} alt="Refer" className="hero-image" />
          <div className="hero-content">
            <h1>Refer & Earn</h1>
            <h2>Refer your friends and earn rewards!</h2>
            <button onClick={handleOpen} className="refer-button">
              Refer Now
            </button>
          </div>
        </div>

        {open && (
          <div className="modal-overlay">
            <div className="modal">
              <h2>Referral Form</h2>
              <Formik
                initialValues={{
                  referrerName: '',
                  referrerEmail: '',
                  refereeName: '',
                  refereeEmail: '',
                }}
                validationSchema={validationSchema}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                  setTimeout(() => {
                    setSubmitStatus('success');
                    resetForm();
                    setSubmitting(false);
                  }, 500);
                }}
              >
                {({ errors, touched, isSubmitting }) => (
                  <Form>
                    <div className="form-field">
                      <Field
                        name="referrerName"
                        placeholder="Your Name"
                        className="input"
                      />
                      {touched.referrerName && errors.referrerName && (
                        <div className="error">{errors.referrerName}</div>
                      )}
                    </div>
                    <div className="form-field">
                      <Field
                        name="referrerEmail"
                        type="email"
                        placeholder="Your Email"
                        className="input"
                      />
                      {touched.referrerEmail && errors.referrerEmail && (
                        <div className="error">{errors.referrerEmail}</div>
                      )}
                    </div>
                    <div className="form-field">
                      <Field
                        name="refereeName"
                        placeholder="Friend's Name"
                        className="input"
                      />
                      {touched.refereeName && errors.refereeName && (
                        <div className="error">{errors.refereeName}</div>
                      )}
                    </div>
                    <div className="form-field">
                      <Field
                        name="refereeEmail"
                        type="email"
                        placeholder="Friend's Email"
                        className="input"
                      />
                      {touched.refereeEmail && errors.refereeEmail && (
                        <div className="error">{errors.refereeEmail}</div>
                      )}
                    </div>

                    {submitStatus === 'success' && (
                      <div className="success-message">
                        Referral successfully submitted!
                      </div>
                    )}
                    {submitStatus === 'error' && (
                      <div className="error-message">
                        Something went wrong. Please try again.
                      </div>
                    )}

                    <button
                      type="submit"
                      className="submit-button"
                      disabled={isSubmitting}
                    >
                      Submit
                    </button>
                  </Form>
                )}
              </Formik>
              <button onClick={handleClose} className="close-button">
                Close
              </button>
            </div>
          </div>
        )}

        <div id="benefits" className="section">
          <Benefits />
        </div>
        
        <div id="faqs" className="section">
          <Faqs />
        </div>

        <div id="about" className="">
          {/* About Us Section Content */}
          {/* <h2>About Us</h2> */}
          {/* <p>About Us content goes here...</p> */}
        </div>
        {/* <script>
           function changeStyles() {
           const element = document.getElementById('about');

          // Change padding
           element.style.padding = '10px';

          // Change border radius
          element.style.borderRadius = '5px';
          }
        </script> */}
        <Footer /> {/* Render Footer component */}
        {/* Other sections or components */}
      </div>
    </div>
  );
};

export default App;
