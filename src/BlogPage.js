import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const BlogPage = () => {
    const { id } = useParams()
    return (

        <div className="BlogPage">

            <h1>BLOG PAGE !! - {id}</h1>
        </div>
    );
}

export default BlogPage;
