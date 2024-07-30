import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
function Form() {
  const [fees, feesstate] = useState();
  const [rent, rentstate] = useState();
  const [suchan, suchanstate] = useState();
  const [count, countstate] = useState(0);
  return (
    <div className="form ">
      <center>
        <h1>ગ્રામ ગ્રંથાલયનો નિરીક્ષણ અહેવલ સાને : 2024-2025</h1>
      </center>
      <div className="row mb-3 col-sm-13 align-items-center">
        <div class=" col-2">
          <label for="inputPassword" class="col-sm-10 col-form-label">
            ગ્રંથાલયનું નામ :
          </label>
        </div>
        <div class="col-10">
          <input type="text" class="form-control" id="inputPassword" />
        </div>
      </div>
      <div class="row mb-3 col-sm-13 align-items-center">
        <div class="col-1">
          <label for="inputPassword6" class="col-form-label">
            ગામ :
          </label>
        </div>
        <div class="col">
          <select id="inputState" class="form-select">
            <option selected>પસંદ કરો</option>
            <option>ગામ:1</option>
            <option>ગામ:2</option>
            <option>ગામ:3</option>
          </select>
        </div>
        <div class="col-1">
          <label for="inputPassword6" class="col-form-label">
            પિન :
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
            તાલુકો :
          </label>
        </div>
        <div class="col">
          <select id="inputState" class="form-select">
            <option selected>પસંદ કરો</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
        </div>
        <div class="col-1">
          <label for="inputPassword6" class="col-form-label">
            જીલો :
          </label>
        </div>
        <div class="col">
          <select id="inputState" class="form-select">
            <option selected>પસંદ કરો</option>
            <option>upera</option>
            <option>sundhiya</option>
            <option>jaska</option>
          </select>
        </div>
      </div>
      <div class="row mb-3 col-sm-13 align-items-center">
        <div class="col">
          <label for="inputPassword6" class="col-form-label col-sm-10">
            સ્થાપના તારીખ:
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
            વસ્તી : પુરશો
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
            સ્ત્રી
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
            કુલ
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
            ભણેલાઓ ની સાંખ્ય :
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
            સભ્ય સંખ્યા : પુરુષ
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
            સ્ત્રી
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
            બાળકો
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
            કુલ
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
            સબ્યો પાસેથી લવાજમ લેવામા આવે છે? :
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
                વાર્ષિક :
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
        <div class="col">
          <label for="inputPassword6" class="col-form-label col-10 highlight">
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
      <div class="row mb-3 col-13 align-items-center">
        <div class="col-13">
          <label for="inputPassword6" class="col-form-label col-10 highlight">
            granthalayma avela dead stockni vigato :
          </label>
        </div>
      </div>
      <div class="row mb-3 col-13 align-items-center">
        <div class="col-3">
          <label for="inputPassword6" class="col-form-label  ">
            (1) varsh darmiyan esyu thayela total books :
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
            (2) vartman patro tatha samayiko vanchanarni dainik sareras sankhya
            :
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
        <div class="col-7">
          <label for="inputPassword6" class="col-form-label col-10 highlight">
            gat varsh na aavak- kharchna hishabo :
          </label>
        </div>
        <div class="col">
          <label for="inputPassword6" class="col-form-label  ">
            <button
              type="button"
              onClick={() => {
                countstate(count + 1);
              }}
              class="btn btn-primary"
            >
              Add
            </button>
          </label>
        </div>
      </div>
      <ul className="list-group">
        {Array.apply(null, { length: count }).map((e, i) => (
          <span className="busterCards" key={i}>
            <div class="row mb-3 col-13 align-items-center">
              <div class="col-2 align-items-center">{i} name of newpaper :</div>

              <div class="col-5">
                <input
                  type="text"
                  id="inputPassword6"
                  class="form-control"
                  aria-describedby="passwordHelpInline"
                />
              </div>
            </div>
          </span>
        ))}
      </ul>
      <div class="row mb-3 col-13 align-items-center">
        <div class="col">
          <label for="inputPassword6" class="col-form-label col-10 highlight">
            granthalayma nicheni daftar nibhavvama ave che :
          </label>
        </div>
      </div>
      <div class="row mb-3 col-15 align-items-center">
        <div class="col">
          <div class="form-check">
            <label class="form-check-label" for="defaultCheck1">
              parigrahan patrak
            </label>
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="defaultCheck1"
            />
          </div>
        </div>
        <div class="col">
          <div class="form-check">
            <label class="form-check-label" for="defaultCheck1">
              sabhya ragister
            </label>
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="defaultCheck1"
            />
          </div>
        </div>
        <div class="col">
          <div class="form-check">
            <label class="form-check-label" for="defaultCheck1">
              hajari patrak
            </label>
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="defaultCheck1"
            />
          </div>
        </div>
      </div>
      <div class="row mb-3 col-15 align-items-center">
        <div class="col">
          <div class="form-check">
            <label class="form-check-label" for="defaultCheck1">
              deadstock ragister
            </label>
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="defaultCheck1"
            />
          </div>
        </div>
        <div class="col">
          <div class="form-check">
            <label class="form-check-label" for="defaultCheck1">
              varshik nivedan
            </label>
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="defaultCheck1"
            />
          </div>
        </div>
        <div class="col">
          <div class="form-check">
            <label class="form-check-label" for="defaultCheck1">
              pavati book
            </label>
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="defaultCheck1"
            />
          </div>
        </div>
      </div>
      <div class="row mb-3 col-15 align-items-center">
        <div class="col">
          <div class="form-check">
            <label class="form-check-label" for="defaultCheck1">
              vauchar fail
            </label>
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="defaultCheck1"
            />
          </div>
        </div>
        <div class="col">
          <div class="form-check">
            <label class="form-check-label" for="defaultCheck1">
              rojmel
            </label>
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="defaultCheck1"
            />
          </div>
        </div>
        <div class="col">
          <div class="form-check">
            <label class="form-check-label" for="defaultCheck1">
              tharav book
            </label>
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="defaultCheck1"
            />
          </div>
        </div>
      </div>
      <div class="row mb-3 col-13 align-items-center">
        <div class=" align-items-center">
          <div class="form-check ">
            <label class="form-check-label" for="defaultCheck1">
              eshyu ragister
            </label>
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="defaultCheck1"
            />
          </div>
        </div>
      </div>
      <div class="row mb-3 col-sm-13 align-items-center">
        <div class="col-4">
          <label for="inputPassword6" class="col-form-label ">
            nirikshake harela suchanonu palan thay che?
          </label>
        </div>

        <div class="col-2">
          <select
            class="form-select"
            aria-label="Default select example"
            onChange={(event) => {
              suchanstate(event.target.value);
            }}
          >
            <option selected>Select</option>
            <option value="ha">Ha</option>
            <option value="na">Na</option>
          </select>
        </div>
      </div>
      {suchan === "ha" && (
        <div class="row mb-3 col-sm-13 align-items-center">
          <div class="col-4">
            <label for="inputPassword6" class="col-form-label ">
              ketla anthe :
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
      )}
      <div class="row mb-3 col-sm-13 align-items-center">
        <div class="col-4">
          <label for="inputPassword6" class="col-form-label ">
            nirikshake harela suchanonu palan thay che?
          </label>
        </div>

        <div class="col-2">
          <select
            class="form-select"
            aria-label="Default select example"
            onChange={(event) => {
              suchanstate(event.target.value);
            }}
          >
            <option selected>Select</option>
            <option value="ha">Ha</option>
            <option value="na">Na</option>
          </select>
        </div>
      </div>
      <div class="row mb-3 col-sm-13 align-items-center">
        <div class="col-4">
          <label for="inputPassword6" class="col-form-label ">
            gat varshe maneli sarkari anudanni rakam :
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
      </div>
      <div class="row mb-3 col-sm-13 align-items-center">
        <div class="col">
          <label for="inputPassword6" class="col-form-label ">
            sarkari anudanni ganatri mateni gatvarshani kharchni vigat :
          </label>
        </div>
      </div>
      <center>
        <div class="row mb-3 col-sm-10 align-items-center">
          <div class="col">
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">kram</th>
                  <th scope="col">vigat</th>
                  <th scope="col">karel kharch</th>
                  <th scope="col">manya kharch</th>
                  <th scope="col">visesh nodh</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>vanchan samgri namuno : k(b)</td>
                  <td>
                    <input
                      type="number"
                      id="inputPassword6"
                      class="form-control"
                      aria-describedby="passwordHelpInline"
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      id="inputPassword6"
                      class="form-control"
                      aria-describedby="passwordHelpInline"
                    />
                  </td>
                  <td className="th">
                    upar kolap : 24ma darshavel rakamna 50% rakamno kharch
                    vanchan samagri mate farjiyat che
                  </td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>karmachari pagar namuno : k(b)</td>
                  <td>
                    <input
                      type="number"
                      id="inputPassword6"
                      class="form-control"
                      aria-describedby="passwordHelpInline"
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      id="inputPassword6"
                      class="form-control"
                      aria-describedby="passwordHelpInline"
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      id="inputPassword6"
                      class="form-control"
                      aria-describedby="passwordHelpInline"
                    />
                  </td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>furnichar ane repairing : k(k)</td>
                  <td>
                    <input
                      type="number"
                      id="inputPassword6"
                      class="form-control"
                      aria-describedby="passwordHelpInline"
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      id="inputPassword6"
                      class="form-control"
                      aria-describedby="passwordHelpInline"
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      id="inputPassword6"
                      class="form-control"
                      aria-describedby="passwordHelpInline"
                    />
                  </td>
                </tr>
                <tr>
                  <th scope="row">4</th>
                  <td>makan bhadu parachuran namuno : k(d)</td>
                  <td>
                    <input
                      type="number"
                      id="inputPassword6"
                      class="form-control"
                      aria-describedby="passwordHelpInline"
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      id="inputPassword6"
                      class="form-control"
                      aria-describedby="passwordHelpInline"
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      id="inputPassword6"
                      class="form-control"
                      aria-describedby="passwordHelpInline"
                    />
                  </td>
                </tr>
                <tr>
                  <th scope="row">5</th>
                  <td>total</td>
                  <td>
                    <input
                      type="number"
                      id="inputPassword6"
                      class="form-control"
                      aria-describedby="passwordHelpInline"
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      id="inputPassword6"
                      class="form-control"
                      aria-describedby="passwordHelpInline"
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      id="inputPassword6"
                      class="form-control"
                      aria-describedby="passwordHelpInline"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </center>
      <hr />
      <center>
        <h1>namoono : k</h1>
        <br />
        <p>
          granthalayne anudanna niyam : 6 na parishisht : k na aashn 13 ane 14
          ni mahitinu vivaran patrak
        </p>
        <br />
        <p>(gat varshna aavak tatha kharchnu patrak)</p>
      </center>
      <div class="row mb-3 col-sm-13 align-items-center">
        <div class="col">
          <table class="table table-bordered">
            <thead>
              <tr>
                <th scope="col">avak</th>
                <th scope="col">kharch</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div class="row mb-3 col-sm-13 align-items-center">
                    <div class="col">
                      <label for="inputPassword6" class="col-form-label ">
                        1. lavajam :
                      </label>
                    </div>
                    <div class="col">
                      <input
                        type="text"
                        id="inputPassword6"
                        class="form-control"
                        aria-describedby="passwordHelpInline"
                      />
                    </div>
                  </div>
                  <div class="row mb-3 col-sm-13 align-items-center">
                    <div class="col">
                      <label for="inputPassword6" class="col-form-label ">
                        2. bhandolnu vyaj :
                      </label>
                    </div>
                    <div class="col">
                      <input
                        type="text"
                        id="inputPassword6"
                        class="form-control"
                        aria-describedby="passwordHelpInline"
                      />
                    </div>
                  </div>
                  <div class="row mb-3 col-sm-13 align-items-center">
                    <div class="col">
                      <label for="inputPassword6" class="col-form-label ">
                        3. bhadani upaj :
                      </label>
                    </div>
                    <div class="col">
                      <input
                        type="text"
                        id="inputPassword6"
                        class="form-control"
                        aria-describedby="passwordHelpInline"
                      />
                    </div>
                  </div>
                  <div class="row mb-3 col-sm-13 align-items-center">
                    <div class="col">
                      <label for="inputPassword6" class="col-form-label ">
                        4. pasti vechan :
                      </label>
                    </div>
                    <div class="col">
                      <input
                        type="text"
                        id="inputPassword6"
                        class="form-control"
                        aria-describedby="passwordHelpInline"
                      />
                    </div>
                  </div>
                  <div class="row mb-3 col-sm-13 align-items-center">
                    <div class="col">
                      <label for="inputPassword6" class="col-form-label ">
                        5. sarkari anudan :
                      </label>
                    </div>
                    <div class="col">
                      <input
                        type="text"
                        id="inputPassword6"
                        class="form-control"
                        aria-describedby="passwordHelpInline"
                      />
                    </div>
                  </div>
                  <div class="row mb-3 col-sm-13 align-items-center">
                    <div class="col">
                      <label for="inputPassword6" class="col-form-label ">
                        6. panchayatni madad :
                      </label>
                    </div>
                    <div class="col">
                      <input
                        type="text"
                        id="inputPassword6"
                        class="form-control"
                        aria-describedby="passwordHelpInline"
                      />
                    </div>
                  </div>
                  <div class="row mb-3 col-sm-13 align-items-center">
                    <div class="col">
                      <label for="inputPassword6" class="col-form-label tab">
                        (1) jilla :
                      </label>
                    </div>
                    <div class="col">
                      <input
                        type="text"
                        id="inputPassword6"
                        class="form-control"
                        aria-describedby="passwordHelpInline"
                      />
                    </div>
                  </div>
                  <div class="row mb-3 col-sm-13 align-items-center">
                    <div class="col">
                      <label for="inputPassword6" class="col-form-label tab">
                        (2) Taluko:
                      </label>
                    </div>
                    <div class="col">
                      <input
                        type="text"
                        id="inputPassword6"
                        class="form-control"
                        aria-describedby="passwordHelpInline"
                      />
                    </div>
                  </div>
                  <div class="row mb-3 col-sm-13 align-items-center">
                    <div class="col">
                      <label for="inputPassword6" class="col-form-label tab">
                        (3) gram :
                      </label>
                    </div>
                    <div class="col">
                      <input
                        type="text"
                        id="inputPassword6"
                        class="form-control"
                        aria-describedby="passwordHelpInline"
                      />
                    </div>
                  </div>
                  <div class="row mb-3 col-sm-13 align-items-center">
                    <div class="col">
                      <label for="inputPassword6" class="col-form-label ">
                        7. lok madad :
                      </label>
                    </div>
                    <div class="col">
                      <input
                        type="text"
                        id="inputPassword6"
                        class="form-control"
                        aria-describedby="passwordHelpInline"
                      />
                    </div>
                  </div>
                  <div class="row mb-3 col-sm-13 align-items-center">
                    <div class="col">
                      <label for="inputPassword6" class="col-form-label ">
                        8. anya avak :
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
                  <div class="row mb-3 col-sm-13 align-items-center">
                    <div class="col">
                      <label for="inputPassword6" class="col-form-label ">
                        total aavak:
                      </label>
                    </div>
                    <div class="col">
                      <input
                        type="text"
                        id="inputPassword6"
                        class="form-control"
                        aria-describedby="passwordHelpInline"
                      />
                    </div>
                  </div>
                  <div class="row mb-3 col-sm-13 align-items-center">
                    <div class="col">
                      <label for="inputPassword6" class="col-form-label ">
                        9. varshni saruatma hath uparni silak :
                      </label>
                    </div>
                    <div class="col">
                      <input
                        type="text"
                        id="inputPassword6"
                        class="form-control"
                        aria-describedby="passwordHelpInline"
                      />
                    </div>
                  </div>
                </td>

                <td>
                  <div class="row mb-3 col-sm-13 align-items-center">
                    <div class="col">
                      <label for="inputPassword6" class="col-form-label ">
                        a. vanchan samagri :
                      </label>
                    </div>
                  </div>
                  <div class="row mb-3 tab col-sm-13 align-items-center">
                    <div class="col">
                      <label for="inputPassword6" class="col-form-label ">
                        1. pustak kharidi :
                      </label>
                    </div>
                    <div class="col">
                      <input
                        type="text"
                        id="inputPassword6"
                        class="form-control"
                        aria-describedby="passwordHelpInline"
                      />
                    </div>
                  </div>
                  <div class="row mb-3 tab col-sm-13 align-items-center">
                    <div class="col">
                      <label for="inputPassword6" class="col-form-label ">
                        2. vartman patro,samyiko :
                      </label>
                    </div>
                    <div class="col">
                      <input
                        type="text"
                        id="inputPassword6"
                        class="form-control"
                        aria-describedby="passwordHelpInline"
                      />
                    </div>
                  </div>
                  <div class="row mb-3 tab col-sm-13 align-items-center">
                    <div class="col">
                      <label for="inputPassword6" class="col-form-label ">
                        3. pustak bandhani :
                      </label>
                    </div>
                    <div class="col">
                      <input
                        type="text"
                        id="inputPassword6"
                        class="form-control"
                        aria-describedby="passwordHelpInline"
                      />
                    </div>
                  </div>
                  <div class="row mb-3 tab2 col-sm-13 align-items-center">
                    <div class=" col">
                      <label for="inputPassword6" class="tab2 col-form-label ">
                        total :
                      </label>
                    </div>
                    <div class="col">
                      <input
                        type="text"
                        id="inputPassword6"
                        class="form-control"
                        aria-describedby="passwordHelpInline"
                      />
                    </div>
                  </div>

                  <div class="row mb-3 col-sm-13 align-items-center">
                    <div class="col">
                      <label for="inputPassword6" class="col-form-label ">
                        b. pagar kharch :
                      </label>
                    </div>
                  </div>
                  <div class="row mb-3 tab col-sm-13 align-items-center">
                    <div class="col">
                      <label for="inputPassword6" class="col-form-label ">
                        1. pagar :
                      </label>
                    </div>
                    <div class="col">
                      <input
                        type="text"
                        id="inputPassword6"
                        class="form-control"
                        aria-describedby="passwordHelpInline"
                      />
                    </div>
                  </div>
                  <div class="row mb-3 tab col-sm-13 align-items-center">
                    <div class="col">
                      <label for="inputPassword6" class="col-form-label ">
                        2. monghvari :
                      </label>
                    </div>
                    <div class="col">
                      <input
                        type="text"
                        id="inputPassword6"
                        class="form-control"
                        aria-describedby="passwordHelpInline"
                      />
                    </div>
                  </div>
                  <div class="row mb-3 tab col-sm-13 align-items-center">
                    <div class="col">
                      <label for="inputPassword6" class="col-form-label ">
                        3. anya :
                      </label>
                    </div>
                    <div class="col">
                      <input
                        type="text"
                        id="inputPassword6"
                        class="form-control"
                        aria-describedby="passwordHelpInline"
                      />
                    </div>
                  </div>
                  <div class="row mb-3 tab2 col-sm-13 align-items-center">
                    <div class=" col">
                      <label for="inputPassword6" class="tab2 col-form-label ">
                        total :
                      </label>
                    </div>
                    <div class="col">
                      <input
                        type="text"
                        id="inputPassword6"
                        class="form-control"
                        aria-describedby="passwordHelpInline"
                      />
                    </div>
                  </div>

                  <div class="row mb-3 col-sm-13 align-items-center">
                    <div class="col">
                      <label for="inputPassword6" class="col-form-label ">
                        k. farnichar kharch :
                      </label>
                    </div>
                  </div>
                  <div class="row mb-3 tab col-sm-13 align-items-center">
                    <div class="col">
                      <label for="inputPassword6" class="col-form-label ">
                        1. furnichar :
                      </label>
                    </div>
                    <div class="col">
                      <input
                        type="text"
                        id="inputPassword6"
                        class="form-control"
                        aria-describedby="passwordHelpInline"
                      />
                    </div>
                  </div>
                  <div class="row mb-3 tab col-sm-13 align-items-center">
                    <div class="col">
                      <label for="inputPassword6" class="col-form-label ">
                        2. farnichar maramat :
                      </label>
                    </div>
                    <div class="col">
                      <input
                        type="text"
                        id="inputPassword6"
                        class="form-control"
                        aria-describedby="passwordHelpInline"
                      />
                    </div>
                  </div>
                  <div class="row mb-3 tab col-sm-13 align-items-center">
                    <div class="col">
                      <label for="inputPassword6" class="col-form-label ">
                        3. anya sadhan samagri :
                      </label>
                    </div>
                    <div class="col">
                      <input
                        type="text"
                        id="inputPassword6"
                        class="form-control"
                        aria-describedby="passwordHelpInline"
                      />
                    </div>
                  </div>
                  <div class="row mb-3 tab2 col-sm-13 align-items-center">
                    <div class=" col">
                      <label for="inputPassword6" class="tab2 col-form-label ">
                        total :
                      </label>
                    </div>
                    <div class="col">
                      <input
                        type="text"
                        id="inputPassword6"
                        class="form-control"
                        aria-describedby="passwordHelpInline"
                      />
                    </div>
                  </div>

                  <div class="row mb-3 col-sm-13 align-items-center">
                    <div class="col">
                      <label for="inputPassword6" class="col-form-label ">
                        d. makan bhadu tatha parchuran kharch :
                      </label>
                    </div>
                  </div>
                  <div class="row mb-3 tab col-sm-13 align-items-center">
                    <div class="col">
                      <label for="inputPassword6" class="col-form-label ">
                        1. makanbhadu :
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
                  <div class="row mb-3 tab col-sm-13 align-items-center">
                    <div class="col">
                      <label for="inputPassword6" class="col-form-label ">
                        2. makan maramat :
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
                  <div class="row mb-3 tab col-sm-13 align-items-center">
                    <div class="col">
                      <label for="inputPassword6" class="col-form-label ">
                        3. karvera :
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
                  <div class="row mb-3 tab col-sm-13 align-items-center">
                    <div class="col">
                      <label for="inputPassword6" class="col-form-label ">
                        4. stesnori :
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
                  <div class="row mb-3 tab col-sm-13 align-items-center">
                    <div class="col">
                      <label for="inputPassword6" class="col-form-label ">
                        5. tapal kharch :
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
                  <div class="row mb-3 tab col-sm-13 align-items-center">
                    <div class="col">
                      <label for="inputPassword6" class="col-form-label ">
                        6. pravash kharch:
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
                  <div class="row mb-3 tab col-sm-13 align-items-center">
                    <div class="col">
                      <label for="inputPassword6" class="col-form-label ">
                        7. vimanu primium :
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
                  <div class="row mb-3 tab col-sm-13 align-items-center">
                    <div class="col">
                      <label for="inputPassword6" class="col-form-label ">
                        8. vijali kharch :
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
                  <div class="row mb-3 tab col-sm-13 align-items-center">
                    <div class="col">
                      <label for="inputPassword6" class="col-form-label ">
                        9. parchuran kharch :
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
                  <div class="row mb-3 tab2 col-sm-13 align-items-center">
                    <div class=" col">
                      <label for="inputPassword6" class="tab2 col-form-label ">
                        total :
                      </label>
                    </div>
                    <div class="col">
                      <input
                        type="text"
                        id="inputPassword6"
                        class="form-control"
                        aria-describedby="passwordHelpInline"
                      />
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div class="row mb-3 tab2 col-sm-13 align-items-center">
                    <div class=" col">
                      <label for="inputPassword6" class="tab2 col-form-label ">
                        total :
                      </label>
                    </div>
                    <div class="col">
                      <input
                        type="text"
                        id="inputPassword6"
                        class="form-control"
                        aria-describedby="passwordHelpInline"
                      />
                    </div>
                  </div>
                </td>
                <td>
                  <div class="row mb-3 tab2 col-sm-13 align-items-center">
                    <div class=" col">
                      <label for="inputPassword6" class="tab2 col-form-label ">
                        total :
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
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Form;
