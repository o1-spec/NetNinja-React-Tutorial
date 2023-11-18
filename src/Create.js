import { useState } from "react";
import {useHistory} from "react-router-dom"

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author,setAuthor] = useState('mario')
    const [isPending, setIsPending] = useState(false)
    const history  = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {title, body, author};

        setIsPending(true);

        //console.log(blog);
        fetch('http://localhost:8000/blogs', {//Where we tackle the data and also define the type of request we are sending
            method: 'POST',//Signifies a POST request
            headers: {"Content-Type" : "application/json"},//Shows the content type that is being sent.This is JSON data
            body: JSON.stringify(blog)//The data we are sending with this request
        }).then(() => {
            console.log('New blog added')
            setIsPending(false)
        })

        //history.go(-1)//- mean to go back in history. minus 1 means going back once in history. + means to go forward
        history.push('/')// push alongside the route of the place we are going to. We use / because this is the route for the home page
    }

    return ( 
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input 
                   type="text"
                   required
                   value={title}
                   onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog body:</label>
                <textarea
                 required
                 value={body}
                 onChange={(e) => setBody(e.target.value)} 
                 >
                 </textarea>
                 <label>Blog author: </label>
                 <select 
                 value={author}
                 onChange={(e) => setAuthor(e.target.value)}>
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                 </select>
                 { !isPending && <button>Add Blog</button> }
                 { isPending && <button disabled>Adding Blog .......</button> }
                 {/*
                 <p>{title}</p>
                 <p>{body}</p>
    <p>{author}</p>*/}
            </form>
        </div>
     );
}
 
export default Create;