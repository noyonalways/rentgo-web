declare global {
  namespace Express {
    interface JwtPayload {
      role: "user" | "admin";
    }
  }
}
