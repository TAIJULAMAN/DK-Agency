import { FaTrashAlt } from "react-icons/fa";
import useAxiosSecure from "../../Custom/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
const ReviewPage = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: reviews = [], refetch } = useQuery({
    queryKey: ["reviews"],
    queryFn: async () => {
      const res = await axiosSecure.get("/reviews");
      return res.data;
    },
  });
  const handleDelete = (review) => {
    if (!review || !review._id) {
      console.error("Review ID is missing or invalid");
      return;
    }
    fetch(`http://localhost:5000/reviews/${review._id}`, {
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
          throw new Error("Failed to delete review");
        }
      })
      .catch((error) => {
        console.error("Delete operation failed:", error);
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "Failed to delete review",
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-3xl font-semibold my-4">
          Total Reviews: {reviews.length}
        </h3>
        <Link to="/dashboard/review/addreview">
          <input className="btn btn-sm mt-4 px-4 py-2" type="submit" value="Add Review" />
        </Link>
      </div>

      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr className="border-b-2 border-gray-200">
              <th>#</th>
              <th>Picture</th>
              <th>Name</th>
              <th>Description</th>
              <th>Position</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {reviews.map((review, index) => (
              <tr key={review._id} className="border-b-2 border-gray-200">
                <th>{index + 1}</th>
                <td>
                <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={review.img} alt="people image" />
                    </div>
                  </div>
                </td>
                <td>{review.name}</td>
                <td>{review.desc}</td>
                <td>{review.position}</td>
                <td>
                  <button
                    onClick={() => handleDelete(review)}
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

export default ReviewPage;
