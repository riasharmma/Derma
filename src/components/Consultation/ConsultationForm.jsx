import React from "react";
import AsyncSelect from "react-select/async";
import Select from "react-select";
import { timeSlots, medicalDepartment } from "../../../data";

const ConsultationForm = () => {
//   const filterTime = (inputValue) => {
//     console.log(inputValue);
//     return timeSlots.filter((i) =>  i.value.includes(inputValue));
//   };

//   const loadOptions = (inputValue, callback) => {
//     setTimeout(() => {
//       callback(filterTime(inputValue));
//     }, 1000);
//   };

  return (
    <div>
      <section className="bg-gray-100">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
            <div className="lg:col-span-2 lg:py-12">
              <p className="max-w-xl text-lg">
                At the same time, the fact that we are wholly owned and totally
                independent from manufacturer and other group control gives you
                confidence that we will only recommend what is right for you.
              </p>

              <div className="mt-8">
                <a href="" className="text-2xl font-bold text-pink-600">
                  0151 475 4450
                </a>

                <address className="mt-2 not-italic">
                  282 Kevin Brook, Imogeneborough, CA 58517
                </address>
              </div>
            </div>

            <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
              <form action="" className="space-y-4">
                <div>
                  <label className="sr-only" htmlFor="name">
                    Name
                  </label>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Name"
                    type="text"
                    id="name"
                  />
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="sr-only" htmlFor="email">
                      Email
                    </label>
                    <input
                      className="w-full rounded-lg border-gray-200 p-3 text-sm"
                      placeholder="Email address"
                      type="email"
                      id="email"
                    />
                  </div>

                  <div>
                    <label className="sr-only" htmlFor="phone">
                      Phone
                    </label>
                    <input
                      className="w-full rounded-lg border-gray-200 p-3 text-sm"
                      placeholder="Phone Number"
                      type="tel"
                      id="phone"
                    />
                  </div>
                </div>

                <div>
				<Select
				  className="w-full rounded-lg border-gray-200 py-2s text-sm"
                    options={medicalDepartment}
					placeholder="Department"
					theme={(theme) => ({
						...theme,
						borderRadius: '0.5rem',
						padding:'0.75rem',
						colors: {
						  ...theme.colors,
						  primary25: '#e5e7eb',
						  primary50: '#9ca3af',
						  primary: 'black',
						},
					  })}
                  />
                  <Select
				  className="w-full rounded-lg border-gray-200 py-2 text-sm"
                    options={timeSlots}
					placeholder="Time Slots"
					theme={(theme) => ({
						...theme,
						borderRadius: '0.5rem',
						padding:'0.75rem',
						colors: {
						  ...theme.colors,
						  primary25: '#e5e7eb',
						  primary50: '#9ca3af',
						  primary: 'black',
						},
					  })}
                  />
				   <Select
				  className="w-full rounded-lg border-gray-200 py-2 text-sm"
                    options={timeSlots}
					placeholder="Time Slots"
					theme={(theme) => ({
						...theme,
						borderRadius: '0.5rem',
						padding:'0.75rem',
						colors: {
						  ...theme.colors,
						  primary25: '#e5e7eb',
						  primary50: '#9ca3af',
						  primary: 'black',
						},
					  })}
                  />
                </div>

                <div>
                
                </div>

                <div className="mt-4">
                  <button
                    type="submit"
                    className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
                  >
                    Book Appointment
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ConsultationForm;
