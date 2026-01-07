import { NavLink } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="flex items-center justify-between h-14 px-4 border-b bg-white">
            {/* Left */}
            <div className="flex items-center gap-3">
                <span className="text-lg font-semibold">MyApp</span>
            </div>

            {/* Right */}
            <div className="flex items-center gap-4">
                <NavLink
                    to="/profile"
                    className={({ isActive }) =>
                        isActive ? 'text-blue-600 font-medium' : 'text-gray-600 hover:text-gray-900'
                    }
                >
                    Profile
                </NavLink>

                <button className="text-sm text-gray-600 hover:text-gray-900">Logout</button>
            </div>
        </nav>
    );
}
