export default function BlogPage({ params }){
    return (<>
        <h1>Blog Page</h1>
        <p>This is the blog page</p>
        {params.slug}
    </>)
}