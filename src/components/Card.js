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

    const text = () => {
        let textUser = user.user;

        if (textUser){
            textUser = textUser.split('');
            textUser[0] = textUser[0].toUpperCase();
            textUser = textUser.join("");
        }
        return textUser;
    }

    return(
        <div className="ui raised very padded text container segment" style={{marginTop: '80px'}}>
            <h3 className="ui header">{text()}</h3>
        </div>
    )
}

export default Card;