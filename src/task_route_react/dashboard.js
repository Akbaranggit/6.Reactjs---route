import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

function Dashboard(){
    const params = useParams();
    const navigate = useNavigate();
    function kembali(){
        return(
            navigate('../')
        )
    }
    return(
        <div className="container mt-3 ">
            <div className="row justify-content-center">
                <h3>Hai, {params.nama} </h3>
                <Button onClick={kembali}>Keluar</Button>
            </div>
        </div>
    )
}
export default Dashboard;