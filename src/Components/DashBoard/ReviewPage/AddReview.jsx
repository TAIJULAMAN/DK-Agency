import { useState } from 'react';

const AddReview = ({ onAddReview }) => {
    const [name, setName] = useState('');
    const [position, setPosition] = useState('');
    const [desc, setDesc] = useState('');
    const [img, setImg] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault(); 
        const newItem = { name, position, desc, img };

        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newItem),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to add review');
            }
            return response.json(); 
        })
        .then(addedReview => {
            
            onAddReview(addedReview);

           
            setName('');
            setPosition('');
            setDesc('');
        })
        .catch(error => {
            console.error('Error adding review:', error);
        });
    };

    return (
        <div className="w-full px-10">
             <h3 className="text-3xl font-semibold my-4 text-center">
                Add Review Here
            </h3>
            <form onSubmit={handleSubmit}> 
                <div className="form-control w-full mb-4">
                    <label className="label"> 
                        <span className="label-text font-semibold">Name</span> 
                    </label> 
                    <input 
                        type="text" 
                        placeholder="enter name here"
                        className="input input-bordered w-full"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                    />
                </div>
                <div className="flex my-4">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-semibold">Position</span>
                        </label>
                        <input 
                            type="text"  
                            placeholder="enter position here" 
                            className="input input-bordered w-full"
                            value={position}
                            onChange={(event) => setPosition(event.target.value)}
                        />
                    </div>
                </div>
                <div className="flex my-4">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-semibold">Picture</span>
                        </label>
                        <input 
                        
                            placeholder="add picture here" 
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
                        value={desc}
                        onChange={(event) => setDesc(event.target.value)}
                    ></textarea>
                </div>
                <input className="btn btn-sm mt-4 px-4 py-2" type="submit" value="Add Review" />
            </form>
        </div>
    );
};

export default AddReview;
