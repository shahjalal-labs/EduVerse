import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import customAlert from "../../../utils/customAlert";
import postData from "../../../utils/postData";

const CreateAssignment = () => {
  const {
    mutate: createAssignment,
    isPending,
    error,
    isError,
    isSuccess,
  } = useMutation({
    mutationFn: postData,
    onSuccess: (data) => {
      console.log(data, "data CreateAssignment.jsx", 19);

      customAlert({
        title: "Assignment Created!",
      });
    },
    onError: (error) => {
      console.log(error, "error CreateAssignment.jsx", 19);
    },
  });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [startDate, setStartDate] = useState(new Date());

  const onSubmit = (data) => {
    const assignment = {
      ...data,
      dueDate: startDate,
    };

    console.log(assignment, "CreateAssignment.jsx", 19);
    // reset();
    setStartDate(new Date());
    postData({
      endpoint: "assignments/create-assignment",
      body: assignment,
    });
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-16 font-sans">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4 animate-fade-in">
          Create a New Assignment ✍️
        </h1>
        <p className="text-lg text-gray-500 animate-fade-in delay-100">
          Fill out the form below to share a new learning challenge with your
          peers.
        </p>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white rounded-2xl shadow-2xl p-8 space-y-6 animate-fade-in-up"
      >
        <div>
          <label className="block text-lg font-semibold text-gray-700 mb-2">
            Title
          </label>
          <input
            type="text"
            placeholder="Enter assignment title"
            className="input input-bordered w-full"
            {...register("title", { required: "Title is required" })}
          />
          {errors.title && (
            <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>
          )}
        </div>

        <div>
          <label className="block text-lg font-semibold text-gray-700 mb-2">
            Description
          </label>
          <textarea
            placeholder="Enter assignment description"
            className="textarea textarea-bordered w-full"
            rows={4}
            {...register("description", {
              required: "Description is required",
            })}
          ></textarea>
          {errors.description && (
            <p className="text-red-500 text-sm mt-1">
              {errors.description.message}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-lg font-semibold text-gray-700 mb-2">
              Marks
            </label>
            <input
              type="number"
              placeholder="Enter total marks"
              className="input input-bordered w-full"
              {...register("marks", { required: "Marks are required" })}
            />
            {errors.marks && (
              <p className="text-red-500 text-sm mt-1">
                {errors.marks.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-lg font-semibold text-gray-700 mb-2">
              Thumbnail Image URL
            </label>
            <input
              type="url"
              placeholder="https://example.com/image.jpg"
              className="input input-bordered w-full"
              {...register("thumbnail", {
                required: "Thumbnail URL is required",
              })}
            />
            {errors.thumbnail && (
              <p className="text-red-500 text-sm mt-1">
                {errors.thumbnail.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-lg font-semibold text-gray-700 mb-2">
              Difficulty Level
            </label>
            <select
              className="select select-bordered w-full"
              {...register("difficulty", {
                required: "Select difficulty level",
              })}
              defaultValue=""
            >
              <option value="" disabled>
                Select difficulty
              </option>
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
            {errors.difficulty && (
              <p className="text-red-500 text-sm mt-1">
                {errors.difficulty.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-lg font-semibold text-gray-700 mb-2">
              Due Date
            </label>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              className="input input-bordered w-full"
              dateFormat="dd/MM/yyyy"
              minDate={new Date()}
            />
          </div>
        </div>

        <button type="submit" className="btn btn-primary w-full mt-6">
          Create Assignment
        </button>
      </form>
    </div>
  );
};

export default CreateAssignment;
