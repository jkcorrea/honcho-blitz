import { ColumnDef, flexRender, getCoreRowModel, RowData, TableOptions, useReactTable } from '@tanstack/react-table'

import * as cls from './Table.css'

export type { Column, ColumnDef, RowData } from '@tanstack/react-table'

// const getClassNameForCell = ({ columnDef: { meta } }: Column<any, any>, header: boolean = false) =>
//   classNames(meta?.className, header ? meta?.headerClassName : meta?.cellClassName);

export type TableProps<TData extends RowData, TValue extends any = unknown> = {
  data?: TData[]
  columns: ColumnDef<TData, TValue>[]
  /** If true & data is falsy, shows a skeleton loading animation */
  isLoading?: boolean
  reactTableOptions?: Omit<TableOptions<TData>, 'data' | 'columns' | 'getCoreRowModel'>
}

const Table = <TData extends RowData, TValue extends any = unknown>({
  data,
  columns,
  isLoading,
  reactTableOptions,
}: TableProps<TData, TValue>) => {
  const isPaginated = reactTableOptions?.manualPagination || reactTableOptions?.getPaginationRowModel

  const table = useReactTable({
    data: data ?? [],
    columns,
    // Pipeline
    getCoreRowModel: getCoreRowModel(),
    ...reactTableOptions,
  })

  const showSkeleton = isLoading && !data

  return (
    <div className={cls.container}>
      <table className={cls.table}>
        {/* head */}
        <thead>
          {table.getHeaderGroups().map((group) => (
            <tr key={group.id}>
              {group.headers.map((header) => (
                <th
                  key={header.id}
                  colSpan={header.colSpan}
                  // className={classNames('align-top', getClassNameForCell(header.column, true))}
                >
                  {!header.isPlaceholder && flexRender(header.column.columnDef.header, header.getContext())}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {showSkeleton
            ? Array.from([...Array(5)]).map((_, ix) => (
                <tr key={ix}>
                  <td colSpan={columns.length} className="animate-pulse bg-transparent p-0 pb-3">
                    <div className="h-16 bg-gray-300" />
                  </td>
                </tr>
              ))
            : table.getRowModel().rows.map((row) => {
                return (
                  <tr
                    key={row.id}
                    // className={classNames(row.getIsSelected() && 'active')}
                  >
                    {row.getVisibleCells().map((cell) => {
                      return (
                        <td
                          key={cell.id}
                          // className={getClassNameForCell(cell.column)}
                        >
                          {flexRender(cell.column.columnDef.cell, cell.getContext())}
                        </td>
                      )
                    })}
                  </tr>
                )
              })}
        </tbody>
      </table>

      {isPaginated && (
        <div className="mt-2 flex w-full">
          <div className="btn-group">
            <button type="button" disabled={!table.getCanPreviousPage()} className="btn" onClick={table.previousPage}>
              «
            </button>
            <button className="btn">{table.getState().pagination.pageIndex + 1}</button>
            <button type="button" disabled={!table.getCanNextPage()} className="btn" onClick={table.nextPage}>
              »
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Table
