"use client"
import { useEffect, useState } from "react";

import ReactPaginate from 'react-paginate';
import Fuse from 'fuse.js'

import PostCard from "./PostCard";
import Spinner from "./ui/Spinner";

import { getPosts } from "@/lib/api";
import { Post } from "@/interfaces";

const Posts: React.FC = () => {

    const [posts, setPosts] = useState<Post[]>([]);
    const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);

    const [keyword, setKeyword] = useState<string>('');

    const [currentPage, setCurrentPage] = useState(0);
    const postsPerPage = 6;

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                setLoading(true);
                const data = await getPosts();
                setPosts(data);
            } catch (error) {
                console.log(error)
            } finally {
                setLoading(false);
            }
        }

        fetchPosts();
    }, []);

    useEffect(() => {
        const fuse = new Fuse(posts, {
            keys: ['title', 'body'],
            threshold: 0.4,
        });

        if (keyword === '') {
            setFilteredPosts(posts);
        } else {
            const data = fuse.search(keyword).map((post) => post.item);
            setFilteredPosts(data);
        }
    }, [keyword, posts]);

    const indexOfLastPost = (currentPage + 1) * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

    const handlePageClick = (event: { selected: number }) => {
        setCurrentPage(event.selected);
    };

    if (loading) return <Spinner />;

    return (
        <div className="">
            <input
                type="text"
                value={keyword}
                onChange={e => setKeyword(e.currentTarget.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-text-primary focus:border-text-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-text-primary dark:focus:border-text-primary"
                placeholder="What are you looking for ?"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {currentPosts.map((post, key) => <PostCard post={post} key={key} />)}
            </div>
            <ReactPaginate
                previousLabel={"previous"}
                nextLabel={"next"}
                breakLabel={"..."}
                pageCount={Math.ceil(filteredPosts.length / postsPerPage)}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={handlePageClick}
                containerClassName="flex justify-center items-center space-x-2 mt-4"
                pageClassName="inline-block"
                pageLinkClassName="bg-white border border-gray-300 text-primary rounded-md mx-1 p-2 hover:bg-gray-100 hover:border-gray-400 transition-colors"
                previousClassName="inline-block"
                previousLinkClassName="flex items-center justify-center bg-white border border-gray-300 text-primary rounded-md mx-1 p-2 hover:bg-gray-100 hover:border-gray-400 transition-colors"
                nextClassName="inline-block"
                nextLinkClassName="flex items-center justify-center bg-white border border-gray-300 text-primary rounded-md mx-1 p-2 hover:bg-gray-100 hover:border-gray-400 transition-colors"
                activeClassName="text-white font-semibold"
                breakClassName="mx-2 text-primary"
            />

        </div>
    )
}

export default Posts;
