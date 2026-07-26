// import { useState } from "react"
// import { useFormik } from "formik"

// export default function CommentForm({ addNewComment }) {
//     // const [formData, setFormData] = useState({
//     //     username: "",
//     //     remarks: "",
//     //     rating: 5,
//     // });

//     const formik = useFormik({
//     initialValues: {
//       username: "",
//       remarks: "",
//       rating: 5,
//     },

//     validate(values) {
//       const errors = {};

//       if (!values.username) {
//         errors.username = "Username is required";
//       }

//       if (!values.remarks) {
//         errors.remarks = "Remarks is required";
//       }

//       return errors;
//     },

//     onSubmit(values, { resetForm }) {
//       console.log(values);
//       addNewComment(values);

//       resetForm();
//     },
//   });

//     let handleInputChange = (event) => {
//         let fieldName = event.target.name;
//         let fieldValue = event.target.value;
//         setFormData((currData) => {
//             return { ...currData, [event.target.name]: event.target.value };
//         })
//     }
//     let handleSubmit = (event) => {
//         event.preventDefault();
//         //validations

//         // if (formData.username.trim() === "") {
//         //     alert("Username cannot be empty");
//         //     return;
//         // }
//         console.log(formData);
//         addNewComment(formData);

//         setFormData({
//             username: "",
//             remarks: "",
//             rating: 5,
//         })
//         // alert("Form Submitted");
//     }
//     return (
//         <div>
//             <h3>Give a Comment!</h3>
//             <form onSubmit={handleSubmit}>
//                 <label htmlFor="username">Username</label>
//                 <input type="text" placeholder="username" id="username" name="username" value={formData.username} onChange={handleInputChange} />
//                 <br></br><br></br>
//                 <label htmlFor="remarks">Remarks:</label>
//                 <input type="text" placeholder="remark" id="remarks" name="remarks" value={formData.remarks} onChange={handleInputChange} />
//                 <br></br><br></br>
//                 <label htmlFor="rating">Rating:</label>
//                 <input type="number" min={1} max={5} placeholder="Rating" id="rating" name="rating" value={formData.rating} onChange={handleInputChange} />
//                 <br></br><br></br>
//                 <button>Add Comments</button>
//             </form>
//         </div>
//     )
// }


import { useFormik } from "formik";

export default function CommentForm({ addNewComment }) {
  const formik = useFormik({
    initialValues: {
      username: "",
      remarks: "",
      rating: 5,
    },

    validate(values) {
      const errors = {};

      if (!values.username) {
        errors.username = "Username is required";
      }

      if (!values.remarks) {
        errors.remarks = "Remarks is required";
      }

      return errors;
    },

    onSubmit(values, { resetForm }) {
      console.log(values);
      addNewComment(values);

      resetForm();
    },
  });

  return (
    <div>
      <h3>Give a Comment!</h3>

      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Username"
          value={formik.values.username}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.username && formik.errors.username ? (
          <p style={{ color: "red" }}>{formik.errors.username}</p>
        ) : null}

        <br />
        <br />

        <label htmlFor="remarks">Remarks</label>
        <input
          type="text"
          id="remarks"
          name="remarks"
          placeholder="Remarks"
          value={formik.values.remarks}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.remarks && formik.errors.remarks ? (
          <p style={{ color: "red" }}>{formik.errors.remarks}</p>
        ) : null}

        <br />
        <br />

        <label htmlFor="rating">Rating</label>
        <input
          type="number"
          id="rating"
          name="rating"
          min="1"
          max="5"
          value={formik.values.rating}
          onChange={formik.handleChange}
        />

        <br />
        <br />

        <button type="submit">Add Comment</button>
      </form>
    </div>
  );
}