import { Link } from "react-router";

const ThankYou = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-base-100 px-4">
      <div className="text-center max-w-md">
        <div className="text-green-500 mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mx-auto h-16 w-16 stroke-current"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h1 className="text-3xl font-bold mb-2">Thank You!</h1>
        <p className="text-gray-600 mb-6">
          Your application has been submitted successfully. We’ll be in touch if
          you’re shortlisted.
        </p>
        <Link to="/" className="btn btn-primary">
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default ThankYou;
