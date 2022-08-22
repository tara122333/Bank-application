import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

import SignIn from './Signin';

export default function Comformation({isOpen,setIsOpen}) {
  function closeModal() {
    setIsOpen(false)
  }
    const [openSignin, setOpenSignin] = useState(false);
    const openSignInmodal = () => {
      window.location.reload();
    };

  return (
    <>
    <SignIn isOpen={openSignin} setIsOpen={setOpenSignin}/>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Verification 
                  </Dialog.Title>
                  <div className="mt-2">
                    <h1>Please Check Your mail</h1>
                    <button className='my-3 px-10 py-1 font-semibold text-xl text-white bg-black rounded-lg hover:bg-red-500' onClick={()=>{openSignInmodal()}}>SignIn</button>
                  </div> 
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
