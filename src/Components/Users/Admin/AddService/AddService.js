import React from "react";
import SideBar from "../../SideBar/SideBar";

const AddService = () => {
  const handleSubmit = () => {};
  const handleOnBlur = () => {};
  const handleImageChange = () => {};
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
