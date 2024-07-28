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
        <div class="form-check form-check-inline">
          <label class="form-check-label">grant taken?</label>
          <input
            class="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio1"
            value="option1"
          />
          <label class="form-check-label" for="inlineRadio1">
            Yes
          </label>
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio2"
            value="option2"
          />
          <label class="form-check-label" for="inlineRadio2">
            No
          </label>
        </div>
        <br />
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </center>
  );
}

export default Form;
