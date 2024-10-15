import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const Contact = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = (data: any) => {
        fetch("https://amlaa.vercel.app/contact-us", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        }).then((response) => {
            console.log(response);
            if (response.ok) {
                Swal.fire({
                    icon: "success",
                    title: "Your Message sent successfully",
                    showConfirmButton: false,
                    timer: 1500,
                });
                reset();
            }
        });
        // Here you can send the form data to your server
        console.log(data);
    };
    return (
        <div className=' rounded-3xl w-11/12  mx-auto sm:mb-14 mb-8 bg-[#3C3633] p-5 sm:p-14 text-white'>
            <h1 className=' font-bold text-2xl sm:text-4xl sm:mb-5'>Contact With Us</h1>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='w-full md:flex justify-between gap-5 py-5 sm:py-10'>
                        <div className='md:w-1/2'>
                            <input
                                className='block bg-transparent w-full sm:p-4 p-2 sm:text-xl border rounded-md placeholder:text-white outline-none border-[#ffffff]'
                                type='text'
                                {...register("name", { required: true })}
                                id='name'
                                placeholder='Name*'
                            />
                            {errors.name && (
                                <span className='text-red-500 text-sm'>
                                    This field is required
                                </span>
                            )}
                        </div>
                        <div className='md:w-1/2 mt-5 sm:mt-10 md:mt-0'>
                            <input
                                className='block bg-transparent w-full p-2 sm:p-4 sm:text-xl border rounded-md placeholder:text-white outline-none border-[#ffffff]'
                                type='email'
                                {...register("email", { required: true })}
                                id='email'
                                placeholder='Email*'
                            />
                            {errors.email && (
                                <span className='text-red-500 text-sm'>
                                    This field is required
                                </span>
                            )}
                        </div>
                    </div>
                    <div>
                        <textarea
                            className='block bg-transparent w-full p-2 sm:p-4 sm:text-xl border rounded-md placeholder:text-white outline-none h-[150px] sm:h-auto border-[#ffffff]'
                            {...register("message", { required: true })}
                            placeholder='Message*'
                            id='message'
                            rows={6}></textarea>
                        {errors.message && (
                            <span className='text-red-500 text-sm'>
                                This field is required
                            </span>
                        )}
                    </div>
                    <div className='flex justify-end'>
                        <button
                            className=' bg-white text-black font-semibold px-8 sm:py-3 py-2 rounded-full sm:mt-10 mt-5 text-right'
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
