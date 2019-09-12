import React from 'react';
import Link from 'next/link';

const styles = {
    display: "flex",
    backgroundColor: "grey",
    alignItems: "space-between",
    justifyContent: "space-between",
}

const Navbar = () => {
    return (
        <div style={styles} className="navbar">
            <Link href='/' >
                <a>Home</a>
            </Link>
            <Link href='/about' >
                <a>About</a>
            </Link>
            <Link href='/contact' >
                <a>Contact</a>
            </Link>
        </div>
    );
}
export default Navbar;
