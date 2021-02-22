import { Body, Controller, Get, Post } from "@nestjs/common";
import { Usuario } from "./usuario.entity";
import { UsuarioService } from "./usuario.service";

@Controller('users')
export class UsuarioController{

   // private usuarios = [];
   constructor(private usuarioService : UsuarioService){}

    @Post()
    public cria(@Body() usuario : Usuario) : Usuario{
        const usuarioCriado = this.usuarioService.cria(usuario);

        return usuarioCriado;
    }

}