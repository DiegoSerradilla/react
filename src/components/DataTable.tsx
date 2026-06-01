interface DataTableProps<T> {
  datos: T[];
}

function DataTable<T>({ datos }: DataTableProps<T>) {
  return (
    <div>
      <pre>{JSON.stringify(datos, null, 2)}</pre>
    </div>
  );
}

export default DataTable;