import { useState } from "react"


export default function CommentForm({addNewComment}) {
    const [formData, setFormData] = useState({
        username: "",
        remarks: "",
        rating: 5,
    });
    let handleInputChange = (event) => {
        let fieldName = event.target.name;
        let fieldValue = event.target.value;
        setFormData((currData) => {
            return { ...currData, [event.target.name]: event.target.value };
        })
    }
    let handleSubmit = (event) => {
         event.preventDefault();
        console.log(formData);
        addNewComment(formData);
       
        setFormData({
            username:"",
            remarks:"",
            rating:5,
        })

    }
    return (
        <div>
            <h3>Give a Comment!</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input type="text" placeholder="username" id="username" name="username" value={formData.username} onChange={handleInputChange}  />
                <br></br><br></br>
                <label htmlFor="remarks">Remarks:</label>
                <input type="text" placeholder="remark" id="remarks" name="remarks" value={formData.remarks} onChange={handleInputChange} />
                <br></br><br></br>
                <label htmlFor="rating">Rating:</label>
                <input type="number" min={1} max={5} placeholder="Rating" id="rating" name="rating" value={formData.rating} onChange={handleInputChange} />
                <br></br><br></br>
                <button>Add Comments</button>
            </form>
        </div>
    )
}