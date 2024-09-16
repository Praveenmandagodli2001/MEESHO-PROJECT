import React from 'react';
import Navbar from '../components/Navbar';

const BillingPage = () => {
  return (
    <div className="container mt-5">
      <Navbar />
      <h3 className="border-bottom py-2 mb-3">Billing & Payment</h3>
      <div className="row" style={{ marginTop: "50px" }}>
        <div className="col-md-6">
          <h4>Billing Details</h4>
          <form>
            <div className="mb-3">
              <label className="form-label">Full Name</label>
              <input type="text" className="form-control" placeholder="Enter your full name" />
            </div>
            <div className="mb-3">
              <label className="form-label">Address</label>
              <input type="text" className="form-control" placeholder="Enter your address" />
            </div>
            <div className="mb-3">
              <label className="form-label">City</label>
              <input type="text" className="form-control" placeholder="Enter your city" />
            </div>
            <div className="mb-3">
              <label className="form-label">Postal Code</label>
              <input type="text" className="form-control" placeholder="Enter your postal code" />
            </div>
          </form>
        </div>
        <div className="col-md-6">
          <h4>Payment Details</h4>
          <form>
            <div className="mb-3">
              <label className="form-label">Card Type</label>
              <select className="form-select">
                <option value="credit">Credit Card</option>
                <option value="debit">Debit Card</option>
              </select>
            </div>
            <div className="mb-3">
              <label className="form-label">Card Number</label>
              <input type="text" className="form-control" placeholder="Enter your card number" />
            </div>
            <div className="mb-3">
              <label className="form-label">Expiry Date</label>
              <input type="text" className="form-control" placeholder="MM/YY" />
            </div>
            <div className="mb-3">
              <label className="form-label">CVV</label>
              <input type="text" className="form-control" placeholder="Enter CVV" />
            </div>
          </form>
        </div>
      </div>
      <button className="btn btn-primary mt-4">Confirm Payment</button>
    </div>
  );
};

export default BillingPage;
