import React from 'react'
import '../index.css'
import { Twitter } from 'react-feather';
import { GitHub } from 'react-feather';
import { Instagram } from 'react-feather';
import { Linkedin } from 'react-feather';
import {TbBrandDiscord} from 'react-icons/tb'



function Footer() {
    
  return (
    <footer>
    <div className='icons'>
        <a href='https://twitter.com/vhivestate'> <Twitter></Twitter> </a>
        <a href='https://github.com/vhivestate'> <GitHub></GitHub> </a>
        <a href='https://www.instagram.com/vhive.jpg/'> <Instagram></Instagram> </a>
        <a href="https://discord.com/channels/950224023973933116/950224023973933121/">
      <TbBrandDiscord /> </a>
        <a href='https://github.com/vhivestate'> <Linkedin></Linkedin> </a>
    </div>
      
      <div >
        <p>Website by Valeria Garcia</p>
      </div>
    </footer>
  )
}
export default Footer