import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
function Form() {
  const [fees, feesstate] = useState();
  const [rent, rentstate] = useState();
  return (
    <div className="form ">
      <center>
        <h1>Form</h1>
      </center>
      <div className="row mb-3 col-sm-13 align-items-center">
        <div class=" col-2">
          <label for="inputPassword" class="col-sm-10 col-form-label">
            Name of Granthalay :
          </label>
        </div>
        <div class="col-10">
          <input type="text" class="form-control" id="inputPassword" />
        </div>
      </div>

      <div class="row mb-3 col-sm-13 align-items-center">
        <div class="col-1">
          <label for="inputPassword6" class="col-form-label">
            Gam :
          </label>
        </div>
        <div class="col">
          <select id="inputState" class="form-select">
            <option selected>Select</option>
            <option>upera</option>
            <option>sundhiya</option>
            <option>jaska</option>
          </select>
        </div>
        <div class="col-1">
          <label for="inputPassword6" class="col-form-label">
            Pin :
          </label>
        </div>
        <div class="col">
          <input
            type="password"
            id="inputPassword6"
            class="form-control"
            aria-describedby="passwordHelpInline"
          />
        </div>
        <div class="col-1">
          <label for="inputPassword6" class="col-form-label">
            Taluko :
          </label>
        </div>
        <div class="col">
          <select id="inputState" class="form-select">
            <option selected>Select</option>
            <option>upera</option>
            <option>sundhiya</option>
            <option>jaska</option>
          </select>
        </div>
        <div class="col-1">
          <label for="inputPassword6" class="col-form-label">
            Jillo :
          </label>
        </div>
        <div class="col">
          <select id="inputState" class="form-select">
            <option selected>Select</option>
            <option>upera</option>
            <option>sundhiya</option>
            <option>jaska</option>
          </select>
        </div>
      </div>

      <div class="row mb-3 col-sm-13 align-items-center">
        <div class="col">
          <label for="inputPassword6" class="col-form-label col-sm-10">
            sthapna tarikh:
          </label>
        </div>
        <div class="col">
          <input
            type="date"
            id="inputPassword6"
            class="form-control"
            aria-describedby="passwordHelpInline"
          />
        </div>
        <div class="col-1">
          <label for="inputPassword6" class="col-form-label ">
            people : male
          </label>
        </div>
        <div class="col">
          <input
            type="number"
            id="inputPassword6"
            class="form-control"
            aria-describedby="passwordHelpInline"
          />
        </div>
        <div class="col-1">
          <label for="inputPassword6" class="col-form-label ">
            female
          </label>
        </div>
        <div class="col">
          <input
            type="number"
            id="inputPassword6"
            class="form-control"
            aria-describedby="passwordHelpInline"
          />
        </div>
        <div class="col-1">
          <label for="inputPassword6" class="col-form-label ">
            total
          </label>
        </div>
        <div class="col">
          <input
            type="number"
            id="inputPassword6"
            class="form-control"
            aria-describedby="passwordHelpInline"
          />
        </div>
      </div>
      <div class="row mb-1 col-sm-13 align-items-center">
        <div class="col-sm-2">
          <label for="inputPassword6" class="col-form-label ">
            bhanelao ni sankhya :
          </label>
        </div>
        <div class="col">
          <input
            type="number"
            id="inputPassword6"
            class="form-control"
            aria-describedby="passwordHelpInline"
          />
        </div>
        <div class="col">
          <label for="inputPassword6" class="col-form-label ">
            sabhya sankhya : male
          </label>
        </div>
        <div class="col">
          <input
            type="number"
            id="inputPassword6"
            class="form-control"
            aria-describedby="passwordHelpInline"
          />
        </div>
        <div class="col-1">
          <label for="inputPassword6" class="col-form-label ">
            female
          </label>
        </div>
        <div class="col">
          <input
            type="number"
            id="inputPassword6"
            class="form-control"
            aria-describedby="passwordHelpInline"
          />
        </div>
        <div class="col-1">
          <label for="inputPassword6" class="col-form-label ">
            child
          </label>
        </div>
        <div class="col">
          <input
            type="number"
            id="inputPassword6"
            class="form-control"
            aria-describedby="passwordHelpInline"
          />
        </div>
        <div class="col-1">
          <label for="inputPassword6" class="col-form-label ">
            total
          </label>
        </div>
        <div
          class="col
        "
        >
          <input
            type="number"
            id="inputPassword6"
            class="form-control"
            aria-describedby="passwordHelpInline"
          />
        </div>
      </div>
      <div class="row mb-3 col-sm-13 align-items-center">
        <div class="col-sm-3">
          <label for="inputPassword6" class="col-form-label ">
            sabhyo pasethi lavajam levama ave che? :
          </label>
        </div>

        <div class="col-2">
          <select
            class="form-select"
            aria-label="Default select example"
            onChange={(event) => {
              feesstate(event.target.value);
            }}
          >
            <option selected>Select</option>
            <option value="ha">Ha</option>
            <option value="na">Na</option>
          </select>
        </div>
        {fees === "ha" && (
          <>
            <div class="col-2">
              <label for="inputPassword6" class="col-form-label ">
                howmuch per anm :
              </label>
            </div>
            <div class="col-2">
              <input
                type="number"
                id="inputPassword6"
                class="form-control"
                aria-describedby="passwordHelpInline"
              />
            </div>
          </>
        )}
      </div>
      <div class="row mb-3 col-sm-13 align-items-center">
        <div class="col-2">
          <label for="inputPassword6" class="col-form-label col-sm-10">
            sthapna tarikh:
          </label>
        </div>
        <div class="col-2">
          <input
            type="date"
            id="inputPassword6"
            class="form-control"
            aria-describedby="passwordHelpInline"
          />
        </div>
        <div class="col-2">
          <label for="inputPassword6" class="col-form-label col-sm-10">
            sthapna tarikh:
          </label>
        </div>
        <div class="col-2">
          <input
            type="date"
            id="inputPassword6"
            class="form-control"
            aria-describedby="passwordHelpInline"
          />
        </div>
      </div>
      <div class="row mb-3 col-sm-13 align-items-center">
        <div class="col-3">
          <label for="inputPassword6" class="col-form-label col-sm-10">
            active hours : book aap-le vibhag :
          </label>
        </div>
        <div class="col-2">
          <input
            type="text"
            id="inputPassword6"
            class="form-control"
            aria-describedby="passwordHelpInline"
          />
        </div>
        <div class="col-2">
          <label for="inputPassword6" class="col-form-label col-sm-10">
            vanchanalay :
          </label>
        </div>
        <div class="col-2">
          <input
            type="text"
            id="inputPassword6"
            class="form-control"
            aria-describedby="passwordHelpInline"
          />
        </div>
      </div>
      <div class="row mb-3 col-sm-13 align-items-center">
        <div class="col-3">
          <label for="inputPassword6" class="col-form-label col-sm-10">
            granthalaynu vyavasthatantra :
          </label>
        </div>
        <div class="col-2">
          <select
            class="form-select"
            aria-label="Default select example"
            onChange={(event) => {
              state(event.target.value);
            }}
          >
            <option selected>Select</option>
            <option value="ha">panchayat</option>
            <option value="na">Mandan</option>
            <option value="na">school</option>
            <option value="na">other</option>
          </select>
        </div>
        <div class="col-4">
          <label for="inputPassword6" class="col-form-label col-sm-10">
            if library is registerd then register number :
          </label>
        </div>
        <div class="col-2">
          <input
            type="text"
            id="inputPassword6"
            class="form-control"
            aria-describedby="passwordHelpInline"
          />
        </div>
      </div>
      <div className="row mb-3 col-sm-13 align-items-center">
        <div class=" col-3">
          <label for="inputPassword" class="col-sm-10 col-form-label">
            Name of who responsible for mail :
          </label>
        </div>
        <div class="col-9">
          <input type="text" class="form-control" id="inputPassword" />
        </div>
      </div>
      <div className="row mb-3 col-sm-13 align-items-center">
        <div class=" col-3">
          <label
            for="exampleFormControlTextarea1"
            class="col-sm-10 col-form-label"
          >
            position and adress :
          </label>
        </div>
        <div class="col-9">
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="5"
          ></textarea>
        </div>
      </div>
      <div className="row mb-3 col-sm-13 align-items-center">
        <div class=" col-3 mb-3">
          <label
            for="exampleFormControlTextarea1"
            class="col-sm-10 col-form-label"
          >
            granthapalanu name :
          </label>
        </div>
        <div class="col-9">
          <input
            type="text"
            id="inputPassword6"
            class="form-control"
            aria-describedby="passwordHelpInline"
          />
        </div>
        <div class=" col-3 mb-3">
          <label
            for="exampleFormControlTextarea1"
            class="col-sm-10 col-form-label"
          >
            granthapalanu adress :
          </label>
        </div>
        <div class="col-9">
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
        <div class=" col-3 mb-3">
          <label
            for="exampleFormControlTextarea1"
            class="col-sm-10 col-form-label"
          >
            granthapalanu laykat :
          </label>
        </div>
        <div class="col-3">
          <select class="form-select" aria-label="Default select example">
            <option selected>Select</option>
            <option value="1">Graduated</option>
            <option value="2">Post Graduated</option>
            <option value="2">12th</option>
            <option value="2">other</option>
          </select>
        </div>
        <div class=" col-3 mb-3">
          <label
            for="exampleFormControlTextarea1"
            class="col-sm-10 col-form-label"
          >
            granthapalanu salary :
          </label>
        </div>
        <div class="col-3">
          <input
            type="number"
            id="inputPassword6"
            class="form-control"
            aria-describedby="passwordHelpInline"
          />
        </div>
      </div>
      <div class="row mb-3 col-sm-13 align-items-center">
        <div class="col-3">
          <label for="inputPassword6" class="col-form-label ">
            makan granthalay ni maliki nu che? :
          </label>
        </div>

        <div class="col-2">
          <select
            class="form-select"
            aria-label="Default select example"
            onChange={(event) => {
              rentstate(event.target.value);
            }}
          >
            <option selected>Select</option>
            <option value="ha">Ha</option>
            <option value="na">Na</option>
          </select>
        </div>
        {rent === "ha" && (
          <>
            <div class="col-2">
              <label for="inputPassword6" class="col-form-label ">
                howmuch rent per anm :
              </label>
            </div>
            <div class="col-2">
              <input
                type="number"
                id="inputPassword6"
                class="form-control"
                aria-describedby="passwordHelpInline"
              />
            </div>
          </>
        )}
      </div>
      <div class="row mb-3 col-sm-13 align-items-center">
        <div class="col-3">
          <label for="inputPassword6" class="col-form-label ">
            makan ni vartman sthiti :
          </label>
        </div>
        <div class="col-2">
          <input
            type="text"
            id="inputPassword6"
            class="form-control"
            aria-describedby="passwordHelpInline"
          />
        </div>
        <div class="col-3">
          <label for="inputPassword6" class="col-form-label ">
            hava,ujas, ane biji suvidha che :
          </label>
        </div>
        <div class="col-2">
          <select
            class="form-select"
            aria-label="Default select example"
            onChange={(event) => {}}
          >
            <option selected>Select</option>
            <option value="ha">Ha</option>
            <option value="na">Na</option>
          </select>
        </div>
      </div>
      <div class="row mb-3 col-sm-13 align-items-center">
        <div class="col-5">
          <label for="inputPassword6" class="col-form-label ">
            granthalay, darek mate koipan bhedbhav vagr khule che? :
          </label>
        </div>
        <div class="col-2">
          <select
            class="form-select"
            aria-label="Default select example"
            onChange={(event) => {}}
          >
            <option selected>Select</option>
            <option value="ha">Ha</option>
            <option value="na">Na</option>
          </select>
        </div>
      </div>
      <div class="row mb-3 col-13 align-items-center">
        <div class="col-13">
          <label for="inputPassword6" class="col-form-label col-10">
            gat varsh na aavak- kharchna hishabo :
          </label>
        </div>
      </div>
      <div class="row mb-3 col-13 align-items-center">
        <div class="col-3">
          <label for="inputPassword6" class="col-form-label  ">
            (1) gat varshna ante books ni snkhya :
          </label>
        </div>
        <div class="col-3">
          <input
            type="text"
            id="inputPassword6"
            class="form-control"
            aria-describedby="passwordHelpInline"
          />
        </div>
        <div class="col-3">
          <label for="inputPassword6" class="col-form-label  ">
            (2) aa varshna umerayeli books ni snkhya :
          </label>
        </div>
        <div class="col-3">
          <input
            type="text"
            id="inputPassword6"
            class="form-control"
            aria-describedby="passwordHelpInline"
          />
        </div>
      </div>
      <div class="row mb-3 col-13 align-items-center">
        <div class="col-3">
          <label for="inputPassword6" class="col-form-label  ">
            (3) aa varse kami thayel books ni snkhya :
          </label>
        </div>
        <div class="col-3">
          <input
            type="text"
            id="inputPassword6"
            class="form-control"
            aria-describedby="passwordHelpInline"
          />
        </div>
        <div class="col-3">
          <label for="inputPassword6" class="col-form-label  ">
            (4) varshna ante total books ni snkhya :
          </label>
        </div>
        <div class="col-3">
          <input
            type="text"
            id="inputPassword6"
            class="form-control"
            aria-describedby="passwordHelpInline"
          />
        </div>
      </div>
    </div>
  );
}

export default Form;
