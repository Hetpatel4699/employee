import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

const EmpEdit = () => {
  const { empid } = useParams();

  // const [empdata, empdatachange] = useState({})

  
  const [id, idchange] = useState(empid);
  const [title, titlechange] = useState("");
  const [description, descriptionchange] = useState("");
  const [cover, coverchange] = useState("");
  const [active, activechange] = useState(true);
  const [validation, valchange] = useState(false);
  
  const navigate = useNavigate();
  
  function getAllData(){
    fetch("http://192.168.0.48:9000/books").then((res) => {
      return res.json();
    }).then((resp) => {
      resp.map((item) => {
        if(item.id == empid){
          idchange(item.id)
          titlechange(item.title)
          descriptionchange(item.description)
          coverchange(item.cover)
          activechange(item.isactive)
        }
        return;
    })
    }).catch((err) => {
      console.log(err.message);
    })
  }

useEffect(() => {
  getAllData()
}, []);

  const handlesubmit = (e) => {
    e.preventDefault();
    const empdata = { id, title, description, cover, active  };
    

    fetch("http://192.168.0.48:9000/updateBook", {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(empdata)
    }).then((res) => {
      alert('Saved Successfully.')
      navigate('/');
    }).catch((err) => {
      console.log(err.message)
    })

  }
  return (
    <div>
    <div className='row'>
      <div className='offset-lg-3 col-lg-6'>
        <form className='container' onSubmit={handlesubmit}>

          <div className='card' style={{ textAlign: 'left' }}>
            <div className='card-title'>
              <center><h2 >employee Edit</h2></center>
            </div>
            <div className='card-body'>
              <div className='row'>

                <div className='col-lg-12'>
                  <div className='form-group'>
                    <label>ID</label>
                    <input value={id ||''} disabled="disabled" className='form-control' ></input>
                  </div>
                </div>

                <div className='col-lg-12'> 
                  <div className='form-group'>
                    <label>Title</label>
                    <input  required value={title || ''} onMouseDown={e => valchange(true)} onChange={e => titlechange(e.target.value)} className='form-control'></input>
                   {title.length ==0 &&  validation  && <span className='text-danger'>Enter the title</span>}
                  </div>
                </div>

                <div className='col-lg-12'>
                  <div className='form-group'>
                    <label>Description</label>
                    <input value={description || ''} onChange={e => descriptionchange(e.target.value)} className='form-control'></input>
                  </div>
                </div>

                <div className='col-lg-12'>
                  <div className='form-group'>
                    <label>Cover</label>
                    <input value={cover || ''} onChange={e => coverchange(e.target.value)} className='form-control'></input>
                  </div>
                </div>

                <div className='col-lg-12'>
                  <div className='form-check'>
                    <input checked={true} onChange={e => activechange(!active)} type="checkbox" className='form-check-input'></input>
                    <label className='form-check-label'>Is Active</label>
                  </div>
                </div>
                <div className='col-lg-12'>
                  <div className='form-group'>
                  <input value="save" className='btn btn-success float-end' type='submit' />
                    <Link to="/" className='btn btn-danger'>Back</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
  )
}

export default EmpEdit