import React from "react";
import { Link } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useFormik } from "formik";

import styles from "../styles/Username.module.css";

export default function Recovery() {
  return (
    <div className="container mx-auto">
      <Toaster position="top-center" reverseOrder={false}></Toaster>

      <div className="flex justify-center items-center h-screen">
        <div className={styles.glass}>
          {/* -------- div start ----------- */}
          <div className="title flex flex-col items-center">
            <h4 className="text-5xl font-bold">Hello World</h4>
            <span className="py-4 text-xl w-2/3 text-center text-gray-5">
              Enter OTP to recover password
            </span>
            {/* -------- div end ----------- */}
          </div>
          {/*-------------------Form------------------*/}
          <form className="pt-20">
            <div className="textbox flex flex-col item-center gap-6">
              <div className="input text-center">
                <span className="py-4 text-sm text-left text-gray-500">
                  Enter 6 digit OTP sent to your email address.
                </span>
                <input
                  className={styles.textbox}
                  type="text"
                  placeholder="Enter 6 digit OTP"
                />
              </div>

              <button className={styles.btn} type="submit">
                Recover
              </button>
            </div>

            <div className="text-center py-4">
              <span className="text-gray-500">
                Can't get OTP?{" "}
                <button className="text-red-500" to="recovery">
                  Resend
                </button>
              </span>
            </div>
          </form>
          {/*----------------Form end------------------*/}
        </div>
      </div>
    </div>
  );
}
