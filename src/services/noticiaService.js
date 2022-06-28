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

    getnoticiaById = async(id) => {
        const query = `SELECT * FROM ${tablaNotcia} WHERE id=@id`;
        const query2 = `SELECT equipo.* FROM ${tablaEquipo}, ${tablaNotcia} , ${tablaInter} WHERE ${tablaEquipo}.idEquipo = ${tablaInter}.idEquipo and ${tablaNotcia}.idNoticia = ${tablaInter}.idNoticia and ${tablaNotcia}.idNoticia = @id`
        const noticia = await dbHelperAll({id}, query);
        const equipo = await dbHelperPeliSerie({id}, query2);
        noticia.recordset[0].Equipo=equipo.recordset;
        return noticia.recordset[0];
    }

    createnoticia = async(noticia) => {
        const query = `INSERT INTO ${tablaPersonaje}(imagen, nombre, edad, peso, historia, comidaFavorita) VALUES (@imagen, @nombre, @edad, @peso, @historia, @comidaFavorita)`
        const response = await dbHelperAll(undefined, personaje, query);

        return response.recordset;
    }

    updatenoticiaById = async(id, noticia) => {
        console.log('Update by ID');
        const query = `UPDATE ${tablaPersonaje} SET imagen = @imagen, nombre = @nombre, edad = @edad, peso = @peso, historia = @historia, comidaFavorita = @comidaFavorita WHERE id = @Id`
        const response = await dbHelperAll(id, personaje, query);

        return response.recordset;
    }

    deletenoticiaById = async(id) => {
        const query = `DELETE FROM ${tablaNotcia} WHERE id = @id`
        const response = await dbHelperAll({id}, query);
        return response.recordset;
    }
}