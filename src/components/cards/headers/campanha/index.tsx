import { Breadcrumbs, Topbar } from './components'
import { Header } from './styles'

type CardHeaderCampanhaProps = {
  onClick: () => void
}

export const CardHeaderCampanha = ({ onClick }: CardHeaderCampanhaProps) => {
  return (
    <Header>
      <Breadcrumbs />
      <Topbar onClick={onClick} />
    </Header>
  )
}
