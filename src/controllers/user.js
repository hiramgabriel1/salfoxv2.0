import User from "../models/User.js";
import { encryptPassword } from "../middlewares/bcrypt.config.js";

export const createUser = async (req, res) => {
  try {
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

    const encryptedPassword = await encryptPassword(password);

    const data = {
      username,
      lastName,
      interest,
      carrera,
      sexo,
      socialNetworks,
      email,
      encryptedPassword,
    };

    // guardamos
    const userCreated = await User.create(data);

    // validamos si se ha guardado o no en la db y porque
    if (!userCreated) {
      res.json({ error: "no se ha creado el usuario" });
      return;
    }
    res.json({ message: "usuario creado con éxito", data: userCreated }); // Cambiado userData a userCreated
  } catch (error) {
    console.error(error); // Imprimir el error en la consola para depuración
    res.status(500).json({ error: "Error en el servidor" }); // Respuesta en caso de error
  }
};

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
