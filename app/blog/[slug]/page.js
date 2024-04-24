import { notFound } from "next/navigation"

const titles = {
    'first': 'Hello First!',
    'second': 'Hello Second!'
}

export async function generateMetadata({ params }, parent) {
    const description = (await parent).description ?? 'Default desc'

    return {
        title: titles[params.slug],
        description
    }
}

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