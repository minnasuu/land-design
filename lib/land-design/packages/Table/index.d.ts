import { default as React } from 'react';
import { TableProps, LegacyTableProps } from './props';
declare function Table<T extends Record<string, any> = any>(props: TableProps<T> | LegacyTableProps): React.ReactElement;
export default Table;
