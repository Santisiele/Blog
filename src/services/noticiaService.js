import dbHelperAll from '../Utils/helperAll.js'
import 'dotenv/config'


const tablaNotcia=process.env.DB_TABLA_noticia;
const tablaEquipo=process.env.DB_TABLA_equipo;
const tablaInter=process.env.DB_TABLA_intermedia;

export class noticiaService {
    getAllNoticia = async(idEquipo) => {
        let response = 0;
        let where = false;
        let query = `SELECT * FROM ${tablaNotcia}`
        let query1 = ``
        let query2=``

        response= await dbHelperAll({},query);
        return response.recordset;
    }

    getnoticiaById = async(idNoticia) => {
        console.log(idNoticia)
        const query = `SELECT * FROM ${tablaNotcia} WHERE idNoticia=@idNoticia`;
        //const query2 = `SELECT equipo.* FROM ${tablaEquipo}, ${tablaNotcia} , ${tablaInter} WHERE ${tablaEquipo}.idEquipo = ${tablaInter}.idEquipo and ${tablaNotcia}.idNoticia = ${tablaInter}.idNoticia and ${tablaNotcia}.idNoticia = @id`
        const noticia = await dbHelperAll({idNoticia}, query);
        //noticia.recordset[0].Equipo=equipo.recordset;
        return noticia.recordset;
    }

    createnoticia = async(noticia) => {
        const query = `INSERT INTO ${tablaNotcia}(titulo, copete, cuerpo, epigrafe, imagen) VALUES (@titulo, @copete, @cuerpo, @epigrafe, @imagen)`
        const response = await dbHelperAll(noticia, query);

        return response.recordset;
    }

    updatenoticiaById = async(idNoticia, noticia) => {
        const query = `UPDATE ${tablaNotcia} SET titulo=@titulo ,copete=@copete,cuerpo=@cuerpo, epigrafe=@epigrafe, imagen=@imagen WHERE idNoticia = @idNoticia`
        const response = await dbHelperAll({idNoticia, noticia}, query);
        console.log(noticia)
        console.log(query)
        return response.recordset;
    }

    deletenoticiaById = async(idNoticia) => {
        const query = `DELETE FROM ${tablaNotcia} WHERE idNoticia = @idNoticia`
        const response = await dbHelperAll({idNoticia}, query);
        return response.recordset;
    }
}