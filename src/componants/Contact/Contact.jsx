import { useEffect } from "react";
import { Helmet } from "react-helmet-async";


// useEffect( () => {
//     document.title= 'Contact'
// },[])

const Contact = () => {
    return (
        <div>
            <Helmet>
                <title>Contact | Home Idings</title>
            </Helmet>
            <h className="text-2xl">This is Contact Section</h>
        </div>
    );
};

export default Contact;