package com.infosys.expenseManagementApplication.dao;

import java.util.List;

import com.infosys.expenseManagementApplication.bean.Category;

public interface CategoryDao {
	public void save(Category category);
	public Category getCategoryById(Long id);
	public void deleteCategoryById(Long id);
	public List<Category> getAllCategories();
	public Long generateCategoryId();
	public Category getCategoryByName(String categoryName);
}
