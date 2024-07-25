function Input({ category, handleclick }) {
  let handleonclick = (e) => {
    console.log(e);
  };
  return (
    <div>
      <select
        onChange={(event) => handleonclick(event)}
        class="form-select"
        aria-label="Default select example"
      >
        <option>Select Category</option>
        {category.map((i) => (
          <option
            onChange={(i) => {
              console.log("here");
              handleclick(i);
            }}
            value="1"
            key={i}
          >
            {i}
          </option>
        ))}
      </select>
      <select class="form-select" aria-label="Default select example">
        <option selected>Select library</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </div>
  );
}
export default Input;
