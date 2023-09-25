import React from 'react';
import woman from '../../assets/images/woman1.png'
import faceIcon1 from '../../assets/icons/Group 1372.png';
import faceIcon2 from '../../assets/icons/Group 1373.png';
import faceIcon3 from '../../assets/icons/Group 1374.png';
import skincare from '../../assets/images/scincare.jpg';

const Home = () => {
    return (
        <div>
            <section className=' my-4 flex p-8 '>
                <div className=''>
                    <h2 className='text-6xl text-stone-900'>
                        BEAUTY SALON <br />
                        FOR EVERY WOMAN
                    </h2>
                    <p className='my-3'>Lorem ipsum dolor sit, amet consectetur <br />
                        adipisicing elit.
                        Tempore rem odio asperiores <br />
                        molestiae animi voluptatum velit,
                        impedit quas sint totam.</p>
                    <button className="btn btn-large btn-warning">Get ap Appointment</button>
                </div>
                <div className='grid bg-indigo-800 mx-8'>
                    <img className='object-fill h-88 w-96 border-radius-2rem' src={woman} alt="Woman" />
                </div>
            </section>

            <section>
                <div>
                    <h3 className=' text-6xl text-center justify-center items-center text-secondary my-4' >Our Awesome  Services</h3>
                    <div className='flex m-4 p-4 space between mx-2 my-7'>
                        <div className="card w-96 bg-base-100 shadow-xl justify-center items-center mx-4">
                            <img className='h-10 w-15 ' src={faceIcon1} alt="" />
                            <div className="card-body justify-center items-center">
                                <h2 className="card-title text-center">Anti Age Face Treatment</h2>
                                <p className='text-war'>$ 199</p>
                                <p>If a dog chews shoes whose shoes does he choose?</p>


                            </div>
                        </div>
                        <div className="card w-96 bg-base-100 shadow-xl justify-center items-center mx-4">
                            <img className='h-10 w-15 ' src={faceIcon2} alt="" />
                            <div className="card-body justify-center items-center">
                                <h2 className="card-title text-center">Hair Color $ Style</h2>
                                <h2 className="card-title text-center">Anti Age Face Treatment</h2>
                                <p className='text-war'>$ 230</p>
                                <p>If a dog chews shoes whose shoes does he choose?</p>

                            </div>
                        </div>
                        <div className="card w-96 bg-base-100 shadow-xl justify-center items-center mx-4">
                            <img className='h-10 w-15 ' src={faceIcon3} alt="" />
                            <div className="card-body justify-center items-center">
                                <h2 className="card-title text-center">Skin Care Treatment</h2>
                                <h2 className="card-title text-center">Anti Age Face Treatment</h2>
                                <p className='text-war'>$ 500</p>
                                <p>If a dog chews shoes whose shoes does he choose?</p>

                            </div>
                        </div>

                    </div>
                  
                </div>
                 <div className='justify-center items-center'>
                    <button className="btn btn-secondary">Explore More</button>
                  </div>
            </section>

            <section className='bg-amber-100 my-6'>
               <div className='flex my-4 p-20'>
               <div className='mx-5'>
                    <img className='w-65 h-70' src={skincare} alt="" />
                </div>
                <div>
                    <h2 className='text-6xl'>Let us handle your screen <p className='text-secondary text-6xl'> Professionally</p> </h2>
                </div>
               </div>
            </section>
        </div>
    );
};

export default Home;