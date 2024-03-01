import { Outlet, useSearchParams } from "react-router-dom"

// created for dynamic routes
export const Users = () => {
    // added for search params
    const [searchParams, setSearchParams] = useSearchParams()
    const showActiveUsers = searchParams.get('filter') === 'active'
    return (
        <div>
            <h2>User 1</h2>
            <h2>User 2</h2>
            <h2>User 3</h2>
            <Outlet />
            {/* added for search params */}
            <div>
                <button
                    onClick={() => setSearchParams({ filter: 'active' })}
                >
                    Active Users
                </button>
                <button
                    onClick={() => setSearchParams({})}
                >
                    Reset Filter
                </button>
                {
                    showActiveUsers ? (
                        <h2>Showing active users</h2>
                    ) : (
                        <h2>Showing all users</h2>
                    )
                }
            </div>
        </div>
    )
}