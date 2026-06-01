interface Column<T> {
  key: keyof T;
  header: string;
}

interface DataTableProps<T> {
  datos: T[];
  columnas: Column<T>[];
}

function DataTable<T>({
  datos,
  columnas,
}: DataTableProps<T>) {
  return (
    <table border={1}>
      <thead>
        <tr>
          {columnas.map((columna) => (
            <th key={String(columna.key)}>
              {columna.header}
            </th>
          ))}
        </tr>
      </thead>

      <tbody>
        {datos.map((fila, index) => (
          <tr key={index}>
            {columnas.map((columna) => (
              <td key={String(columna.key)}>
                {String(fila[columna.key])}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default DataTable;