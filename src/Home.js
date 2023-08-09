import { useState } from "react";
import BlogList from "./BlogList";
const Home = () => {
    const [blogs, setBlog] = useState([
        { id: 1, "title": "Haber 1", "body": "Haber 1 içerik", "yazar": "Fatih1" },
        { id: 2, "title": "Haber 2", "body": "Haber 2 içerik", "yazar": "Fatih2" },
        { id: 3, "title": "Haber 3", "body": "Haber 3 içerik", "yazar": "Fatih3" }

    ]);

    const deleteHandler = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id)
        setBlog(newBlogs);
    }
    const searchHandler = (title) => {
        const newBlogs = blogs.filter(blog => blog.title === title)
        setBlog(newBlogs);
    }
    return (
        <div className="home">
            <BlogList blogs={blogs} title={"İçerik1"} deleteHandler={deleteHandler} searchHandler={searchHandler} />
        </div>
    );

}

export default Home;
