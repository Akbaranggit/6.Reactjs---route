import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Login(){
    const navigate = useNavigate();

    let [nama, setNama] = useState('');
    function gas(){
        if(nama === ''){
            alert("Nama pengguna tidak boleh kosong")
        }else{
            navigate(`/dashboard/${nama}`)
        }
    }
    function kembali(){
        navigate(`../`)
    }

    return(
        <div className="container mt-3 ">
            <div className="row justify-content-center">
            <Form className="col-lg-8">
                <h3 className="text-center mb-3">Login</h3>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Nama Pengguna</Form.Label>
                    <Form.Control 
                    type="text" 
                    placeholder="Masukan nama pengguna" 
                    onChange={(e)=> {setNama(e.target.value)}}
                    />
                </Form.Group>
                <Button onClick={gas} className="w-100 mb-3" variant="primary" type="submit"> Masuk </Button>
                <Button onClick={kembali}>Kembali</Button>
            </Form>
            </div>
        </div>
    )
}
export default Login;