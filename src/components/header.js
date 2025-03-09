// components/Navbar.js

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
    return (
        <div className='flex justify-center align-center'>
            <h1 className='text-3xl md:text-8xl my-7 md:my-12 font-medium'>Lekker Varen Loosdrecht</h1>
        </div>
    );
};

export default Header;
