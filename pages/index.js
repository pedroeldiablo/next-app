import React from 'react';
import Link from 'next/link';

const Index = () => {
    console.log("index finger?");
    return (
        <div>
            <Link href='/about' >
                <a>About</a>
            </Link>
            <Link href='/about' >
                <button>About</button>
            </Link>
            <Link href='/about' >
                <span>About</span>
            </Link>
            <Link href='/contact' >
                <a>Contact</a>
            </Link>
        </div>
    );
}
export default Index;
