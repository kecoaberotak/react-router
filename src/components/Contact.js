import React from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";


const Contact = () => {


// cara agar terbawa ke halaman lain secara programmatic
// ini menggunakan react router versi 6
// pakai useNavigate
// arahkan ke halaman yg dituju
// set waktu atau situasi sesuai kebutuhan

    // const navigate = useNavigate();

    // setTimeout( () => {
    //     navigate('/about')
    // }, 2000)

    return (
        <div>
            <div className="ui raised very padded text container segment" style={{marginTop: '80px'}}>
                <Link to = '/john' target='_blank' className="ui header">John</Link>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo minus voluptates repudiandae optio sint asperiores corporis eveniet culpa illum, vero voluptas similique totam at suscipit ipsum fugiat a? Laudantium, mollitia.</p>
            </div>
            <div className="ui raised very padded text container segment" style={{marginTop: '80px'}}>
                <Link to = '/doe' className="ui header">Doe</Link>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo minus voluptates repudiandae optio sint asperiores corporis eveniet culpa illum, vero voluptas similique totam at suscipit ipsum fugiat a? Laudantium, mollitia.</p>
            </div>            
        </div>
    )
}

export default Contact;