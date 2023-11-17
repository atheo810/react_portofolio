import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const menus = [
    { id: 1, name: "Home", link: "/" },
    { id: 2, name: "Activity", link: "/activity" },
    { id: 3, name: "Resource", link: "/resource" },
    { id: 4, name: "About", link: "/about" },
  ];
  const [nav, setNav] = useState(true);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <nav className="flex justify-around items-center text-white h-24 max-w-full mx-auto px-4 sticky top-0 bg-[#0A0000]">
      <h1 className="text-3xl font-bold text-[#859DFF]">Atheo Dev</h1>
      <ul className="hidden md:flex ">
        {menus.map((menu) => (
          <li key={menu.id} className="p-4 hover:underline">
            <Link className="font-normal text-lg uppercase" to={menu.link}>
              {menu.name}
            </Link>
          </li>
        ))}
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          !nav
            ? "fixed top-0 left-0 w-[60%] h-full border-r border-r-gray-900 bg-[#0A0000] ease-in-out duration-500 z-50"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#859DFF] m-4">
          Atheo Dev
        </h1>
        <ul className="p-4 uppercase ">
          {menus.map((menu) => (
            <li key={menu.id} className="p-4 hover:underline">
              <Link to={menu.link}>{menu.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
