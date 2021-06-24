# MyStore

E-commerce website - an application that allows users to view a list of available products to purchase, add them to a shopping cart, and ultimately complete the checkout process.

## Functionality
- User will be able to add to products to the cart from the main page.
- User can navigate to product details and even add to cart from there.
- User can check the cart details by navigating to cart from the navigation bar in the header.
- User can remove cart items from the cart.
- User can adjust the quantity to order from the cart.
- User need to give valid information before placing the order.

## Development server

Run `ng serve --port 4000` for a dev server. Navigate to `http://localhost:4000/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component components/component-name` to generate a new component.
Run `ng generate component services/service-name` to generate a new service.

You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Components

- Header Component
    Contains main title of the application and navigation bar to Home, Cart.
- ProductList Component
    Contains all the items available in the store
- ProductItem Component
    Contains the details of the product like Name,Price,Quantity, Add To Cart.
- ProductItem Detail Component
    Contains the details and description of a single product.
- Cart Component
    Contains all the cart items and User information before placing order.
- CartItem Component
    Contains details of the cart item.
- Confirmation Component
    Contains status of the Order.

## Services

- ProductService Component
    This component is used to:
    - Fetch Product Data
    - Store,Fetch,Update Cart Data
    - Checkout items
