const Post = ({id}) => {
    return (
        <>
        <h1>Post Page</h1>  
        <p>{id}</p>
        </>
    );   
}

Post.getInitialProps = async ({query}) => { 
    return query;
};


export default Post;
