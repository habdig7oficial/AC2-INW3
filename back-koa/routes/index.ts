import { Context } from "koa";
import { Client } from 'pg';
import credentials from "../config/credentials";

const PgClient = new Client(credentials)
PgClient.connect()
 
export async function Index(ctx: Context) {
    let db_return = await PgClient.query(`SELECT * FROM public.feminicidio;`);
    console.log(db_return)
    ctx.response.body = db_return;
}