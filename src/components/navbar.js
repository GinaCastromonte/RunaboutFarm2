'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, {useState} from 'react'

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const toggleMenu = () => {
        setOpen(!open)
    }
    const navOpenedClass = "left-0";
    const navClosedClass = "-left-[300px]";
    const arrowLeftClass = "ri-arrow-left-s-line";
    const arrowRightClass = "ri-arrow-right-s-line";

  return (
    <header id="home" className="py-8 lg:pt-6 lg:pb-14">
      <div className="container mx-auto lg:relative flex flex-col lg:flex-row lg:justify-between gap-y-4 lg:gap-y-0">
        <div className="flex justify-center lg:justify-normal ">
          <a href="#">
            <Image
              src="/assets/logo1.png"
              alt=""
              width={200}
              height={200}
            />
          </a>
        </div>

        <div className="flex items-center flex-col gap-y-4 lg:flex-row lg:gap-x-10 lg:gap-y-0">
          <div className="flex justify-center items-center gap-x-2 lg:justify-normal">
            <i className="ri-map-pin-2-fill text-2xl text-accent"></i>
            <div className="text-secondary">
              Westchester County and Fairfield County
            </div>
          </div>

          <div className="flex justify-center items-center gap-x-2 lg:justify-normal">
            <i className="ri-phone-fill text-2xl text-accent"></i>
            <div className="text-secondary"> Call or Text: (203)223-1212</div>
          </div>
          <div>
            <a
              href="tel:+12032231212"
              className="btn btn-sm btn-outline w-[240px] lg:w-auto mx-auto lg:mx-0"
            >
              Book now
            </a>
          </div>

          <nav
            className={`mnav bg-white fixed w-[300px] top-0 h-screen ${
              open ? "left-0" : "-left-[300px]"
            } shadow-2xl lg:hidden transition-all duration-300 z-20`}
          >
            <div
              onClick={toggleMenu}
              className="mnav__close-btn bg-primary w-8 h-8 relative -right-full top-8 flex justify-center items-center rounded-tr-lg rounded-br-lg cursor-pointer transition-all"
            >
              <i
                className={`mnav__close-btn-icon ${
                  open ? "ri-arrow-left-s-line" : "ri-arrow-right-s-line"
                } text-2xl text-white`}
              ></i>
            </div>

            <div className="px-12 flex flex-col gap-y-12 h-full">
              <ul className="flex flex-col gap-y-5">
                <li>
                  <Link
                    href="#home"
                    className="text-secondary hover:text-accent transition-all duration-300"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="#services"
                    className="text-secondary hover:text-accent transition-all duration-300"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="#rescue"
                    className="text-secondary hover:text-accent transition-all duration-300"
                  >
                    Animal & Horse Rescue
                  </Link>
                </li>
                <li>
                  <Link
                    href="#about"
                    className="text-secondary hover:text-accent transition-all duration-300"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="#contact"
                    className="text-secondary hover:text-accent transition-all duration-300"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </nav>

          <nav className="bg-white absolute w-full left-0 -bottom-[86px] shadow-custom1 h-16 rounded-[10px] hidden lg:flex lg:items-center lg:justify-between lg:px-[50px]">
            <ul className="flex gap-x-4">
              <li>
                <a
                  href="#home"
                  className="border-r pr-4 text-secondary hover:text-accent transition-all duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="border-r pr-4 text-secondary hover:text-accent transition-all duration-300"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#rescue"
                  className="border-r pr-4 text-secondary hover:text-accent transition-all duration-300"
                >
                  Animal & Horse Rescue
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="border-r pr-4 text-secondary hover:text-accent transition-all duration-300"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-secondary hover:text-accent transition-all duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Navbar