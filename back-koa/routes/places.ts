import { Context } from "koa";
import { Client } from 'pg';
import credentials from "../config/credentials";

const PgClient = new Client(credentials)
PgClient.connect()
 
export async function Places(ctx: Context) {
    let db_return = await PgClient.query(`SELECT "DESC_TIPOLOCAL", COUNT("DESC_TIPOLOCAL") FROM feminicidio GROUP BY "DESC_TIPOLOCAL" ORDER BY 2 DESC;`);
    console.log(db_return)
    ctx.response.body = db_return;
}