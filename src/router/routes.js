import cartsRouter from "./carts.router.js";
import chatRouter from "./chat.router.js";
import mockingproductsRouter from "./mockingproducts.router.js";
import productRouter from "./product.router.js";
import sessionsRouter from "./sessionsrouter.js";
import ticketRouter from "./ticket.router.js";
import viewsRouter from "./views.router.js";

export const  plugin_Rutas = (app, cors) => {
    app.use("/api/products", cors,productRouter);
    app.use("/api/carts", cors, cartsRouter);
    app.use("/api/chat", cors, chatRouter)
    app.use("/api/sessions", cors, sessionsRouter)
    app.use("/", cors, viewsRouter);
    app.use("/api/ticket", cors, ticketRouter)
    app.use("/mockingproducts", cors, mockingproductsRouter)
}