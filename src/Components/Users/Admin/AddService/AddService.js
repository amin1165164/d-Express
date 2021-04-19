
import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router";
import SideBar from "../../SideBar/SideBar";

const AddService = () => {
    const [imageURL, setImageURL] = useState(null);
    const [newService, setNewService] = useState({});
  
    const history = useHistory();
  
  
    const handleImageChange = (e) => {
      console.log(e.target.files[0]);
      const imageData = new FormData();
      imageData.set("key", "758a6992daaebc4e2d183d1afdb6c292");
      imageData.append("image", e.target.files[0]);
  
      axios.post('https://api.imgbb.com/1/upload', imageData)
      .then(function (response) {
        setImageURL(response.data.data.display_url);
  
        console.log(response.data.data.display_url);
  
      })
      .catch(function (error){
        console.log(error);
      })
      
    };
  
    const handleOnBlur = e => {
      const newServiceInfo = newService;
      newServiceInfo[e.target.name] = e.target.value;
      newServiceInfo.image = imageURL;
      setNewService(newServiceInfo);
    }
  
    const handleSubmit = e => {
      e.preventDefault();
  
      fetch('http://localhost:5000/addServices',{
              method: 'POST',
              headers: {'Content-Type': 'application/json'},
              body: JSON.stringify(newService),
          })
          .then(res => res.json())
          .then(data => {
            alert("Your service info is successfully added")
  
            history.replace('/admin/addService')
          })
    }
  return (
    <div className="row">
      <div className="col-md-3">
        <SideBar></SideBar>
      </div>
      <div className="col-md-8 border border-3 border-success p-4 shadow">
        <form onSubmit={handleSubmit}>
          <h3>Add Service</h3>
          <hr />
          <div class="mb-3">
            <label for="type" class="form-label">
              Service Type
            </label>
            <input
              onBlur={handleOnBlur}
              type="text"
              class="form-control"
              id="type"
              name="type"
              placeholder="Service Type"
              required
            />
          </div>
          <div class="mb-3">
            <label for="description" class="form-label">
              Description
            </label>
            <textarea
              onBlur={handleOnBlur}
            //   type="text"
              class="form-control"
              id="description"
              name="description"
              placeholder="Description"
              required
            />
          </div>
          <div class="mb-3">
            <label for="price" class="form-label">
              Price
            </label>
            <input
              onBlur={handleOnBlur}
              type="text"
              class="form-control"
              id="price"
              name="price"
              placeholder="Price"
              required
            />
          </div>
          <div class="mb-3">
            <label for="image" class="form-label">
              Upload Image
            </label>
            <input
              type="file"
              class="form-control"
              id="image"
              onChange={handleImageChange}
              required
            />
          </div>

          <button type="submit" class="btn btn-primary">
            Add Service
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddService;
