function Form() {
  return (
    <center>
      <form>
        <div class="col-sm-10">
          <label for="exampleInputEmail1" class="col-sm-2 col-form-label">
            Email address
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </label>
        </div>
        <div class="col-sm-10">
          <label for="exampleInputPassword1" class="col-sm-2 col-form-label">
            Password
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
            />
          </label>
        </div>
        <div class="form-check">
          <label class="form-check-label" for="flexRadioDefault1">
            Default radio
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
            />
          </label>
        </div>
        <div class="form-check">
          <label class="form-check-label" for="flexRadioDefault2">
            Default checked radio
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault2"
              checked
            />
          </label>
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </center>
  );
}

export default Form;
