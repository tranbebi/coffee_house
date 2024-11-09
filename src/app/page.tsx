import Header from "./component/header";
export default function Home() {
  return (
    <>
      <div className='contents-wrapper font-karlar max-w-screen-2xl text-base mx-auto px-8'>
      <Header></Header>
        <main>
          <div className="slider h-[530px] bg-silder-bg bg-cover  bg-no-repeat bg-bottom ">
            <div className='w-full h-full  flex justify-center items-center bg-gray-900 bg-opacity-35'>
              <div className='mx-16 text-white text-center'>
                <div className='uppercase text-sm mb-6'>Best place to buy coffee</div>
                <div className='font-medium text-5xl mb-6'>Gau Coffee Mugs</div>
                <div className=''>The most versatile furniture system ever created. Designed to fit your life, made to move and grow.</div>
                <div className='flex justify-center mt-5'>
                  <div className='uppercase bg-white text-gray-900 w-max tracking-wider py-4 px-8 text-xs font-medium cursor-pointer hover:bg-opacity-95'>Explore Our Products</div>
                </div>
              </div>
            </div>
          </div>
          <div className='story flex justify-center items-center'>

            <div className='px-4 sm:px-32 lg:px-64 xl:px-96 py-32 text-center '>
              <div className='text-3xl mb-6 leading-10 '>Even the all-powerful Pointing has no control about the blind texts.</div>
              <div className='text-gray-500 leading-7 mb-6'>It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</div>
              <div><a href="" className='text-coffee-400 hover:text-coffee-600 relative after:absolute after:-bottom-2 left-0 after:left-0
                  after:bg-coffee-200 hover:after:bg-coffee-600 after:h-0.5 after:w-full after:transition-all after:ease-in-out after:duration-500 '>Read the full Story</a></div>

            </div>
          </div>
          <div className='bb-subheadline '>
            <div className='bb-subheadline-deco-line '></div>
            <div className='bb-subheadline-label uppercase mx-4 tracking-widest text-gray-500 font-medium text-[14px]'>Featured Mugs</div>
            <div className='bb-subheadline-deco-line '></div>
          </div>

          <div className='featured_mugr w-[95%] lg:w-[65%] mx-auto mb-24'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
              <div className='bb-product-card '>
                <div className='h-[390px]  lg:h-[530px] bg-product-card1 bg-cover  bg-no-repeat bg-bottom '>
                  <a href="#">
                    <div className='w-full h-full hover:bg-gray-900 hover:bg-opacity-10 hover:transition-all hover:ease-in-out hover:duration-500 relative group'>
                      {/* <div className='absolute w-[100px] bg-white py-2 px-4 uppercase top-3 right-3 text-center font-semibold text-coffee-400'>on sale</div> */}
                      <div className='absolute  bg-white text-gray-900 w-11/12 bottom-4 left-1/2 -translate-x-1/2 hidden group-hover:block group-hover:animate-fadeIn bb-btn'>Explore Mug</div>
                    </div>
                  </a>
                </div>
                <div className='text-center mt-8'>
                  <a href="" >
                    <div className='text-xl mb-3 hover:text-coffee-400'>
                      Pink Premium Ceramic
                    </div>
                  </a>
                  <div >
                    <span className='text-gray-900'>99.00$</span>

                  </div>
                </div>
              </div>
              <div className='bb-product-card '>
                <div className='h-[390px]  lg:h-[530px]  bg-product-card2 bg-cover  bg-no-repeat bg-bottom '>
                  <a href="#">
                    <div className='w-full h-full hover:bg-gray-900 hover:bg-opacity-10 hover:transition-all hover:ease-in-out hover:duration-500 relative group'>
                      <div className='absolute w-[120px] bg-white py-1 px-4 uppercase top-3 right-3 text-center font-semibold text-coffee-400'>on sale.</div>
                      <div className='absolute  bg-white text-gray-900 w-11/12 bottom-4 left-1/2 -translate-x-1/2 hidden group-hover:block group-hover:animate-fadeIn bb-btn'>Explore Mug</div>
                    </div>
                  </a>
                </div>
                <div className='text-center mt-8'>
                  <a href="" >
                    <div className='text-xl mb-3 hover:text-coffee-400'>
                      Golden Designers Mug
                    </div>
                  </a>
                  <div >
                    <span className=' text-xl text-coffee-400'>25.00$</span>
                    <span className='ml-2 text-gray-400 line-through'>50.00$</span>

                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='bb-subheadline '>
            <div className='bb-subheadline-deco-line '></div>
            <div className='bb-subheadline-label uppercase mx-4 tracking-widest text-gray-500 font-medium text-[14px]'>more_products</div>
            <div className='bb-subheadline-deco-line '></div>
          </div>
          {/* moproduct **********************************************************************************************************/}
          <div className='more_products w-[95%] xl:w-[65%] mx-auto mb-16'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-4 gap-8'>
              <div className='bb-product-card '>
                <div className='h-[380px] bg-product-card1 bg-cover  bg-no-repeat bg-bottom '>
                  <a href="#">
                    <div className='w-full h-full hover:bg-gray-900 hover:bg-opacity-10 hover:transition-all hover:ease-in-out hover:duration-500 relative group'>
                      <div className='absolute w-[120px] bg-white py-1 px-4 uppercase top-3 right-3 text-center font-semibold text-coffee-400'>on sale.</div>
                      <div className='absolute  bg-white text-gray-900 w-11/12 bottom-4 left-1/2 -translate-x-1/2 hidden group-hover:block group-hover:animate-fadeIn bb-btn'>Explore Mug</div>
                    </div>
                  </a>
                </div>
                <div className='text-center my-8'>
                  <a href="" >
                    <div className='text-xl mb-3 hover:text-coffee-400'>
                      Pink Premium Ceramic
                    </div>
                  </a>
                  <div >
                    <span className='text-gray-900'>99.00$</span>

                  </div>
                </div>
              </div>
              <div className='bb-product-card '>
                <div className='h-[380px] bg-product-card1 bg-cover  bg-no-repeat bg-bottom '>
                  <a href="#">
                    <div className='w-full h-full hover:bg-gray-900 hover:bg-opacity-10 hover:transition-all hover:ease-in-out hover:duration-500 relative group'>
                      {/* <div className='absolute w-[100px] bg-white py-2 px-4 uppercase top-3 right-3 text-center font-semibold text-coffee-400'>on sale</div> */}
                      <div className='absolute  bg-white text-gray-900 w-11/12 bottom-4 left-1/2 -translate-x-1/2 hidden group-hover:block group-hover:animate-fadeIn bb-btn'>Explore Mug</div>
                    </div>
                  </a>
                </div>
                <div className='text-center my-8'>
                  <a href="" >
                    <div className='text-xl mb-3 hover:text-coffee-400'>
                      Pink Premium Ceramic
                    </div>
                  </a>
                  <div >
                    <span className='text-gray-900'>99.00$</span>

                  </div>
                </div>
              </div>
              <div className='bb-product-card '>
                <div className='h-[380px] bg-product-card1 bg-cover  bg-no-repeat bg-bottom '>
                  <a href="#">
                    <div className='w-full h-full hover:bg-gray-900 hover:bg-opacity-10 hover:transition-all hover:ease-in-out hover:duration-500 relative group'>
                      <div className='absolute w-[120px] bg-white py-1 px-4 uppercase top-3 right-3 text-center font-semibold text-coffee-400'>on sale.</div>
                      <div className='absolute  bg-white text-gray-900 w-11/12 bottom-4 left-1/2 -translate-x-1/2 hidden group-hover:block group-hover:animate-fadeIn bb-btn'>Explore Mug</div>
                    </div>
                  </a>
                </div>
                <div className='text-center my-8'>
                  <a href="" >
                    <div className='text-xl mb-3 hover:text-coffee-400'>
                      Pink Premium Ceramic
                    </div>
                  </a>
                  <div >
                    <span className='text-gray-900'>99.00$</span>

                  </div>
                </div>
              </div>
              <div className='bb-product-card '>
                <div className='h-[380px] bg-product-card1 bg-cover  bg-no-repeat bg-bottom '>
                  <a href="#">
                    <div className='w-full h-full hover:bg-gray-900 hover:bg-opacity-10 hover:transition-all hover:ease-in-out hover:duration-500 relative group'>
                      {/* <div className='absolute w-[100px] bg-white py-2 px-4 uppercase top-3 right-3 text-center font-semibold text-coffee-400'>on sale</div> */}
                      <div className='absolute  bg-white text-gray-900 w-11/12 bottom-4 left-1/2 -translate-x-1/2 hidden group-hover:block group-hover:animate-fadeIn bb-btn'>Explore Mug</div>
                    </div>
                  </a>
                </div>
                <div className='text-center my-8'>
                  <a href="" >
                    <div className='text-xl mb-3 hover:text-coffee-400'>
                      Pink Premium Ceramic
                    </div>
                  </a>
                  <div >
                    <span className='text-gray-900'>99.00$</span>

                  </div>
                </div>
              </div>
              <div className='bb-product-card '>
                <div className='h-[380px] bg-product-card1 bg-cover  bg-no-repeat bg-bottom '>
                  <a href="#">
                    <div className='w-full h-full hover:bg-gray-900 hover:bg-opacity-10 hover:transition-all hover:ease-in-out hover:duration-500 relative group'>
                      {/* <div className='absolute w-[100px] bg-white py-2 px-4 uppercase top-3 right-3 text-center font-semibold text-coffee-400'>on sale</div> */}
                      <div className='absolute  bg-white text-gray-900 w-11/12 bottom-4 left-1/2 -translate-x-1/2 hidden group-hover:block group-hover:animate-fadeIn bb-btn'>Explore Mug</div>
                    </div>
                  </a>
                </div>
                <div className='text-center my-8'>
                  <a href="" >
                    <div className='text-xl mb-3 hover:text-coffee-400'>
                      Pink Premium Ceramic
                    </div>
                  </a>
                  <div >
                    <span className='text-gray-900'>99.00$</span>

                  </div>
                </div>
              </div>
              <div className='bb-product-card '>
                <div className='h-[380px] bg-product-card1 bg-cover  bg-no-repeat bg-bottom '>
                  <a href="#">
                    <div className='w-full h-full hover:bg-gray-900 hover:bg-opacity-10 hover:transition-all hover:ease-in-out hover:duration-500 relative group'>
                      {/* <div className='absolute w-[100px] bg-white py-2 px-4 uppercase top-3 right-3 text-center font-semibold text-coffee-400'>on sale</div> */}
                      <div className='absolute  bg-white text-gray-900 w-11/12 bottom-4 left-1/2 -translate-x-1/2 hidden group-hover:block group-hover:animate-fadeIn bb-btn'>Explore Mug</div>
                    </div>
                  </a>
                </div>
                <div className='text-center my-8'>
                  <a href="" >
                    <div className='text-xl mb-3 hover:text-coffee-400'>
                      Pink Premium Ceramic
                    </div>
                  </a>
                  <div >
                    <span className='text-gray-900'>99.00$</span>

                  </div>
                </div>
              </div>
              <div className='bb-product-card '>
                <div className='h-[380px] bg-product-card1 bg-cover  bg-no-repeat bg-bottom '>
                  <a href="#">
                    <div className='w-full h-full hover:bg-gray-900 hover:bg-opacity-10 hover:transition-all hover:ease-in-out hover:duration-500 relative group'>
                      {/* <div className='absolute w-[100px] bg-white py-2 px-4 uppercase top-3 right-3 text-center font-semibold text-coffee-400'>on sale</div> */}
                      <div className='absolute  bg-white text-gray-900 w-11/12 bottom-4 left-1/2 -translate-x-1/2 hidden group-hover:block group-hover:animate-fadeIn bb-btn'>Explore Mug</div>
                    </div>
                  </a>
                </div>
                <div className='text-center my-8'>
                  <a href="" >
                    <div className='text-xl mb-3 hover:text-coffee-400'>
                      Pink Premium Ceramic
                    </div>
                  </a>
                  <div >
                    <span className='text-gray-900'>99.00$</span>

                  </div>
                </div>
              </div>
              <div className='bb-product-card '>
                <div className='h-[380px] bg-product-card1 bg-cover  bg-no-repeat bg-bottom '>
                  <a href="#">
                    <div className='w-full h-full hover:bg-gray-900 hover:bg-opacity-10 hover:transition-all hover:ease-in-out hover:duration-500 relative group'>
                      {/* <div className='absolute w-[100px] bg-white py-2 px-4 uppercase top-3 right-3 text-center font-semibold text-coffee-400'>on sale</div> */}
                      <div className='absolute  bg-white text-gray-900 w-11/12 bottom-4 left-1/2 -translate-x-1/2 hidden group-hover:block group-hover:animate-fadeIn bb-btn'>Explore Mug</div>
                    </div>
                  </a>
                </div>
                <div className='text-center my-8'>
                  <a href="" >
                    <div className='text-xl mb-3 hover:text-coffee-400'>
                      Pink Premium Ceramic
                    </div>
                  </a>
                  <div >
                    <span className='text-gray-900'>99.00$</span>

                  </div>
                </div>
              </div>
              <div className='bb-product-card '>
                <div className='h-[380px] bg-product-card1 bg-cover  bg-no-repeat bg-bottom '>
                  <a href="#">
                    <div className='w-full h-full hover:bg-gray-900 hover:bg-opacity-10 hover:transition-all hover:ease-in-out hover:duration-500 relative group'>
                      {/* <div className='absolute w-[100px] bg-white py-2 px-4 uppercase top-3 right-3 text-center font-semibold text-coffee-400'>on sale</div> */}
                      <div className='absolute  bg-white text-gray-900 w-11/12 bottom-4 left-1/2 -translate-x-1/2 hidden group-hover:block group-hover:animate-fadeIn bb-btn'>Explore Mug</div>
                    </div>
                  </a>
                </div>
                <div className='text-center my-8'>
                  <a href="" >
                    <div className='text-xl mb-3 hover:text-coffee-400'>
                      Pink Premium Ceramic
                    </div>
                  </a>
                  <div >
                    <span className='text-gray-900'>99.00$</span>

                  </div>
                </div>
              </div>

            </div>
          </div>
          <div className='bb-subheadline '>
            <div className='bb-subheadline-deco-line '></div>
            <div className='bb-subheadline-label uppercase mx-4 tracking-widest text-gray-500 font-medium text-[14px]'>Buy 2 mugs and get a coffee magazine free</div>
            <div className='bb-subheadline-deco-line '></div>
          </div>
          <div className='coffee-magarine w-[95%] xl:w-[65%] mx-auto mb-24'>
            <div className='flex flex-col md:flex-row justify-center items-center gap-5 '>
              <div className='bb-magazine-img basis-1/2 flex flex-row gap-5 w-full h-full'>
                <div className='bb-magazine-big-img h-[280px] basis-2/3  bg-[url("/img/magazine01.jpg")] bg-cover  bg-no-repeat bg-center '></div>
                <div className='bb-magazine-small-img basis-1/3 flex flex-col gap-5'>
                  <div className=' h-[130px] bg-[url("/img/magazine02.jpg")] bg-cover  bg-no-repeat bg-center '></div>
                  <div className=' h-[130px] bg-[url("/img/magazine03.jpg")] bg-cover  bg-no-repeat bg-center '></div>
                </div>
              </div>
              <div className='bb-magazine-post basis-1/2 pl-14 text-center md:text-left' >
                <div className='uppercase  tracking-widest text-gray-500 font-medium text-[13px] mb-4 '>Premium Offer</div>
                <div className=' text-3xl mb-4'>Get our Coffee Magazine</div>
                <div className='text-gray-500 leading-7 mb-4'>The most versatile furniture system ever created. Designed to fit your life.</div>
                <div className='bb-btn mx-auto md:mx-0 bg-gray-900 text-white w-max'>Start Shopping</div>
              </div>
            </div>

          </div>
          <div className='bb-pradux-card bg-[url("/img/pradux.jpg")] bg-cover bg-no-repeat bg-center h-[340px] mb-24 bg-fixed w-[100vw] relative left-[calc(-50vw+50%)]'>

          </div>
          <div className='bb-subheadline '>
            <div className='bb-subheadline-deco-line '></div>
            <div className='bb-subheadline-label uppercase mx-4 tracking-widest text-gray-500 font-medium text-[14px]'>
              Behind the mugs, lifestyle stories</div>
            <div className='bb-subheadline-deco-line '></div>
          </div>
          <div className='lifestyle_stories w-[95%] xl:w-[65%] mx-auto mb-24'>
            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-4'>
              <div className='bb-product-card '>
                <div className='h-[380px] bg-[url("/img/lifestyle_stories1.jpg")] bg-cover  bg-no-repeat bg-bottom '>
                  <a href="#">
                    <div className='w-full h-full hover:bg-gray-900 hover:bg-opacity-10 hover:transition-all hover:ease-in-out hover:duration-500 relative group'>
                      {/* <div className='absolute w-[100px] bg-white py-2 px-4 uppercase top-3 right-3 text-center font-semibold text-coffee-400'>on sale</div> */}
                      <div className='absolute  bg-white text-gray-900 w-11/12 bottom-4 left-1/2 -translate-x-1/2 hidden group-hover:block group-hover:animate-fadeIn bb-btn'>Explore Mug</div>
                    </div>
                  </a>
                </div>
                <div className='text-center my-8'>
                  <a href="" >
                    <div className='text-xl mb-3 text-start hover:text-coffee-400'>
                      Health Check: why do I get a headache when I haven’t had my coffee?
                    </div>
                  </a>
                  <a href="" >
                    <div className='text-sm mb-3 text-gray-500 text-start hover:text-coffee-400'>
                      It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
                    </div>
                  </a>
                  <div className='flex justify-start' >
                    <span className='text-[#777982] text-start'>October 9, 2018</span>
                  </div>
                </div>
              </div>
              <div className='bb-product-card '>
                <div className='h-[380px] bg-[url("/img/lifestyle_stories2.jpg")] bg-cover  bg-no-repeat bg-bottom '>
                  <a href="#">
                    <div className='w-full h-full hover:bg-gray-900 hover:bg-opacity-10 hover:transition-all hover:ease-in-out hover:duration-500 relative group'>
                      {/* <div className='absolute w-[100px] bg-white py-2 px-4 uppercase top-3 right-3 text-center font-semibold text-coffee-400'>on sale</div> */}
                      <div className='absolute  bg-white text-gray-900 w-11/12 bottom-4 left-1/2 -translate-x-1/2 hidden group-hover:block group-hover:animate-fadeIn bb-btn'>Explore Mug</div>
                    </div>
                  </a>
                </div>
                <div className='text-center my-8'>
                  <a href="" >
                    <div className='text-xl mb-3 text-start hover:text-coffee-400'>
                      How long does a cup of coffee keep you awake?
                    </div>
                  </a>
                  <a href="" >
                    <div className='text-sm mb-3 text-gray-500 text-start hover:text-coffee-400'>
                      It is a paradisematic country, in which roasted parts. Vel qui et ad voluptatem.
                    </div>
                  </a>
                  <div className='flex justify-start'>
                    <span className='text-[#777982] text-start'>October 9, 2018</span>

                  </div>
                </div>
              </div>
              <div className='bb-product-card '>
                <div className='h-[380px] bg-[url("/img/lifestyle_stories3.jpg")] bg-cover  bg-no-repeat bg-bottom '>
                  <a href="#">
                    <div className='w-full h-full hover:bg-gray-900 hover:bg-opacity-10 hover:transition-all hover:ease-in-out hover:duration-500 relative group'>
                      {/* <div className='absolute w-[100px] bg-white py-2 px-4 uppercase top-3 right-3 text-center font-semibold text-coffee-400'>on sale</div> */}
                      <div className='absolute  bg-white text-gray-900 w-11/12 bottom-4 left-1/2 -translate-x-1/2 hidden group-hover:block group-hover:animate-fadeIn bb-btn'>Explore Mug</div>
                    </div>
                  </a>
                </div>
                <div className='text-center my-8'>
                  <a href="" >
                    <div className='text-xl mb-3 text-start hover:text-coffee-400'>
                      Recent research suggests that heavy coffee drinkers may reap health benefits.
                    </div>
                  </a>
                  <a href="" >
                    <div className='text-sm mb-3 text-gray-500 text-start hover:text-coffee-400'>
                      It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
                    </div>
                  </a>
                  <div className='flex justify-start'>
                    <span className='text-[#777982] text-start'>October 9, 2018</span>

                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=' subscribe-us h-[530px] bg-[#1d1f2e] flex flex-col justify-center items-center md-24 '>
            <div className=' flex justify-center items-center mb-3'>
              <div className='w-8 h-px bg-gray-200'></div>
              <div className='uppercase mx-4 tracking-widest text-gray-500 font-bold text-xs text-center'>sing up and get free coffee bages</div>
              <div className='w-8 h-px bg-gray-500'>
              </div>
            </div>
            <div className='text-4xl uppercase  text-white mb-4'>coffee Update</div>
            <div className='bb-form'>
              <div className='flex justify-center items-center gap-3'>
                <div className='bb-form-item '>
                  <input className='px-6 py-4 w-[350px] bg-inherit border-[1px] border-gray-500 outline-none text-white leading-5 hover:border-gray-300 duration-500 focus:border-gray-300 placeholder:uppercase placeholder:text-xs placeholder:tracking-widest placeholder:font-semibold' type="email" placeholder='bit92785@gmail.com' />
                </div>
                <div className='bb-form-item'>
                  <button className='bb-btn bg-white text-gray-500' type='submit'>subscribe</button>
                </div>
              </div>
            </div>

          </div>
        </main>
        <footer className='w-[95%] xl:w-[65%] mx-auto mt-24 pb-24 '>
          <div className=' flex justify-center gap-60'>
            <div className=' uppercase text-gray-500 flex flex-col gap-4'>
              <div>Home</div>
              <div>Our Products</div>
              <div>Contact</div>
              <div>Styleguide</div>
         
            </div>
            <div className='uppercase text-gray-500 flex flex-col gap-4'>
              <div>Delivering the best</div>
              <div>coffee life since 1996.</div>
              <div>From coffee geeks to</div>
              <div>the real ones.</div>
              <div>Follow Us</div>
            </div>
            <div className='uppercase text-gray-500 flex flex-col gap-4'>
              <div>Contac-Us</div>
              <div>Trần bé Bi</div>
              <div className='icon-item-footer flex justify-center gap-4 '>
                <div><i className="fa-brands fa-discord"></i></div>
                <div><i className="fa-brands fa-facebook"></i></div>
                <div><i className="fa-brands fa-instagram"></i></div>
              </div>
            </div>
            
          </div>
        </footer>
      </div>
    </>
  );
};
