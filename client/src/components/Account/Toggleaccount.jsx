import React from 'react'
import { useState,useContext} from 'react'
import { API } from '../../service/api';
import { DataContext } from '../../context/DataProvider';
import { useNavigate } from 'react-router';

const signupInitialVlaue = {
  email:'',
  username:'',
  password:''
}

const loginInitialVlaue = {
  username:'',
  password:''
}


const Toggleaccount = ({ isUserAuthenticated }) => {
           
    const[account,toggleaccount] = useState('login');
    const[signup,setSignup]= useState(signupInitialVlaue);
    const[login,setLogin]= useState(loginInitialVlaue);
    const[error,setError] = useState('');

    const { setAccount } = useContext(DataContext);
    
    const navigate = useNavigate();
     
    const toggle = () => {
        account === 'signup' ? toggleaccount('login') : toggleaccount('signup');
    }

    const onInputChange = (e) => {
      setSignup({...signup, [e.target.name]: e.target.value});
    }


    const onValueChange = (e) => {
      setLogin({...login, [e.target.name]: e.target.value});
    }
    

    const signupUser = async() => {
      let response = await API.userSignup(signup);
      if(response.isSuccess){
      setSignup(signupInitialVlaue);
      toggleaccount('login');
      }else if(response.isFailure){
        setError('Something went wrong please try again!')
      }
  }

  const loginUser = async() => {
    let response = await API.userLogin(login);
    console.log(response);
    if(response.isSuccess){
        sessionStorage.setItem('accessToken', `Bearer ${response.data.accessToken}`);
        sessionStorage.setItem('refreshToken', `Bearer ${response.data.refreshToken}`);
        setAccount({ email: response.data.email, username: response.data.username });
        isUserAuthenticated(true);
        navigate('/');
    }else
    {
      setError('Something went wrong please try again!')
    }
}
    
    
  return (
    <div>
        { account==='login' ? (
        <div>
        <div>
     <section className="h-screen">
  <div className="px-6 h-full text-gray-800">
    <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
      <div className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
        <img
          src="./login.png"
          className="w-3/4 mx-auto sm:my-5"
          alt="Login image"
        />
      </div>
      <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
        <form>
          <div className='text-primary font-bold font-primaryfont text-4xl py-5 '>
            Code Free
          </div>
          
          <div className="mb-6">
            <input
              type="text"
              className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Username"
              onChange={(e) => onValueChange(e)}
              name="username"
              value={login.username}
            />
          </div>

          <div className="mb-6">
            <input
              type="password"
              className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Password"
              onChange={(e) => onValueChange(e)}
              name="password"
              value={login.password}
            />
          </div>
          {error && <div className='pb-4 text-red-600 '>{error}</div>}
          <div className="text-center lg:text-left">
            <button
              type="button"
              className="inline-block px-7 py-3 bg-primary text-primaryfont text-white font-medium text-sm leading-snug  rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              onClick={() => loginUser()}
            >
              Login
            </button>
            <div
            className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"
          >
            <p className="text-center font-semibold mx-4 mb-0">Or</p>
          </div>
            <p className="text-sm font-semibold mt-2 pt-1 mb-0">
              Don't have an account?
                <button
                className="text-primary hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out"
                onClick={() => toggle()}
                > Sign up
                </button>
            </p>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>
    </div>
        </div> ) : (
        <div>
        <div>
     <section className="h-screen">
  <div className="px-6 h-full text-gray-800">
    <div
      className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6"
    >
      <div
        className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0"
      >
        <img
          src="./signin.png"
          className="w-3/4 mx-auto sm:my-5"
          alt="Login image"
        />
      </div>
      <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
        <form>
          <div className='text-primary font-bold font-primaryfont text-4xl py-5 md:mx-auto'>
            Code Free
          </div>
          
          <div className="mb-6">
            <input
              type="text"
              className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              onChange={(e) => onInputChange(e)}
              name='email'
              placeholder="Email address"
            />
          </div>

          <div className="mb-6">
            <input
              type="text"
              className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              onChange={(e) => onInputChange(e)}
              name='username'
              placeholder="Username"
            />
          </div>

          <div className="mb-6">
            <input
              type="password"
              className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              onChange={(e) => onInputChange(e)}
              name='password'
              placeholder="Password"
            />
          </div>
          {error && <div className='pb-4 text-red-600 '>{error}</div>}
          <div className="text-center lg:text-left">
            <button
              type="button"
              className="inline-block px-7 py-3 bg-primary text-primaryfont text-white font-medium text-sm leading-snug rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              onClick={() => signupUser()}
            >
             Sign In
            </button>
             
            <div
            className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"
          >

            <p className="text-center font-semibold mx-4 mb-0">Or</p>
          </div>
            <p className="text-sm font-semibold mt-2 pt-1 mb-0">
              Already have an account?
              <button
                href="#!"
                className="text-primary hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out"
                onClick={() => toggle()}
                > Log in
                </button>
            </p>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>
    </div>
        </div>
        )
        }
    </div>
  )
}

export default Toggleaccount