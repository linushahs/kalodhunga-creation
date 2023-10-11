import Image from "next/image";

const textFieldStyle =
  "bg-text-input w-[500px] py-2 px-4 rounded-lg text-[24px]";
const textLabelStyle = "capitalize text-xl font-medium";
const fieldGroupStyle = "flex flex-col gap-2";

function Contact() {
  return (
    <section className="container py-10 border-b border-gray-200">
      <header className="flex justify-between items-start">
        <h1 className="capitalize">
          get in touch, let's <br />
          create magic together
        </h1>
        <span className="mt-6 py-1 px-2.5 sm:px-3.5 font-bold text-[9px] sm:text-xs border border-black rounded-full">
          07
        </span>
      </header>

      <div className="grid grid-cols-2 mt-12">
        <Image
          src="/assets/contact.png"
          alt="picture"
          width={1000}
          height={200}
          className="w-full"
        />

        <form className="pl-12 flex flex-col gap-6">
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
            <textarea id="thoughts" className={textFieldStyle} rows={7} />
          </div>

          <button
            type="submit"
            className="bg-submit-btn rounded-lg py-4 text-center w-[500px] text-xl font-medium capitalize hover:bg-submit-btn/80"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
