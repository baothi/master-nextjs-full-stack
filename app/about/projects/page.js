// export const dynamic = 'force-dynamic'

import { Suspense } from "react";
import ProjectList from "./components/project-list";
import ProjectListLoading from "./components/project-list-loading";
import { ErrorBoundary } from "react-error-boundary";

export default async function ProjectsPage (){
    return(
        <div className="p-20">
            <h1 className="mb-8 text-xl">Project</h1>
            <ErrorBoundary fallback={<ProjectListLoading />}>
                <Suspense fallback={<ProjectListLoading />}>
                    <ProjectList />
                </Suspense>
            </ErrorBoundary>
        </div>
    )
}

// https://nextjs.org/docs/app/building-your-application/caching#time-based-revalidation