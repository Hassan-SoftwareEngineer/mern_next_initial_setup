import Link from 'next/link';
import React from 'react';
import { NavLinkProps } from './types';

const NavLink : React.FC <NavLinkProps> = ({
    title,
    path
}) => {
  return (
    <Link href={path} className=''> {title} </Link>
  )
}

export default NavLink ;
