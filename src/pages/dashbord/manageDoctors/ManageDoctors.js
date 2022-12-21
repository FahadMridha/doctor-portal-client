import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import toast from "react-hot-toast";
import ConfirmationModal from "../../shared/confirmationModal/ConfirmationModal";
import Spinner from "../../shared/Spinner";

const ManageDoctors = () => {
  const [delatingDoctor, setDeletingDoctor] = useState(null);

  const cancleModal = () => {
    setDeletingDoctor(null);
  };

  const {
    data: doctors = [],
    isLoading,
    refetch,
  } = useQuery({
    queryFn: async () => {
      try {
        const res = await fetch("http://localhost:5000/doctors", {
          headers: {
            authorazition: `bearer ${localStorage.getItem("access-token")}`,
          },
        });
        const data = await res.json();
        return data;
      } catch (error) {
        console.log(error);
      }
    },
  });

  const handlerDeleteDoctor = (doctor) => {
    fetch(`http://localhost:5000/doctors/${doctor._id}`, {
      method: "DELETE",
      headers: {
        authorazition: `bearer ${localStorage.getItem("access-token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          toast.success(`Doctor ${doctor.name} Deleted Successfully`);
          refetch();
        }
        console.log(data);
      });
    // console.log(doctor);
  };
  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div>
      <h3 className="text-3xl text-orange-400 mb-4">
        Manage Doctors {doctors?.length}
      </h3>

      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Avatar</th>
              <th>Name</th>
              <th>Email</th>
              <th>Speciality</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {doctors.map((doctor, i) => (
              <tr key={doctor._id}>
                <th>{i + 1}</th>
                <td>
                  <div className="avatar">
                    <div className="w-24 rounded-full">
                      <img src={doctor.image} alt="/" />
                    </div>
                  </div>
                </td>
                <td>{doctor.name}</td>
                <td>{doctor.email}</td>
                <td>{doctor.specilialty}</td>
                <td>
                  <label
                    onClick={() => setDeletingDoctor(doctor)}
                    htmlFor="confirmation-modal"
                    className="btn btn-sm btn-error"
                  >
                    Delete
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {delatingDoctor && (
          <ConfirmationModal
            title={`Are you sure you want to Delete?`}
            message={`if you delete ${delatingDoctor.name} it can't be undone`}
            successAction={handlerDeleteDoctor}
            successButtonName={"Delete"}
            modalData={delatingDoctor}
            cancleModal={cancleModal}
          />
        )}
      </div>
    </div>
  );
};

export default ManageDoctors;
