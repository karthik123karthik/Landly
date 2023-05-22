import React from 'react';
import Link from "next/link";
import { ConnectButton } from '@rainbow-me/rainbowkit';

function Navbar() {
  return (
    <nav className='navbar'>
         <h1 className='logo'>LANDLY</h1>         
         <ul className='navItems'>
             <li ><Link href="/">Home</Link></li>
             <li ><Link href="/register">register</Link></li>
             <li ><Link href="/register">get details/transfer</Link></li>
             <li ><Link href="/history">history</Link></li>
             <li ><Link href="/about">about</Link></li>
             <li ><ConnectButton accountStatus="address" chainStatus="none" showBalance={false}/></li>
         </ul>
    </nav>
  )
}

export default Navbar