import {Context, Elysia} from "elysia";
import swagger from "@elysiajs/swagger";
import userRoute from "./routes/account.route";
import {auth} from "./utils/auth";
import cors from "@elysiajs/cors";
import accountRoute from "./routes/account.route";

const betterAuthView = (context: Context) => {
    console.log("Request received:", context.request.method, context.request.url);

    const BETTER_AUTH_ACCEPT_METHODS = ["POST", "GET"];
    if (BETTER_AUTH_ACCEPT_METHODS.includes(context.request.method)) {
        console.log("Processing auth.handler...");
        return auth.handler(context.request);
    } else {
        console.error("Method not allowed:", context.request.method);
        context.error(405);
    }
};

const app = new Elysia()


// Swagger
app.use(swagger({path: "/doc"}));

// Better Auth
app.all("/auth/*", accountRoute)
app.mount(auth.handler)

app.listen(3000);

console.log(
    `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
