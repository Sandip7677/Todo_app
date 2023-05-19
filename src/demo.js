// import React, { useState } from 'react'

// const App = () => {
//   const [text,setText]= useState("hello")

//   const handleChange=(e)=>{
//         setText(e.target.value);
//   }

//   return (
//     <>
//       <input type="text" value={text} onChange={handleChange} />
//       <p>typed:{text}</p>
//       <button onClick={()=>setText("hello")}>reset</button>
//     </>
//   )
// }

// export default App

// import React, { useState } from "react";

// function App() {
//   const [data, setData] = useState({
//     name: "",
//     email: "",
//   });
//   return (
//     <>
//       <form className="m-5">
//         <div className="mb-3">
//           <label for="fname" className="form-label">
//             Name
//           </label>
//           <input
//             type="text"
//             className="form-control"
//             id="fname"
//             value={data.name}
//             aria-describedby="emailHelp"
//             onChange={(e) =>
//               setData({
//                 ...data,
//                 name:e.target.value
//               })
//             }
//           />
//         </div>
//         <div className="mb-3">
//           <label for="exampleInputEmail1" className="form-label">
//             Email address
//           </label>
//           <input
//             type="email"
//             className="form-control"
//             value={data.email}
//             id="exampleInputEmail1"
//             aria-describedby="emailHelp"
//             onChange={(e)=>setData({
//               ...data,
//               email:e.target.value
//             })}
//           />
//           <div id="emailHelp" className="form-text">
//             We'll never share your email with anyone else.
//           </div>
//         </div>
//         <div className="mb-3">
//           <label for="exampleInputPassword1" className="form-label">
//             Password
//           </label>
//           <input
//             type="password"
//             className="form-control"
//             id="exampleInputPassword1"
//           />
//         </div>
//         <div class="mb-3 form-check">
//           <input
//             type="checkbox"
//             className="form-check-input"
//             id="exampleCheck1"
//           />
//           <label className="form-check-label" for="exampleCheck1">
//             Check me out
//           </label>
//         </div>
//         <button type="submit" className="btn btn-primary">
//           Submit
//         </button>
//       </form>

//       <p>
//         your name:{data.name} your emai:{data.email}
//       </p>
//     </>
//   );
// }

// export default App;
// import React,{useState} from 'react'

// function App() {
//     const [data, setData] = useState({
//     name:"",
//     email: "",
//   });

//   const handleChange= (e)=>{
//     const name=e.target.name;
//     const value=e.target.value;
//     setData({
//       ...data,
//       [name]:value

//     })
//   }
//   return (
//     <>
//       <form className="m-5">
//         <div className="mb-3">
//           <label for="fname" className="form-label">
//             Name
//           </label>
//           <input
//             type="text"
//             className="form-control"
//             id="fname"
//             name="name"
//             value={data.name}
//             aria-describedby="emailHelp"
//             onChange={handleChange}
//           />
//         </div>
//         <div className="mb-3">
//           <label for="exampleInputEmail1" className="form-label">
//             Email address
//           </label>
//           <input
//             type="email"
//             className="form-control"
//             value={data.email}
//             id="exampleInputEmail1"
//             name="email"
//             aria-describedby="emailHelp"
//             onChange={handleChange}
//           />
//           <div id="emailHelp" className="form-text">
//             We'll never share your email with anyone else.
//           </div>
//         </div>
//         <div className="mb-3">
//           <label for="exampleInputPassword1" className="form-label">
//             Password
//           </label>
//           <input
//             type="password"
//             className="form-control"
//             id="exampleInputPassword1"
//           />
//         </div>
//         <div class="mb-3 form-check">
//           <input
//             type="checkbox"
//             className="form-check-input"
//             id="exampleCheck1"
//           />
//           <label className="form-check-label" for="exampleCheck1">
//             Check me out
//           </label>
//         </div>
//         <button type="submit" className="btn btn-primary">
//           Submit
//         </button>
//       </form>

//       <p>
//         your name is: {data.name} and  your email is: {data.email}
//       </p>
//     </>
//   );
// }

// export default App
