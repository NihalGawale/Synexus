"use client";
import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment, useState } from "react";

const SideBar = ({ show, setShow ,mainContentOne}) => {
  //   let [isOpen, setIsOpen] = useState(true);
  return (
    <Transition show={show} as={Fragment}>
      <Dialog
        as="div"
        className={"relative z-30"}
        onClose={() => setShow(false)}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-900"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/30  bg-opacity-75 transition-opacity" />
        </Transition.Child>
        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="ease-in-out duration-900"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-500"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Dialog.Panel className={"w-screen max-w-[280px] md:max-w-md"}>
                  <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                    <div className="flex-1 overflow-y-auto px-8 py-6 sm:px-6">
                        {
                            mainContentOne ? <div className="mt-24">{mainContentOne}</div> : ""
                        }
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default SideBar;
