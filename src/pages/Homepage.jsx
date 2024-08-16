import Navbar from '../components/Navbar/Navbar';

export const Homepage = () => {
    return (
        <>
             {/* Navbar /  ,, issue with styling of navbar  */}
            <div>
                <Navbar />
                <h4>⬆️ is a sample navbar to navigate to contact-us route</h4>
                <p style={{ padding: '10px' }}> this is ("/") route,this is where homepage(landing page) will be coded</p>
            </div>
        </>
    )
}