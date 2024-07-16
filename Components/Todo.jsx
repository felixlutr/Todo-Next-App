import React from "react";

const Todo = () => {
  return (
    <tr className="text-black border-b dark:border-black">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-black whitespace-nowrap"
      >
        1
      </th>
      <td className="px-6 py-4">Study</td>
      <td className="px-6 py-4">Learn Nextjs !!!</td>
      <td className="px-6 py-4">In Process</td>
      <td className="px-6 py-4 flex gap-1">
        <button className="py-2 px-4 bg-red-500 text-white">Delete</button>
        <button className="py-2 px-4 bg-green-500 text-white">Done</button>
      </td>
    </tr>
  );
};

export default Todo;
