import { notFound } from "next/navigation"

export default function BlogPage({ params }){
    if(!['first','second'].includes(params.slug)){
        notFound()
    }
    return (<>
        <h1>Blog Page</h1>
        <p>This is the blog page</p>
        {params.slug}
    </>)
}