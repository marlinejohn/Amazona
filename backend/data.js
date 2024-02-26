import bcrypt from 'bcryptjs';
const data ={
    users:[
        {
            name: "Jess",
            email: 'jess@email.com',
            password: bcrypt.hashSync('123456'),
            isAdmin: true
        },
        {
            name: "Jay",
            email: 'jay@email.com',
            password: bcrypt.hashSync('876549'),
            isAdmin: false
        },
        {
            name: "Sean",
            email: 'sean@email.com',
            password: bcrypt.hashSync('6769989'),
            isAdmin: false
        }, 
        {
            name: "Burn",
            email: 'burny@email.com',
            password: bcrypt.hashSync('876549'),
            isAdmin: false
        },
    ],
    products: [{
        // _id:1,
        name: 'Nike Slim Shirt',
        slug: 'nike-slim-shirt',
        category: 'Shirts',
        image: '/images/p1.jpg',
        price: 120,
        countInStock: 10,
        brand: 'Nike',
        rating : 4.5,
        numReviews: 10,
        description: 'high quality shirt'
    },
    {
        // _id: 2,
        name: 'Adidas Fit Shirt',
        slug: 'adidas-fit-shirt',
        category: 'Shirt2',
        image: '/images/p2.jpg',
        price: 250,
        countInStock: 20,
        brand: 'Adidas',
        rating : 4.0,
        numReviews: 10,
        description: 'high quality shirt'
    },
    {
        // _id: 3,
        name: 'Nike Fit Pant',
        slug: 'nike-fit-pant',
        category: 'Pants',
        image: '/images/p3.jpg',
        price: 25,
        countInStock: 15,
        brand: 'Nike',
        rating : 4.5,
        numReviews: 14,
        description: 'high quality pant'
    },
    {
        // _id:4, 
        name: 'Adidas Fit Pant',
        slug: 'adidas-fit-pant',
        category: 'Pants',
        image: '/images/p4.jpg',
        price: 25,
        countInStock: 15,
        brand: 'Adidas',
        rating : 4.5,
        numReviews: 14,
        description: 'high quality pant'
    }
]
}

export default data;