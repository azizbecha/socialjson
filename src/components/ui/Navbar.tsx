import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { FaBars, FaUser } from "react-icons/fa6";

const items = [
    {
        name: 'Home',
        href: '/',
        icon: FaHome
    },
    {
        name: 'Users',
        href: 'users',
        icon: FaUser
    }
];

const Navbar: React.FC = () => {
    return (
        <nav className="bg-primary border-gray-200 dark:bg-gray-900">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link
                    href="/"
                    className="flex items-center space-x-3 rtl:space-x-reverse"
                >
                    <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
                        SocialJSON
                    </span>
                </Link>
                <button
                    data-collapse-toggle="navbar-default"
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    aria-controls="navbar-default"
                    aria-expanded="false"
                >
                    <span className="sr-only">Open main menu</span>
                    <FaBars />
                </button>
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="font-medium flex flex-row space-x-3">
                        {
                            items.map((item, key) => (
                                <li key={key}>
                                    <Link
                                        href={item.href}
                                        className="flex flex-row items-center space-x-2 text-white"
                                        aria-current="page"
                                    >
                                        <item.icon />
                                        <span>{item.name}</span>
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </nav>

    )
}

export default Navbar;
