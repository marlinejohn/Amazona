import jwt from 'jsonwebtoken';

export const generateToken = (user) =>{
    return jwt.sign({
        _id: user_id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
         },
        process.env.JWT_SECRET, 
        {
        expiresIn: '30d',
    });
};