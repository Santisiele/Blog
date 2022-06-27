import { Router } from 'express';
import { noticiaService } from '../services/noticiaService.js';
import { Authenticate } from "../common/jwt.js";

const router = Router();
const noticia = new noticiaService()

router.get('/', Authenticate, async(req, res) => {
    try{
    const noticias = await noticia.getAllNoticia();
    return res.status(200).json(noticias);
    }catch(error){
        console.log(error)
        return res.status(500).json(error);
    }
    
});

router.get('/:id', Authenticate, async(req, res) => {
    try{
    const personajeElegido = await personaje.getpersonajeById(req.params.id);
    return res.status(200).json(personajeElegido);
    }catch(error){
        console.log(error)
        return res.status(500).json(error);
    }
});

router.post('', Authenticate, async(req, res) => {
    try{
    const personajeCreado = await personaje.createpersonaje(req.body);
    return res.status(201).json(personajeCreado);
    }catch(error){
        console.log(error)
        return res.status(500).json(error);
    }
});

router.put('/:id',Authenticate, async(req, res) => {
    try{
    const personajeEditado = await personaje.updatepersonajeById(req.params.id, req.body);
    return res.status(200).json(personajeEditado);
    }catch(error){
        console.log(error)
        return res.status(500).json(error);
    }
});

router.delete('/:id',Authenticate, async(req, res) => {
    try{
    const personajeEliminado = await personaje.deletepersonajeById(req.params.id);
    return res.status(200).json(personajeEliminado);
    }catch(error){
        console.log(error)
        return res.status(500).json(error);
    }
});

export default router;