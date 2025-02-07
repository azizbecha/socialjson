"use client"

import { useEffect, useState } from "react";

import UserCard from "./UserCard";
import Spinner from "./ui/Spinner";

import { getUsers } from "@/lib/api";
import { User } from "@/interfaces";

const Users: React.FC = () => {

    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                setLoading(true);
                const data = await getUsers();
                setUsers(data);
            } catch {
                
            } finally {
                setLoading(false);
            }
        }

        fetchUsers();
    }, []);

    if (loading) {
        return <Spinner />;
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {users.map((user, key) => <UserCard user={user} key={key} />)}
        </div>
    )
}

export default Users;
