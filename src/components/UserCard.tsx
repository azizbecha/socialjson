import Link from "next/link";

import { User } from "@/interfaces";

import { FaLink, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { FaBriefcase, FaEnvelope, FaUser } from "react-icons/fa6";

interface Props {
    user: User;
}

const UserCard: React.FC<Props> = ({ user }) => {
    return (
        <Link href={`users/${user.id}`}>
            <div className="p-4 rounded-md shadow-md hover:shadow-lg transition-all" data-aos="fade-up">
                <div className="flex flex-row items-center gap-2">
                    <div className="h-6 w-6 flex items-center justify-center rounded-full bg-primary text-white">
                        <FaUser size={14} className="text-white text-3xl" />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-black font-bold">{user?.name}</span>
                        <span className="text-gray-700 text-xs font-semibold">@{user?.username}</span>
                    </div>
                </div>
                <hr className="my-2" />
                <ul className="text-black text-sm">
                    <li className="flex items-center gap-1"><FaEnvelope /><a href={`mailto:${user.email}`}>{user.email}</a></li>
                    <li className="flex items-center gap-1"><FaPhone /><a href={`tel:${user.phone}`}>{user.phone}</a></li>
                    <li className="flex items-center gap-1"><FaLink /><a href={`https://${user.website}`} target="_blank">{user.website}</a></li>
                    <li className="flex items-center gap-1"><FaMapMarkerAlt />{user.address.city}, {user.address.zipcode}</li>
                    <li className="flex items-center gap-1"><FaBriefcase /> Works at {user.company.name}</li>
                </ul>
            </div>
        </Link>
    )
}

export default UserCard;
