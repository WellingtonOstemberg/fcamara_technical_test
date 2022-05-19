import { Breadcrumbs, Topbar } from './components'
import { Header } from './styles'

type CardHeaderCampanhaProps = {
  headerItems: () => JSX.Element
}

export const CardHeaderCampanha = ({
  headerItems,
}: CardHeaderCampanhaProps) => {
  return (
    <Header>
      <Breadcrumbs />
      <Topbar headerItems={headerItems} />
    </Header>
  )
}
