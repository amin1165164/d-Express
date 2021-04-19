import React from 'react';
import SideBar from '../../SideBar/SideBar';

const MakeAdmin = () => {
    const handleSubmit = () => {

    }
    const handleOnBlur = () => {

    }
    return (
        <div className="row">
        <div className="col-md-3">
          <SideBar></SideBar>
        </div>
        <div className="col-md-8 border border-3 border-success p-4 shadow">
          <form onSubmit={handleSubmit}>
            <h3>Make Admin</h3>
            <hr />
            <div class="mb-3">
              <label for="email" class="form-label">
                Email
              </label>
              <input
                onBlur={handleOnBlur}
                type="email"
                class="form-control"
                id="email"
                name="email"
                placeholder="Enter email address"
                required
              />
            </div>
        
  
            <button type="submit" class="btn btn-primary">
              Add Email
            </button>
          </form>
        </div>
      </div>
    );
};

export default MakeAdmin;