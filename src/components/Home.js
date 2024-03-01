import { useNavigate } from "react-router-dom"

// created for Configuring Routes
export const Home = () => {
    const navigate = useNavigate()
    return (
        <>
            <div>Home Page</div>
            <button
                onClick={() => navigate('order-summary',
                    // { replace: true }
                )}
            >
                Place order
            </button>
        </>
    )
}