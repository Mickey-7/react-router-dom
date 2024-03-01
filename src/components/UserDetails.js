import { useParams } from "react-router-dom"

// created for dynamic routes
export const UserDetails = () => {
    // added for url params
    const params = useParams()
    const userId = params.userId
    return <div>Details about user {userId}</div>
}