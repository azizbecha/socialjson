import { useEffect, useState } from "react";
import Link from "next/link";

import { FaUser } from "react-icons/fa6";

import { getUser } from "@/lib/api";
import { Post, User } from "@/interfaces";

interface Props {
    post: Post;
}

const PostCard: React.FC<Props> = ({ post }) => {

    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const fetchUser = async () => {
            const data = await getUser(post.userId);
            setUser(data);
        }

        fetchUser();
    }, [post.userId]);


    return (
        <Link href={`posts/${post.id}`}>
            <div className="p-4 rounded-md shadow-md" data-aos="fade-up">
                <div className="flex flex-row items-center gap-2 mb-2 border-b border-black pb-2">
                    <div className="h-6 w-6 flex items-center justify-center rounded-full bg-primary text-white">
                        <FaUser size={14} className="text-white text-3xl" />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-black font-bold">{user?.name}</span>
                        <span className="text-gray-700 text-xs font-semibold">@{user?.username}</span>
                    </div>
                </div>
                <h3 className="text-lg">{post.title}</h3>
                <p>{post.body}</p>
            </div>
        </Link>
    )
}

export default PostCard;
