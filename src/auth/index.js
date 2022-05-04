import jwt from "jsonwebtoken";

import { secret } from "../../config";

//sign genera el token al user
export const signToken = (payload) => {
    return jwt.sign(payload, secret);
};

export const verifyToken = (token) => {
    return jwt.verify(token, secret);
};

export const getToken = (authorization, res) => {
    if (!authorization) {
        return res.status(403).json({
            ok: false,
            data: "User no autorizado",
        });
    }

    //queremos demostrarestan enviando bearers
    if (!authorization.includes("Bearer")) {
        return res.status(403).json({
            ok: false,
            data: "Bearer no encontrado",
        });
    }
    return authorization.split(" ")[1];
};

export const checkToken = (req, res, next) => {
    const authorization = req.headers.authorization;

    const token = getToken(authorization, res);
    const decode = verifyToken(token);

    if (!decode) {
        return res.status(403).json({
            ok: false,
            data: "Invalid token",
        });
    }
    req.decode = decode;
    next();
};