import argon2 from "argon2"

export const encryptPassword = async (password) => {
  try {
      const hashedPassword = await argon2.hash(password)
      return hashedPassword
  } catch (error) {
    throw new Error(error)
  }
}