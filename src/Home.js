import { useEffect, useState } from "react";
import BlogList from "./BlogList";
const Home = () => {

    const [name, setName] = useState('fatih')

    const [blogs, setBlog] = useState([
        { id: "1", "title": "Haber 1", "body": "Haber 1 içerik", "yazar": "Fatih1" },
        { id: "2", "title": "Haber 2", "body": "Haber 2 içerik", "yazar": "Fatih2" },
        { id: "3", "title": "Haber 3", "body": "Haber 3 içerik", "yazar": "Fatih3" }

    ]);

    const deleteHandler = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id)
        setBlog(newBlogs);
    }
    const searchHandler = (title) => {
        const newBlogs = blogs.filter(blog => blog.title === title)
        setBlog(newBlogs);
    }
    useEffect(() => {
        console.log("use effect ran")
    }, [name])
    return (
        <div className="home">
            <BlogList blogs={blogs} title={"İçerik1"} deleteHandler={deleteHandler} searchHandler={searchHandler} />
            <button onClick={() => setName('ceren')}>Change Name</button>
            <p>{name}</p>
        </div>
    );

}

export default Home;
