export default {
  jwtSecret: process.env.JWT_SECRET || 'jwt_secret',
  jwtExpiresIn: process.env.JWT_EXPIRES_IN || 60 * 60 * 60,
};
