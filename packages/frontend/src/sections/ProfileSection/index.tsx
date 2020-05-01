import React from "react";
import "./style.scss";
import penguin from "../../images/penguin.png";
const ProfileSection = (): JSX.Element => {
  return (
    <section>
      <div className="ProfileSection">
        <div className="container mt-5">
          <div className="row">
            <div className="col-lg-4 pb-5">
              <div className="author-card pb-3">
                <div className="author-card-profile">
                  <div className="author-card-avatar">
                    <img src={penguin} alt="User" />
                  </div>
                  <div className="author-card-details">
                    <h5 className="author-card-name text-lg">Jane Doe</h5>
                  </div>
                </div>
              </div>
              <div className="author-card wizard">
                <nav className="list-group list-group-flush">
                  <a className="list-group-item active" href="#">
                    <i className="fe-icon-user text-muted"></i>Profile Settings
                  </a>
                  <a className="list-group-item" href="#">
                    <i className="fe-icon-map-pin text-muted"></i>My Buddies{" "}
                  </a>
                  <a className="list-group-item" href="#">
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <i className="fe-icon-heart mr-1 text-muted"></i>
                        <div className="d-inline-block font-weight-medium text-uppercase">
                          My Quizzes
                        </div>
                      </div>
                    </div>
                  </a>
                  <a className="list-group-item" href="#">
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <i className="fe-icon-tag m r-1 text-muted"></i>
                        <div className="d-inline-block font-weight-medium text-uppercase">
                          Settings
                        </div>
                      </div>
                    </div>
                  </a>
                </nav>
              </div>
            </div>

            <div className="col-lg-8 pb-5">
              <form className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label id="account-fn">First Name</label>
                    <input
                      className="form-control"
                      type="text"
                      id="account-fn"
                      value=" ex. Jane"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label id="account-ln">Last Name</label>
                    <input
                      className="form-control"
                      type="text"
                      id="account-ln"
                      value="ex. Doe"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label id="account-email">E-mail Address</label>
                    <input
                      className="form-control"
                      type="email"
                      id="account-email"
                      value="janedoe@example.com"
                      disabled
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label id="account-phone">Phone Number</label>
                    <input
                      className="form-control"
                      type="text"
                      id="account-phone"
                      value="ex. 123-456-7890"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label id="account-pass">New Password</label>
                    <input
                      className="form-control"
                      type="password"
                      id="account-pass"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label id="account-confirm-pass">Confirm Password</label>
                    <input
                      className="form-control"
                      type="password"
                      id="account-confirm-pass"
                    />
                  </div>
                </div>
                <div className="col-12">
                  <hr className="mt-2 mb-3" />
                  <div className="d-flex flex-wrap justify-content-between align-items-center">
                    <div className="custom-control custom-checkbox d-block"></div>
                    <button
                      className="btn btn-style-1 btn-primary"
                      type="button"
                      data-toast=""
                      data-toast-position="topRight"
                      data-toast-type="success"
                      data-toast-icon="fe-icon-check-circle"
                      data-toast-title="Success!"
                      data-toast-message="Your profile updated successfuly."
                    >
                      Update Profile
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
