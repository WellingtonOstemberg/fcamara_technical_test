import { TableUsersTHeadFilter } from './components'
import * as S from './styles'

export const TableUsersTHead = () => {
  return (
    <S.TableUsersTHead>
      <tr>
        <th>
          <div>
            <span>Rede</span>
            <TableUsersTHeadFilter param="network" />
          </div>
        </th>
        <th>
          <div>
            <span>Nome</span>
            <TableUsersTHeadFilter param="name" />
          </div>
        </th>
        <th>
          <div>
            <span>Perfil</span>
            <TableUsersTHeadFilter param="profile" />
          </div>
        </th>
        <th>
          <div>
            <span>Status</span>
            <TableUsersTHeadFilter param="status" />
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
