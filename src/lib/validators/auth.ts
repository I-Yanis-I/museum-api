/**
 * Zod validation schemas for authentication
 */

import { z } from 'zod'

// ==================== REGISTER ====================

/**
 * Validation schema for registration
 */
export const RegisterSchema = z.object({
  email: z
    .string()
    .min(1, 'Email is required')
    .email('Invalid email format')
    .min(5, 'Email must be at least 5 characters')
    .max(255, 'Email must be less than 255 characters')
    .toLowerCase()
    .trim(),
  
  password: z
    .string()
    .min(1, 'Password is required')
    .min(8, 'Password must be at least 8 characters')
    .max(100, 'Password must be less than 100 characters')
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
      'Password must contain at least one uppercase letter, one lowercase letter, and one number'
    ),
  
  firstName: z
    .string()
    .min(1, 'First name is required')
    .min(2, 'First name must be at least 2 characters')
    .max(100, 'First name must be less than 100 characters')
    .trim(),
  
  lastName: z
    .string()
    .min(1, 'Last name is required')
    .min(2, 'Last name must be at least 2 characters')
    .max(100, 'Last name must be less than 100 characters')
    .trim(),
})

// Infer TypeScript type from Zod schema
export type RegisterInput = z.infer<typeof RegisterSchema>

// ==================== LOGIN ====================

/**
 * Validation schema for login
 */
export const LoginSchema = z.object({
  email: z
    .string()
    .min(1, 'Email is required')
    .email('Invalid email format')
    .toLowerCase()
    .trim(),
  
  password: z
    .string()
    .min(1, 'Password is required'),
})

// Infer TypeScript type from Zod schema
export type LoginInput = z.infer<typeof LoginSchema>

// ==================== PROFILE UPDATE ====================

/**
 * Validation schema for profile updates (future use)
 */
export const UpdateProfileSchema = z.object({
  firstName: z
    .string()
    .min(2, 'First name must be at least 2 characters')
    .max(100, 'First name must be less than 100 characters')
    .trim()
    .optional(),
  
  lastName: z
    .string()
    .min(2, 'Last name must be at least 2 characters')
    .max(100, 'Last name must be less than 100 characters')
    .trim()
    .optional(),
})

// Infer TypeScript type from Zod schema
export type UpdateProfileInput = z.infer<typeof UpdateProfileSchema>