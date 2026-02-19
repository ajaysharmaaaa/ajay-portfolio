import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ren6xuf",
        "template_13a7gvi",
        e.target,
        "9VJieibiFKIrgHGUt"
      )
      .then(() => {
        setSuccess(true);
      })
      .catch(() => alert("Error sending message"));
  };

  if (success)
    return (
      <section id="contact" className="py-20 text-center font-inter">
        <h5 className="text-2xl font-bold text-green-600">
          Form submitted successfully ✅
        </h5>
      </section>
    );

  return (
    <section id="contact" className="px-4 font-inter text-center">

      {/* Heading */}
      <h3 className="font-extrabold text-black dark:text-white text-[32px] md:text-[40px] lg:text-[45px]">
        Get In Touch
      </h3>

      {/* Subheading */}
      <p className="mt-2 text-[12px] md:text-[13px] lg:text-[14px] font-semibold bg-gradient-to-r from-[#4FC3F7] to-[#484E53] bg-clip-text text-transparent">
        Lets work together
      </p>

      {/* Form */}
      <form
        onSubmit={sendEmail}
        className="max-w-2xl mx-auto mt-6 text-left space-y-6"
      >

        {/* Name */}
        <div>
          <label className="block font-bold text-[14px] md:text-[16px] lg:text-[18px]">
            Name
          </label>
          <input
            type="text"
            name="name"
            required
            placeholder="full name"
            className="w-full border border-gray-400 rounded-lg p-4 mt-2 text-[16px] md:text-[18px] lg:text-[20px]"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block font-bold text-[14px] md:text-[16px] lg:text-[18px]">
            Email
          </label>
          <input
            type="email"
            name="email"
            required
            placeholder="example@email.com"
            className="w-full border border-gray-400 rounded-lg p-4 mt-2 text-[16px] md:text-[18px] lg:text-[20px]"
          />
        </div>

        {/* Mobile */}
        <div>
          <label className="block font-bold text-[14px] md:text-[16px] lg:text-[18px]">
            Mobile
          </label>
          <input
            type="tel"
            name="mobile"
            required
            placeholder="Mobile number"
            className="w-full border border-gray-400 rounded-lg p-4 mt-2 text-[16px] md:text-[18px] lg:text-[20px]"
          />
        </div>

        {/* Message */}
        <div>
          <label className="block font-bold text-[14px] md:text-[16px] lg:text-[18px]">
            Message
          </label>
          <textarea
            name="message"
            rows="5"
            placeholder="Write your message..."
            className="w-full border border-gray-400 rounded-lg p-4 mt-2 text-[16px] md:text-[18px] lg:text-[20px]"
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full bg-black text-white font-bold text-[13px] md:text-[14px] lg:text-[16px] py-4 rounded-lg"
        >
          Get in Touch
        </button>
      </form>
    </section>
  );
}
