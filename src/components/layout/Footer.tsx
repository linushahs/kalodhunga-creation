import Logo from "../assets/Logo";

const linkGroup = "first:mr-8 flex flex-col gap-3";
const linkHeadStyle = "font-medium text-xl";
const linkStyle =
  "text-gray-500 mt-5 hover:text-black hover:underline capitalize";

function Footer() {
  return (
    <section className="container py-10  ">
      <div className="border-b lg:border-0 border-gray-300  flex flex-col-reverse gap-y-10 lg:flex-row lg:pb-6">
        {/* left side--- > */}
        <div className="flex-1 pb-4 sm:pb-8 lg:pb-0 flex flex-col sm:flex-row sm:gap-8">
          {/* logo, description ---------- >  */}
          <div className="flex flex-1 flex-col justify-start lg:justify-between ">
            <div className="flex items-center gap-3">
              <Logo className="w-14 h-14 lg:w-16 lg:h-16" />
              <h3 className="text-xl lg:text-2xl uppercase font-medium">
                Kalodhunga Creations
              </h3>
            </div>

            <p className="w-full mt-4 lg:w-2/3 sm:mt-8  text-base text-gray-500">
              Partner with us, and let&apos;s innovate together. By choosing
              Kalodhunga Creation, you are not just getting a software
              development partner, you are gaining a dedicated team that is
              passionate about turning your ideas into powerful, functional and
              reliable software solutions.
            </p>
          </div>

          {/* created by ------------>  */}
          <h3 className="flex-1 mt-8 sm:mt-4 text-left sm:text-right text-lg font-[600] lg:hidden">
            Created by designer for designers
          </h3>
        </div>

        {/* right side ------ > */}
        <div className="flex-1 flex flex-wrap justify-between gap-y-10 sm:flex-nowrap lg:justify-end lg:gap-x-20 mt-4">
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
                <a href="#" className="w-full">
                  Privacy Policy
                </a>
              </li>
              <li className={linkStyle}>
                <a href="#">Terms and Condition</a>
              </li>
              <li className={linkStyle}>
                <a href="#">Use Cases</a>
              </li>
              <li className={linkStyle}>
                <a href="#">careers</a>
              </li>
            </ul>
          </div>

          <div className={linkGroup}>
            <h3 className={linkHeadStyle}>Other links</h3>
            <ul>
              <li className={linkStyle}>
                <a href="#" className="w-full">
                  Privacy Policy
                </a>
              </li>
              <li className={linkStyle}>
                <a href="#">Terms and Condition</a>
              </li>
              <li className={linkStyle}>
                <a href="#">Use Cases</a>
              </li>
              <li className={linkStyle}>
                <a href="#">careers</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <h3 className="lg:hidden text-right pt-4 text-gray-500 ">
        2022@Kalodhunga Creations
      </h3>
    </section>
  );
}

export default Footer;
