import React from 'react';
import Link from "next/link";
import { ConnectButton } from '@rainbow-me/rainbowkit';

function Navbar() {


  return (
    <nav className='navbar'>
         <h1 className='logo'>LANDLY</h1>       
         <ul className='navItems'>
             <li className='hover:text-sm text-[0.8em]'  style={{'text-shadow': '5px 5px 40px hsl(0, 0%, 6%)','color':"#fbf8f0"}} ><Link href="/">HOME</Link></li>
             <li className='hover:text-sm text-[0.8em]' style={{'text-shadow': '5px 5px 40px hsl(0, 0%, 6%)', 'color':"#fbf8f0" }} ><Link href="/register">REGISTER</Link></li>
             <li className='hover:text-sm text-[0.8em]' style={{'text-shadow': '5px 5px 40px hsl(0, 0%, 6%)', 'color':"#fbf8f0"}} ><Link href="/search">GET DETAILS/TRANSFER</Link></li>
             <li className='hover:text-sm text-[0.8em]' style={{'text-shadow': '5px 5px 40px hsl(0, 0%, 6%)', 'color':"#fbf8f0"}}><Link href="/history">HISTORY</Link></li>
             <li className='hover:text-sm text-[0.8em]' style={{'text-shadow': '5px 5px 40px hsl(0, 0%, 6%)', 'color':"#fbf8f0"}} ><Link href="/about">ABOUT</Link></li>
             <li ><ConnectButton accountStatus="address" chainStatus="none" showBalance={false}/></li>
         </ul>
    </nav>
  )
}

export default Navbar