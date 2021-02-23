import { Exclude, Expose } from "class-transformer";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";
import { unique } from "./is-nome-de-usuario-unico.validator";

export class Usuario{
    id: number;

    @unique({
        message: 'this field must be unique'
    })
    @Expose({
        name: 'username'
    })
    @IsNotEmpty()
    @IsString({
        message: 'Usuário precisa ser uma string'
    })
    nomeDeUsuario: string;

    @IsEmail({},{
        message: 'email precisa ser válido'
    })
    email: string;

    @Expose({
        name: 'password'
    })
    @Exclude({
        toPlainOnly: true
    })
    @IsNotEmpty({
        message : 'senha é obrigatória'
    })
    senha: string;

    @IsNotEmpty({
        message : 'nomeCompleto é obrigatório'
    })
    nomeCompleto: string;

    dataDeEntrada: Date;
}