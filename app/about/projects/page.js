// export const dynamic = 'force-dynamic'

import { Suspense } from "react";
import ProjectList from "./components/project-list";
import ProjectListLoading from "./components/project-list-loading";
import { ErrorBoundary } from "react-error-boundary";
import H1 from "@/components/h1";

export const metadata = {
    title: 'Projects'
}


export default async function ProjectsPage (){
    return(
        <div className="p-20">
            <H1>Projects</H1>
            <ErrorBoundary fallback={<ProjectListLoading />}>
                <Suspense fallback={<ProjectListLoading />}>
                    <ProjectList />
                </Suspense>
            </ErrorBoundary>
        </div>
    )
}

// https://nextjs.org/docs/app/building-your-application/caching#time-based-revalidation