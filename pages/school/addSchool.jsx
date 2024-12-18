import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddSchool = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [selectedFile, setSelectedFile] = useState(null);
  const router = useRouter();
  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };
  const onSubmit = async (data) => {
    const fileName = selectedFile ? selectedFile.name : "";
    const formdata = { ...data, image: fileName };
    try {
      const res = await axios.post(
        "http://localhost:3000/api/schools/addschool",
        formdata
      );
      if (res.status === 201) {
        toast.success("school data added successfully");
        reset();
      } else {
        toast.error("failed to add the data");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="h-screen bg-gradient-to-b from-blue-500 to-purple-500">
      <ToastContainer />
      <div className="py-5 w-full text-center flex justify-center items-center gap-2">
        <button
          onClick={() => router.back()}
          className="bg-white text-blue-500 py-2 px-4 rounded-md font-semibold hover:bg-blue-600 hover:text-white transition duration-300"
        >
          Go Back
        </button>
        <p className="text-gray-800 font-semibold text-2xl">
          Add desired school where all input fields are mondatory
        </p>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mx-auto max-w-md p-4 bg-gray-100 rounded-lg shadow-lg w-full"
      >
        <div className="space-y-4">
          <div className="flex flex-col">
            <label className="text-gray-800 font-semibold">Name:</label>
            <input
              type="text"
              className="border border-gray-300 rounded-md px-3 py-2"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>
          <div className="flex flex-col">
            <label className="text-gray-800 font-semibold">Address:</label>
            <input
              type="text"
              className="border border-gray-300 rounded-md px-3 py-2"
              {...register("address", { required: true })}
            />
            {errors.address && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>
          <div className="flex flex-col">
            <label className="text-gray-800 font-semibold">City:</label>
            <input
              type="text"
              className="border border-gray-300 rounded-md px-3 py-2"
              {...register("city", { required: true })}
            />
            {errors.city && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>
          <div className="flex flex-col">
            <label className="text-gray-800 font-semibold">State:</label>
            <input
              type="text"
              className="border border-gray-300 rounded-md px-3 py-2"
              {...register("state", { required: true })}
            />
            {errors.state && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>
          <div className="flex flex-col">
            <label className="text-gray-800 font-semibold">Contact:</label>
            <input
              type="tel"
              className="border border-gray-300 rounded-md px-3 py-2"
              {...register("contact")}
            />
          </div>
          <div className="flex flex-col">
            <label className="text-gray-800 font-semibold">Image URL:</label>
            <input
              type="file"
              className="border border-gray-300 rounded-md px-3 py-2"
              {...register("image")}
              accept="image/*"
              onChange={handleFileChange}
            />
          </div>
          <div className="flex flex-col">
            <label className="text-gray-800 font-semibold">Email ID:</label>
            <input
              type="text"
              className="border border-gray-300 rounded-md px-3 py-2"
              {...register("email_id", { required: true })}
            />
            {errors.email_id && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddSchool;
