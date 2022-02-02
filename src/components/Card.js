import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useState } from "react"; 


const Card = () => {

    // State Hooks untuk Functional Component
    const [user, setUser] = useState('');

    // UseParams untuk mengambil parameter halaman
    let tampung = useParams();
    

    // componentDidMount versi Functional Component
    useEffect(() => {
        setUser(tampung);
    }, []);

    return(
        <div className="ui raised very padded text container segment" style={{marginTop: '80px'}}>
            <h3 className="ui header">{user.user}</h3>
        </div>
    )
}

export default Card;