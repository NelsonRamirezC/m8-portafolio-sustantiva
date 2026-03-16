import { v4 as uuidv4 } from "uuid";
import * as path from "path";
import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));


const uploadImage = (req, res, next) => {
    try {
        const extensionesPermitidas = ['webp', 'jpeg'];

        let { avatar } = req.files;
        
        let [tipo, extension] = avatar.mimetype.split("/");

        if(tipo != "image" || !extensionesPermitidas.includes(extension)){
            return res.status(400).json({message: `Formato de archivo no permitido, sólo se permiten imágenes en formatos: [${extensionesPermitidas.join(" - ")}]`});
        }
        let idImagen = uuidv4().slice(0,6);
        let nombreImagen = `IMG_${idImagen}.${extension}`;


        let rutaImagen = path.join(__dirname, "../upload/", nombreImagen);

        req.pathAvatar = rutaImagen;
        req.nombreImagen = nombreImagen;

        avatar.mv(rutaImagen, (error) => {

            if(error) throw new Error("Error al cargar la imagen");

            next();
        
        });

    } catch (error) {
        res.status(500).json({message: "Error al intentar subir la imagen, vuelva a intentar."});
    }

};

export default uploadImage;



// {
//   name: 'avatar2.jpg',
//   data: <Buffer ff d8 ff e2 0c 58 49 43 43 5f 50 52 4f 46 49 4c 45 00 01 01 00 00 0c 48 4c 69 6e 6f 02 10 00 00 6d 6e 74 72 52 47 42 20 58 59 5a 20 07 ce 00 02 00 09 ... 825177 more bytes>,
//   size: 825227,
//   encoding: '7bit',
//   tempFilePath: '',
//   truncated: false,
//   mimetype: 'image/jpeg',
//   md5: '98351be434bf2e38bd3c6dc06cf90346',
//   mv: [Function: mv]
// }