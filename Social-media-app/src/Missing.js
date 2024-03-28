import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Missing = () => {
    return (
        <main className='Missing'>
            <Header />
                <h2>Page Not Found</h2>
                <p>Well, that's disappointing.</p>
                <p>
                    <Link to='/'>Visit Our Homepage</Link>
                </p>
            <Footer />
        </main>
    )
}

export default Missing
