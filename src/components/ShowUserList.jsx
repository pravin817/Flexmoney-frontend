import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const ShowUserList = () => {
  const [userList, setUserList] = useState([]);
  console.log(typeof userList);

  useEffect(() => {
    axios
      .get("http://localhost:5000/user")
      .then((res) => {
        setUserList(res.data.data);
        console.log(userList);
      })
      .catch((error) => {
        console.log({ message: error.message });
      });
  }, []);

  return (
    <div className="mt-20 px-20 flex items-center">
      <div className="container mx-auto p-4">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="text-left">
              <th className="py-2 px-4 border-b">Sr.No</th>
              <th className="py-2 px-4 border-b">Name</th>
              <th className="py-2 px-4 border-b">Email</th>
              <th className="py-2 px-4 border-b">Phone No</th>
              <th className="py-2 px-4 border-b">Age</th>
              <th className="py-2 px-4 border-b">Fees Paid</th>
              <th className="py-2 px-4 border-b">Batch</th>
            </tr>
          </thead>
          <tbody>
            {userList.map((user, index) => (
              <tr key={user._id}>
                <td className="py-2 px-4 border-b">{index + 1}</td>
                <td className="py-2 px-4 border-b">{user.name}</td>
                <td className="py-2 px-4 border-b">{user.email}</td>
                <td className="py-2 px-4 border-b">{user.phoneNumber}</td>
                <td className="py-2 px-4 border-b">{user.age}</td>
                <td className="py-2 px-4 border-b">{user.fee}</td>
                <td className="py-2 px-4 border-b">{user.batch}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ShowUserList;

// import { useState, useEffect } from "react";
// import axios from "axios";
// import { useParams } from "react-router-dom";
// import Spinner from "../components/Spinner";
// import BackButton from "../components/BackButton";
// import { BsTypeH1 } from "react-icons/bs";

// const ShowBook = () => {
//   const [book, setBook] = useState({});
//   const [loading, setLoading] = useState(false);

//   const { id } = useParams();

//   useEffect(() => {
//     setLoading(true);
//     axios
//       .get(`http://localhost:8000/books/${id}`)
//       .then((res) => {
//         setLoading(false);
//         setBook(res.data);
//       })
//       .catch((error) => {
//         console.log(error);
//         setLoading(false);
//       });
//   }, []);
//   return (
//     <div className="p-4">
//       <BackButton />
//       <h1 className="text-3xl my-4">Show book Details</h1>
//       {loading ? (
//         <Spinner />
//       ) : (
//         <div className="flex flex-col border-2 border-sky-400 rounded-xl w-fit gap-3">
//           <div className="my-4">
//             <span className="text-xl mr-4 text-gray-500">ID</span>
//             <span>{book._id}</span>
//           </div>

//           <div className="my-4">
//             <span className="text-xl mr-4 text-gray-500">Title</span>
//             <span>{book.title}</span>
//           </div>

//           <div className="my-4">
//             <span className="text-xl mr-4 text-gray-500">Author</span>
//             <span>{book.author}</span>
//           </div>

//           <div className="my-4">
//             <span className="text-xl mr-4 text-gray-500">Publish Year</span>
//             <span>{book.publishYear}</span>
//           </div>

//           <div className="my-4">
//             <span className="text-xl mr-4 text-gray-500">Create Time </span>
//             <span>{new Date(book.createdAt).toString()}</span>
//           </div>

//           <div className="my-4">
//             <span className="text-xl mr-4 text-gray-500">Last Update Time </span>
//             <span>{new Date(book.updatedAt).toString()}</span>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ShowBook;
