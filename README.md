# E-commerce website / Semester Project

![image](https://user-images.githubusercontent.com/52622303/164316813-4b12d99f-aeb7-4069-85cf-e72b3a50ac99.png)

The semester project assignment was to make an e-commerce website and build a customer frontend with home, product list, product detail and cart pages, and an admin frontend with functionality to create, update and delete products. I used a school Strapi installation to populate the website.

## Description

I used a school strapi api to populate the website. You may use your own local strapi installation or other api's, but then you must modify the BASE_URL, paths and endpoints to match the request.

### Customer section
- The home page includes a banner and a list of featured products under 'Trending now' heading.
- The product page includes a list of all products and a search box.
- The product detail page includes title, description, image, price and add to cart button that toggles the product in and out of the cart.
- The cart page displays a list of products that is added in the cart and stored in local   storage. The page must displays title, price, a link to the product view page, image and the total price of all the products in the cart. If the cart is empty, a button and a message displays to indicate that. This page is not a checkout page. No payment or user details are required to be taken.

### Admin section
- The login page stores username and a token in local storage. The logout functionality removes the local storage space where the username and token are stored.
- The forms allows the user to add or edit a product and toggle wether the product is featured or not.
- The edit image input is currently disabled.
- The user can delete an existing product by clicking a button.

The website should be responsive on all devices. 
Building a checkout and payment system was not a part of the assignment.


## Getting Started

### Installing

Clone the repo:

```bash
git clone git@github.com:vildehalvorsen/vilde-halvorsen-semester-project-2.git
```