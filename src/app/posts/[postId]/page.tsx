'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

import PostCard from '@/components/PostCard';
import Container from '@/components/ui/Container';
import Spinner from '@/components/ui/Spinner';

import Comments from './Comments';
import Breadbcrumb from './Breadcrumb';

import { getPost, getPostComments } from '@/lib/api';
import { Comment, Post } from '@/interfaces';

const PostPage = () => {
    const { postId } = useParams(); // Extract postId from the URL

    const [post, setPost] = useState<Post | null>(null);
    const [comments, setComments] = useState<Comment[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                setLoading(true);
                if (postId && typeof postId === 'string') {
                    const postData = await getPost(Number(postId)) as Post;
                    setPost(postData);
                    if (postData) {
                        const commentsData = await getPostComments(postData?.id);
                        setComments(commentsData)
                    }
                }
            } catch (err) {
                console.log(err);
            } finally {
                setLoading(false);
            }
        }

        fetchPost();
    }, [postId]);

    if (loading) return <Spinner />
    if (!post || !comments) return <Spinner />;

    return (
        <Container className='my-10'>
            <Breadbcrumb title={post.title} />
            <PostCard post={post} />
            <Comments comments={comments} />
        </Container>
    );
};

export default PostPage;
