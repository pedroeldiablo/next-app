import axios from 'axios';

const Post = ({id, comments }) => (
        <>
        <h1>Comments from Post #{id}</h1>  
            {comments.map(comment => (
                <Comment { ...comment } /> 
            ))}
        </>
);

const Comment = ({ email, body }) => (
    <div>
        <p>{body}</p>
        <p>{email}</p>
</div> 
)
    

Post.getInitialProps = async ({query}) => { 
    const res = await axios.get(
        `https://jsonplaceholder.typicode.com/comments?postId=${query.id}`);
    const { data } = res;
    return {...query, comments: data };
};


export default Post;
