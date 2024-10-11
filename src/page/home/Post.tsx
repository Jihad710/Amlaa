import { useEffect, useState } from "react";
import {
    FaBloggerB,
    FaFacebookSquare,
    FaGoogle,
    FaInstagram,
    FaLinkedin,
    FaPinterest,
    FaReddit,
    FaSnapchatSquare,
    FaTelegramPlane,
    FaTiktok,
    FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdOutlineWeb } from "react-icons/md";
interface Post {
    map(
        arg0: (
            post: {
                link: string | undefined;
                image: string | undefined;
                icon: string;
            },
            idx: any
        ) => import("react/jsx-runtime").JSX.Element
    ): import("react").ReactNode;
    image: string;
    icon: string;
    link: string;
}
// interface  {
//     _id: string;
//     posts: never[];
// }
const Post = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    useEffect(() => {
        (async () => {
            const response = await fetch(`https://amlaa.vercel.app/post`);
            const data = await response.json();
            console.log(data);
            if (data) {
                setPosts(data);
            }
        })();
    }, []);
    console.log(posts);
    return (
        <div className='grid grid-cols-2 w-fit mx-auto sm:grid-cols-4 md:grid-cols-6 sm:w-full'>
            {posts?.map(
                (
                    post: {
                        link: string | undefined;
                        image: string | undefined;
                        icon: string;
                    }
                ) => (
                    <a
                        href={post.link}
                        target='_blank'
                        className='w-full relative group'>
                        <img src={post.image} alt='' />
                        <div className='absolute group-hover:h-full top-0 left-0 w-full h-0 cursor-pointer bg-[#3C363399] bg-opacity-60 z-10'></div>
                        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-3xl z-20 group-hover:block hidden cursor-pointer'>
                            {post.icon === "Facebook" ? (
                                <FaFacebookSquare />
                            ) : post.icon === "Instagram" ? (
                                <FaInstagram />
                            ) : post.icon === "Twitter" ? (
                                <FaXTwitter />
                            ) : post.icon === "LinkedIn" ? (
                                <FaLinkedin />
                            ) : post.icon === "Google" ? (
                                <FaGoogle />
                            ) : post.icon === "YouTube" ? (
                                <FaYoutube />
                            ) : post.icon === "Blogger" ? (
                                <FaBloggerB />
                            ) : post.icon === "Pinterest" ? (
                                <FaPinterest />
                            ) : post.icon === "TikTok" ? (
                                <FaTiktok />
                            ) : post.icon === "Snapchat" ? (
                                <FaSnapchatSquare />
                            ) : post.icon === "Reddit" ? (
                                <FaReddit />
                            ) : post.icon === "Telegram" ? (
                                <FaTelegramPlane />
                            ) : (
                                <MdOutlineWeb />
                            )}
                        </div>
                    </a>
                )
            )}
        </div>
    );
};

export default Post;
