import express from "express";
import studentsRoute from "./students.router.js";
import paymentsRoute from "./payments.router.js";

const router = express.Router();
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// (async () => {
//   try {
//     const files = await readdir(__dirname);

//     files.map(async (route) => {
//       console.log(route);
//       const onlyRoute = route.split(".").shift();
//       if (onlyRoute !== "index") {
//         const { default: routeModule } = await import(`./${route}`);
//         router.use(`/${onlyRoute}`, routeModule);
//       }
//     });
//   } catch (error) {
//     console.error("Error reading directory:", error);
//   }
// })();
router.use("/student", studentsRoute);
router.use("/payment", paymentsRoute);

export default router;
