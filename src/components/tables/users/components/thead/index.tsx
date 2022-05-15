import { BiChevronDown, BiChevronUp } from 'react-icons/bi'
import { TableUsersTHeadFilter } from './components'
import * as S from './styles'

type TableUsersTHeadProps = {
  handleFilter: (filter: string) => void
}

export const TableUsersTHead = ({ handleFilter }: TableUsersTHeadProps) => {
  return (
    <S.TableUsersTHead>
      <tr>
        <th>
          <div>
            <span>Rede</span>
            <TableUsersTHeadFilter />
          </div>
        </th>
        <th>
          <div>
            <span>Nome</span>
            <div>
              <BiChevronUp onClick={() => handleFilter('nameUp')} />
              <BiChevronDown onClick={() => handleFilter('nameDown')} />
            </div>
          </div>
        </th>
        <th>
          <div>
            <span>Perfil</span>
            <div>
              <BiChevronUp onClick={() => handleFilter('profileUp')} />
              <BiChevronDown onClick={() => handleFilter('profileDown')} />
            </div>
          </div>
        </th>
        <th>
          <div>
            <span>Status</span>
            <div>
              <BiChevronUp onClick={() => handleFilter('statusUp')} />
              <BiChevronDown onClick={() => handleFilter('statusDown')} />
            </div>
          </div>
        </th>
        <th>
          <div>
            <span>Ações</span>
          </div>
        </th>
      </tr>
    </S.TableUsersTHead>
  )
}
