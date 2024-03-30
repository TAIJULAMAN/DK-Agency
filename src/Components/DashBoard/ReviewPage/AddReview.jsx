
const AddReview = () => {

    // const handleAdd = (review) => {
    //     console.log(review);

    // }
    return (
        <div className="w-full px-10">
             <h3 className="text-3xl font-semibold my-4 text-center">
         Add Review Here
        </h3>
           {/* <form onClick={() => handleAdd(review)}>  */}
           <form > 

               <div className="form-control w-full mb-4">
                   <label className="label"> 
                         <span className="label-text font-semibold">Name</span> 
                    </label> 
                 <input type="text" placeholder="enter name here"
                        className="input input-bordered w-full " />
                </div>
                <div className="flex my-4">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-semibold">Position</span>
                        </label>
                        <input type="text"  placeholder="enter position here" className="input input-bordered w-full " />
                    </div>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <textarea  className="textarea textarea-bordered h-24" placeholder="write description here"></textarea>
                </div>
                <input className="btn btn-sm mt-4" type="submit" value="Add Review" />
            </form>
        </div>
    );
};

export default AddReview;