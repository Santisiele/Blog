import sql from 'mssql'
import config from './db.js'

const dbHelperAll= async (params, query) => {
        const pool = await sql.connect(config);
        const response = await pool.request()
        .input('idNoticia', sql.Int, params.idNoticia ?? 0)
        .input('titulo',sql.VarChar(100), params?.titulo ?? '')
        .input('copete',sql.VarChar(255), params?.copete ?? '')
        .input('cuerpo',sql.VarChar(10000), params?.cuerpo ?? '')
        .input('epigrafe',sql.VarChar(50), params?.epigrafe ?? '')
        .input('imagen',sql.VarChar(255), params?.imagen ?? '')
        .input('idEquipo', sql.Int, params.idEquipo ?? 0)
        .input('nombre', sql.VarChar(55), params.nombre ?? '')
        .input('cantNoticias', sql.Int, params.cantNoticias ?? 0)
        .query(query);
        return response;
};
export default dbHelperAll;