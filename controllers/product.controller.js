import ProductItem from '../modules/product.modules.js';



//! CRUD OPERATIONS 

// ? CREATE PRODUCT
const createProduct = async (req, res) => {
  try {
    let product = await ProductItem.create(req.body);
    res.status(200).json(product)
  } catch (error) {
    res.status(400).json({ message: `Error creating product  :  ${error}` });
  }
};

// ? READ PRODUCT

const getAllProducts = async (req, res) => {

  try {
    const products = await ProductItem.find({ isActive: true })
    res.status(200).json(products);
  } catch (error) {
    res.status(400).json({ message: `Error getting all products ${error}` });
  }
}

const getProductById = async (req, res) => {
  try {
    const product = await ProductItem.findById({ _id: req.params.itemId, isActive: true });
    res.status(200).json(product)
  } catch (error) {
    res.status(400).json({ message: `Error getting  products by id  ${error}` })
  }
};

// ? UPDATE PRODUCT
const updateProductById = async (req, res) => {
  try {
    const updatedProduct = await ProductItem.findByIdAndUpdate(req.params.itemId, req.body, { new: true });
    if (!updatedProduct) return res.status(404).json({ message: 'item not found' });
    res.status(200).json(updatedProduct)
  } catch (error) {
    res.status(400).json({ message: `Error updating  products by id  ${error}` })
  }

};

// ? DELETE PRODUCT

const deleteProductById = async (req, res) => {
  //? HARD DELETE  
  // * if we get a query == destroy : true then hard delete || != soft delete

  // ? hard delete logic 
  if (req.query.destroy === 'true') {
    try {
      const deleteProduct = await ProductItem.findByIdAndDelete(req.params.itemId);
      if (deleteProduct == null) return res.status(404).json({ message: 'Product not found for Delete' })
      return res.status(204).json()
    } catch (error) {
      return res.status(400).json({ message: 'Error Deleting Product', error })
    }
  }
  // ? soft  delete logic 
  try {
    const updatedProduct = await ProductItem.findByIdAndUpdate(req.params.itemId, { isActive: false }, { new: false })
    if (updatedProduct === null || ProductItem.isActive === false) { // Valido si el carro NO existe o ya está desactivado
      return res.status(404).json({ message: 'Product not found for Delete' })
    }
    return res.status(204).json()
  } catch (error) {
    return res.status(400).json({ message: 'Error Deleting Product', error })
  }
};



export {
  createProduct,
  getAllProducts,
  getProductById,
  updateProductById,
  deleteProductById
}
