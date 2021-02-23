import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class Usuario{
    id: number;

    @IsNotEmpty()
    @IsString({
        message: 'Usuário precisa ser uma string'
    })
    nomeDeUsuario: string;

    @IsEmail({},{
        message: 'email precisa ser válido'
    })
    email: string;

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