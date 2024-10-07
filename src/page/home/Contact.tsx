const Contact = () => {
    return (
        <div className=' rounded-3xl w-11/12  mx-auto mb-14 bg-[#3C3633] p-14 text-white'>
            <h1 className=' font-bold text-4xl mb-5'>Contact With Us</h1>
            <div>
                <form action=''>
                    <div className='w-full md:flex justify-between gap-5 py-10'>
                        <div className='md:w-1/2'>
                            <input
                                className='block bg-transparent w-full p-4 text-xl border rounded-md placeholder:text-white outline-none border-[#ffffff]'
                                type='text'
                                name='name'
                                id='name'
                                placeholder='Name'
                            />
                        </div>
                        <div className='md:w-1/2'>
                            <input
                                className='block bg-transparent w-full p-4 text-xl border rounded-md placeholder:text-white outline-none border-[#ffffff]'
                                type='email'
                                name='email'
                                id='email'
                                placeholder='Email'
                            />
                        </div>
                    </div>
                    <div>
                        <textarea
                            className='block bg-transparent w-full p-4 text-xl border rounded-md placeholder:text-white outline-none border-[#ffffff]'
                            name='message'
                            placeholder="Message"
                            id='message'
                            rows={6}></textarea>
                    </div>
                    <div className="flex justify-end">
                        <button
                            className=' bg-white text-black font-semibold px-8 py-3 rounded-full mt-10 text-right'
                            type='submit'>
                            Send
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;
