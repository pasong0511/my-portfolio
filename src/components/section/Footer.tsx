import React from "react";

function Footer() {
    return (
        <footer id="footer">
            <article>
                <div className="contact_con">
                    <div className="contact_title">
                        <h2>
                            Contact <span>Us</span>
                        </h2>
                    </div>
                    <p>문의사항은 전화혹은 메일을 통하여 연락부탁드립니다.</p>
                    <ul className="contact_info">
                        <li>
                            <div>
                                <img
                                    src="/theme/portfolio/img/call.svg"
                                    alt="연락처"
                                />
                            </div>
                            <p>010-2968-9339</p>
                        </li>
                        <li>
                            <div>
                                <img
                                    src="/theme/portfolio/img/mail.svg"
                                    alt="이메일"
                                />
                            </div>
                            <p>test123@naver.com</p>
                        </li>
                    </ul>
                </div>
            </article>
            <div>
                <form
                    id="emailForm"
                    className="gform"
                    method="POST"
                    data-email="songhee6392@gmail.com"
                    action="https://script.google.com/macros/s/AKfycbzaYn7w8t_y--QMMUithJkmjxxgTEawqiSHxQsuy0NRYgcQapuxpPwaxJ8e4WLw7OMN/exec"
                >
                    <div className="form-row">
                        <div className="col-md-12">
                            <input
                                type="text"
                                className="form-control"
                                id="senderEmail"
                                name="senderEmail"
                                placeholder="Your Email"
                                required
                            />

                            <input
                                type="text"
                                className="form-control"
                                id="senderName"
                                name="senderName"
                                placeholder="Your Name"
                                required
                            />

                            <textarea
                                className="form-control"
                                id="message"
                                name="message"
                                placeholder="Your Message"
                            ></textarea>

                            <button id="btnSubmit" className="btn-submit mt-2">
                                Send Message
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </footer>
    );
}

export default Footer;
