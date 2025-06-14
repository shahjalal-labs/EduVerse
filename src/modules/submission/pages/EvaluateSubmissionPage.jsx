import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import EvaluateSumissionForm from "../components/evaluateSubmission/EvaluateSumissionForm";
import useAuth from "../../../hooks/useAuth";
import updateData from "../../../utils/updateData";
import { useLoaderData, useParams } from "react-router";

const EvaluateSubmissionPage = ({ submissionData }) => {
  const data = useLoaderData();
  console.log(data, "EvaluateSubmissionPage.jsx", 10);

  const { user } = useAuth();
  const { _id, studentEmail, googleDocLink, notes } = submissionData || {};

  const { id } = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const evaluatedData = {
      ...data,
      evaluatedBy: user?.email,
    };
    console.log(`evaluatedData`, evaluatedData);
    try {
      const result = updateData({
        endpoint: `submission/evaluate/${id}`,
        body: evaluatedData,
      });

      if (result?.success) {
        Swal.fire(
          "✅ Success",
          "Evaluation submitted successfully!",
          "success",
        );
      } else {
        Swal.fire(
          "❌ Failed",
          result.message || "Something went wrong",
          "error",
        );
      }
    } catch (err) {
      console.log(err, "EvaluateSubmissionPage.jsx", 45);
      Swal.fire("⚠️ Error", err.message, "error");
    }
  };

  return (
    <section className="max-w-2xl mx-auto  rounded-xl shadow-lg p-6 mt-10 space-y-6">
      <h2 className="text-2xl font-bold text-center text-primary">
        Evaluate Submission
      </h2>
      <div className="space-y-2 text-sm">
        <p>
          <span className="font-semibold">📧 Submitted By:</span>{" "}
          <span className="text-gray-700 dark:text-gray-300">
            {studentEmail}
          </span>
        </p>
        <p>
          <span className="font-semibold">📄 Google Doc Link:</span>{" "}
          <a
            href={googleDocLink}
            target="_blank"
            rel="noopener noreferrer"
            className="link link-primary break-all"
          >
            Open Document
          </a>
        </p>
        <p>
          <span className="font-semibold">📝 Total Marks:</span>{" "}
          <span className="text-gray-500 ">30</span>
        </p>
        <p>
          <span className="font-semibold">📝 Notes:</span>{" "}
          <span className="text-gray-700 ">{notes}</span>
        </p>
      </div>
      {/* form */}
      {/* handleSubmit, register, errors, onSubmit */}
      <EvaluateSumissionForm
        onSubmit={handleSubmit(onSubmit)}
        register={register}
        errors={errors}
      />
    </section>
  );
};

export default EvaluateSubmissionPage;
