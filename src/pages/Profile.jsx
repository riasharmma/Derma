import React from "react";
import { collection, query } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import backendAuthService from "../firebase/auth";
import backendFireStoreService from "../firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../firebase/firestore";
import { app } from "../firebase/firebase";

export const Profile = () => {
  const [user] = useAuthState(backendAuthService.auth);
  // console.log(collection(db, 'users'));
  const [data, loading, error] = useCollection(
    query(collection(db, `users/${user?.uid}/appointment`)),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );
  // console.warn(db);
  console.log(data?.docs.map((n) => console.log(n.data())));
  if (!user) {
    return null;
  }

  // console.log(snapshot);

  return (
    <div>
      <div className="p-16">
        <div className="p-8 bg-white shadow mt-24">
          {" "}
          <div className="grid grid-cols-1 md:grid-cols-3">
            {" "}
            <div className="grid grid-cols-3 text-center order-last md:order-first mt-20 md:mt-0"></div>{" "}
            <div className="relative">
              {" "}
              <div className="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-24 w-24"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  {" "}
                  <path
                    fillRule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clipRule="evenodd"
                  />
                </svg>{" "}
              </div>{" "}
            </div>{" "}
            <div className="space-x-8 flex justify-between mt-32 md:mt-0 md:justify-center">
              <button className="text-white py-2 px-4 uppercase rounded bg-blue-400 hover:bg-blue-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                {" "}
                Book Appointment
              </button>{" "}
              <button className="text-white py-2 px-4 uppercase rounded bg-gray-700 hover:bg-gray-800 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                {" "}
                Sign Out
              </button>{" "}
            </div>{" "}
          </div>{" "}
          <div className="mt-20 text-center border-b pb-12">
            {" "}
            <h1 className="text-4xl font-medium text-gray-700">
              {user.displayName}{" "}
              <span className="font-light text-gray-500"></span>
            </h1>{" "}
            <p className="font-light text-gray-600 mt-3">Bucharest, Romania</p>{" "}
          </div>{" "}
          <div className="text-indigo-500 mx-auto flex justify-center py-2 px-4  font-medium mt-4">
            {" "}
            Upcoming Appointments
          </div>{" "}
          <div className="flex flex-col justify-center">
            {" "}
            <p className="text-gray-600 text-center font-light lg:px-16">
              View or join all your appointments below.
            </p>
            <div className=""></div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 max-w-screen-lg mx-auto">{data?.docs.map((n,i) => <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-2 text-gray-800">
            Appointment #{i+1}
            </h2>
            <p className="text-gray-700 font-bold "></p>
            <p className="text-gray-700 font-bold ">Patient- {n.data().patient}</p>
            <p className="text-gray-700">{n.data().doctor} , {n.data().department}</p>
            <p className="text-cyan-700">Time: {n.data().slot}</p>
            <button class="bg-transparent mt-2 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
              Join
            </button>
          </div>)}
        </div>
      </div>
    </div>
  );
};
