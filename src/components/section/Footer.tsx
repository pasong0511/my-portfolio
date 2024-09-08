import React from "react";
import EmailForm from "../EmailForm";

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
                <EmailForm />
            </div>
        </footer>
    );
}

export default Footer;
