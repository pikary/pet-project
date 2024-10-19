import React from 'react';
import UserSearch from "./UserSearch.tsx";
const Header: React.FC = () => {
    return (
        <header className="bg-primary w-full p-4">
            <nav className="flex justify-between items-center">
                <div className="flex space-x-5 basis-1/2">
                    <span className="text-white font-dancing text-3xl">BeyondTech</span>
                    <UserSearch/>

                </div>

                {/* <input id="people_search" className="px-2 py-1 rounded" type="text" placeholder="Search..." /> */}

                <ul className="flex space-x-4">
                    <li>
                        <a href="#" className="text-white">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-white">
                            About
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-white">
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
