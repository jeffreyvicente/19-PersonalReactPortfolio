import React, {useState} from 'react';

// Imports the different components of the application
import Nav from './Nav';
import Header from './Header'
import Footer from './Footer'

// Imports the different pages of the application
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Contact from './pages/Contact';

// Imports the CSS styles for the pages
import "./css/page.css"

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('Home');
  
    // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
    const renderPage = () => {
      if (currentPage === 'Contact') {
        return <Contact />;
      }
      if (currentPage === 'Portfolio') {
        return <Portfolio />;
      }
      if (currentPage === 'Resume') {
        return <Resume />;
      }
      // If currentPage is not 'Contact', 'Portfolio', or 'Resume', we default to rendering the About page.
      return <About />;
    };
  
    // A function to handle changes in the current page.
    const handlePageChange = (page) => setCurrentPage(page);
  
    return (
      <div>
        <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
        {/*Calls the renderPage method, return a component  */}
        <Header/>
        {renderPage()}
        <Footer/>

      </div>
    );
  }
  