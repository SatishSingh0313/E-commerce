import logo from "../logo.jpg"
import  { Link } from "react-router-dom"
const About = () => {


    return (
        <div className="login">
           <Link to="/"> <img src={logo} alt=""></img></Link>
            <h2>You Think We Built Your Vision</h2>
            <h1>We Mind Your Business !!</h1>
            <p><h3>Are you desiring to achieve your digital dream with the best-combined services?
                Astream is here for you, to provide all types of digital support regarding personal or professional as well as e-commercial website issues. Apart from this,
                we deliver a wide range of services that meet your specific needs.</h3></p>
        </div>
    )

}

export default About;