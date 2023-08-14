import React, { useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const CreateBlog = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [yazar, setYazar] = useState('Fatih Varol');
    const [isPending, setIsPending] = useState(false)
    const history = useHistory()
    const handeSubmit = (e) => {
        e.preventDefault()
        const blog = { title, body, yazar }
        setIsPending(true)
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        }).then(() => {
            console.log("new blog added")
            setIsPending(false)
            history.push('/')
        })
    }

    return (
        <div className="createBlog">
            <form onSubmit={handeSubmit}>
                <label>Blog Title:</label>
                <input
                    type="text" required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog Body:</label>
                <textarea required value={body} onChange={(e) => setBody(e.target.value)}></textarea>
                <label>Blog Author:</label>
                <select value={yazar} onChange={(e) => setYazar(e.target.value)}>
                    <option value="Fatih Varol">Fatih Varol</option>
                    <option value="Admin Admin">Admin Admin</option>
                </select>
                {!isPending && < button type="submit">Create Blog</button>}
                {isPending && < button disabled type="submit">Adding Blog</button>}
            </form>
        </div>
    );
}

export default CreateBlog;
