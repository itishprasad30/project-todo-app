const DisplayTable = () => {
  const tableDataFruits = [
    { id: 1, product: "Apple", quantity: 43, price: 1242 },
    { id: 2, product: "cherry", quantity: 2, price: 12 },
    { id: 3, product: "pinaple", quantity: 5, price: 141 },
    { id: 4, product: "mango", quantity: 98, price: 455 },
    { id: 5, product: "banana", quantity: 12, price: 35 },
    { id: 6, product: "Orange", quantity: 48, price: 457 },
  ];
  return (
    <div className="display-table">
      <table>
        <tr>
          <th>
            <input type="checkbox" />
          </th>
          <th>Product</th>
          <th>Quantity</th>
          <th>Price</th>
        </tr>
        {tableDataFruits.map((data, id) => (
          <tr id={id}>
            <td>
              <input type="checkbox" />
            </td>

            <td>{data.product}</td>
            <td>{data.quantity}</td>
            <td>{data.price}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default DisplayTable;
