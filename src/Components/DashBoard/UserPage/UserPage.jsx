import { FaTrashAlt, FaUserShield } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Custom/useAxiosSecure";

const AllUsers = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  const handleMakeAdmin = (user) => {
    fetch(`http://localhost:5000/users/admin/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.name} is an Admin Now!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  const handleDelete = (user) => {
    fetch(`http://localhost:5000/users/${user._id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.ok) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: " deleted!",
            showConfirmButton: false,
            timer: 1500,
          });
        } else {
          throw new Error("Failed to delete user");
        }
      })
      .catch((error) => {
        console.error("Delete operation failed:", error);
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "Failed to delete user",
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

  return (
    <div className="w-full">
      <h3 className="text-3xl font-semibold my-4 text-center">
        Total Users: {users.length}
      </h3>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr className="border-b-2 border-gray-200">
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id} className="border-b-2 border-gray-200">
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {user.role === "admin" ? (
                    "admin"
                  ) : (
                    <button
                      onClick={() => handleMakeAdmin(user)}
                      className="btn btn-ghost bg-orange-600  text-white"
                    >
                      <FaUserShield></FaUserShield>
                    </button>
                  )}
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(user)}
                    className="btn btn-ghost bg-red-600  text-white hover:text-black"
                  >
                    <FaTrashAlt></FaTrashAlt>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
