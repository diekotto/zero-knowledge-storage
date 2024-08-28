// src/dtos/user.dto.ts

import { z } from 'zod';

// DTO for user registration
export const UserRegistrationDto = z.object({
  username: z.string().min(3).max(20),
  email: z.string().email(),
  password: z.string().min(8).max(100) // Adjust min/max as per your password policy
});

export type UserRegistration = z.infer<typeof UserRegistrationDto>;

// DTO for user login
export const UserLoginDto = z.object({
  username: z.string(),
  password: z.string()
});

export type UserLogin = z.infer<typeof UserLoginDto>;

// DTO for user entity (as stored in the database)
export const UserEntityDto = z.object({
  username: z.string(),
  email: z.string().email(),
  password: z.string(), // This will be the hashed password
  createdAt: z.date().optional(),
  lastLogin: z.date().optional()
});

export type UserEntity = z.infer<typeof UserEntityDto>;

// DTO for user data returned after successful authentication (excludes sensitive info)
export const AuthenticatedUserDto = UserEntityDto.omit({ password: true });

export type AuthenticatedUser = z.infer<typeof AuthenticatedUserDto>;
