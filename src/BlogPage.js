import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "./useFetch";
import React from "react";

const BlogPage = () => {
    const { id } = useParams()
    const { data: blog, isPending } = useFetch('http://localhost:8000/blogs/' + id)
    console.log(blog)
    return (


        < div className="BlogPage" >
            {isPending && <div>LOADING..</div>}
            {blog && (
                <div className="blogs-page">
                    <div className="author">Written by : {blog.yazar}</div>
                    <h2 className="title">Title : {blog.title}</h2>
                    <p className="content">{blog.body}</p>
                </div>
            )}

        </div >
    );
}

export default BlogPage;
