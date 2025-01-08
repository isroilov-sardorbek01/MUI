import React from "react";
import { useForm } from "react-hook-form";

function Masala2() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    const password = watch("password");

    return (
        <div className="mt-[100px]">
            <div className="container">
                <form
                    className="bg-slate-200 w-[600px] mx-auto p-4 rounded-xl flex flex-col gap-[10px]"
                    onSubmit={handleSubmit(onSubmit)}
                    noValidate
                >
                    <div>
                        <h1 className="text-center mb-6 text-[30px] font-bold">
                            Validation FORM
                        </h1>
                        <input
                            className="w-full p-3 rounded-xl border-gray-500 border-[1px] "
                            placeholder="Ism:"
                            type="text"
                            {...register("name", {
                                required: "Ism majburiy.",
                                minLength: {
                                    value: 3,
                                    message:
                                        "Ism kamida 3 ta harfdan iborat bolishi kerak.",
                                },
                            })}
                        />
                        {errors.name && (
                            <p className="text-red-500">
                                {errors.name.message}
                            </p>
                        )}
                    </div>
                    <div>
                        <input
                            className="w-full p-3 rounded-xl border-gray-500 border-[1px] "
                            placeholder="Email:"
                            type="email"
                            {...register("email", {
                                required: "Email majburiy.",
                                pattern: {
                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                    message: "Togri email formatini kiriting.",
                                },
                            })}
                        />
                        {errors.email && (
                            <p className="text-red-500">
                                {errors.email.message}
                            </p>
                        )}
                    </div>
                    <div>
                        <input
                            className="w-full p-3 rounded-xl border-gray-500 border-[1px] "
                            placeholder="Password:"
                            type="password"
                            {...register("password", {
                                required: "Parol majburiy.",
                                minLength: {
                                    value: 8,
                                    message:
                                        "Parol kamida 8 ta belgidan iborat bolishi kerak.",
                                },
                                pattern: {
                                    value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                                    message:
                                        "Parol harflar, raqamlar va maxsus belgilarni oz ichiga olishi kerak.",
                                },
                            })}
                        />
                        {errors.password && (
                            <p className="text-red-500">
                                {errors.password.message}
                            </p>
                        )}
                    </div>
                    <div>
                        <input
                            className="w-full p-3 rounded-xl border-gray-500 border-[1px] "
                            placeholder="RePassword:"
                            type="password"
                            {...register("confirmPassword", {
                                required: "Parolni tasdiqlash majburiy.",
                                validate: (value) =>
                                    value === password || "Parol mos emas.",
                            })}
                        />
                        {errors.confirmPassword && (
                            <p className="text-red-500">
                                {errors.confirmPassword.message}
                            </p>
                        )}
                    </div>
                    <div className="text-center">
                        <button type="submit" className="w-[150px] py-3 px-1 bg-white rounded-xl transition-all active:scale-90">
                            REGISTER
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Masala2;
