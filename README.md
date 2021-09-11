# DDD Workshop

## Requirements

1. Add a “IPad Pro” to a Cart
2. Add a “Hero ink Pen” to a Cart
3. Add 2 quantities of “GM Cricket bat” to Cart.
4. Remove already added Item “IPad Pro”( all quantities) from cart.
5. As a business User I would like to know which Products (name) were deleted from Cart.
6. As a business User, I would like to differentiate between two Carts.
7. See the Price of Product before adding to a Cart
8. As a Business User I will like price my product 10% below competitor price (competitor price is available for product).
9. Create Order (with Products) when Cart is checked out. Also Mark cart as checked out
10. Customer and Bank Account - When Customer’s Address is updated, update her all Bank Accounts address as well. (example of invariant or business rules or consistency rules)
11. Calculate Total amount for the Order. put shipping cost as per weight
    - Total cost = cost of all products in order + (weightIngrams of each product \* .01)

## Lesson learnt

### Day 1

1. Learn how to treat the cart as an aggregate object
2. Domain Event

   - Use to capture something important
   - Immutable and capture something that has happened
   - always in past tense
   - Can only be raised by the domain layer

3. Don't do additional thing outside of business requirements
4. Domain is a first class citizen
   - High cohesion and low coupling
5. Creation of class as business reprensentation
6. Try to use the same language that the business uses

### Day 2

#### Domain Service

- more like a verb or business process
