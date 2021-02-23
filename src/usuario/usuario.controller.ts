import { Body, Controller, Get, HttpStatus, NotFoundException, Param, Post} from "@nestjs/common";

import { NestResponse } from "../core/http/nest-responde";
import { NestResponseBuilder } from "../core/http/nest-response-builder";
import { Usuario } from "./usuario.entity";
import { UsuarioService } from "./usuario.service";

@Controller('users')
export class UsuarioController{

   // private usuarios = [];
   constructor(private usuarioService : UsuarioService){}

    @Post()
    public cria(@Body() usuario : Usuario) : NestResponse{

        const usuarioCriado = this.usuarioService.cria(usuario);
        
        return new NestResponseBuilder()
                .comStatus(HttpStatus.CREATED)
                .comHeader({
                    'Location': `/users/${usuarioCriado.nomeDeUsuario}`
                })
                .comBody(usuarioCriado)
                .build();
    }

    @Get(':nomeDeUsuario')
    public buscaPorNomeDeUsuario(@Param('nomeDeUsuario') nomeDeUsuario : string){
        const usuarioEncontrado = this.usuarioService.buscaPorNomeDeUsuario(nomeDeUsuario);
        
        if(!usuarioEncontrado) throw new NotFoundException({
            statusCode : HttpStatus.NOT_FOUND,
            message: 'Usuário não encontrado'
        });

        return usuarioEncontrado;
    }

}