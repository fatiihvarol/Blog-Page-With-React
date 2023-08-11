import { useEffect, useState } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";
const Home = () => {

    const { data: blogs, isPending } = useFetch('http://localhost:8000/blogs')

    return (
        <div className="home">
            {isPending && <div>Loading..</div>}
            {blogs && <BlogList blogs={blogs} title={"İçerik1"} />}

        </div>
    );

}

export default Home;
