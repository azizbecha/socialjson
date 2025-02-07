'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

import toast from 'react-hot-toast';

import { FaBriefcase, FaEnvelope, FaLink, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa6';

import Container from '@/components/ui/Container';
import TodoCard from '@/components/TodoCard';
import Spinner from '@/components/ui/Spinner';

import { getUser, getUserTodos } from '@/lib/api';

import { Todo, User } from '@/interfaces';

const UserPage = () => {
    const { userId } = useParams(); // Extract postId from the URL

    const [user, setUser] = useState<User | null>(null);
    const [todos, setTodos] = useState<Todo[]>([]);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                setLoading(true);
                if (userId && typeof userId === 'string') {
                    const data = await getUser(Number(userId)) as User;
                    setUser(data);

                    const todoData = await getUserTodos(data.id);
                    setTodos(todoData);
                }
            } catch (err) {
                console.log(err);
            } finally {
                setLoading(false);
            }
        }

        fetchUser();
    }, [userId]);

    if (loading) return <Spinner />;
    if (!user) {
        return (
            <div className="text-center">
                <h1>User not found</h1>
            </div>
        )
    }

    return (
        <Container className='my-5'>
            <div className="w-full bg-white rounded-md shadow-md p-4">
                <div className="flex flex-col justify-center">
                    <div className="flex justify-center items-center self-center w-20 h-20 rounded-full bg-slate-700">
                        <FaUser size={24} />
                    </div>
                    <h2 className='font-bold text-3xl text-center cursor-pointer' onClick={() => {
                        navigator.clipboard.writeText(user.name);
                        toast.success('Name copied to clipboard!');
                    }}>{user.name}</h2>

                    <h3 className='font-semibold text-base text-center text-gray-600 cursor-pointer' onClick={() => {
                        navigator.clipboard.writeText(user.name);
                        toast.success('Username copied to clipboard!');
                    }}>
                        @{user.username}
                    </h3>
                </div>

                <h3>About</h3>
                <ul className="text-black text-base space-y-2">
                    <li className="flex items-center gap-1"><FaEnvelope /><a href={`mailto:${user.email}`}>{user.email}</a></li>
                    <li className="flex items-center gap-1"><FaPhone /><a href={`tel:${user.phone}`}>{user.phone}</a></li>
                    <li className="flex items-center gap-1"><FaLink /><a href={`https://${user.website}`} target="_blank">{user.website}</a></li>
                    <li className="flex items-center gap-1"><FaMapMarkerAlt />{user.address.city}, {user.address.zipcode}</li>
                    <li className="flex items-center gap-1"><FaBriefcase /> Works at {user.company.name}</li>
                </ul>

                <hr className='my-2' />

                <h3>About the company</h3>
                <p>{user.company.name}</p>
                <p className='italic'>{user.company.catchPhrase}</p>
                <p className='italic'>{user.company.bs}</p>

                <hr className='my-2' />

                <h3>Todos</h3>
                <div className="grid grid-cols-2 md:grid-cols-2 gap-2">
                    {todos.map((todo, key) => (<TodoCard todo={todo} key={key} />))}
                </div>
            </div>
        </Container>
    );
};

export default UserPage;
