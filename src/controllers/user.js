import User from "../models/User.js";
import { encryptPassword } from "../helpers/hash.js";
import { uploadImage } from "../config/cloudinary.config.js";
import fs from "fs-extra";

export const createUser = async (req, res) => {
  const {
    username,
    lastName,
    interest,
    carrera,
    sexo,
    socialNetworks,
    email,
    password,
  } = req.body;

  try {
    // Encriptar contraseña
    const hashedPassword = await encryptPassword(password);

    const data = {
      username,
      lastName,
      interest,
      carrera,
      sexo,
      socialNetworks,
      email,
      password: hashedPassword,
    };

    // Subir imagen a Cloudinary
    if (req.files?.image) {
      const result = await uploadImage(req.files.image.tempFilePath);
      data.image = {
        public_id: result.public_id,
        secure_url: result.secure_url,
      };
      await fs.unlink(req.files.image.tempFilePath);
    }

    // Guardar usuario
    const userCreated = await User.create(data);

    if (!userCreated) {
      res.json({ error: "No se ha creado el usuario", data: data });
    } else {
      res.json({ message: "Usuario creado con éxito", data: userCreated });
    }
  } catch (error) {
    if (req.files?.image) {
      await fs.unlink(req.files.image.tempFilePath);
    }
    console.error(error); // Imprimir el error en la consola para depuración
    res.status(500).json({ error: error.message }); // Devolver el mensaje de error específico
  }
};

// TODO: filter USERS
export const filterUsersCategories = async (req, res) => {
  try {
    const { carrera } = req.params;

    // buscar usuarios que tengan el mismo valor en el mismo campo de carrera
    const usersCarrera = await User.find({ carrera });

    res.status(200).json({ message: usersCarrera });
  } catch (error) {
    throw new Error(error);
  }
};

// TODO: get all users
export const getUsers = async (req, res) => {
  try {
    // & get data from database
    const users = await User.find();
    if (users) {
      res.status(200).json({ message: users });
    }
  } catch (error) {
    throw new Error(error);
  }
};