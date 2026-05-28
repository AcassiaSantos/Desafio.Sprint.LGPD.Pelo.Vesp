class Contato {

    constructor(
        nome,
        email,
        telefone,
        contato,
        mensagem
    ) {

        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
        this.contato = contato;
        this.mensagem = mensagem;
    }
}

function Post(form) {

    const Contato = {
        nome: form.elements.namedItem("nome").value,
        sobrenome: form.elements.namedItem("sobrenome").value,
        email: form.elements.namedItem("email").value,
        telefone: form.elements.namedItem("telefone").value,
        contato: form.elements.namedItem("contato").value,
        mensagem: form.elements.namedItem("mensagem").value
    }

    console.log(Contato);
    console.log("Mensagem:", Contato.mensagem);

    alert(
        "Obrigado " +
        Contato.nome +
        " " +
        Contato.sobrenome +
        ", seus dados foram enviados!"
    );
}