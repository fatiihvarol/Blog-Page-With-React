const BlogList = (props) => {
    const blogs = props.blogs

    return (
        <div className="blogList">
            <h1 >{props.title}</h1>
            <input id='searchTxt' type="text" placeholder="Search.."></input>
            <button id="1" onClick={() => props.searchHandler(document.getElementById("searchTxt").value)}> Search </button>
            {

                blogs.map((blog) => (
                    <div className="blogs-preview" key={blog.id}>
                        <h2>{blog.title}</h2>
                        <button onClick={() => props.deleteHandler(blog.id)}>Delete</button>
                    </div>
                ))}
        </div>
    );
}

export default BlogList;
