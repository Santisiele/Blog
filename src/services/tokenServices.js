import jwt from "jsonwebtoken";
import 'dotenv/config'
export class tokenService {
    getToken = async(id) => {
        const getRandomString = () => {
            var result = "";
            var characters =
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
            var charactersLength = characters.length;
            for (var i = 0; i < 18; i++) {
              result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }
          
            return result;
          };
          
          const getSignedToken = () => {
            const userId = getRandomString();
            const userMail = `${userId}@example.com`;
            const token = jwt.sign(
              {
                payload: "Hamilton",
                userEmail: userMail,
              },
              process.env.AUTH_HS256_KEY,
              {
                issuer: "http://project.siele/",
                subject: userId,
                audience: "http://project/",
                expiresIn: 60 * 24 * 24,
              }
            );
          
            return token;
          };
          
          return getSignedToken();
          
    }
}