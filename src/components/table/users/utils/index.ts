export const handleFilter = (filter: string) => {
  switch (filter) {
    case 'networkUp':
      console.log('Filtrar redes maior para o menor')
      break
    case 'networkDown':
      console.log('Filtrar redes menor para o maior')
      break
    case 'nameUp':
      console.log('Filtrar nomes maior para o menor')
      break
    case 'nameDown':
      console.log('Filtrar nomes menor para o maior')
      break
    case 'profileUp':
      console.log('Filtrar perfis maior para o menor')
      break
    case 'profileDown':
      console.log('Filtrar perfis menor para o maior')
      break
    case 'statusUp':
      console.log('Filtrar status maior para o menor')
      break
    case 'statusDown':
      console.log('Filtrar status menor para o maior')
      break
  }
}
