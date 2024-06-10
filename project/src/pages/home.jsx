import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Home() {
  const [formData, setFormData] = useState({
    nom: "",
    fabriquant: "",
    prix: "",
    options: "",
  });
  const [errors, setErrors] = useState({});
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get('http://localhost:5000/produits');
        setUsers(res.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchUsers();
  }, []);

  const addUser = async (formData) => {
    try {
      const res = await axios.post('http://localhost:5000/produits', formData);
      setUsers([...users, res.data]);
    } catch (error) {
      console.error("Error adding user:", error);
    }
  };

  const onChangeHandler = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    console.log(formData);
    const newErrors = {};
    if (!formData.nom) {
      newErrors.nom = "Nom is required";
    }
    if (!formData.fabriquant) {
      newErrors.fabriquant = "Fabriquant is required";
    }
    if (!formData.prix) {
      newErrors.prix = "Prix is required";
    }
    if (!formData?.options) {
      newErrors.options = "Option is required";
    } else if (!/^\d+$/.test(formData.options)) {
      newErrors.options = "Option must be a number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (validateForm()) {
      addUser(formData);
      setFormData({
        nom: "",
        fabriquant: "",
        prix: "",
        options: "",
      });
      setErrors({});
    }
  };

  const onDeleteHandler = (id) => {
    const user = users.find((user) => user._id === id);
    if (user && window.confirm(`Are you sure you want to delete ${user.nom}?`)) {
      setUsers(users.filter((user) => user._id !== id));
      axios.patch(`http://localhost:5000/produits/${id}`).catch((error) => {
        alert("Error deleting user:", error);
      });
    }
  };

  return (
    <div className="row p-4">
      <div className="mt-4">
    
        <h2>add produits en stcke </h2>
      </div>
      <div className="col-12 col-lg-4">
        <form onSubmit={onSubmitHandler}>
          <div className="form-group">
            <label>Nom</label>
            <input
              type="text"
              name="nom"
              value={formData.nom}
              onChange={onChangeHandler}
              className={`form-control ${errors.nom ? "is-invalid" : ""}`}
            />
            {errors.nom && <div className="invalid-feedback">{errors.nom}</div>}
          </div>
          <div className="form-group">
            <label>Fabriquant</label>
            <input
              type="text"
              name="fabriquant"
              value={formData.fabriquant}
              onChange={onChangeHandler}
              className={`form-control ${errors.fabriquant ? "is-invalid" : ""}`}
            />
            {errors.fabriquant && <div className="invalid-feedback">{errors.fabriquant}</div>}
          </div>
          <div className="form-group">
            <label>Prix</label>
            <input
              type="text"
              name="prix"
              value={formData.prix}
              onChange={onChangeHandler}
              className={`form-control ${errors.prix ? "is-invalid" : ""}`}
            />
            {errors.prix && <div className="invalid-feedback">{errors.prix}</div>}
          </div>
          <div className="form-group">
            <label>Option</label>
            <input
              type="text"
              name="options"
              value={formData.options}
              onChange={onChangeHandler}
              className={`form-control ${errors.options ? "is-invalid" : ""}`}
            />
            {errors.options && <div className="invalid-feedback">{errors.options}</div>}
          </div>
          <button className="btn btn-primary" type="submit">Add user</button>
        </form>
      </div>
      <div className="col-12 col-lg-7">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Nom</th>
              <th scope="col">Fabriquant</th>
              <th scope="col">Prix</th>
              <th scope="col">Options</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map(({ nom, fabriquant, prix, options, _id }) => (
              <tr key={_id}>
                <td>{nom}</td>
                <td>{fabriquant}</td>
                <td>{prix}</td>
                <td>{options}</td>
                <td>
                  <button className="btn btn-danger" onClick={() => onDeleteHandler(_id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
   
      </div>
      <Link to="/">router en home</Link>
    </div>
  );
}

export default Home;
