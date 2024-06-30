# CAR-RENTAL-SERVER

The Car Rental Server is a comprehensive application designed to facilitate the efficient management of car rentals. Developed using modern technologies, it offers robust features for both users and administrators. Key functionalities include:

- Secure login and signup system.
- User management system with capabilities for creating, updating, and managing user profiles.
- Car management system that allows for adding new cars and updating their status (available or unavailable). Unavailable cars cannot - be booked.
- User car rental system to book available cars.
- Admin booking management system for overseeing all bookings.
- Booking car return system to handle the return process seamlessly.
- Total cost calculation system that calculates rental costs based on booking and return times, including hourly differences.
- Admin all car booking price management system to manage pricing effectively.
- Clean and well-structured code with comprehensive error handling for a smooth user experience.

## Project Setup

### Prerequisites

- Node.js (v14 or higher)
- Yarn (v1.22 or higher)
- MongoDB (v4.4 or higher)

### Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/jishan1019/Car-Rental-Shop-Assignment-3.git
   cd car-rental-shop-assignment3
   ```

2. **Install Necessary Dependency via command**

   ```
   pnpm
   ```

3. **Run Project via below command**

   ```
   pnpm start:dev
   Project Running Port : http://localhost:4000
   ```

4. ** CREDENTIAL **

   ```
   user:

    {
    "email": "user@gmail.com",
    "password": "1234"
    }

   admin:

   {
    "email": "admin@gmail.com",
    "password": "1234"
   }

   ```

### Api Endpoints

1. **USER**

```
base_url:http://localhost:4000

 1. GET ALL user : {{base_url}}/api/users
 2. Get Specific user : {{base_url}}/api/users/6681b6d9d2ec6e0d0b7e0570
 3. PATCH (Update User) : {{base_url}}/api/users/6681b6d9d2ec6e0d0b7e0570
 4. Delete User : {{base_url}}/api/users/6681b6d9d2ec6e0d0b7e0570
```

2.  **AUTH**

```
1. Login User (POST) : {{base_url}}/api/auth/signin
2. Signup User (POST) : {{base_url}}/api/auth/signup
3. Create Refresh Token (POST) : {{base_url}}/api/auth/refresh-token

```

3.  **BOOKING**

```
1. Get All Booking (GET / Admin) : {{base_url}}/api/bookings
2. Get User Booking (GET / User) : {{base_url}}/api/bookings
3. Create Booking (POST / Admin) : {{base_url}}/api/bookings
3. Return Rent Booking (POST / User) : {{base_url}}/api/cars/return

```

4.  **CAR**

```
1. Get All Car (GET) : {{base_url}}/api/cars
2. Get Specific Car (GET) : {{base_url}}/api/cars/6681b8d1119578e85ef91a8f
3. Create Car (POST / Admin) : {{base_url}}/api/cars
4. Update Car (PUT / Admin) : {{base_url}}/api/cars
5. Delete Car (Delete / Admin) : {{base_url}}/api/cars/6681b8d1119578e85ef91a8f


```
