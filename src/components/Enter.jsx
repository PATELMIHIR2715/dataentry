function Enter({ arr }) {
  return (
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          {arr.map((i) => (
            <tr>
              <th scope="row">{i.srno}</th>
              <td>{i.name}</td>
              <td>{i.grantetaken}</td>
              <td>{i.grantamount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default Enter;
