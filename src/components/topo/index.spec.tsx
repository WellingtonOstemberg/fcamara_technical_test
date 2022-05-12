import { render, screen } from '@testing-library/react'
import { TestWrapper } from '../../utils'
import { Topo } from '.'

describe('Topo [Component]', () => {
  it('Should render with a img', () => {
    render(
      <TestWrapper>
        <Topo />
      </TestWrapper>,
    )
    const img = screen.getByRole('img')
    const alt = screen.getByAltText(
      'Contém algo semelhante a uma gota de água na cor laranja e na frente a palavra e.delivery representando a logo da empresa',
    )
    expect(alt).toBeInTheDocument()
    expect(img).toBeInTheDocument()
  })
  it('Should render with a specific alt', () => {
    render(
      <TestWrapper>
        <Topo />
      </TestWrapper>,
    )
    const alt = screen.getByAltText(
      'Contém algo semelhante a uma gota de água na cor laranja e na frente a palavra e.delivery representando a logo da empresa',
    )
    expect(alt).toBeInTheDocument()
  })
  it('Should render with a specific src', () => {
    render(
      <TestWrapper>
        <Topo />
      </TestWrapper>,
    )
    const alt = screen.getByAltText(
      'Contém algo semelhante a uma gota de água na cor laranja e na frente a palavra e.delivery representando a logo da empresa',
    )
    expect(alt.getAttribute('src')).toEqual('/assets/img/logo_01.png')
  })
})
