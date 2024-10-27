# ecommerce_api_homework_week_2

# Product API

A simple RESTful API for managing product items with CRUD operations. Built using Express and Mongoose.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
  - [Create Product](#create-product)
  - [Get All Products](#get-all-products)
  - [Get Product by ID](#get-product-by-id)
  - [Update Product by ID](#update-product-by-id)
  - [Delete Product by ID](#delete-product-by-id)
- [Error Handling](#error-handling)
- [Example Usage](#example-usage)

## Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/cordovacarlos22/ecommerce_api_homework_week_2
   ```

2. Clone this repository:

   ```bash
   npm install
   ```

3. Start the server:

```bash
npm run start
```

By default, the server runs on http://localhost:3000.

## Usage

This API follows RESTful conventions with CRUD operations for managing product items.

API Endpoints

Base URL

All endpoints are prefixed with /api/v1/product.

Create Product

    •	Method: POST
    •	Endpoint: /api/v1/product
    •	Description: Creates a new product item.
    •	Request Body:

```
{
"product_name": "string",
"brand": "string",
"description": "string",
"price": "number",
"quantity": "number",
"sku": "string (unique)",
"image": "string (URL)",
"category": "string",
"isActive": "boolean (default: true)"
}
```

    •	Response: Returns the created product object.

Get All Products

    •	Method: GET
    •	Endpoint: /api/v1/product
    •	Description: Retrieves a list of all products.
    •	Response: Array of product objects.

Get Product by ID

    •	Method: GET
    •	Endpoint: /api/v1/product/:itemId
    •	Description: Retrieves a single product by its itemId.
    •	Path Parameter:
    •	itemId: The unique identifier of the product.
    •	Response: The product object with the specified itemId.

Update Product by ID

    •	Method: PATCH
    •	Endpoint: /api/v1/product/:itemId
    •	Description: Updates a product’s details by itemId.
    •	Path Parameter:
    •	itemId: The unique identifier of the product to update.
    •	Request Body (Partial or Full Update):

```json:
  {
"product_name": "string",
"brand": "string",
"description": "string",
"price": "number",
"quantity": "number",
"sku": "string",
"image": "string",
"category": "string",
"isActive": "boolean"
}
```

• Response: The updated product object.

Delete Product by ID

    •	Method: DELETE
    •	Endpoint: /api/v1/product/:itemId
    •	Description: Deletes a product by its itemId.
    •	Path Parameter:
    •	itemId: The unique identifier of the product to delete.
    •	Response: Confirmation message of deletion.

Error Handling

Each endpoint may return the following error codes:

    •	400 Bad Request: Missing required fields or invalid input.
    •	404 Not Found: Product not found by itemId.
