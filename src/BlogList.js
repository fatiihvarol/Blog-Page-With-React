const BlogList = (props) => {
    const blogs = props.blogs
    console.log(blogs, props)
    return (
        <div className="blogList">
            <h1>{props.title}</h1>
            <input id='searchTxt' type="text" placeholder="Search.."></input>
            <button onClick={() => props.searchHandler(document.getElementById("searchTxt").value)}> Search </button>
            {

                blogs.map((blog) => (
                    <div className="blogs-preview" id={blog.id}>
                        <h2>{blog.title}</h2>
                        <p>{blog.body}</p>
                        <button onClick={() => props.deleteHandler(blog.id)}>Delete</button>
                    </div>
                ))}
        </div>
    );
}

export default BlogList;
