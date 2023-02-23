import React from 'react';
// import data
import { copyright } from '../data';
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub, FiTwitter } from "react-icons/fi";

const Copyright = () => {
  // destructure copyright data
  const { link1, link2, copyText, social } = copyright;
  return (
    <div
      className='flex flex-col items-center gap-y-2 lg:flex-row lg:justify-between'
      data-aos='fade-up'
      data-aos-offset='0'
      data-aos-delay='200'
    >
      {/* links */}
      <div className='flex gap-x-6'>
        <a className='transition hover:text-accent' href={link1.href}>
          {link1.name}
        </a>
        <a className='transition hover:text-accent' href={link2.href}>
          {link2.name}
        </a>
      </div>
      {/* copyright text */}
      <div>{copyText}</div>
      {/* social icons */}
      {/* <ul className='flex gap-x-[12px]'>
        {social.map((item, index) => {
          // destructure icon
          const { href, icon } = item;
          return (
            <li key={index}>
              <a href={href}>
                <img src={icon} alt='' />
              </a>
            </li>
          );
        })}
      </ul> */}
      {/* <ul className='flex gap-x-[12px]'> */}
        {/* <li key={index}>
          <a href={href}>
          <img src={icon} alt='' />
          </a>
        </li> */}
        <ul className='flex gap-x-[12px]'>
        <li 
        onClick={() => window.open("https://github.com/Akshay200228")}
        className='p-4 bg-orange-200 border border-orange-500 rounded-full hover:bg-orange-500'>
        <FiGithub/>
        </li>
        <li
        onClick={() => window.open("https://www.linkedin.com/in/akshay-sankpal-a12426259/")}
        className='p-4 bg-orange-200 border border-orange-500 rounded-full hover:bg-orange-500'>
        <FaLinkedinIn/>
        </li>
        <li 
        onClick={() => window.open("https://twitter.com/sankpal2812")}
        className='p-4 bg-orange-200 border border-orange-500 rounded-full hover:bg-orange-500'>
        <FiTwitter/>
        </li>
      </ul>
    </div>
  );
};

export default Copyright;
