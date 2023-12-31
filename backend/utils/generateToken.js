import jwt from "jsonwebtoken";

const generateToken = (res, userID) => {
  const token = jwt.sign({ userID: userID }, process.env.JWT_SECRET, {
    expiresIn: "4d",
  });

  res.cookie("jwt", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV !== "development",
    sameSite: "strict",
    maxAge: 4 * 24 * 60 * 60 * 1000,
  });
};

export default generateToken;
