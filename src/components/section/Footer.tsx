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
                            <p>010-6535-1781</p>
                        </li>
                        <li>
                            <div>
                                <img
                                    src="/theme/portfolio/img/mail.svg"
                                    alt="이메일"
                                />
                            </div>
                            <p>akgk132@naver.com</p>
                        </li>
                    </ul>
                </div>
            </article>
        </footer>
    );
}

export default Footer;
