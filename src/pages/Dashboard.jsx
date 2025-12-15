import { useEffect, useState } from "react";

export default function Dashboard() {
  const [savedJobs, setSavedJobs] = useState([]);
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [recentJobs, setRecentJobs] = useState([]);

  useEffect(() => {
    setSavedJobs(
      JSON.parse(localStorage.getItem("savedJobs")) || []
    );
    setAppliedJobs(
      JSON.parse(localStorage.getItem("appliedJobs")) || []
    );
    setRecentJobs(
      JSON.parse(localStorage.getItem("recentJobs")) || []
    );
  }, []);

  const removeSavedJob = (id) => {
    const updated = savedJobs.filter((job) => job.id !== id);
    setSavedJobs(updated);
    localStorage.setItem("savedJobs", JSON.stringify(updated));
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">My Dashboard</h2>

      {/* RECENTLY VIEWED */}
      <section className="mb-5">
        <h4>Recently Viewed Jobs</h4>

        {recentJobs.length === 0 ? (
          <p className="text-muted">No recent jobs</p>
        ) : (
          recentJobs.map((job) => (
            <div
              key={job.id}
              className="border rounded p-3 mb-2"
            >
              <strong>{job.title}</strong>
              <br />
              <small>
                {job.company} • {job.location}
              </small>
            </div>
          ))
        )}
      </section>

      {/* SAVED JOBS */}
      <section className="mb-5">
        <h4>Saved Jobs</h4>

        {savedJobs.length === 0 ? (
          <p className="text-muted">No saved jobs</p>
        ) : (
          savedJobs.map((job) => (
            <div
              key={job.id}
              className="border rounded p-3 mb-3 d-flex justify-content-between align-items-center"
            >
              <div>
                <strong>{job.title}</strong>
                <br />
                <small>
                  {job.company} • {job.location}
                </small>
              </div>

              <button
                className="btn btn-sm btn-outline-danger"
                onClick={() => removeSavedJob(job.id)}
              >
                Remove
              </button>
            </div>
          ))
        )}
      </section>

      {/* APPLIED JOBS */}
      <section>
        <h4>Applied Jobs</h4>

        {appliedJobs.length === 0 ? (
          <p className="text-muted">No applied jobs</p>
        ) : (
          appliedJobs.map((job) => (
            <div
              key={job.id}
              className="border rounded p-3 mb-3"
            >
              <strong>{job.title}</strong>
              <br />
              <small>
                {job.company} • {job.location}
              </small>
            </div>
          ))
        )}
      </section>
    </div>
  );
}
