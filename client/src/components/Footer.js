import React from 'react'
import '../index.css'
import { Twitter } from 'react-feather';
import { GitHub } from 'react-feather';
import { Instagram } from 'react-feather';
import { Linkedin } from 'react-feather';
import { Mail } from 'react-feather';

function Footer() {
    
  return (
<footer className="footer-center bg-[#08020e] text-white">
  <div>
    <div className="flex flex-wrap justify-center p-0">
    <a href='https://twitter.com/vhivestate' className=''> <Twitter></Twitter> </a>
        <a href='https://github.com/vhivestate' className=''> <GitHub></GitHub> </a>
        <a href='https://www.instagram.com/vhive.jpg/' className=''> <Instagram></Instagram> </a>
        <a href='https://github.com/vhivestate' className=''> <Linkedin></Linkedin> </a>
        <a href="mailto:garcia.valeria001@gmail.com"> <Mail></Mail> </a>
    </div>
  </div> 
  <div>
    <p>Copyright © 2022 - All right reserved</p>
  </div>
</footer>
  )
}
export default Footer