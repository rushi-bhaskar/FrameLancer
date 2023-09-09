import React, { useReducer, useState } from 'react';
import "./Add.scss";
import {gigReducer, INITIAL_STATE } from '../../reducers/gigReducer.js'
import upload from '../../utils/upload.js'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import newRequest from '../../utils/newRequests.js'
import { useNavigate } from 'react-router-dom'


const Add = () => {
  const [singleFile,setSingleFile]=useState(undefined);
  const [files,setFiles]=useState([]);
  const [uploading,setUploading]=useState(false);

  const[state,dispatch]=useReducer(gigReducer,INITIAL_STATE);

  const handleChange = (e) =>{
    dispatch({type :"CHANGE_INPUT", 
    payload:{name:e.target.name, value:e.target.value},
  });
  };

  const handleFeature = (e) =>{
    e.preventDefault();
    dispatch({type :"ADD_FEATURE", 
    payload: e.target[0].value,
  });
  e.target[0].value="";
  };

  const handleUpload = async (e) =>{
    setUploading(true);

    try {
      const cover = await upload(singleFile);
      const images = await Promise.all(
        [...files].map(async file=>{

        const url = await upload(file);
        return url;

        })
      );
      setUploading(false);
      dispatch({type:"ADD_IMAGES", payload : {cover, images}});
      
    } catch (err) {
      console.log(err);
      
    }

  };

  const navigate = useNavigate();

  const queryClient = useQueryClient();
   
const mutation = useMutation({
  mutationFn: (gig) => {
    return newRequest.post("/gigs", gig);
  },
  onSuccess:()=>{
      queryClient.invalidateQueries(["myGigs"]);
  },
});

const handleSubmit = (e) =>{
  e.preventDefault();
  mutation.mutate(state);
  alert( "Gig Created Successfully!" )
  navigate("/mygigs");

};

console.log(state);

  return (
    <div className='add'>
      <div className="container">
        <h1>Add New Gig</h1>
        <div className="sections">
          <div className="left">
            <label htmlFor=''>Title</label>
            <input type="text" 
            name="title"
            placeholder="e.g. I will do something I'm a really goog at"
            onChange={handleChange} />
            <label htmlFor=''>Category</label>
            <select name="cat" id="cat" onChange={handleChange}>
            <option value="none">Select Category</option>
              <option value="wedding">Wedding Photography</option>
              <option value="architecture">Architecture Photography</option>
              <option value="fashion">Fashion Photography</option>
              <option value="food">Food Photography</option>
              <option value="product">Product Photography</option>
            </select>

              <div className="images">
              <div className="imagesInputs">
              
            <label htmlFor=''>Cover Image</label>
            <input type="file" onChange={e=>setSingleFile(e.target.files[0])} />
            <label htmlFor=''>Upload Image</label>
            <input type="file" multiple onChange={e=>setFiles(e.target.files)} />
            </div>
              <button onClick={handleUpload}>{uploading ? "Uploading" : "Upload"}</button>
            </div>

            <label htmlFor=''>Description</label>
            <textarea name="desc" id="" cols="30" rows="16"
                onChange={handleChange}
             placeholder="Brief description to introduction your service to customers">
            </textarea>
            <button onClick={handleSubmit}>Create</button>
          </div>
          <div className="right">
            <label htmlFor="">Service Title</label>
            <input name="shortTitle" type="text" placeholder='e.g. One-page web design' onChange={handleChange}/>

            <label htmlFor="">Short Description</label>
            <textarea name="shortDesc" id="" cols="30" rows="10" onChange={handleChange} placeholder="Short description of your service"></textarea>
            
            <label htmlFor="">Delivery Time (e.g. 3 days)</label>
            <input type="number" name="deliveryTime" min={1} onChange={handleChange} />

            <label htmlFor="">Revision Number</label>
            <input type="number" name="revisionNumber" min={1} onChange={handleChange} />

            <label htmlFor="">Add Features</label>
            <form action="" className='add' onSubmit={handleFeature}>

            <input type="text" placeholder="e.g. page design"/>
            <button type='submit'>Add</button>
            </form>
            <div className="addedFeatures">
              {state?.features?.map((f)=>(
              <div className="item" key={f}>
                <button onClick={()=>dispatch({type:"REMOVE_FEATURE", payload:f})}>
                  {f}
                  <span>X</span>
                </button>
              </div>))}
            </div>
            <label htmlFor="">Price</label>
            <input type="number" min={1} name="price" onChange={handleChange}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Add;
