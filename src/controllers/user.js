import User from "../models/User.js";
import { encryptPassword } from "../middlewares/hash.js";

// TODO: create user
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

    // encrypt password
    const hashedPassword = await encryptPassword(password);

    const data = {
      username,
      lastName,
      interest,
      carrera,
      sexo,
      socialNetworks,
      email,
      password,
    };

    // guardamos
    const userCreated = await User.create(data);

    // validamos si se ha guardado o no en la db y porque
    if (!userCreated) {
      res.json({ error: "no se ha creado el usuario", data: data });

      return;
    }
    res.json({ message: "usuario creado con éxito", data: userCreated }); // Cambiado userData a userCreated
  } catch (error) {
    console.error(error); // Imprimir el error en la consola para depuración
    res.status(500).json({ error: "Error en el servidor" }); // Respuesta en caso de error
  }
};

// TODO: filter carreras
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
    // get data from database
    const users = await User.find()
    if(users){
      res.status(200).json({ message: users })
    }
    
  } catch (error) {
    throw new Error(error);
  }
}