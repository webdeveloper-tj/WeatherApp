import { Link } from "react-router-dom";
import "./About.css";
function About() {
  return (
    <>
      <div className="about-load container">
        <div className="row">
          <div className="col-md-10 offset-md-1">
            <div className="cv -section">
              <h2>Karimov Muhammadismoil</h2>
              <p>Email: muhammadismoil11a@gmail.com</p>
              <p>Phone: +992 401 27 04 04</p>
              <hr />
              <h3>Education</h3>
              <p>
                <strong>
                  Tajik Technolgical University named after Academician
                  Muhammadjon Saifiddin Osimi
                </strong>{" "}
                Bachelor of Science in Computer Science
              </p>
              <p>March 2024 - Present</p>
              <ul>
                <li>
                  Developed web applications using HTML, CSS, JavaScript, React
                  Bootstrap or Tailwind.
                </li>
                <li>
                  Collaborated with team members to design and implement new
                  features.
                </li>
                <li>
                  Tested and debugged code to ensure high-quality software.
                </li>
              </ul>
              <hr />
              <h3>Skills</h3>
              <ul>
                <li>HTML/CSS</li>
                <li>JavaScript</li>
                <li>Tailwind CSS</li>
                <li>Bootstrap</li>
                <li>React JS</li>
              </ul>
              <br />
              <Link to="/" className="go_to_back btn btn-outline-dark btn-sm">
                Back
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
