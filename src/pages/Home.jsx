import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="hero-section">
        <div className="container text-center">
          <h1 className="hero-title">
            Find Your <span>Dream Job</span> Today
          </h1>
          <p className="hero-subtitle">
            Search thousands of jobs from top companies. Apply in one click.
          </p>

          <div className="hero-buttons">
            <Link to="/jobs" className="btn btn-primary btn-lg me-3">
              Browse Jobs
            </Link>
            <Link to="/register" className="btn btn-outline-light btn-lg">
              Post a Job
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURED JOBS */}
      <section className="jobs-section">
        <div className="container">
          <h2 className="section-title text-center">Featured Jobs</h2>

          <div className="row mt-4">
            {jobs.map((job) => (
              <div className="col-md-4 mb-4" key={job.id}>
                <div className="job-card">
                  <h5>{job.title}</h5>
                  <p className="company">{job.company}</p>
                  <p className="location">{job.location}</p>
                  <Link to={`/jobs/${job.id}`} className="btn btn-sm btn-dark">
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

const jobs = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "Tech Solutions",
    location: "Bangalore"
  },
  {
    id: 2,
    title: "React Developer",
    company: "Startup Hub",
    location: "Remote"
  },
  {
    id: 3,
    title: "UI Developer",
    company: "DesignPro",
    location: "Chennai"
  }
];
