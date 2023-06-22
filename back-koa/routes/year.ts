import { Context } from "koa";
import { Client } from 'pg';
import credentials from "../config/credentials";

const PgClient = new Client(credentials)
PgClient.connect()
 
export async function Year(ctx: Context) {
    console.log(ctx.query)

    let db_return
    if (typeof ctx.query.year == `string`) {
        db_return = await PgClient.query(`SELECT "ANO_BO", COUNT("ANO_BO") FROM feminicidio WHERE "ANO_BO" = $1 GROUP BY "ANO_BO";`, [ctx.query.year]);
    }
    else{
      db_return = await PgClient.query(`SELECT "ANO_BO", COUNT("ANO_BO") FROM feminicidio GROUP BY "ANO_BO"`);
    }

    console.log(db_return)
    ctx.response.body = db_return;
}

