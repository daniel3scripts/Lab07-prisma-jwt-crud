import { prisma } from "../../db";

///logica
const datos = [];
export const index = async(req, res) => {
    const users = await prisma.User.findMany();
    return res.status(200).json({
        ok: true,
        data: users,
    });
};
export const storage = async(req, res) => {
    try {
        const user = await prisma.User.create({
            data: {...req.body },
        });

        return res.status(201).json({
            ok: true,
            data: user,
        });

    } catch (error) {
        return res.status(500).json({
            ok: false,
            data: error.message,
        });

    }
};

export const update = async(req, res) => {
    const { id } = req.params;
    try {
        const user = await prisma.User.update({
            where: { id: Number(id) },
            data: {...req.body },
        });
        return res.status(200).json({
            ok: true,
            data: user,
        });

    } catch (error) {
        return res.status(500).json({
            ok: false,
            data: error.message,
        });
    }
    /* const { name, email, phone } = req.body;

    const user = datos.find((u) => u.id === Number(id));

    if (!user) {
        return res.status(200).json({
            ok: false,
            data: "User not found",
        });
    }
    user.name = name;
    user.email = email;
    user.phone = phone; */

};

export const destroy = async(req, res) => {
    const { id } = req.params;
    try {
        await prisma.User.delete({
            where: { id: Number(id) },
        });
        return res.status(200).json({
            ok: true,
            data: "Usuario eliminado",
        });

    } catch (error) {
        return res.status(500).json({
            ok: false,
            data: error.message,
        });

    }
    /* const user = datos.find((u) => u.id === Number(id));

    if (!user) {
        return res.status(200).json({
            ok: false,
            data: "User not found",
        });
    }
    datos.splice(datos.indexOf(user), 1); */

};
///
/* const data = []

export const login = (req, res) => {
    const { email, password } = req.body;
    req.body.id = data.length + 1;
    data.push(req.body);

    res.json({
        data: {
            type: "login",
            email,
            password,
        },
    });
}; */