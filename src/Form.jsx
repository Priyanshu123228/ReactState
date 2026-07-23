import { useState } from "react"

export default function Form() {
    const [formData, setFormData] = useState({
        fullName: "",
        userName: "",
        passWord:"",
    });
    // let handleNameChange=(event)=>{
    //     setFullName(event.target.value); // to track what changes into input 
    // }
    let handleInputChange = (event) => {
        // let fieldName = event.target.name;
        // console.log(event.target.name);
        // let newValue = event.target.value;
        // console.log(newValue);
        setFormData((currData) => {
            // currData[fieldName] = newValue;
            // return { ...currData,[fieldName]:newValue };
            return { ...currData,[event.target.name]:event.target.value };
        })
    }
    let handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
        setFormData({
            fullName: "",
            userName: "",
            passWord:"",
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="fullName">Full name</label>
            <input placeholder="Enter your fullname" type="text" value={formData.fullName} onChange={handleInputChange} id="fullName" name="fullName" />
           

            <label htmlFor="username">Full name</label>
            <input placeholder="Enter your Username" type="text" value={formData.userName} onChange={handleInputChange} id="username" name="userName" />

            <label htmlFor="password">Enter password</label>
            <input placeholder="Enter your PassWord" type="password" value={formData.passWord} onChange={handleInputChange} id="password" name="passWord" />
            <button>Submit</button>
        </form>
    )
}