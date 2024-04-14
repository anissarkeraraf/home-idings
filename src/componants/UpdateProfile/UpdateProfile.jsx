// // UpdateProfile.js

// import React, { useContext, useState } from 'react';
// import { useHistory } from 'react-router-dom';
// import { useAuth } from './AuthContext'; // Assuming you have an AuthContext set up
// import { updateProfile } from 'firebase/auth'; // Import updateProfile method from Firebase Auth
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const UpdateProfile = () => {
//     const history = useHistory();
//     const { currentUser } = useAuth(); // Get current user from AuthContext
//     const [name, setName] = useState(currentUser.displayName || '');
//     const [photoURL, setPhotoURL] = useState(currentUser.photoURL || '');
//     const [error, setError] = useState('');
//     const [loading, setLoading] = useState(false);

//     const notifySuccess = (message) => toast.success(message);
//     const notifyError = (message) => toast.error(message);

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setLoading(true);
//         try {
//             // Update user profile using Firebase's updateProfile method
//             await updateProfile(currentUser, {
//                 displayName: name,
//                 photoURL: photoURL,
//             });
//             notifySuccess('Profile updated successfully');
//             history.push('/profile'); // Redirect to user's profile page after successful update
//         } catch (error) {
//             console.error('Error updating profile:', error);
//             setError('Failed to update profile');
//             notifyError('Failed to update profile');
//         }
//         setLoading(false);
//     };

//     return (
//         <div>
// //             <h2>Update Profile</h2>
{/* //             {error && <div>{error}</div>}
//             <form onSubmit={handleSubmit}>
//                 <label>
//                     Name:
//                     <input */}
{/* type="text"
//                         value={name}
//                         onChange={(e) => setName(e.target.value)}
//                     />
//                 </label> */}
{/* //                 <label>
//                     Photo URL:
//                     <input */}
{/* //                         type="text"
//                         value={photoURL}
//                         onChange={(e) => setPhotoURL(e.target.value)}
//                     />
//                 </label> */}
{/* //                 <button type="submit" disabled={loading}>
//                     Save Changes
//                 </button>
//             </form> */}
{/* //             <ToastContainer /> */ }
// </div>
//     );
// };

// export default UpdateProfile;

import React from 'react';
import { Helmet } from 'react-helmet-async';

const UpdateProfile = () => {
    return (
        <div>
            <Helmet>
                <title>Update Profile</title>
            </Helmet>
            <h className="text-3xl">Update Profile</h>
        </div>
    );
};

export default UpdateProfile;