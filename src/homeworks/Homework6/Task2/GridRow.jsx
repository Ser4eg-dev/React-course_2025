import { memo } from 'react';

const highlightMatch = (text, query) => {
  if (!query) return text;

  const regex = new RegExp(`(${query})`, 'gi');
  return text.split(regex).map((part, i) =>
    part.toLowerCase() === query.toLowerCase() ? (
      <span key={i} className="bg-yellow-200 font-bold">
        {part}
      </span>
    ) : (
      part
    ),
  );
};

const GridRow = ({ row, query }) => {
  return (
    <tr>
      <td className="border px-2">{row.id}</td>
      <td className="border px-2">
        {highlightMatch(`${row.firstName} ${row.lastName}`, query)}
      </td>
      <td className="border px-2">{row.email}</td>
    </tr>
  );
};

export default memo(GridRow);
