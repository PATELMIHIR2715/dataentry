function Enter({ arr }) {
  const ind = 0;
  return (
    <div className="main rounded">
      <table className="table table-bordered table-hover rounded">
        <thead>
          <tr>
            <th scope="col">Sr</th>
            <th scope="col">Name of library</th>
            <th scope="col">Grant Taken</th>
            <th scope="col">amount of grant</th>
            <th scope="col">status</th>
          </tr>
        </thead>
        <tbody>
          {arr.map((i) => (
            <tr>
              <th scope="row">{i.srno}</th>
              <td>{i.name}</td>
              <td>{i.grantetaken}</td>
              <td>{i.grantamount}</td>
              <td>{i.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default Enter;
