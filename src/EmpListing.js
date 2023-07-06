import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const EmpListing = () => {
    const [empdata, empdatachange] = useState(null);
    const navigate = useNavigate();

    const LoadDetail = (id) => {
        navigate("/employee/detail/" + id);
    }
    const LoadEdit = (id) => {
        navigate("/employee/edit/" + id);
    }
    const Removefunction = (id) => {
        if (window.confirm('Do you want to remove?')) {
            fetch("http://192.168.0.48:9000/deleteBook/" + id, {
                method: "DELETE"
            }).then((res) => {
                alert('Removed Successfully.')
                window.location.reload();
            }).catch((err) => {
                console.log(err.message)
            })

        }

    }


    useEffect(() => {
        fetch("http://192.168.0.48:9000/books").then((res) => {
            return res.json()
        }).then((resp) => {
            empdatachange(resp);
        }).catch((err) => {
            console.log(err.message);
        })
    }, [])
    return (
        <div className='container'>
            <div className='card'>
                <div className='card-title'>
                    <h2>Employee Listing</h2>
                </div>
                <div className='card-body'>
                    <div>
                        <Link to='employee/create' className="btn btn-success float-end">Add New (+)</Link>
                    </div>
                    <table className='table table-bordered'>
                        <thead className='table-dark'>
                            <tr>
                                <td>ID</td>
                                <td>Name</td>
                                <td>Email</td>
                                <td>Phone</td>
                                <td>Action</td>
                            </tr>
                        </thead>
                        <tbody>
                            {empdata &&
                                empdata.map(item => (
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.email}</td>
                                        <td>{item.phone}</td>
                                        <td>
                                            <a onClick={() => { LoadEdit(item.id) }} className='btn btn-success'>Edit</a>
                                            <a onClick={() => { Removefunction(item.id) }} className='btn btn-danger'>Remove</a>
                                            <a onClick={() => { LoadDetail(item.id) }} className='btn btn-primary'>Details</a>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default EmpListing