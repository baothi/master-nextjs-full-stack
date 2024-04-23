import Card from "@/components/card"

export default async function ProjectList() {
    const response = await fetch('http://localhost:3001/repos',
    // { cache: 'no-store' }
    ) // save cache
    // const response = await fetch('http://localhost:3001/repos', { next: { revalidate: 3 } }) // check khoảng thời gian bao lâu là sẽ update lại dữ liệu
    const repos = await response.json()
    // throw new Error('oops')
    return(
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {repos.map(repo => (
                <li key={repo.id} className="mb-4">
                    <Card className="font-mono h-full">
                        <div className="flex justify-between items-center mb-4">
                        <div className="font-semibold">{repo.title}</div>
                        <div>🌟{repo.stargazers_count}</div>
                        </div>

                        <div>{repo.description}</div>
                    </Card>
                </li>
            ))}
        </ul>
    )
}