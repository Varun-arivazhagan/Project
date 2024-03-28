import Feed from './Feed';
import { useContext } from 'react';
import DataContext from './context/DataContext';
import Header from './Header'
import Footer from './Footer';

const Home = () => {
    const { searchResults, fetchError, isLoading } = useContext(DataContext);

    return (
        <main className="Home">
            <Header title="React JS Blog" />
            {isLoading && <p className="statusMsg">Loading posts...</p>}
            {!isLoading && fetchError && <p className="statusMsg" style={{ color: "red" }}>{fetchError}</p>}
            {!isLoading && !fetchError && (searchResults.length ? <Feed posts={searchResults} /> : <p className="statusMsg">No posts to display.</p>)}
            <Footer />
        </main>
    )
}

export default Home
