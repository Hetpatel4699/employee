import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './EmpCreate.css'

const EmpCreate = () => {
  const [id, idchange] = useState("");
  const [title, titlechange] = useState("");
  const [description, descriptionchange] = useState("");
  const [cover, coverchange] = useState("");
  const [active, activechange] = useState(true);
  const [validation, valchange] = useState(false);

  const navigate = useNavigate();

  const handlesubmit = (e) => {
    e.preventDefault();
    const empdata = { title, description, cover, active };

    fetch("http://192.168.0.48:9000/addbooks", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(empdata),
    })
      .then((res) => {
        alert("Saved Successfully.");
        navigate("/");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <div>
    {/* <div>
      <div className="row">
        <div className="offset-lg-3 col-lg-6">
          <form className="container" onSubmit={handlesubmit}>
            <div className="card" style={{ textAlign: "left" }}>
              <div className="card-title">
                <center>
                  <h2>employee create</h2>
                </center>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>ID</label>
                      <input
                        value={id}
                        disabled="disabled"
                        onChange={(e) => idchange(e.target.value)}
                        className="form-control"
                      ></input>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Name</label>
                      <input
                        required
                        value={name}
                        onMouseDown={(e) => valchange(true)}
                        onChange={(e) => namechange(e.target.value)}
                        className="form-control"
                      ></input>
                      {name.length == 0 && validation && (
                        <span className="text-danger">Enter the name</span>
                      )}
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Email</label>
                      <input
                        value={email}
                        onChange={(e) => emailchange(e.target.value)}
                        className="form-control"
                      ></input>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Phone</label>
                      <input
                        value={phone}
                        onChange={(e) => phonechange(e.target.value)}
                        className="form-control"
                      ></input>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-check">
                      <input
                        checked={active}
                        onChange={(e) => activechange(e.target.checked)}
                        type="checkbox"
                        className="form-check-input"
                      ></input>
                      <label className="form-check-label">Is Active</label>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <button className="btn btn-success" type="submit">
                        Save
                      </button>
                      <Link to="/" className="btn btn-danger">
                        Back
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div> */}

    <div className="login-box">
                <h2>Employ Create</h2>
                <form onSubmit={handlesubmit}>
                    <div className="user-box">
                        <input value={id} disabled="disabled"></input>
                        <label>ID</label>
                    </div>
                    <div className="user-box">
                        <input
                            required
                            value={title}
                            onMouseDown={(e) => valchange(true)}
                            onChange={(e) => titlechange(e.target.value)}
                        ></input>
                        <label>Title</label>
                    </div>
                    <div className="user-box">
                        <input
                            required
                            value={description}
                            onChange={(e) => descriptionchange(e.target.value)}
                        ></input>
                        <label>Descreption</label>
                    </div>
                    <div className="user-box">
                        <input
                            required
                            value={cover}
                            onChange={(e) => coverchange(e.target.value)}
                        ></input>
                        <label>Cover</label>
                    </div>
                    <div className="user-box1" style={{ marginRight: '235px'}}>
                        <input
                            required
                            checked={active}
                            onChange={(e) => activechange(e.target.checked)}
                            type="checkbox"
                            className="form-check-input"
                            
                        ></input>
                        <label className="ms-2" style={{ color: "#03e9f4" }}>
                            Is Active
                        </label>
                    </div>
                    <div className="btn-container">
                        <Link to="/">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>Back
                        </Link>
                        <button type="submit">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};
export default EmpCreate;

