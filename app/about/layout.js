export default function AboutLayout({children}){
    return(
        <div>
            <div>{children}</div>
            <div className="mt-8">
                <h2>You might also like </h2>
                <ul>
                    <li>First blog post</li>
                    <li>Second blog post</li>

                    <li>Third blog post</li>
                </ul>
            </div>
        </div>
    )
}