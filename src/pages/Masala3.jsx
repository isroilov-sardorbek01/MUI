import React, { useEffect, useState } from "react";
import image from "../images/searchImg.svg";
import postImg from "../images/postImg.svg";
import axios from "axios";

function Masala3() {
    const [posts, setPosts] = useState([]);
    const [search, setSearch] = useState([]);
    const [name, setName] = useState("");
    const [content, setContent] = useState("");

    useEffect(() => {
        axios
            .get("http://localhost:3000/users")
            .then((response) => {
                if (response.status == 200) {
                    setPosts(response.data);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    function handleSearch(e) {
        e.preventDefault();
        axios
            .get("http://localhost:3000/users")
            .then((response) => {
                if (response.status == 200) {
                    if (search !== "") {
                        const filteredData = response.data.filter(
                            (item) => item.name === search
                        );
                        setPosts(filteredData);
                    } else {
                        axios
                            .get("http://localhost:3000/users")
                            .then((response) => {
                                if (response.status == 200) {
                                    setPosts(response.data);
                                }
                            })
                            .catch((err) => {
                                console.log(err);
                            });
                    }
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }

    function handlePost(e) {
        e.preventDefault();
        const data = {
            name,
            content,
            id: Date.now(),
        };
        axios
            .post("http://localhost:3000/users", data, {
                headers: {
                    "Content-Type": "application/json",
                },
            })
            .then((response) => {
                const copied = [...posts];
                copied.push(response.data);
                setPosts(copied);
                setName("");
                setContent("");
            })
            .catch((err) => {
                console.log(err);
            });
    }
    return (
        <div className="h-[100%]">
            <div className=" container1">
                <div className="bg-white rounded-xl flex items-center justify-between w-[700px] mx-auto p-2 mBorder transition-all mb-10">
                    <input
                        value={search}
                        onChange={(e) => {
                            setSearch(e.target.value);
                        }}
                        className="border-none outline-none w-full"
                        type="text"
                        placeholder="Search"
                    />
                    <button onClick={handleSearch} className="active:scale-90">
                        <img src={image} width={30} height={30} alt="" />
                    </button>
                </div>
                <div className="postWr rounded-xl  bg-black w-[700px] mx-auto text-white p-2 flex flex-col gap-3 pb-7 mb-[200px]">
                    <h1>Today Posts</h1>
                    {posts.length > 0 ? (
                        posts.map((post, index) => {
                            return (
                                <div
                                    className="bg-slate-200 text-black p-2 rounded-xl"
                                    key={post.id}
                                >
                                    <li>{post.name}</li>
                                    <h1>{post.title}</h1>
                                    <h1>{post.content}</h1>
                                </div>
                            );
                        })
                    ) : (
                        <h1>No posts</h1>
                    )}
                </div>
                <div className="flex flex-col bg-black fixed bottom-0">
                    <h1 className="text-center mt-1 text-white text-[20px]">
                        Post{" "}
                    </h1>
                    <div className="postcard bg-white flex items-center justify-between w-full  p-2  rounded-md border-[2px] border-black">
                        <input
                            value={name}
                            onChange={(e) => {
                                setName(e.target.value);
                            }}
                            className="border-none outline-none w-full"
                            type="text"
                            placeholder="Post your name"
                        />
                    </div>
                    <div className="postcard bg-white flex items-center justify-between w-[900px]  p-2 rounded-md border-[2px] border-black">
                        <textarea
                            value={content}
                            onChange={(e) => {
                                setContent(e.target.value);
                            }}
                            className="border-none outline-none w-full h-[50px] resize-none"
                            type="text"
                            placeholder="Post content"
                        />
                    </div>
                    <div className="flex justify-center mt-2 mb-3">
                        <button
                            onClick={handlePost}
                            className="flex items-center gap-3 bg-white p-3 w-[100px] rounded-xl active:scale-90 transition-all"
                        >
                            POST
                            <img
                                src={postImg}
                                width={25}
                                height={25}
                                alt="img"
                            />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Masala3;
