import axios from 'axios'
import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../../context/Context'
import Modal from '../../pages/dashboard/component/Modal'

const Order = ({car, address, email, phone, username, isDone, _id, admin}) => {
  const [modal, setModal] = useState(false);
  const {url} = useContext(Context)
  const closeModal = () =>{
    setModal(false);
  }
  const openModal = () =>{
    setModal(true);
  }
  const handleDone = async (status) =>{
    try {
      const res = await axios.put(`${url}/order/${_id}`, {isDone:status})
      window.location.reload()
    } catch (error) {
      console.log(error)
    }
  }

  const {name, image} = car;
    return (
        <div className="card" style={{width:'18rem' ,margin:'10px auto', boxShadow:'0 0 5px 2px black', backgroundColor:'dimgrey'}}>
          {modal? <Modal close={closeModal} id={_id}/> :null }
  <img src={image} className="card-img-top" alt={name}/>
  <div className="card-body">
    <h5 className="card-title">{name}</h5>
    <p className="card-text">Address : {address}
     <br/> 
     Phone: {phone} 
     <br />
     User Name : {username}
     <br />
     Email: {email}
     </p>
   {admin? isDone? 
   <span className="btn btn-success m-2" onClick={handleDone.bind(this, false)}> Shipped</span>
  :
  <span className="btn btn-dark m-2" onClick={handleDone.bind(this, true)}> Pending</span>
  : null
  } 
    <span className="btn btn-danger" onClick={openModal}> Delete</span>
  </div>
</div>
    )
}

export default Order
