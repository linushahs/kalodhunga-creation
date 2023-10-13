import Image from "next/image";
import { socials } from "./utils/constants";

const textFieldStyle =
  "bg-text-input w-full lg:w-[600px] py-4 px-4 rounded-lg text-base sm:text-[20px]";
const textLabelStyle = "capitalize  text-base sm:text-[20px] font-medium";
const fieldGroupStyle = "flex flex-col gap-3";

const detailsStyle = "not-italic text-base sm:text-lg font-medium capitalize";
const headingStyle = "text-[21px] sm:text-[26px] font-[600] capitalize";

function Contact() {
  return (
    <section id="contact" className="container py-10 border-b border-gray-200">
      <header className="flex justify-between items-start">
        <h1 className="capitalize">
          get in touch, let&apos;s <br />
          create magic together
        </h1>
        <span className="hidden sm:block mt-6 py-1 px-2.5 sm:px-3.5 font-bold text-[9px] sm:text-xs border border-black rounded-full">
          07
        </span>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 mt-12 border-b border-black pb-8">
        <Image
          src="/assets/contact.png"
          alt="picture"
          width={1000}
          height={200}
          className="w-full hidden sm:block"
        />

        <form className="pl-0 sm:pl-6 lg:pl-12 flex flex-col gap-8">
          <div className={fieldGroupStyle}>
            <label htmlFor="name" className={textLabelStyle}>
              your name here
            </label>

            <input type="text" id="name" className={textFieldStyle} />
          </div>
          <div className={fieldGroupStyle}>
            <label htmlFor="email" className={textLabelStyle}>
              your email address
            </label>
            <input type="text" id="email" className={textFieldStyle} />
          </div>
          <div className={fieldGroupStyle}>
            <label htmlFor="thoughts" className={textLabelStyle}>
              your thoughts
            </label>
            <textarea id="thoughts" className={textFieldStyle} rows={6} />
          </div>

          <button
            type="submit"
            className="bg-submit-btn rounded-lg py-4 lg:py-5 text-center w-full lg:w-[600px] text-lg sm:text-xl font-[600] capitalize hover:bg-submit-btn/80"
          >
            Send message
          </button>
        </form>
      </div>

      {/* socials, contact & address ---------  */}
      <div className="grid grid-rows-3 grid-cols-1 sm:grid-rows-2 sm:grid-cols-3 gap-8 lg:grid-rows-1 lg:grid-cols-4 mt-8">
        {/* our socials ----------  */}
        <div className="flex flex-col gap-6 row-start-3 sm:row-start-2  lg:row-start-1 lg:col-span-2">
          <h3 className={headingStyle}>Our socials</h3>
          <ul className="flex gap-x-4 gap-y-6 items-center flex-wrap sm:flex-nowrap">
            {socials.map((social) => (
              <li key={social.name}>
                <a
                  href={social.link}
                  className="py-1 px-3 text-base sm:text-lg font-medium rounded-full border border-black capitalize shadow-md hover:shadow-lg"
                >
                  {social.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* contact --------------  */}
        <div className="flex flex-col gap-2 pb-4 border-b border-black sm:border-0">
          <h3 className={headingStyle}>Contact</h3>

          <p className={detailsStyle + "lowercase"}>someemail@gmail.com</p>
          <p className={detailsStyle}>9834230923</p>
        </div>

        {/* address ------------------  */}
        <div className="flex flex-col gap-2 pb-4  border-b border-black sm:border-0 sm:col-start-3 lg:col-start-4 lg:justify-self-end">
          <h3 className={headingStyle}>Address</h3>

          <address className={detailsStyle}>kapan kathmandu nepal</address>
          <address className={detailsStyle}>2245, 24th street</address>
        </div>
      </div>
    </section>
  );
}

export default Contact;
