
import React, { useState } from "react";
import "../../AdminView.css";

const AdminMenu = () => {
  const [expenses, setExpenses] = useState([]);
  const [categories, setCategories] = useState([
    { name: "Food", description: "Meals and snacks" },
    { name: "Travel", description: "Transport and trips" },
  ]);

  const [formData, setFormData] = useState({
    user: "",
    amount: "",
    date: "",
    category: "",
    description: "",
  });

  const [error, setError] = useState("");
  const [activePage, setActivePage] = useState("expenses");
  const [newCategory, setNewCategory] = useState("");
  const [newDescription, setNewDescription] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.user || !formData.amount || !formData.date || !formData.category || !formData.description) {
      setError("Please fill all the mandatory fields.");
      return;
    }
    setError("");
    setExpenses([...expenses, formData]);
    setFormData({ user: "", amount: "", date: "", category: "", description: "" });
  };

  const handleDeleteExpense = (index) => {
    setExpenses(expenses.filter((_, i) => i !== index));
  };

  const handleAddCategory = () => {
    if (!newCategory.trim() || !newDescription.trim()) {
      setError("Both category name and description are required.");
      return;
    }
    if (categories.some((cat) => cat.name === newCategory)) {
      setError("Category already exists.");
      return;
    }

    setCategories([...categories, { name: newCategory, description: newDescription }]);
    setNewCategory("");
    setNewDescription("");
    setError("");
  };

  const handleDeleteCategory = (index) => {
    setCategories(categories.filter((_, i) => i !== index));
  };

  return (
    <div className="container">
      {/* Sidebar */}
      <aside className="sidebar">
        <h1>💰 EMS</h1>
        <nav>
          <button onClick={() => setActivePage("expenses")}>Expenses</button>
          <button onClick={() => setActivePage("category")}>Category</button>
          <button>Reports</button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        {activePage === "expenses" && (
          <>
            <h1 className="header">Expense Management System</h1>
            <form className="form-container" onSubmit={handleSubmit}>
              <select name="user" value={formData.user} onChange={handleChange} required>
                <option value="">Select User</option>
                <option value="1 - Sarvagna">1 - Sarvagna</option>
              </select>

              <input type="number" name="amount" placeholder="Amount" value={formData.amount} onChange={handleChange} required />
              <input type="date" name="date" value={formData.date} onChange={handleChange} required />

              <select name="category" value={formData.category} onChange={handleChange} required>
                <option value="">Select Category</option>
                {categories.map((cat, index) => (
                  <option key={index} value={cat.name}>{cat.name}</option>
                ))}
              </select>

              <textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange} required></textarea>
              <button type="submit">Create</button>
            </form>

            {error && <div className="error-message">{error}</div>}

            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th>User</th>
                    <th>Amount</th>
                    <th>Date</th>
                    <th>Category</th>
                    <th>Description</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {expenses.map((expense, index) => (
                    <tr key={index}>
                      <td>{expense.user}</td>
                      <td>₹{expense.amount}</td>
                      <td>{expense.date}</td>
                      <td>{expense.category}</td>
                      <td>{expense.description}</td>
                      <td>
                        <button className="delete-button" onClick={() => handleDeleteExpense(index)}>Delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}

        {activePage === "category" && (
          <>
            <h1 className="header">Manage Categories</h1>
            <div className="form-container">
              <input
                type="text"
                placeholder="New Category"
                value={newCategory}
                onChange={(e) => setNewCategory(e.target.value)}
              />
              <textarea
                type="text"
                placeholder="Category Description"
                value={newDescription}
                onChange={(e) => setNewDescription(e.target.value)}
              />
              <button onClick={handleAddCategory}>Add Category</button>
            </div>
            {error && <div className="error-message">{error}</div>}

            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th>Category Name</th>
                    <th>Description</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {categories.map((category, index) => (
                    <tr key={index}>
                      <td>{category.name}</td>
                      <td>{category.description}</td>
                      <td>
                        <button className="delete-button" onClick={() => handleDeleteCategory(index)}>Delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}
      </main>
    </div>
  );
};

export default AdminMenu;

