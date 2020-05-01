import React from "react";
import "./style.scss";
import Penguin from "../../images/penguin.png";
import arrow from "../../images/arrow.png";
export const ChatSection = (): JSX.Element => {
  return (
    <section className="ChatSection">
      <div className="container">
        <div className="messaging">
          <div className="inbox_msg">
            <div className="col-6 inbox_people">
              <div className="headind_srch">
                <div className="recent_heading">
                  <h4>Recents</h4>
                </div>
              </div>
              <div className="inbox_chat">
                <div className="chat_list active_chat">
                  <div className="chat_people">
                    <div className="chat_img">
                      {" "}
                      <img src={Penguin} alt="user" />{" "}
                    </div>
                    <div className="chat_ib">
                      <h5>
                        Jane Doe <span className="chat_date">May 16</span>
                      </h5>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="chat_list">
                  <div className="chat_people">
                    <div className="chat_img">
                      {" "}
                      <img src={Penguin} alt="user" />{" "}
                    </div>
                    <div className="chat_ib">
                      <h5>
                        Jane Doe <span className="chat_date">May 16</span>
                      </h5>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="chat_list">
                  <div className="chat_people">
                    <div className="chat_img">
                      {" "}
                      <img src={Penguin} alt="user" />{" "}
                    </div>
                    <div className="chat_ib">
                      <h5>
                        Jane Doe <span className="chat_date">May 16</span>
                      </h5>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="chat_list">
                  <div className="chat_people">
                    <div className="chat_img">
                      {" "}
                      <img src={Penguin} alt="user" />{" "}
                    </div>
                    <div className="chat_ib">
                      <h5>
                        Jane Doe <span className="chat_date">May 16</span>
                      </h5>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="chat_list">
                  <div className="chat_people">
                    <div className="chat_img">
                      {" "}
                      <img src={Penguin} alt="user" />{" "}
                    </div>
                    <div className="chat_ib">
                      <h5>
                        Jane Doe <span className="chat_date">May 16</span>
                      </h5>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="chat_list">
                  <div className="chat_people">
                    <div className="chat_img">
                      {" "}
                      <img src={Penguin} alt="user" />{" "}
                    </div>
                    <div className="chat_ib">
                      <h5>
                        Jane Doe <span className="chat_date">May 16</span>
                      </h5>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="chat_list">
                  <div className="chat_people">
                    <div className="chat_img">
                      {" "}
                      <img src={Penguin} alt="user" />{" "}
                    </div>
                    <div className="chat_ib">
                      <h5>
                        Jane Doe <span className="chat_date">May 16</span>
                      </h5>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-8 mesgs">
              <div className="msg_history">
                <div className="incoming_msg">
                  <div className="incoming_msg_img">
                    {" "}
                    <img src={Penguin} alt="user" />{" "}
                  </div>
                  <div className="received_msg">
                    <div className="received_withd_msg">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.{" "}
                      </p>
                      <span className="time_date"> 11:01 AM | May 17</span>
                    </div>
                  </div>
                </div>
                <div className="outgoing_msg">
                  <div className="sent_msg">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.{" "}
                    </p>
                    <span className="time_date"> 11:01 AM | May 17</span>{" "}
                  </div>
                </div>
                <div className="incoming_msg">
                  <div className="incoming_msg_img">
                    {" "}
                    <img src={Penguin} alt="user/" />{" "}
                  </div>
                  <div className="received_msg">
                    <div className="received_withd_msg">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.{" "}
                      </p>
                      <span className="time_date"> 11:01 AM | Yesterday</span>
                    </div>
                  </div>
                </div>
                <div className="outgoing_msg">
                  <div className="sent_msg">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.{" "}
                    </p>
                    <span className="time_date"> 11:01 AM | Today</span>{" "}
                  </div>
                </div>
                <div className="incoming_msg">
                  <div className="incoming_msg_img">
                    {" "}
                    <img src={Penguin} alt="user" />{" "}
                  </div>
                  <div className="received_msg">
                    <div className="received_withd_msg">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.{" "}
                      </p>
                      <span className="time_date"> 11:01 AM | Today</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="type_msg">
                <div className="input_msg_write">
                  <input
                    type="text"
                    className="write_msg"
                    placeholder="Type a message"
                  />
                  <button className="msg_send_btn" type="button">
                    <img src={arrow}></img>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
