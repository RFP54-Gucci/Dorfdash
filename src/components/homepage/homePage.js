import SignUpForm from './signupform.js';
import Navbar from './Navbar.js';
import Footer from './Footer.js';

const Homepage = () => {
  return (
    <div className="homepage_div">
      <Navbar />
      <SignUpForm />
      <Footer />
    </div>
  )
}

export default Homepage;