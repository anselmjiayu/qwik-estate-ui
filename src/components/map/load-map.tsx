/** @jsxImportSource react */
import { Suspense, useState, useEffect, lazy } from "react";
export function LazyMap(props) {
    const [Component, setComponent] = useState(() => Loading)

    // useEffect() callbacks are only run in the browser, consequently the map component
    // is loaded and rendered only in the browser.
    useEffect(() => {
        // @ts-expect-error The type provided by @types/react is wrong
        setComponent(() => lazy(() => import('./map')))
    }, [])

    return (
        <Suspense fallback={<Loading />}>
            <Component items={props.items} />
        </Suspense>
    )
}

function Loading() {
    return <div>Loading map...</div>
}
