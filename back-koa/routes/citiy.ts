import { Context } from "koa";
import { Client } from 'pg';
import credentials from "../config/credentials";

const PgClient = new Client(credentials)
PgClient.connect()
 
export async function City(ctx: Context) {
    console.log(ctx.query)

    let db_return
    if (typeof ctx.query.city == `string`) {
        db_return = await PgClient.query(`SELECT "MUNICIPIO_ELABORACAO", COUNT("NVITIMAS") FROM feminicidio WHERE "MUNICIPIO_ELABORACAO" = $1 GROUP BY "MUNICIPIO_ELABORACAO" ORDER BY 2 DESC;`, [ctx.query.city]);
    }
    else{
      db_return = await PgClient.query(`SELECT "MUNICIPIO_ELABORACAO", COUNT("NVITIMAS") FROM feminicidio WHERE "MUNICIPIO_ELABORACAO" = 'S.PAULO' GROUP BY "MUNICIPIO_ELABORACAO" ORDER BY 2 DESC;`);
    }

    console.log(db_return)
    ctx.response.body = db_return;
}




