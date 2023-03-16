import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Spinner from "../../shared/Spinner";

const AddDoctor = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const imageHostKey = process.env.REACT_APP_imgbb_key;

  const { data: specialties = [], isLoading } = useQuery({
    queryKey: ["specialty"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/appointmentSpecialty");
      const data = await res.json();
      return data;
    },
  });
  const handlarAddDoctor = (data) => {
    console.log(data);
    const img = data.img[0];
    const formData = new FormData();
    formData.append("image", img);
    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          console.log(imgData.data.url);
          const doctor = {
            name: data.name,
            email: data.email,
            specilialty: data.specilialty,
            image: imgData.data.url,
          };
          //save a doctor
          fetch("http://localhost:5000/doctors", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorazition: `bearer ${localStorage.getItem("access-token")}`,
            },
            body: JSON.stringify(doctor),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              if (data.acknowledged) {
                toast.success(`${doctor.name} is added Successfully`);

                navigate("/dashboard/managedoctors");
              }
            });
        }
      });
  };

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <div className=" w-96 p-8">
      <h2 className="text-4xl">Add Doctor</h2>

      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid nemo
        saepe vel harum, doloremque similique ea eius deleniti rerum! Incidunt
        explicabo provident molestias, delectus, laboriosam et, ducimus quia
        consequuntur iure recusandae fugiat harum quasi deserunt a repudiandae
        reprehenderit aperiam! Expedita, consequuntur assumenda! Optio
        repellendus nisi, facere dolor quibusdam tenetur doloribus odit itaque
        eveniet harum animi recusandae iste quas numquam minus repellat, nihil
        dolores cupiditate amet laudantium maxime ea. Aliquam quibusdam ad
        aspernatur dolorem velit. Quo voluptates odit ut temporibus eum
        consequuntur dolorem iure fugiat tempora aliquid illo aut accusamus
        reprehenderit nemo molestiae a sint ea nostrum eveniet omnis cumque
        voluptatibus, saepe, consequatur exercitationem? Libero necessitatibus
        qui fugiat harum quaerat voluptatibus facilis sit alias architecto et
        nostrum culpa vero eligendi, possimus quisquam atque quos nulla minus
        doloremque voluptates quam laudantium voluptatum. Esse ut assumenda
        eligendi sint, fugit eos velit, nulla accusamus impedit sunt aut porro
        sed, ipsa sit maxime perferendis? Fugiat!
      </p>

      <form onSubmit={handleSubmit(handlarAddDoctor)}>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Name</span>
          </label>

          <input
            placeholder="Your Name"
            type="text"
            {...register("name", {
              required: "Name is required",
            })}
            className="input input-bordered w-full max-w-xs"
          />
          {errors.name && <p className="text-red-600">{errors.name.message}</p>}
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Email</span>
          </label>

          <input
            placeholder="email"
            type="email"
            {...register("email", {
              required: "Email is required",
            })}
            className="input input-bordered w-full max-w-xs"
          />
          {errors.email && (
            <p className="text-red-600">{errors.email.message}</p>
          )}
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Specialty</span>
          </label>
          <select
            {...register("specilialty")}
            className="select input-bordered w-full max-w-xs"
          >
            {/* <option disabled selected>
              Please Selecet a Specialty
            </option> */}
            {specialties.map((specialty) => (
              <option key={specialty._id} value={specialty.name}>
                {specialty.name}
              </option>
            ))}
          </select>
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Photo</span>
          </label>

          <input
            placeholder="Your Photo"
            type="file"
            {...register("img", {
              required: "Photo  is required",
            })}
            className="input input-bordered w-full max-w-xs"
          />
          {errors.img && <p className="text-red-600">{errors.img.message}</p>}
        </div>

        <input
          className="btn btn-accent w-full mt-2"
          value="ADD Doctor"
          type="submit"
        />
      </form>
    </div>
  );
};

export default AddDoctor;
