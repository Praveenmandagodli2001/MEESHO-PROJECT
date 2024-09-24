import React, { useState } from "react";
import { useNavigate } from "react-router-dom"
import SellerNavbar from "../components/SellerNavbar";
import FooterSection from "../components/FooterSection";

function SellerDashboard() {

  let navigate = useNavigate()

  const [productTitle, setProductTitle] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [productSubCategory, setProductSubCategory] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productImage1, setProductImage1] = useState("");
  const [productImage2, setProductImage2] = useState("");
  const [productImage3, setProductImage3] = useState("");
  const [productRating, setProductRating] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productSizes, setProductSizes] = useState([]);
  const [productReviews, setproductReviews] = useState();
  const [productGender, setProductGender] = useState("");
  const [productColors, setProductColors] = useState([]);
  const [stock, setStock] = useState(0);

  let handleSubmit = async (e) => {

    e.preventDefault();

    const formData = {
      // productId,
      title: productTitle,
      category: productCategory,
      subCategory: productSubCategory,
      price: productPrice,
      images: [productImage1, productImage2, productImage3],
      rating: productRating,
      description: productDescription,
      sizes: productSizes,
      colors: productColors,
      reviews: productReviews,
      gender: productGender,
      stock: stock,
      loggedInUser: JSON.parse(localStorage.getItem('loggedInUser'))
    };


    try {
      const response = await fetch("http://localhost:3001/api/products/addProduct", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {

        const data = await response.json();
        console.log("Product added successfully:", data);
        alert("product added successfully")
        navigate("/sellerViewProduct")

      } else {
        console.error("Failed to add product:", response.statusText);
        alert("failed to add the product")
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  }



  return (
    <>
      <SellerNavbar />
      <div className="container mt-5">
        <div className="card text-muted border bg-light rounded  mb-4">
          <div className="card-body">
            <h2 className="text-center mb-4">Add New Products</h2>
          </div>
        </div>
        <div className="card border rounded bg-light  p-4 mb-4 bg-white">
          <form onSubmit={handleSubmit}>
            <div className="mb-3 row">
              <label htmlFor="productTitle" className="col-sm-3 col-form-label">Title</label>
              <div className="col-sm-9">
                <input
                  type="text"
                  className="form-control"
                  id="productTitle"
                  placeholder="Enter Product Title"
                  value={productTitle}
                  onChange={(e) => setProductTitle(e.target.value)}
                />
              </div>
            </div>

            <div className="mb-3 row">
              <label htmlFor="productCategory" className="col-sm-3 col-form-label">Category</label>
              <div className="col-sm-9">
                <select id="productCategory" className="form-select" value={productCategory} onChange={(e) => setProductCategory(e.target.value)}>
                  <option value="" disabled>Select Category</option>
                  <option value="womenethinic">Women Ethnic</option>
                  <option value="womenwestern">Women Western</option>
                  <option value="me">Men</option>
                  <option value="kids">Kids</option>
                  <option value="home&kitchen">Home & Kitchen</option>
                  <option value="beauty&health">Beauty & Health</option>
                  <option value="bags&footwear">Bags & footwear</option>
                  <option value="electronics">Electronics</option>
                </select>
              </div>
            </div>

            <div className="mb-3 row">
              <label htmlFor="productSubCategory" className="col-sm-3 col-form-label">Subcategory</label>
              <div className="col-sm-9">
                <select id="productSubCategory" className="form-select" value={productSubCategory} onChange={(e) => setProductSubCategory(e.target.value)}>
                  <option value="" disabled>Select Subcategory</option>
                  <option value="saree"> saree</option>
                  <option value="silksaree"> silksaree</option>
                  <option value="dresses">dresses</option>
                  <option value="tops">tops</option>
                  <option value="tshirts">tshirt</option>
                  <option value="menjeans">menjeans</option>
                  <option value="kidswatches">kidswatches</option>
                  <option value="kidsdress">kidsdress</option>
                  <option value="homekitchen">homekitchen</option>
                  <option value="face">face</option>
                  <option value="bedsheets">bedsheets</option>
                  <option value="sanitizers">sanitizers</option>
                  <option value="allbags"> allbags</option>
                  <option value="shoes">shoes</option>
                  <option value="mobile"> mobile</option>
                </select>
              </div>
            </div>

            <div className="mb-3 row">
              <label htmlFor="productPrice" className="col-sm-3 col-form-label">Price</label>
              <div className="col-sm-9">
                <input
                  type="text"
                  className="form-control"
                  id="productPrice"
                  placeholder="Enter Product Price"
                  value={productPrice} onChange={(e) => setProductPrice(e.target.value)}
                />
              </div>
            </div>

            <div className="mb-3 row">
              <label for="productStcok" className="col-sm-3 col-form-label"> Stock</label>
              <div className="col-sm-9">
                <input type="number" className="form-control" id="stock" placeholder="Enter Product stock"
                  value={stock} onChange={(e) => setStock(e.target.value)} />
              </div>

            </div>

            <div className="mb-3 row">
              <label htmlFor="productImage1" className="col-sm-3 col-form-label">Image 1 </label>
              <div className="col-sm-9">
                <input
                  type="url"
                  className="form-control"
                  id="productImage1"
                  placeholder="Enter Image 1 URL"
                  value={productImage1} onChange={(e) => setProductImage1(e.target.value)}
                />
              </div>
            </div>

            <div className="mb-3 row">
              <label htmlFor="productImage2" className="col-sm-3 col-form-label">Image 2 </label>
              <div className="col-sm-9">
                <input
                  type="url"
                  className="form-control"
                  id="productImage2"
                  placeholder="Enter Image 2 URL"
                  value={productImage2} onChange={(e) => setProductImage2(e.target.value)}
                />
              </div>
            </div>

            <div className="mb-3 row">
              <label htmlFor="productImage3" className="col-sm-3 col-form-label">Image 3 </label>
              <div className="col-sm-9">
                <input
                  type="url"
                  className="form-control"
                  id="productImage3"
                  placeholder="Enter Image 2 URL"
                  value={productImage3} onChange={(e) => setProductImage3(e.target.value)}
                />
              </div>
            </div>

            <div className="mb-3 row">
              <label htmlFor="productRating" className="col-sm-3 col-form-label">Rating</label>
              <div className="col-sm-5">
                <input
                  type="text"
                  className="form-control"
                  id="productRating"
                  placeholder="Enter Product Rating"
                  value={productRating} onChange={(e) => setProductRating(e.target.value)}
                />
              </div>
            </div>

            <div className="mb-3 row">
              <label htmlFor="productDescription" className="col-sm-3 col-form-label">Description</label>
              <div className="col-sm-9">
                <textarea
                  className="form-control"
                  id="productDescription"
                  rows="3"
                  placeholder="Enter Product Description"
                  value={productDescription} onChange={(e) => setProductDescription(e.target.value)}
                ></textarea>
              </div>
            </div>

            <div className="mb-3 row">
              <label htmlFor="productReviews" className="col-sm-3 col-form-label">Reviews</label>
              <div className="col-sm-9">
                <input
                  type="text"
                  className="form-control"
                  id="productReviews"
                  placeholder="Enter Product Reviews"
                  value={productReviews} onChange={(e) => setproductReviews(e.target.value)}
                />
              </div>
            </div>

            <div className="mb-3 row">
              <label htmlFor="productGender" className="col-sm-3 col-form-label">Gender</label>
              <div className="col-sm-9">
                <select
                  id="productGender"
                  className="form-select"
                  value={productGender}
                  onChange={(e) => setProductGender(e.target.value)}
                >
                  <option value="" disabled>Select Gender</option>
                  <option value="Men">Men</option>
                  <option value="Women">Women</option>
                </select>
              </div>
            </div>

            <div className="mb-3 row">
              <label htmlFor="productSizes" className="col-sm-3 col-form-label">Sizes Available</label>
              <div className="col-sm-9">
                <select multiple className="form-select" id="productSizes" value={productSizes}
                  onChange={(e) => setProductSizes([...e.target.selectedOptions].map(option => option.value))}>
                  <option value="S">S</option>
                  <option value="M">M</option>
                  <option value="L">L</option>
                  <option value="XL">XL</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="free size">Free Size</option>
                </select>
              </div>
            </div>

            <div className="mb-3 row">
              <label htmlFor="productColor" className="col-sm-3 col-form-label">
                Color
              </label>
              <div className="col-sm-9">
                <select
                  id="productColor"
                  className="form-select"
                  value={productColors}
                  onChange={(e) => setProductColors(e.target.value)}
                >
                  <option value="" disabled>
                    Select Color
                  </option>
                  <option value="Black">Black</option>
                  <option value="Blue">Blue</option>
                  <option value="Green">Green</option>
                  <option value="Red">Red</option>
                  <option value="White">White</option>
                </select>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-12 text-center">
                <button type="submit" className="btn btn-primary btn-lg" onClick={handleSubmit}>Add Product</button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <FooterSection />
    </>
  );
}

export default SellerDashboard;
