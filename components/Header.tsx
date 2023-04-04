import Link from 'next/link'
import React from 'react'

const Header: React.FC = () => {
    return (
        <header className="bg-primary p-4">
            <nav className="container mx-auto">
                <ul className="flex space-x-4">
                    <li>
                        <Link href="/">
                            <a className="text-white font-bold">Home</a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;