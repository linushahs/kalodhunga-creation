import Logo from "./assets/Logo";

const linkGroup = "w-full";
const linkHeadStyle = "font-medium text-xl";
const linkStyle =
  "text-gray-600 mt-4 hover:text-black hover:font-medium text-left";

function Footer() {
  return (
    <section className="container py-10  flex justify-between">
      {/* left side--- > */}
      <div className="flex flex-col justify-between w-1/2">
        <div className="flex items-center gap-3">
          <Logo className="w-16 h-16" />
          <h3 className="text-2xl uppercase font-medium">
            Kalodhunga Creations
          </h3>
        </div>

        <p className="w-1/2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus
          doloribus tempora nesciunt sint nam ea laudantium ex perspiciatis
          cupiditate tempore quae molestias, eius odit. Fugit ipsum atque quasi
          nulla molestiae.
        </p>
      </div>

      {/* right side ------ > */}
      <div className="w-1/2 flex">
        <div className={linkGroup}>
          <h3 className={linkHeadStyle}>Quick links</h3>
          <ul className="mt-5">
            <li className={linkStyle}>
              <a href="#home">Home</a>
            </li>
            <li className={linkStyle}>
              <a href="#home">Home</a>
            </li>
            <li className={linkStyle}>
              <a href="#home">Home</a>
            </li>
            <li className={linkStyle}>
              <a href="#home">Home</a>
            </li>
            <li className={linkStyle}>
              <a href="#home">Home</a>
            </li>
          </ul>
        </div>

        <div className={linkGroup}>
          <h3 className={linkHeadStyle}>Other links</h3>
          <ul className="mt-5">
            <li className={linkStyle}>
              <a href="#" className="w-full">
                Privacy Policy
              </a>
            </li>
            <li className={linkStyle}>
              <a href="#">Privacy Policy</a>
            </li>
            <li className={linkStyle}>
              <a href="#">Privacy Policy</a>
            </li>
            <li className={linkStyle}>
              <a href="#">Privacy Policy</a>
            </li>
          </ul>
        </div>

        <div className={linkGroup}>
          <h3 className={linkHeadStyle}>Other links</h3>
          <ul className="mt-5">
            <li className={linkStyle}>
              <a href="#">Privacy Policy</a>
            </li>
            <li className={linkStyle}>
              <a href="#">Privacy Policy</a>
            </li>
            <li className={linkStyle}>
              <a href="#">Privacy Policy</a>
            </li>
            <li className={linkStyle}>
              <a href="#">Privacy Policy</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Footer;
