import { FaTrashAlt } from "react-icons/fa";
import useAxiosSecure from "../../Custom/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
const AppPage = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: apps = [],  refetch  } = useQuery({
      queryKey: ["apps"],
      queryFn: async () => {
        const res = await axiosSecure.get("/apps");
        // console.log(res);
        return res.data;
      },
    });
    const handleDelete = (app) => {
        // console.log(app)
        if (!app || !app._id) {
          console.error("app id is missing or invalid");
          return;
        }
        fetch(`http://localhost:5000/apps/${app._id}`, {
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
              throw new Error("Failed to delete web");
            }
          })
          .catch((error) => {
            console.error("Delete operation failed:", error);
            Swal.fire({
              position: "top-end",
              icon: "error",
              title: "Failed to delete web",
              showConfirmButton: false,
              timer: 1500,
            });
          });
      };
    return (
        <div className="w-full">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-3xl font-semibold my-4 uppercase">
           All App Projects
          </h3>
          <Link to="/dashboard/app/addapp">
            <input className="btn btn-sm mt-4 px-4 py-2" type="submit" value="Add App Project" />
          </Link>
        </div>
  
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th>#</th>
                <th>Name</th>
                <th>Description</th>
                <th>badge1</th>
                <th>badge2</th>
                <th>badge3</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {apps.map((app, index) => (
                <tr key={app._id} className="border-b-2 border-gray-200">
                  <th>{index + 1}</th>
                  <td>{app.title}</td>
                  <td>{app.description}</td>
                  <td>{app.badge1}</td>
                  <td>{app.badge2}</td>
                  <td>{app.badge3}</td>

                
                  <td>
                    <button
                      onClick={(app) => handleDelete(app)}
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

export default AppPage;