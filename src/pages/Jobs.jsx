import { useState } from "react";
import { Link } from "react-router-dom";
import jobsData from "../data/jobsData";
import "./Jobs.css";

export default function Jobs() {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("All");

  const filteredJobs = jobsData.filter((job) => {
    const matchSearch =
      job.title.toLowerCase().includes(search.toLowerCase()) ||
      job.company.toLowerCase().includes(search.toLowerCase());

    const matchLocation =
      location === "All" || job.location === location;

    return matchSearch && matchLocation;
  });

  return (
    <div className="jobs-page container">
      <h2 className="text-center mb-4">Find Jobs</h2>

      {/* SEARCH & FILTER */}
      <div className="filter-box mb-5">
        <input
          type="text"
          className="form-control mb-3"
          placeholder="Search job or company"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="form-select"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        >
          <option value="All">All Locations</option>
          <option value="Bangalore">Bangalore</option>
          <option value="Chennai">Chennai</option>
          <option value="Coimbatore">Coimbatore</option>
          <option value="Hyderabad">Hyderabad</option>
          <option value="Pune">Pune</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Remote">Remote</option>
        </select>
      </div>

      {/* JOB CARDS */}
      <div className="row">
        {filteredJobs.length === 0 ? (
          <p className="text-center text-muted">No jobs found</p>
        ) : (
          filteredJobs.map((job) => (
            <div className="col-md-6 mb-4" key={job.id}>
              <div className="job-card">
                {/* LEFT */}
                <div className="job-card-left">
                  <div className="company-logo">
                    {job.company.charAt(0)}
                  </div>

                  <div className="job-info">
                    <h5>{job.title}</h5>
                    <p className="company-name">{job.company}</p>
                    <p className="meta">
                      📍 {job.location} • {job.type}
                    </p>
                  </div>
                </div>

                {/* RIGHT */}
                <Link
                  to={`/jobs/${job.id}`}
                  className="btn btn-outline-primary btn-sm view-btn"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
