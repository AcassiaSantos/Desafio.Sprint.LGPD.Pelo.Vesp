class Contato {

    constructor(
        nome,
        sobrenome,
        email,
        cpf,
        telefone,
        contato,
        mensagem
    ) {

        this.nome = nome;
        this.sobrenome = sobrenome;
        this.email = email;
        this.cpf = cpf;
        this.telefone = telefone;
        this.contato = contato;
        this.mensagem = mensagem;
    }
}

function Post(form) {

    const termos = document.getElementById("termos");

    if (!termos.checked) {

        alert("Você precisa concordar com os Termos e Condições.");

        return;
    }

    const contato = {

        nome: form.elements.namedItem("nome").value,
        sobrenome: form.elements.namedItem("sobrenome").value,
        email: form.elements.namedItem("email").value,
        cpf: form.elements.namedItem("cpf").value,
        telefone: form.elements.namedItem("telefone").value,
        contato: form.elements.namedItem("contato").value,
        mensagem: form.elements.namedItem("mensagem").value

    };

    console.log("Nome:", contato.nome);
    console.log("Sobrenome:", contato.sobrenome);
    console.log("Email:", contato.email);
    console.log("CPF:", contato.cpf);
    console.log("Telefone:", contato.telefone);
    console.log("Tipo de Contato:", contato.contato);
    console.log("Mensagem:", contato.mensagem);

    alert(
        "Obrigado " +
        contato.nome +
        " " +
        contato.sobrenome +
        ", seus dados foram enviados!"
    );

    form.reset();

}
