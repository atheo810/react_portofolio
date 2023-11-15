import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const menus = [
    { name: "Home", link: "/" },
    { name: "Activity", link: "/activity" },
    { name: "Resource", link: "/resource" },
    { name: "About", link: "/about" },
  ];
  const [nav, setNav] = useState(true);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <nav className="flex justify-between items-center text-white h-24 max-w-[1920px] mx-auto px-4">
      <h1 className="w-full text-3xl font-bold text-[#859DFF]">Atheo Dev</h1>
      <ul className="hidden md:flex ">
        {menus.map((menu) => (
          <>
            <li className="p-4">
              <Link className="font-normal text-lg uppercase" to={menu.link}>
                {menu.name}
              </Link>
            </li>
          </>
        ))}
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          !nav
            ? "fixed top-0 left-0 w-[60%] h-full border-r border-r-gray-900 bg-[#0A0000] ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#859DFF] m-4">
          Atheo Dev
        </h1>
        <ul className="p-4 uppercase">
          {menus.map((menu) => (
            <>
              <li className="p-4">
                <Link to={menu.link}>{menu.name}</Link>
              </li>
            </>
          ))}
        </ul>
      </div>
    </nav>
  );
}
