import { prisma } from "../../db";

import { signToken } from "../../auth";
import { hashPassword } from "../../helper/password";

export const signIn = async(req, res) => {
    try {

        const user = await prisma.User.findFirst({
            where: {
                email: req.body.email,
            },
        })
        if (!user) {
            return res.status(500).json({
                ok: false,
                data: "User no encontrado",
            });
        }

        if (user.password !== hashPassword(req.body.password)) {
            return res.status(500).json({
                ok: false,
                data: "Error en email or password",
            });
        }
        user.token = signToken(user);
        delete user.password;

        return res.status(200).json({
            ok: true,
            data: user,
        });
    } catch (error) {
        return res.status(500).json({
            ok: false,
            data: error.message

        });

    }
};

export const signUp = async(req, res) => {
    try {
        const user = await prisma.User.create({
            data: {
                ...req.body,
                password: hashPassword(req.body.password),
            },

        });
        return res.status(200).json({
            ok: true,
            data: user,
        });

    } catch (error) {
        return res.status(500).json({
            ok: false,
            data: error.message
        });
    }
};