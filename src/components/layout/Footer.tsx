import NewLogo from "../assets/NewLogo";

const linkGroup = "first:mr-8 flex flex-col gap-3 -mt-1";
const linkHeadStyle = "font-medium text-2xl";
const linkStyle =
  "text-lg text-gray-500 mt-6 cursor-pointer hover:text-black hover:underline capitalize";

function Footer() {
  return (
    <section data-scroll-section className="container py-10 border-0 ">
      <div className="border-b xl:border-0 border-gray-300  flex flex-col-reverse gap-y-10 xl:flex-row xl:pb-6">
        {/* left side--- > */}
        <div className="xl:w-[50%] pb-4 sm:pb-8 xl:pb-0 flex flex-col sm:flex-row ">
          {/* logo, description ---------- >  */}
          <div className="flex sm:w-[55%] lg:w-full flex-col justify-start lg:justify-between -mt-2">
            <div className="flex items-center gap-3">
              <NewLogo className="w-16 h-12 sm:w-20 sm:h-16 lg:w-28 lg:h-20" />
              <h3 className="text-xl lg:text-2xl uppercase font-medium">
                Kalodhunga Creations
              </h3>
            </div>

            <p className="w-full mt-4 sm:mt-8  text-lg text-gray-500">
              Partner with us, and let&apos;s innovate together. By choosing
              Kalodhunga Creation, you are not just getting a software
              development partner, you are gaining a dedicated team that is
              passionate about turning your ideas into powerful, functional and
              reliable software solutions.
            </p>
          </div>

          {/* created by ------------>  */}
          <h3 className="flex-1 mt-8 sm:mt-2 text-left sm:text-right text-lg font-[600] lg:hidden">
            Created by designer for designers
          </h3>
        </div>

        {/* right side ------ > */}
        <div className="w-full flex flex-wrap justify-between gap-y-10 sm:flex-nowrap xl:justify-end xl:gap-x-20 mt-4">
          <div className={linkGroup}>
            <h3 className={linkHeadStyle}>Quick links</h3>
            <ul>
              <li className={linkStyle}>
                <a href="#home">Home</a>
              </li>
              <li className={linkStyle}>
                <a href="#about">About</a>
              </li>
              <li className={linkStyle}>
                <a href="#services">Services</a>
              </li>
              <li className={linkStyle}>
                <a href="#projects">Projects</a>
              </li>
              <li className={linkStyle}>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>

          <div className={linkGroup}>
            <h3 className={linkHeadStyle}>Other links</h3>
            <ul>
              <li className={linkStyle}>
                <a role="link" aria-disabled className="w-full">
                  Privacy Policy
                </a>
              </li>
              <li className={linkStyle}>
                <a role="link" aria-disabled>
                  Terms and Condition
                </a>
              </li>
              <li className={linkStyle}>
                <a role="link" aria-disabled>
                  Use Cases
                </a>
              </li>
              <li className={linkStyle}>
                <a role="link" aria-disabled>
                  careers
                </a>
              </li>
            </ul>
          </div>

          {/* discover more ----------------  */}
          <form className="hidden sm:block">
            <h4 className="-mt-2 text-[36px] leading-[44px] capitalize">
              discover more - sign up <br />
              for updates
            </h4>

            <input
              type="text"
              className=" py-2 px-3 rounded-lg mt-6 text-black w-full text-lg"
            />

            <button
              type="submit"
              className="mt-6 w-fit rounded-full bg-black py-1.5 px-4 flex gap-4 items-center text-lg font-medium hover:bg-black/80 cursor-pointer text-white"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <h3 className="xl:hidden text-right pt-4 text-gray-500 ">
        2022@Kalodhunga Creations
      </h3>
    </section>
  );
}

export default Footer;
