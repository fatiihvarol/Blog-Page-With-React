import { Link } from 'react-router-dom'
const BlogList = (props) => {
    const blogs = props.blogs

    return (
        <div className="blogList">

            {

                blogs.map((blog) => (
                    <div className="blogs-preview" key={blog.id}>
                        <Link to={`/blogs/${blog.id}`}>
                            <h2>{blog.title}</h2>
                            <p>{blog.yazar}</p>
                        </Link>
                    </div>

                ))}
        </div>
    );
}

export default BlogList;
