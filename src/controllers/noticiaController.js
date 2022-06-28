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

router.get('/:idNoticia', Authenticate, async(req, res) => {
    try{
        const noticiaId = await noticia.getnoticiaById(req.params.idNoticia);
        return res.status(200).json(noticiaId);
    }catch(error){
        console.log(error)
        return res.status(500).json(error);
    }
});

router.post('', Authenticate, async(req, res) => {
    try{
    const noticiaCreada = await noticia.createnoticia(req.body);
    return res.status(201).json(noticiaCreada);
    }catch(error){
        console.log(error)
        return res.status(500).json(error);
    }
});

router.put('/:idNoticia',Authenticate, async(req, res) => {
    try{
    const noticiaEditada = await noticia.updatenoticiaById(req.params.idNoticia, req.body);
    return res.status(200).json(noticiaEditada);
    }catch(error){
        console.log(error)
        return res.status(500).json(error);
    }
});

router.delete('/:idNoticia',Authenticate, async(req, res) => {
    try{
    const noticiaEliminada = await noticia.deletenoticiaById(req.params.idNoticia);
    return res.status(200).json(noticiaEliminada);
    }catch(error){
        console.log(error)
        return res.status(500).json(error);
    }
});

export default router;