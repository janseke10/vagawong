/* eslint-disable @next/next/no-sync-scripts */
import Link from "next/link";
import { useState } from "react";
function MobileNav({ open, setOpen }) {
  if (open) {
    return (
      <div className="flex-col flex py-2">
        <NavLink to="/contact">CONTACT</NavLink>
        <NavLink to="/about">ABOUT</NavLink>
      </div>
    );
  } else {
    return null;
  }
}

function NavLink({ to, children }) {
  return (
    <Link href={to} className={`mx-4 my-2 hover:text-purple hover:underline`}>
      {children}
    </Link>
  );
}

export default function Navbar({ categories }) {
  const [open, setOpen] = useState(false);

  console.log("categories??", categories);
  return (
    <nav className="flex filter drop-shadow-md bg-white px-4 py-4 h-20 items-center">
      <MobileNav open={open} setOpen={setOpen} />
      <div className="w-12/12 flex justify-end items-center">
        <div
          className="z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden"
          onClick={() => {
            setOpen(!open);
          }}
        >
          {/* hamburger button */}
          <span
            className={`h-1 w-full bg-black hover:bg-purple rounded-lg transform transition duration-300 ease-in-out ${
              open ? "rotate-45 translate-y-3.5" : ""
            }`}
          />
          <span
            className={`h-1 w-full bg-black rounded-lg transition-all duration-300 ease-in-out ${
              open ? "w-0" : "w-full"
            }`}
          />
          <span
            className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${
              open ? "-rotate-45 -translate-y-3.5" : ""
            }`}
          />
        </div>

        {open}

        <div className="hidden md:flex">
          <NavLink to="/contact">CONTACT</NavLink>
          <NavLink to="/about">ABOUT</NavLink>
          {categories?.map((category) => {
            console.log("yes hellooo node", category);
            if (
              category.node.ancestors === null &&
              !category.node.children.nodes.length
            ) {
              console.log("no ancestors and no children");
              return (
                <NavLink key={category.node.slug} to="/">
                  {category.node.name.toUpperCase()}
                </NavLink>
              );
            }

            if (
              category.node.ancestors === null &&
              category.node.children.nodes.length
            ) {
              console.log("no ancestors yes children");
              console.log(category.node.name);
              return (
                <div key={category.node.slug}>
                  <div className="dropdown relative">
                    <button
                      id="dropdownNavbarLink"
                      data-dropdown-toggle={category.node.slug}
                      className={`group mx-4 my-2 hover:text-purple hover:underline flex items-center`}
                    >
                      <span>{category.node.name.toUpperCase()}</span>
                      <svg
                        className="ml-1 w-5 h-5 group-hover:fill-purple"
                        aria-hidden="true"
                        fill="black"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </button>
                    <div
                      id={category.node.slug}
                      className="hidden z-40 w-44 font-normal divide-y bg-white divide-gray-100 shadow"
                    >
                      <ul
                        // className="py-1 text-sm text-gray-700 dropdown-menu"
                        aria-labelledby="dropdownLargeButton"
                      >
                        {category.node.children.nodes.map((child, index) => {
                          console.log("child: ", child);
                          return (
                            <div key={index}>
                              <li className="p-2">
                                <NavLink to={`/categories/${child.slug}`}>
                                  {child.name.toUpperCase()}
                                </NavLink>
                              </li>
                            </div>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>

      <script src="https://unpkg.com/flowbite@1.5.1/dist/flowbite.js"></script>
    </nav>
  );
}
