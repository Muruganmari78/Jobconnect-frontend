import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import jobsData from "../data/jobsData";
import "./JobDetails.css";

export default function JobDetails() {
  const { id } = useParams();
  const job = jobsData.find((j) => j.id === Number(id));

  const [applied, setApplied] = useState(false);
  const [saved, setSaved] = useState(false);

  // ✅ Recently Viewed Jobs updater
  const updateRecentJobs = (job) => {
    let recentJobs =
      JSON.parse(localStorage.getItem("recentJobs")) || [];

    // remove duplicate
    recentJobs = recentJobs.filter((j) => j.id !== job.id);

    // add latest on top
    recentJobs.unshift(job);

    // keep only last 5
    if (recentJobs.length > 5) {
      recentJobs = recentJobs.slice(0, 5);
    }

    localStorage.setItem(
      "recentJobs",
      JSON.stringify(recentJobs)
    );
  };

  // 🔁 Sync states + update recent jobs
  useEffect(() => {
    if (!job) return;

    const savedJobs =
      JSON.parse(localStorage.getItem("savedJobs")) || [];
    const appliedJobs =
      JSON.parse(localStorage.getItem("appliedJobs")) || [];

    setSaved(savedJobs.some((j) => j.id === job.id));
    setApplied(appliedJobs.some((j) => j.id === job.id));

    updateRecentJobs(job);
  }, [job]);

  if (!job) {
    return <h3 className="text-center mt-5">Job not found</h3>;
  }

  // ✅ Apply Job
  const applyJob = () => {
    const appliedJobs =
      JSON.parse(localStorage.getItem("appliedJobs")) || [];

    if (!appliedJobs.some((j) => j.id === job.id)) {
      appliedJobs.push(job);
      localStorage.setItem(
        "appliedJobs",
        JSON.stringify(appliedJobs)
      );
    }
    setApplied(true);
  };

  // ✅ Save Job
  const saveJob = () => {
    const savedJobs =
      JSON.parse(localStorage.getItem("savedJobs")) || [];

    if (!savedJobs.some((j) => j.id === job.id)) {
      savedJobs.push(job);
      localStorage.setItem(
        "savedJobs",
        JSON.stringify(savedJobs)
      );
    }
    setSaved(true);
  };

  return (
    <div className="job-details">
      <div className="job-box">
        <span className="badge job-type">{job.type}</span>

        <h2>{job.title}</h2>
        <h6 className="company">{job.company}</h6>

        <div className="job-highlights">
          <span>📍 {job.location}</span>
          <span>💼 {job.experience}</span>
          <span>💰 {job.salary}</span>
        </div>

        <hr />

        <h5>Job Description</h5>
        <p>{job.description}</p>

        <h5>Required Skills</h5>
        <div className="skills">
          {job.skills.map((skill, i) => (
            <span key={i} className="skill-badge">
              {skill}
            </span>
          ))}
        </div>

        <div className="actions">
          <button
            className="btn btn-success me-3"
            onClick={applyJob}
            disabled={applied}
          >
            {applied ? "Applied" : "Apply Now"}
          </button>

          <button
            className="btn btn-outline-primary"
            onClick={saveJob}
            disabled={saved}
          >
            {saved ? "Saved" : "Save Job"}
          </button>
        </div>
      </div>
    </div>
  );
}
