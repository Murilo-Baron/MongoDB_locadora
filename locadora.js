use ('locadora') // database

// Inserindo dados na collection funcionario através de um array
db.funcionario.insertMany([
  {
    "_id": "007",
    "nome": "James Gold"
  },
  {
    "_id": "020",
    "nome": "Renan Peçanha"
  },
  {
    "_id": "010",
    "nome": "Murilo Baron"
  },
  {
    "_id": "014",
    "nome": "Karlinhos Maia"
  },
  {
    "_id": "005",
    "nome": "Jozineio Wesker"
  }
])

// Inserindo dados na collection estoque através de um array
db.estoque.insertMany([
  {
    "_id": "934",
    "filmes": "O exorcista",
    "Categoria": "Clássicos do cinema",
    "descrição": "Mulher com o homem do ruim",
    "quantidade": 1,
    "status": "esperando retorno"
  },
  {
    "_id": "999",
    "filmes": "007 - Sem tempo para morrer",
    "categoria": "Espionagem",
    "quantidade": 15,
    "status": "guardado"
  },
  {
    "_id": "976",
    "filmes": "Guerra nas estrelas",
    "descrição": "filme de nerdola",
    "quantidade": 32,
    "status": "emprestados"
  },
  {
    "_id": "954",
    "filmes": "Lego movie",
    "descrição": "filme de criança",
    "quantidade": 80,
    "status": "emprestados"
  },
  {
    "_id": "955",
    "filmes": "Transformar",
    "descrição": "bip-bop",
    "quantidade": 14,
    "status": "guardados"
  }
])

// Inserindo dados na collection clientes através de um array
db.clientes.insertMany([
  {
    "_id": "100",
    "nome": "Hideo Kojima",
    "data_nasc": "20.09.1889",
    "cpf": "87635489-32",
    "telefone": "11987543-7321",
    "email": "konamijaci@gmail.com",
    "endereço": {
      "_id": "321",
      "rua": "marcio gomes",
      "cep": "13304-320",
      "bairro": "konichiwa medeiros",
      "cidade": "São José dos Campos"
    }
  },
  {
    "_id": "112",
    "nome": "Matheus Costa",
    "data_nasc": "14.06.2002",
    "cpf": "87521344-32",
    "telefone": "119765432-1234",
    "email": "yeeeeea@gmail.com",
    "endereço": {
      "_id": "365",
      "rua": "alfajor yark",
      "cep": "13367-987",
      "bairro": "jonas de barro",
      "cidade": "São Paulo"
    }
  },
  {
    "_id": "145",
    "nome": "Hermelindo Oliver",
    "data_nasc": "12.03.2006",
    "cpf": "9763134-31",
    "telefone": "11954321-3123",
    "email": "hermelindo@gmail.com",
    "endereço": {
      "_id": "313",
      "rua": "alvorada das rosas",
      "cep": "13312-327",
      "bairro": "condomio terras",
      "cidade": "ITU"
    }
  },
  {
    "_id": "165",
    "nome": "Rodrigo Matias",
    "data_nasc": "11.03.2000",
    "cpf": "37313125-45",
    "telefone": "119432122-3334",
    "email": "matiasrodrigo@gmail.com",
    "endereço": {
      "_id": "398",
      "rua": "yorkshire chihuahua",
      "cep": "13345-313",
      "bairro": "garcia jones",
      "cidade": "Rio de Janeiro"
    }
  },
  {
    "_id": "113",
    "nome": "Matheus Costa",
    "data_nasc": "14.06.2002",
    "cpf": "87521344-32",
    "telefone": "119765432-1234",
    "email": "yeeeeea@gmail.com",
    "endereço": {
      "_id": "365",
      "rua": "alfajor yark",
      "cep": "13367-987",
      "bairro": "jonas de barro",
      "cidade": "São Paulo"
    }
  }
])

// Inserindo dados na collection emprestimo através de um array
db.emprestimo.insertMany([
  {
    "_id": "789",
    "filmes": "Avatar",
    "data_emp": "22.05.23",
    "data_dev": "30.05.23",
    "multa": "Atraso",
    "pagamento": {
      "_id": "893",
      "valor": "R$50,00",
      "tipo": {
        "dinheiro": "$20,00",
        "cartão": "R$30,00"
      }
    }
  },
  {
    "_id": "790",
    "filmes": "Espião e meio",
    "data_emp": "22.05.23",
    "data_dev": "30.05.23",
    "multa": "Atraso",
    "pagamento": {
      "_id": "894",
      "valor": "R$30,00",
      "tipo": {
        "dinheiro": "$20,00",
        "cartão": "R$30,00"
      }
    }
  },
  {
    "_id": "791",
    "filmes": "Robos",
    "data_emp": "22.05.23",
    "data_dev": "30.05.23",
    "multa": "Atraso",
    "pagamento": {
      "_id": "895",
      "valor": "R$20,00",
      "tipo": {
        "dinheiro": "$20,00",
        "cartão": "R$30,00"
      }
    }
  },
  {
    "_id": "792",
    "filmes": "Vizinhos",
    "data_emp": "31.02.23",
    "data_dev": "30.02.23",
    "multa": "Atraso",
    "pagamento": {
      "_id": "896",
      "valor": "R$50,00",
      "tipo": {
        "dinheiro": "$20,00",
        "cartão": "R$30,00"
      }
    }
  },
  {
    "_id": "793",
    "filmes": "Pequena sereia",
    "data_emp": "10.04.23",
    "data_dev": "12.05.23",
    "multa": "Atraso",
    "pagamento": {
      "_id": "897",
      "valor": "R$70,00",
      "tipo": {
        "dinheiro": "$20,00",
        "cartão": "R$30,00"
      }
    }
  },
  {
    "_id": "794",
    "filmes": "Kung-fu Panda",
    "data_emp": "22.05.23",
    "data_dev": "30.05.23",
    "multa": "Atraso",
    "pagamento": {
      "_id": "898",
      "valor": "R$50,00",
      "tipo": {
        "dinheiro": "$20,00",
        "cartão": "R$30,00"
      }
    }
  }
])
db.estoque.find({
    quantidade: { $gt: 10 },
    categoria: "Espionagem"
  })
  
db.clientes.find({
    multa: { $ne: null },
    cpf: { $nin: ["37313125-45", "87521344-32"] }
  })

