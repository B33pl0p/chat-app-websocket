import { z } from "zod";

// Helper function for validating email and password
export const validateLoginRegisterSchema = (isLogin: boolean) => {
  return z.object({
    email: z.string().email('Invalid email format'),
    password: z.string().min(6, 'Password must be at least 6 characters long'),
    ...(isLogin ? {} : { 
      confirmPassword: z.string().min(6, 'Confirm password is required') 
    }),
  }).refine(data => isLogin || data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });
};
