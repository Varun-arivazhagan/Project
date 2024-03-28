import Footer from "./Footer"
import Header from "./Header"

const About = () => {
    return (
        <main className='About'>
            <Header />
                <h2>About</h2>
                <p style={{ marginTop: "1rem" }}>This blog app is a project in the Learn React tutorial series.</p>
            <Footer />
        </main>
    )
}

export default About
