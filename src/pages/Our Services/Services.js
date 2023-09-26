import React from 'react';
import img1 from '../../assets/servicsimg/skin1.jpg';
import img2 from '../../assets/servicsimg/skin2.jpg';
import img3 from '../../assets/servicsimg/skin3.jpg';
import Hair from '../../assets/servicsimg/hair1.jpg';

const Services = () => {
    return (
        <section className='mx-4 flex justify-center items-center'>
            <div className='my-4'>
                <h2 className='my-10 mx-2 py-4 text-5xl text-amber-500 text-center'>Our Services Menu </h2>
                {/* card design */}
                <div className='flex justify-center'>
                    <div
                        class="max-w-md mx-auto bg-white shadow-md rounded-lg overflow-hidden my-4 mx-4">
                        <div
                            class="bg-gray-200 text-gray-700 px-6 py-4"
                           >
                            <img
                                class="w-full h-auto"
                                src={img1}
                                alt="" />
                            <a href="#!">
                                <div
                                    class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
                            </a>
                        </div>
                        <div class="p-6">
                            <h5
                                class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                                Facials:
                            </h5>
                            <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                            Your face is your most prominent feature, and taking care of your
                             skin should be a top priority. Whether you're looking to address specific 
                             skin concerns or simply want to maintain a healthy and youthful complexion,
                             our range of professional face treatments can help you achieve the radiant skin you desire
                            </p>
                            <p className='text-warning py-2 mb-2 mt-2'>Price : $ 199 </p>
                            <button
                                type="button"
                                class="inline-block rounded btn btn-outline btn-success px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                                data-te-ripple-init
                                data-te-ripple-color="light">
                               Order Now
                            </button>
                        </div>
                    </div>
                    <div
                        class="max-w-md mx-auto bg-white shadow-md rounded-lg overflow-hidden my-4 mx-4">
                        <div
                            class="bg-gray-200 text-gray-700 px-6 py-4"
                            data-te-ripple-init
                            data-te-ripple-color="light">
                            <img
                                class="w-full h-auto"
                                src={img3}
                                alt="" />
                            <a href="#!">
                                <div
                                    class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
                            </a>
                        </div>
                        <div class="p-6">
                            <h5
                                class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                               Microdermabrasion
                            </h5>
                            <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                            Microdermabrasion gently exfoliates the skin's outer layer, promoting 
                            collagen production and improving skin tone and texture. It's an effective 
                            treatment for reducing the appearance of scars, wrinkles, and enlarged pores
                            </p>

                            <p className='text-warning py-2 mb-2 mt-2'>Price : $ 169 </p>

                            <button
                                type="button"
                                class="inline-block rounded btn btn-outline btn-success px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                                data-te-ripple-init
                                data-te-ripple-color="light">
                                Button
                            </button>
                        </div>
                    </div>
                    <div
                        class="max-w-md mx-auto bg-white shadow-md rounded-lg overflow-hidden my-4 mx-4">
                        <div
                            class="bg-gray-200 text-gray-700 px-6 py-4"
                            data-te-ripple-init
                            data-te-ripple-color="light">
                            <img
                                class="w-full h-auto"
                                src={img2}
                                alt="" />
                            <a href="#!">
                                <div
                                    class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
                            </a>
                        </div>
                        <div class="p-6">
                            <h5
                                class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                                Dermaplaning
                            </h5>
                            <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                            Dermaplaning is a non-invasive treatment that removes dead skin cells
                             and peach fuzz from the surface of your skin. 
                            It enhances the effectiveness of skincare products
                             and leaves your skin smooth and radiant
                            </p>
                            <p className='text-warning py-2 mb-2 mt-2'>Price : $ 220 </p>

                            <button
                                type="button"
                                class="inline-block rounded btn btn-outline btn-success px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                                data-te-ripple-init
                                data-te-ripple-color="light">
                                Button
                            </button>
                        </div>
                    </div>
                    
                </div>

            </div>
        </section>
    );
};

export default Services;