import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
const BlogList = (props) => {
    const blogs = props.blogs
    const history = useHistory()
    const deleteHandler = (id) => {
        fetch('http://localhost:8000/blogs/' + id, {
            method: 'DELETE'
        }).then(() => {
            history.push('/')
        })
    }

    return (
        <div className="blogList">

            {

                blogs.map((blog) => (
                    <div className="blogs-preview" key={blog.id}>
                        <Link to={`/blogs/${blog.id}`}>
                            <h2>{blog.title}</h2>
                            <p>{blog.yazar}</p>
                            <button onClick={() => deleteHandler(blog.id)}>DELETE</button>
                        </Link>
                    </div>

                ))}
        </div>
    );
}

export default BlogList;
