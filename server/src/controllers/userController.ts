// import { Request, Response } from 'express';
// import bcrypt from 'bcryptjs';
// import jwt from 'jsonwebtoken';
// import UserModel from '../models/userModel';

// const registerUser = async (req: Request, res: Response): Promise<void> => {
//   try {
//     const { username, password } = req.body;

//     const salt = await bcrypt.genSalt(10);
//     const hashedPassword = await bcrypt.hash(password, salt);

//     const newUser = new UserModel({ username, password: hashedPassword });
//     await newUser.save();

//     res.status(201).json({ message: 'User registered successfully' });
//   } catch (error) {
//     res.status(500).json({ message: 'Server error', error: error.message });
//   }
// };

// const loginUser = async (req: Request, res: Response): Promise<void> => {
//   try {
//     const { username, password } = req.body;
//     const user = await UserModel.findOne({ username });

//     if (!user) {
//       return res.status(400).json({ message: 'Invalid credentials' });
//     }

//     const isMatch = await bcrypt.compare(password, user.password);

//     if (!isMatch) {
//       return res.status(400).json({ message: 'Invalid credentials' });
//     }

//     const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET!, {
//       expiresIn: '1h'
//     });

//     res.status(200).json({ token });
//   } catch (error: any) {
//     res.status(500).json({ message: 'Server error', error: error.message });
//   }
// };

// export { registerUser, loginUser };
