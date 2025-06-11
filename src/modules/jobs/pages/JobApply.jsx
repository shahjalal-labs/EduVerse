import { useState } from "react";

import { motion } from "motion/react";
import { useParams, useNavigate } from "react-router";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { rightToLeft } from "../../../animation/motion";
import { jobseeker1 } from "../../../assets/images";
import { useMediaQuery } from "react-responsive";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";

const applyForJob = async (application) => {
  const { data } = await axios.post(
    // "http://localhost:3000/applications",
    "https://career-code-server-for-recruiter-pa-nu.vercel.app/applications",
    application,
  );
  return data;
};

const JobApply = () => {
  const { user } = useAuth();
  const { id: jobId } = useParams();
  console.log(jobId, "JobApply.jsx", 24);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    applicant: user?.email,
    resume: "",
    github: "",
    linkedin: "",
  });

  const {
    mutate: submitApplication,
    isPending,
    isSuccess,
    isError,
    error,
  } = useMutation({
    mutationFn: applyForJob,
    onSuccess: (data) => {
      console.log(data, "JobApply.jsx", 39);
      // setTimeout(() => navigate("/thank-you"), 1500);
      Swal.fire({
        title: "Application Submitted",
        text: "Thank you for applying for this job!",
        icon: "success",
        showConfirmButton: false,
        timer: 1500,
      });

      setTimeout(() => navigate("/myapplications"), 2500);
    },
    onError: (err) => {
      console.log(err, "JobApply.jsx", 42);
    },
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`form`, form, "JobApply.jsx", 52);

    if (!form.name || !form.applicant || !form.resume) return;

    submitApplication({ ...form, jobId });
  };

  const below530px = useMediaQuery({ query: "(max-width: 530px)" });

  let animate;
  if (!below530px) {
    animate = {
      x: [0, 20, 40, 20, 0, -20, -40, -20, 0],
      y: [0, 40, 0, -40, 0, -40, 0, 40, 0],
    };
  } else {
    animate = {
      y: [0, 40, 0, -40, 0, -40, 0, 40, 0],
    };
  }
  return (
    <>
      <div className="min-h-[80vh] flex flex-col justify-center items-center">
        <h1 className="text-2xl font-bold mt-6 text-center">Apply for Job</h1>

        <div className="flex flex-col-reverse justify-cente items-center lg:flex-row">
          <motion.div
            animate={animate}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <img src={jobseeker1} />
            {/* <img src={jobseeker2} /> */}
          </motion.div>
          <motion.div className="max-w-2xl mx-auto px-6 py-10" {...rightToLeft}>
            <form
              onSubmit={handleSubmit}
              className="space-y-4 bg-base-100 p-6 rounded-lg shadow"
            >
              <div>
                <label className="label">
                  <span className="label-text">Full Name</span>
                </label>
                <input
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  className="input input-bordered w-full"
                  required
                  placeholder="Full Name"
                />
              </div>
              <div>
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  name="applicant"
                  type="email"
                  value={user?.email}
                  className="input input-bordered w-full"
                  required
                  readOnly
                />
              </div>

              <div>
                <label className="label">
                  <span className="label-text">Github Url</span>
                </label>
                <input
                  name="github"
                  type="url"
                  value={form.github}
                  onChange={handleChange}
                  className="input input-bordered w-full"
                  required
                  placeholder="Github Url"
                />
              </div>
              <div>
                <label className="label">
                  <span className="label-text">Linkedin Url</span>
                </label>
                <input
                  name="linkedin"
                  type="text"
                  value={form.linkedin}
                  onChange={handleChange}
                  className="input input-bordered w-full"
                  required
                  placeholder="Linkedin Url"
                />
              </div>

              <div>
                <label className="label">
                  <span className="label-text">
                    Resume Link (Google Drive, etc.)
                  </span>
                </label>
                <input
                  name="resume"
                  type="url"
                  value={form.resumeLink}
                  onChange={handleChange}
                  className="input input-bordered w-full"
                  required
                  placeholder="Resume Link"
                />
              </div>

              <div>
                <button className="btn btn-primary w-full" disabled={isPending}>
                  {isPending ? "Submitting..." : "Submit Application"}
                </button>
              </div>

              {isSuccess && (
                <div className="alert alert-success mt-4">
                  Application submitted successfully!
                </div>
              )}
              {isError && (
                <div className="alert alert-error mt-4">
                  Error: {error.message}
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default JobApply;
