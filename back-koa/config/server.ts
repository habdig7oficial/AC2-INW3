import Koa from "koa"
import { Index } from "../routes";
import { City } from "../routes/citiy";
import { Places } from "../routes/places";
import { Year } from "../routes/year";


export const app = new Koa();

export const port = process.env.PORT || 7777

app.use(async function(ctx, next) {
    
    ctx.set(`Access-Control-Allow-Origin`, `*`)

    await next()
})

app.use(async function (ctx) {
    if (`/` == ctx.path && ctx.method == `GET`) {
        await Index(ctx)
    }
    else if(`/year` == ctx.path && ctx.method == `GET`) {
        await Year(ctx)
    }
    else if(`/place` == ctx.path && ctx.method == `GET`) {
        await Places(ctx)
    }
    else if(`/city` == ctx.path && ctx.method == `GET`) {
        await City(ctx)
    }
})

console.log(`starting Koa on ${port}`)

