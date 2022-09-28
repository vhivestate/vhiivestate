import React from 'react'
import '../index.css'
import { Twitter } from 'react-feather';
import { GitHub } from 'react-feather';
import { Instagram } from 'react-feather';
import { Linkedin } from 'react-feather';
import {TbBrandDiscord} from 'react-icons/tb'



function Footer() {
    
  return (
    <footer className="footer footer-center p-5 bg-base-200 text-base-content rounded">
      <div className="grid grid-flow-col">
        <a className="link link-hover text-lg">About us</a> 
        <a className="link link-hover text-lg">Contact</a> 
        <a className="link link-hover text-lg">Projects</a> 
        <a className="link link-hover text-lg">Resume</a>
    </div> 
    <div>
    <div className="grid grid-flow-col">
    <a href='https://twitter.com/vhivestate'> <Twitter></Twitter> </a>
        <a href='https://github.com/vhivestate'> <GitHub></GitHub> </a>
        <a href='https://www.instagram.com/vhive.jpg/'> <Instagram></Instagram> </a>
        <a href="https://discord.com/channels/950224023973933116/950224023973933121/">
      <TbBrandDiscord /> </a>
        <a href='https://github.com/vhivestate'> <Linkedin></Linkedin> </a>
    </div>
  </div> 
  <div>
    <p>Copyright © 2022 - All right reserved by Vhivestate</p>
  </div>
    </footer>
  )
}
export default Footer