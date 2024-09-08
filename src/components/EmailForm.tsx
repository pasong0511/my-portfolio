import React, { useEffect, useState } from "react";

function EmailForm() {
    const [formData, setFormData] = useState({
        senderName: "",
        senderEmail: "",
        senderPhone: "",
        message: "",
    });

    const [isSending, setIsSending] = useState(false); // 제출 중인지 상태 관리

    const handleSubmit = (e: any) => {
        e.preventDefault();
        setIsSending(true); //폼 제출 중 상태로 변경

        const form = e.target;
        const data = new FormData(form);

        fetch(form.action, {
            method: "POST",
            body: data,
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.result === "success") {
                    alert("메일 전송 완료");

                    setFormData({
                        senderName: "",
                        senderEmail: "",
                        senderPhone: "",
                        message: "",
                    });
                } else {
                    alert("전송 중 오류가 발생했습니다. 다시 시도해주세요.");
                }
            })
            .catch((error) => {
                console.error("Error:", error);
                alert("전송 중 오류가 발생했습니다. 다시 시도해주세요.");
            })
            .finally(() => {
                setIsSending(false);
            });
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    return (
        <form
            id="emailForm"
            className="gform"
            method="POST"
            data-email="songhee6392@gmail.com"
            action="https://script.google.com/macros/s/AKfycbzaYn7w8t_y--QMMUithJkmjxxgTEawqiSHxQsuy0NRYgcQapuxpPwaxJ8e4WLw7OMN/exec"
            onSubmit={handleSubmit}
        >
            <div className="">
                <ul className="">
                    <li>
                        <label>이름(업체명)</label>
                        <input
                            required
                            type="text"
                            className="form-control"
                            id="senderName"
                            name="senderName"
                            disabled={isSending}
                            value={formData.senderName}
                            onChange={handleChange}
                        />
                    </li>
                    <li>
                        <label>이메일</label>
                        <input
                            required
                            type="text"
                            className="form-control"
                            id="senderEmail"
                            name="senderEmail"
                            disabled={isSending}
                            value={formData.senderEmail}
                            onChange={handleChange}
                        />
                    </li>
                    <li>
                        <label>전화번호</label>
                        <input
                            required
                            type="text"
                            className="form-control"
                            id="senderPhone"
                            name="senderPhone"
                            disabled={isSending}
                            value={formData.senderPhone}
                            onChange={handleChange}
                        />
                    </li>
                    <li>
                        <label>문의내용</label>
                        <textarea
                            className="form-control"
                            id="message"
                            name="message"
                            disabled={isSending}
                            value={formData.message}
                            onChange={handleChange}
                        />
                    </li>
                    <button id="btnSubmit" className="" disabled={isSending}>
                        {isSending ? "Sending..." : "Send Message"}
                    </button>
                </ul>
            </div>
        </form>
    );
}

export default EmailForm;
