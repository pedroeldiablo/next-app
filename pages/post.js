import { withRouter } from 'next/router';

const Post = props => (
        <>
            <h1>Post Page</h1>  
            <p>{props.router.query.id}</p>
        </>
);   

// Post.getInitialProps = async ({query}) => { 
//     return query;
// };


export default withRouter(Post);
