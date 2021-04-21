import React, { useEffect, useState } from 'react';
import SideBar from '../../SideBar/SideBar';
import SingleService from '../SingleService/SingleService';

const ServiceManager = () => {

    const [service, setService] = useState([]);
    const[adminList, setAdminList] =useState([]);

  useEffect(() => {
    fetch("https://intense-bayou-17126.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);
  useEffect(() => {
    fetch("https://intense-bayou-17126.herokuapp.com/admins")
      .then((res) => res.json())
      .then((data) => setAdminList(data));
  }, []);
    return (
        <div className="row">
      <div className="col-md-3">
        <SideBar></SideBar>
      </div>
      <div className="col-md-8 border border-3 border-success p-4 mt-4">
          {service.length === 0 && (
            <div className="text-center ">
              <div class="spinner-border text-primary" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>
          )}
          <h3>Manage Service</h3>
          <table className="table">
            <thead>
              <tr>
                <th>Service Name</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {service.map((sService) => (
                <SingleService sService={sService} key={sService._id}/>
              ))}
            </tbody>
          </table>
          <h4 className="mt-5">No of Admin: {adminList.length}</h4>
          {adminList.length === 0 && (
            <div className="text-center ">
              <div class="spinner-border text-primary" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>
          )}
          <div>
              {
                  adminList.map((admin) => <li>{admin.email}</li>)
              }
          </div>
        </div>


      
    </div>
    );
};

export default ServiceManager;