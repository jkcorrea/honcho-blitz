import { SimpleRolesIsAuthorized } from '@blitzjs/auth'
import type { RowData } from '@tanstack/react-table'
import { User } from 'db'

export type Role = 'ADMIN' | 'USER'

declare module '@blitzjs/auth' {
  export interface Session {
    isAuthorized: SimpleRolesIsAuthorized<Role>
    PublicData: {
      userId: User['id']
      role: Role
      views?: number
    }
  }
}

declare module '@tanstack/react-table' {
  // eslint-disable-next-line unused-imports/no-unused-vars
  interface ColumnMeta<TData extends RowData, TValue> {
    /** Class names applied to every cell in the column (th & td) */
    className?: string
    /** Class names applied to only header cells (th) */
    headerClassName?: string
    /** Class names applied to only data cells (td) */
    cellClassName?: string
  }
}
