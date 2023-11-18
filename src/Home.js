import BlogList from "./bloglist";
import useFetch from "./useFetch";

//Install json server direct into the project or use npx to run the code from the web 


const Home = () => {

    const {data:blogs ,isPending, error} = useFetch(" http://localhost:8000/blogs")

    /*[
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ]
    //const [name, setName] = useState('mario')

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id)
        setBlogs(newBlogs)
    }
    */

    //Dependencies like [] allow us to run the array only once
    //USE EFFECT IS TO RUN CODE ON ANY RENDER. It can be used to fetch data or communicate with some kind of authentification. They are known as side effect


    return ( 
        <div className="home">
            {error && <div> {error} </div>}
            {isPending && <div>Loading ... </div> }
            { blogs && <BlogList blogs = {blogs} title = "All Blogs"/>}
            {/* Conditional templating in react. The logical and evaluates the left and if it is false, it never even bothers with the right.If it is true, it evaluates the next one */}
            {/*<button onClick={() => setName('Luigi')}>Change Name</button>
            <p>{name}</p>
            {/*<BlogList blogs = {blogs.filter((blog) => blog.author === "mario")} title = "Mario Blogs"/>*/}
        </div>
     );
}
 
export default Home;