import { useEffect, useState } from "react";
import BlogList from "./BlogList";
const Home = () => {

    const [name, setName] = useState('fatih')

    const [blogs, setBlog] = useState(null);

    const deleteHandler = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id)
        setBlog(newBlogs);
    }
    const searchHandler = (title) => {
        const newBlogs = blogs.filter(blog => blog.title === title)
        setBlog(newBlogs);
    }
    useEffect(() => {
        fetch('http://localhost:8000/blogs')
            .then(res => {
                return res.json()
            })
            .then(data => {
                console.log(data)
                setBlog(data)
            })
    }, [])
    return (
        <div className="home">
            {blogs && <BlogList blogs={blogs} title={"İçerik1"} deleteHandler={deleteHandler} searchHandler={searchHandler} />}

        </div>
    );

}

export default Home;
