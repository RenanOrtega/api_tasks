import jwt from "jsonwebtoken";

export default class DataTokenProvider {
  static getData(req) {
    const { authorization } = req.headers;

    if (!authorization) {
      return res.status(401).json({ errors: ["Login required"] });
    }

    const [, token] = authorization.split(" ");

    return jwt.verify(token, process.env.TOKEN_SECRET);
  }
}
