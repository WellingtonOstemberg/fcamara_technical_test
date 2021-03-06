import { UserType } from '../../types'
export const usersMock: UserType[] = [
  {
    id: 1,
    nome: 'André Gomes da Silva',
    password: '9adjzH4tXGVs',
    email: 'andre.gomes@drogariaconviva.com.br',
    cpf: '123.456.789-90',
    loja: ['Loja Centro', 'Loja 02'],
    rede: ['Drograrias Conviva'],
    perfil: 'Administrador',
    status: true,
  },
  {
    id: 2,
    nome: 'Carolina Oliveira do Carmo Perez',
    password: '6WaM5gYyWQyA',
    email: 'carol.perez@drogariaconviva.com.br',
    cpf: '123.456.789-90',
    loja: ['Loja 02', 'Loja Vila Costa'],
    rede: ['Drograrias Conviva'],
    perfil: 'Gestor de Loja',
    status: false,
  },
  {
    id: 3,
    nome: 'Damiano Gustavo Souza Lino',
    password: 'yFm9XznN8XCR',
    email: 'damiano.lino@drogariaconviva.com.br',
    cpf: '123.456.789-90',
    loja: ['Loja 01', 'Loja 03'],
    rede: ['Drograrias Conviva'],
    perfil: 'Gestor de Rede',
    status: true,
  },
  {
    id: 4,
    nome: 'Eduardo Leite de Almeida Santos',
    password: 'GttDtjaxnXGn',
    email: 'eduardo.santos@drogariaconviva.com.br',
    cpf: '123.456.789-90',
    loja: ['Loja 02', 'Loja 03'],
    rede: ['Drograrias Conviva', 'Entrefarma'],
    perfil: 'Funcionário',
    status: true,
  },
  {
    id: 5,
    nome: 'Fagner Soares da Silva',
    password: 'XwmtNtWrNuwT',
    email: 'fagner.silva@drogariaconviva.com.br',
    cpf: '123.456.789-90',
    loja: ['Loja 03'],
    rede: ['Drograrias Conviva'],
    perfil: 'Administrador',
    status: true,
  },
  {
    id: 6,
    nome: 'Wellington Luiz Benedito Ostemberg',
    password: '8CHjVNnGBsyu',
    email: 'wellington.ostemberg@drogariaconviva.com.br',
    cpf: '953.133.891-49',
    loja: [],
    rede: ['Drograrias Conviva'],
    perfil: 'Desenvolvimento - PL',
    status: true,
  },
]
