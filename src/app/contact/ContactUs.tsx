"use client";

import { useRef } from "react";
import emailjs from "emailjs-com";

export default function ContactUs() {
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) {
      alert("❌ حدث خطأ أثناء الإرسال! (النموذج غير موجود)");
      return;
    }

    emailjs
      .sendForm(
        "service_abe125p", // Service ID
        "template_848e388", // Template ID
        form.current,
        "01TyrLKUGZhATmwNL" // Public Key
      )
      .then(
        (result) => {
          alert("✅ تم إرسال الرسالة بنجاح!");
          if (form.current) {
            form.current.reset();
          }
        },
        (error) => {
          console.log(error.text);
          alert("❌ حدث خطأ أثناء الإرسال!");
        }
      );
  };

  return (
    <>
      <h2 className="text-3xl font-bold my-10 text-center text-[#235A93]">
        اتصل بنا
      </h2>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex p-2 flex-col gap-3 max-w-md mx-auto"
      >
        <input
          type="text"
          name="name"
          placeholder="الاسم"
          className="border p-2 rounded"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="البريد الإلكتروني"
          className="border p-2 rounded"
          required
        />
        <textarea
          name="message"
          placeholder="الرسالة"
          className="border p-2 rounded"
          required
        />
        <button
          type="submit"
          className="bg-[#235A93] text-white p-2 rounded font-bold cursor-pointer"
        >
          إرسال
        </button>
        <p>
          <a
            href="mailto:drwafaakamel072@gmail.com"
            className="font-bold underline hover:text-[#235A93]"
          >
            <i className="fa-solid fa-envelope text-[#235A93] ml-2"></i>
            drwafaakamel072@gmail.com
          </a>
        </p>
        <p className="font-bold">
          <i className="fa-solid fa-phone text-[#235A93] ml-2"></i>
          201001063353+
        </p>
        <p className="font-bold">
          <i className="fa-solid fa-location-dot text-[#235A93] ml-2"></i>
          Cairo
        </p>
      </form>
    </>
  );
}
