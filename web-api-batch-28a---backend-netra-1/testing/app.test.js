const app = require("../app");
const request = require("supertest");

const customerTicket =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjdXN0b21lcklkIjoiNjJiMmQ0MDIzMzkyZGY3YTIzODljODhjIiwiaWF0IjoxNjU4OTE1ODc1fQ.Wz0t8Ry4JmrDfMhCWJH3xr023XTKBDm_Kke5hbYtEaU";

const staffTicket =
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdGFmZklkIjoiNjJkZDc2MDQ5MDQzNjNiY2YzNzQ0MTY1IiwiaWF0IjoxNjU4OTE2MDc2fQ.LraDsjI5oh8wFL2Q3cIxpHx437N3QxcenIO8svy3-Yc";

const adminTicket =
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbklkIjoiNjJkZDc1ODQ5MDQzNjNiY2YzNzQ0MTYxIiwiaWF0IjoxNjU4OTE2MTM2fQ.XYKEEQbxcRbbBXqYpOLGZv4p59hI_oKKSqokFVKZgjk";

test("Customer login test", async () => {
    await request(app)
      .post("/customer/login")
      .send({
        email: "a",
        password: "a",
      })
      .expect("Content-Type", /json/)
  });

test("Customer register test", async () => {
await request(app)
    .post("/customer/register")
    .send({
        fname: 'Netra',
        lname: 'Budhathoki',
        email: "netra@gmail.com",
        password: "netra123",
        username : "netra",
        age : 22,
        address : 'Kathmandu',
        gender : 'Male',
        phone : 9823456987,
    })
    .expect("Content-Type", /json/)
});

test("Fetch all customer test", async () => {
await request(app)
    .get("/all_user")
    .expect("Content-Type", /json/)
});

test("Fetch particular customer detail test", async () => {
    await request(app)
        .get("/customer/profile")
        .expect("Content-Type", /json/)
});

test("Customer update test", async () => {
    await request(app)
        .put("/staff/update")
        .set("Authorization", staffTicket)
        .send({
            fname: 'Netra Bahadur',
            lname: 'Budhathoki',
            age : 22,
            address : 'Kathmandu',
            gender : 'Male',
            phone : 9823456987,
        })
        .expect("Content-Type", /json/)
});


test("Food category addition test", async () => {
    await request(app)
        .post("/food_category/insert")
        .set("Authorization", adminTicket)
        .send({
            category_name: 'Fast food',
            desc:'our best food',
        })
        .expect("Content-Type", /json/)
    });

test("Fetch food category test", async () => {
    await request(app)
        .get("/food_category/display_single/62e05212fab675e20acd73ee")
        .set("Authorization", adminTicket)
        .expect("Content-Type", /json/)
    });
    
test("Food addition test", async () => {
    await request(app)
        .post("/food/insert")
        .set("Authorization", adminTicket)
        .send({
            food_name : "Chicken Burger",
            short_desc : "Good burger",
            food_desc : "A good chicken burger...",
            food_category : "Veg Food",
            food_price : 250
        })
        .expect("Content-Type", /json/)
    });

test("Food update test", async () => {
    await request(app)
        .put("/food/update/62cfb99f40c3c7fc2efa036f")
        .set("Authorization", adminTicket)
        .send({
            food_name : "Chicken Burger",
            short_desc : "Good burger",
            food_desc : "A good chicken burger...",
            food_category : "Non-veg Food",
            food_price : 250
        })
        .expect("Content-Type", /json/)
    });


test("Fetch food test", async () => {
    await request(app)
        .get("/food")
        .expect("Content-Type", /json/)
    });


test("Room category addition test", async () => {
    await request(app)
        .post("/room_category/insert")
        .set("Authorization", adminTicket)
        .send({
            category_name: 'Normal Room',
            desc:'our best normal room',
            price:1200
        })
        .expect("Content-Type", /json/)
    });

test("Fetch room category test", async () => {
    await request(app)
        .get("/room_category/display_single/62dbab77fa3245af77725e3b")
        .set("Authorization", adminTicket)
        .expect("Content-Type", /json/)
    });


test("Room category update test", async () => {
    await request(app)
        .put("/room_category/update/62e11cd091ef8d79e83cad2c")
        .set("Authorization", adminTicket)
        .send({
            category_name: 'Normal Room',
            desc:'our best normal room in town',
            price:1500
        })
        .expect("Content-Type", /json/)
    });



test("Room addition test", async () => {
    await request(app)
        .post("/room/insert/62e11cd091ef8d79e83cad2c")
        .set("Authorization", adminTicket)
        .send({
            room_title : "Double bed ac",
            room_desc : "Good room for you",
            room_price : 1500,
            max_people : 4,
        })
        .expect("Content-Type", /json/)
    });

test("Room update test", async () => {
    await request(app)
        .put("/room/update/62dbab8bfa3245af77725e47")
        .set("Authorization", adminTicket)
        .send({
            room_title : "Double bed normal",
            room_desc : "Good room for you",
            room_price : 1500,
            max_people : 4,
        })
        .expect("Content-Type", /json/)
    });


test("Fetch room test", async () => {
    await request(app)
        .get("/room")
        .expect("Content-Type", /json/)
    });


test("Fetch particular user booking test", async () => {
    await request(app)
        .get("/my_booking/get")
        .set("Authorization", customerTicket)
        .expect("Content-Type", /json/)
    });

test("Cart addition test", async () => {
    await request(app)
        .post("/cart/insert")
        .set("Authorization", customerTicket)
        .send({
            food_id: "62cfb99f40c3c7fc2efa036f",
            quantity: 3
        })
        .expect("Content-Type", /json/)
    });

test("Fetch cart details test", async () => {
    await request(app)
        .get("/cart/get")
        .set("Authorization", customerTicket)
        .expect("Content-Type", /json/)
    });


test("Order accept test", async () => {
    await request(app)
        .put("/order/accept")
        .set("Authorization", staffTicket)
        .send({
            id: '62e03de0020ca53076eb7c1d',
            order_status: "On the Way"
        })
        .expect("Content-Type", /json/)
    });
