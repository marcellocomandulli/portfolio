import { Link } from "react-router";

export default function Navbar() {
  return (
    <>
      <header>
        <nav
          className="flex justify-around items-center p-3 mb-5 shadow-lg bg-[#ffffffb5]"
          aria-label="Main navigation"
        >
          <div>
            <span>Marcello Comandulli</span>
            <br />
            <span>Junior Front End Developer</span>
          </div>

          <div className="flex">
            <ul className="flex space-x-16 ">
              <li className="relative after:bg-blue-500 after:absolute after:h-[1px] after:w-0 after:bottom-[1px] after:left-0 hover:after:w-full after:transition-all after:duration-300">
                <Link to={"/"}>Home</Link>
              </li>
              
              <li className="relative after:bg-blue-500 after:absolute after:h-[1px] after:w-0 after:bottom-[1px] after:left-0 hover:after:w-full after:transition-all after:duration-300">
                <Link to={"/works"}>Works</Link>
              </li>
             
              <li className="relative after:bg-blue-500 after:absolute after:h-[1px] after:w-0 after:bottom-[1px] after:left-0 hover:after:w-full after:transition-all after:duration-300">
                <Link to={"/contacts"}>Contacts</Link>
              </li>
            </ul>
          </div>
          <button className="bg-blue-500 ml-24 px-6 py-1 rounded-lg hover:bg-blue-700 font-semibold">
            CV
          </button>
        </nav>
      </header>
    </>
  );
}
