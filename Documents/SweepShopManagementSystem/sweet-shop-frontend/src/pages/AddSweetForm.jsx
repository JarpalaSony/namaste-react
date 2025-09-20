
import React, { useState,useEffect } from "react";
import "../styles/AddSweetForm.css";
import {useParams,useNavigate} from "react-router-dom";
import {addSweet,updateSweet,getSweets} from "../services/sweetService";
export default function AddSweetForm({ onCancel }) {
  const {id}=useParams();
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    price: "",
    quantity: "",
    image: null,
  });
  const [preview, setPreview] = useState(null);
  useEffect(() => {
    if (id) {
      // fetch sweet details for editing
      const fetchSweet = async () => {
        try {
          const sweets = await getSweets();
          const sweet = sweets.find((s) => s._id === id);
          if (sweet) {
            setFormData({
              name: sweet.name,
              category: sweet.category,
              price: sweet.price,
              quantity: sweet.quantity,
              image: null, // don’t prefill file input
            });
            setPreview(sweet.image); // ✅ show existing image
          }
        } catch (err) {
          console.error("❌ Error fetching sweet:", err);
        }
      };
      fetchSweet();
    }
  }, [id]);
  const navigate=useNavigate();
 
const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (files) {
      const file = files[0];
      setFormData((prev) => ({ ...prev, [name]: file }));
      setPreview(URL.createObjectURL(file)); // ✅ preview new file
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };
 const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = new FormData();
      for (const key in formData) {
        if (formData[key]) data.append(key, formData[key]);
      }

      if (id) {
        await updateSweet(id, data); // update
      } else {
        await addSweet(data); // add
      }

      navigate("/sweets");
    } catch (err) {
      console.error("❌ Error saving sweet:", err);
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2 className="title">➕ Add New Sweet</h2>

      <input
        type="text"
        name="name"
        placeholder="Sweet Name"
        value={formData.name}
        onChange={handleChange}
        required
        className="input"
      />

      <input
        type="text"
        name="category"
        placeholder="Category"
        value={formData.category}
        onChange={handleChange}
        required
        className="input"
      />

      <input
        type="number"
        name="price"
        placeholder="Price (₹)"
        value={formData.price}
        onChange={handleChange}
        required
        className="input"
      />

      <input
        type="number"
        name="quantity"
        placeholder="Quantity (g or pieces)"
        value={formData.quantity}
        onChange={handleChange}
        required
        className="input"
      />

      <input
        type="file"
        name="image"
        accept="image/*"
        onChange={handleChange}
        className="fileInput"
        required={!id}
      />
      {preview && (
        <div className="image-preview">
          <img src={preview} alt="Preview" style={{"width":"100px","height":"100px"}}/>
        </div>
      )}

      <div className="actions">
        <button type="submit" className="saveBtn">✅ Save</button>
        {onCancel && (
          <button
            type="button"
            onClick={onCancel}
            className="cancelBtn"
          >
            ❌ Cancel
          </button>
        )}
      </div>
    </form>
  );
}
