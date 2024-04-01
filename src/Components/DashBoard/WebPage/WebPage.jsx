import { FaTrashAlt } from "react-icons/fa";
import useAxiosSecure from "../../Custom/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const WebPage = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: webs = [],  refetch } = useQuery({
      queryKey: ["webs"],
      queryFn: async () => {
        const res = await axiosSecure.get("/webs");
        // console.log(res);
        return res.data;
      },
    });
    const handleDelete = (web) => {
      if (!web || !web._id) {
        console.error("web id is missing or invalid");
        return;
      }
      fetch(`http://localhost:5000/webs/${web._id}`, {
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
           All Web Projects
          </h3>
          <Link to="/dashboard/web/addweb">
            <input className="btn btn-sm mt-4 px-4 py-2" type="submit" value="Add Web Project" />
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
              {webs.map((web, index) => (
                <tr key={web._id} className="border-b-2 border-gray-200">
                  <th>{index + 1}</th>
                  <td>{web.title}</td>
                  <td>{web.description}</td>
                  <td>{web.badge1}</td>
                  <td>{web.badge2}</td>
                  <td>{web.badge3}</td>

                
                  <td>
                    <button
                      onClick={(web) => handleDelete(web)}
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

export default WebPage;