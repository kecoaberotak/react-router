import React from "react";
import { useNavigate } from "react-router";

// cara agar terbawa ke halaman lain secara programmatic
// ini menggunakan react router versi 6
// pakai useNavigate
// arahkan ke halaman yg dituju
// set waktu atau situasi sesuai kebutuhan

const Contact = () => {

    const navigate = useNavigate();

    setTimeout( () => {
        navigate('/about')
    }, 2000)

    return (
        <div className="ui raised very padded text container segment" style={{marginTop: '80px'}}>
            <h3 className="ui header">Contact</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo minus voluptates repudiandae optio sint asperiores corporis eveniet culpa illum, vero voluptas similique totam at suscipit ipsum fugiat a? Laudantium, mollitia.</p>
        </div>
    )
}

export default Contact;