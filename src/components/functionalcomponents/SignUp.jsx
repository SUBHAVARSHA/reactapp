const SignUp = () => {
  return (

      <div>

          <form>
              {/* Email:<input type="email"></input><br></br><br></br> */}
              <br></br><br></br>
              <label for="Username"><b>Username: </b></label>
              <input type="text" placeholder="Enter Username" name="Username" required></input><br></br><br></br>
              <label for="email"><b>Email: </b></label>
              <input type="text" placeholder3="Enter Email" name="email" required></input><br></br><br></br>
              <label for="password"><b>Password:</b></label>
              <input type="password" placeholder="Enter Password" name="password" required></input><br></br><br></br>
              <label for="repeatPassword"><b>Repeat Password: </b></label>
              <input type="password" placeholder="Repeat Password" name="repeatPassword" required></input><br></br><br></br>
              <button type="submit" class="SignUp">SignUp</button>
              <hr></hr>
          </form>
      </div >

  )
}
export default SignUp;