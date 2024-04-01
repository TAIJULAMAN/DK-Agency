import { useState } from "react";

const AddWeb = ({ onAddWeb }) => {
  const [title, setTitle] = useState("");
  const [badge1, setBadge1] = useState("");
  const [badge2, setBadge2] = useState("");
  const [badge3, setBadge3] = useState("");
  const [description, setDescription] = useState("");
  const [img, setImg] = useState("");
  const [link, setLink] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const newItem = { title, img, badge1, badge2, badge3, description, link };

    fetch("http://localhost:5000/webs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newItem),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to add web");
        }
        return response.json();
      })
      .then((addedWeb) => {
        onAddWeb(addedWeb);
        setTitle("");
        setBadge1("");
        setBadge2("");
        setBadge3("");
        setDescription("");
        setImg("");
      })
      .catch((error) => {
        console.error("Error adding review:", error);
      });
  };
  return (
    <div className="w-full px-10">
      <h3 className="text-3xl font-semibold my-4 text-center">Add Web Here</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-control w-full mb-4">
          <label className="label">
            <span className="label-text font-semibold">Name</span>
          </label>
          <input
            type="text"
            placeholder="enter name here"
            className="input input-bordered w-full"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </div>
        <div className="form-control w-full mb-4">
          <label className="label">
            <span className="label-text font-semibold">Badge1</span>
          </label>
          <input
            type="text"
            placeholder="enter badge1 here"
            className="input input-bordered w-full"
            value={badge1}
            onChange={(event) => setBadge1(event.target.value)}
          />
        </div>
        <div className="form-control w-full mb-4">
          <label className="label">
            <span className="label-text font-semibold">Badge2</span>
          </label>
          <input
            type="text"
            placeholder="enter badge2 here"
            className="input input-bordered w-full"
            value={badge2}
            onChange={(event) => setBadge2(event.target.value)}
          />
        </div>
        <div className="form-control w-full mb-4">
          <label className="label">
            <span className="label-text font-semibold">Badge3</span>
          </label>
          <input
            type="text"
            placeholder="enter badge3 here"
            className="input input-bordered w-full"
            value={badge3}
            onChange={(event) => setBadge3(event.target.value)}
          />
        </div>
        <div className="form-control w-full mb-4">
          <label className="label">
            <span className="label-text font-semibold">Live Link</span>
          </label>
          <input
            type="text"
            placeholder="enter live link here"
            className="input input-bordered w-full"
            value={link}
            onChange={(event) => setLink(event.target.value)}
          />
        </div>
        <div className="flex my-4">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-semibold">Picture</span>
            </label>
            <input
              placeholder="enter picture link here"
              className="input input-bordered w-full"
              value={img}
              onChange={(event) => setImg(event.target.value)}
            />
          </div>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <textarea
            className="textarea textarea-bordered h-24"
            placeholder="write description here"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          ></textarea>
        </div>
        <input
          className="btn btn-sm mt-4 px-4 py-2"
          type="submit"
          value="Add Web Project"
        />
      </form>
    </div>
  );
};

export default AddWeb;
