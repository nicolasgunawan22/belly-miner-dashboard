import { withIronSessionApiRoute } from "iron-session/next";

export default withIronSessionApiRoute(
   function userRoute(req, res) {
      res.send({ user: req.session });
   },
   {
      cookieName: process.env.IRON_SESSION_COOKIE_NAME || '',
      password: process.env.IRON_SESSION_PASSWORD || '',
      // secure: true should be used in production (HTTPS) but can't be used in development (HTTP)
      cookieOptions: {
         secure: process.env.NODE_ENV === "production",
      },
   },
);