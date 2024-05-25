const Contact = () => {
  return (
    <div className="md:w-8/12 w-11/12  mx-auto mb-32">
      <h1 className="text-center font-bold text-4xl mb-5">Contact us</h1>
      <div>
        <form action="">
          <div className="w-full md:flex justify-between gap-5 py-10">
            <div className="md:w-1/2 ">
              <label htmlFor="name">Name</label>
              <input
                className="block bg-transparent w-full p-2 text-xl border-b-2 outline-none border-purple-700"
                type="text"
                name="name"
                id="name"
              />
            </div>
            <div className="md:w-1/2">
              <label htmlFor="email">Email </label>
              <input
                className="block bg-transparent w-full p-2 text-xl border-b-2 outline-none border-purple-700"
                type="email"
                name="email"
                id="email"
              />
            </div>
          </div>
          <div>
            <label htmlFor="message">Message </label>
            <textarea
              className="w-full block bg-transparent outline-none border-b-2 border-purple-700"
              name="message"
              id="message"
              rows={6}
            ></textarea>
          </div>
          <div>
            <button
              className="bg-[#3b3632] text-white px-8 py-3 uppercase rounded-full mt-6 tracking-widest mb-10"
              type="submit"
            >
              Send
            </button>
          </div>
        </form>
      </div>
      <span className="mt-10">
        This site is protected by reCAPTCHA and the Google Privacy Policy and
        Terms of Service apply.
      </span>
    </div>
  );
};

export default Contact;
