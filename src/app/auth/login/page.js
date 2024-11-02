export default function Login() {
  return (
    <div className="bg-[#080710] h-screen flex items-center justify-center relative">
      <div className="absolute w-80 h-80 bg-gradient-to-r from-[#1845ad] to-[#23a2f6] rounded-full -left-20 -top-20"></div>
      <div className="absolute w-80 h-80 bg-gradient-to-r from-[#ff512f] to-[#f09819] rounded-full -right-20 -bottom-20"></div>
      <form className="bg-white bg-opacity-10 backdrop-blur-md border border-white border-opacity-10 shadow-lg rounded-lg p-10 w-96">
        <h3 className="text-2xl font-medium text-center text-white">
          Login Here
        </h3>
        <label htmlFor="username" className="block mt-8 text-white font-medium">
          Username
        </label>
        <input
          type="text"
          placeholder="Email or Phone"
          id="username"
          className="block w-full h-12 bg-white bg-opacity-7 rounded-md p-2 mt-2 text-black placeholder:text-gray-300 focus:outline-none"
        />
        <label htmlFor="password" className="block mt-4 text-white font-medium">
          Password
        </label>
        <input
          type="password"
          placeholder="Password"
          id="password"
          className="block w-full h-12 bg-white bg-opacity-7 rounded-md p-2 mt-2 text-black placeholder:text-gray-300 focus:outline-none"
        />
        <button
          type="submit"
          className="w-full mt-8 bg-white text-[#080710] py-3 font-semibold rounded-md hover:bg-opacity-80"
        >
          Log In
        </button>
        <div className="flex justify-between mt-6">
          <div className="flex items-center bg-white bg-opacity-27 rounded-md px-3 py-1 hover:bg-opacity-47">
            <i className="fab fa-google mr-2"></i> Google
          </div>
          <div className="flex items-center bg-white bg-opacity-27 rounded-md px-3 py-1 hover:bg-opacity-47">
            <i className="fab fa-facebook mr-2"></i> Facebook
          </div>
        </div>
      </form>
    </div>
  );
}
