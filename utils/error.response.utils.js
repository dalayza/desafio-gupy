const code = {
    TOKEN_INVALIDO: 401,
    USUARIO_INVALIDO: 402
}

let service = {
    token_invalido: {
        code: code.TOKEN_INVALIDO,
        message: 'O token de autenticação do usuário não é válido.'
    }
}

module.exports = service;