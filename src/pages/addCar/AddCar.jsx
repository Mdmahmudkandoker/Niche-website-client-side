import './addcars.css'
import React, { useContext, useState } from 'react'
import axios from 'axios'
import { Context } from '../../context/Context'
import { Action } from '../../context/Action'

const AddCar = () => {
    const {dispatch, url} = useContext(Context)
    const [name, setName] = useState('')
    const [image, setImage] = useState('')
    const [brand, setBrand] = useState('')
    const [price, setPrice] = useState('')
    const [desc, setDesc] = useState('')
    const handleSubmit = async (e) =>{
        console.log('hellooo')
            e.preventDefault()
            dispatch({type:Action.loaderOn})
            try {
                const res = await axios.post(`${url}/cars`, {name, image, brand, desc, price})
                dispatch({type:Action.loaderOff})
                console.log(res)
                window.location.replace('/')
            } catch (error) {
                console.log(error)
                dispatch({type:Action.loaderOff})
            }
          
    }
    return (
        <div className='addcar'>
            <h2>Add A new Car Here</h2>
            <form onSubmit={handleSubmit}>
            <div className="form-floating mb-3">
  <input required type="text" className="form-control"  placeholder="Enter  Name of Car" onChange={e=> setName(e.target.value)} value={name}/>
  <label for="floatingInput">Name</label>
</div>
<div className="form-floating mb-3">
  <input required type="text" className="form-control"  placeholder="Enter Brand Name" onChange={e=> setBrand(e.target.value)} value={brand}/>
  <label for="floatingInput">Brand Name</label>
</div>
<div className="form-floating mb-3">
  <input required type="text" className="form-control"  placeholder="Enter Your Image URL" onChange={e=> setImage(e.target.value)} value={image}/>
  <label for="floatingInput">Image URL</label>
</div>
<div className="form-floating mb-3">
  <input required type="number" className="form-control"  placeholder="Enter Price" onChange={e=> setPrice(e.target.value)} value={price}/>
  <label for="floatingInput">Price</label>
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label" >Description here</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" onChange={e=> setDesc(e.target.value)} value={desc} required></textarea>
</div>  <button className='btn btn-success' type='submit'>Save</button>
              </form>
        </div>
    )
}

export default AddCar
