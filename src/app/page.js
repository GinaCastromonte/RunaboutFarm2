import Image from "next/image";
import "../styles/input.css";
import Link from "next/link";
import ImageSlider from "@/components/imageSlider";
import EmailSection from "@/components/emailSection";
import FaqSection from "@/components/faqSection";
import Navbar from "@/components/navbar";

export default function Home() {
  const images = [
    { src: "/assets/carousel1.jpg", alt: "Image 1" },
    { src: "/assets/carousel3.jpg", alt: "Image 2" },
    { src: "/assets/carousel5.jpg", alt: "Image 3" },
    { src: "/assets/carousel6.jpg", alt: "Image 4" },
    { src: "/assets/carousel7.jpg", alt: "Image 5" },
    { src: "/assets/carousel8.jpeg", alt: "Image 6" },
    { src: "/assets/carousel9.jpg", alt: "Image 7" },
    { src: "/assets/carousel12.jpeg", alt: "Image 8" },
    { src: "/assets/carousel10.jpeg", alt: "Image 9" },
  ];
  const images2 = [
    { src: "/assets/carousel2.jpeg", alt: "Image 1" },
    { src: "/assets/carousel4.jpg", alt: "Image 2" },
    { src: "/assets/carousel10.jpeg", alt: "Image 3" },
    { src: "/assets/carousel11.jpeg", alt: "Image 4" },
    { src: "/assets/carousel5.jpg", alt: "Image 5" },
    { src: "/assets/silky-chicken.jpeg", alt: "Image 6" },
  ];

  return (
    <div>
      <Navbar />

      <section className="hero bg-grey py-12 overflow-hidden">
        <div className="container mx-auto h-full">
          <div className="flex flex-col xl:flex-row items-center justify-between h-full">
            <div className="hero__text xl:w-[48%] text-center xl:text-left">
              <div className="flex items-center bg-white py-[10px] px-[20px] w-max gap-x-2 mb-[26px] rounded-full mx-auto xl:mx-0">
                <i className="ri-heart-pulse-line text-2xl text-accent"></i>
                <div className="uppercase text-base font-medium text-[#9ab4b7] tracking-[2.24px]">
                  Established In 1989
                </div>
              </div>

              <h1 className="h1 mb-6">Welcome to Runabout Farm!</h1>

              <p className="mb-[50px] md:max-w-xl">
                We have specialized in creating unforgettable pony parties for
                families in Fairfield and Westchester County. Book with us
                today to experience the magic and make memories that last a
                lifetime.
                <br />
                *We are not a riding stable and do not offer riding lessons.
              </p>

              <Link
                href="#contact"
                className="btn btn-lg btn-accent mx-auto xl:mx-0"
              >
                Contact us
              </Link>
            </div>

            <div className="">
              <Image
                src="/assets/horsekid.png"
                alt=""
                width={700}
                height={700}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="stats section">
        <div className="container mx-auto">
          <div className="flex flex-col xl:flex-row gap-y-6 justify-between">
            <div className="stats__item flex-1 xl:border-r flex flex-col items-center">
              <div className="text-4xl xl:text-[64px] font-semibold text-accent-tertiary xl:mb-2">
                +1120
              </div>
              <div>Happy Clients</div>
            </div>

            <div className="stats__item flex-1 xl:border-r flex flex-col items-center">
              <div className="text-4xl xl:text-[64px] font-semibold text-accent-tertiary xl:mb-2">
                +126
              </div>
              <div>Special Events Hosted</div>
            </div>

            <div className="stats__item flex-1 xl:border-r flex flex-col items-center">
              <div className="text-4xl xl:text-[64px] font-semibold text-accent-tertiary xl:mb-2">
                +15
              </div>
              <div>Different Animals</div>
            </div>

            <div className="stats__item flex-1 flex flex-col items-center">
              <div className="text-4xl xl:text-[64px] font-semibold text-accent-tertiary xl:mb-2">
                +30
              </div>
              <div>Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="services ">
        <div className="bg-services bg-cover bg-no-repeat max-w-[1466px] mx-4 xl:mx-auto rounded-[20px] xl:pt-[70px] px-6 xl:px-0 relative h-[368px] flex items-center xl:items-start -z-10">
          <div className="container mx-auto">
            <div className="services__top flex items-center flex-col xl:flex-row xl:mb-[60px]">
              <h2 className="h2 text-white flex-1 mb-4 xl:mb-0 text-center xl:text-left">
                Traveling Pony Rides and Petting Zoo
              </h2>
              <p className=" text-medium text-bold text-white flex-1 text-center xl:text-left max-w-2xl xl:max-w-none">
                Experience the joy and excitement of a RunaboutFarm pony party
                at your next event! Let us bring smiles to the faces of children
                and adults alike!
                <br />
                Call us now to book your unforgettable celebration and inquire
                about pricing and availability.
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto mt-8 xl:-mt-[144px]">
          <div className="grid xl:grid-cols-4 gap-5 px-8 xl:px-0">
            <div className="services__item bg-white p-[30px] rounded-[10px] shadow-custom2 min-h-[288px] flex flex-col items-center text-center">
              <div className="mb-[15px]">
                <Image
                  src="/assets/icons/services/icon.svg"
                  alt=""
                  width={800}
                  height={800}
                />
              </div>

              <h3 className="h3 mb-[10px]">Birthday Parties</h3>

              <p className="font-light leading-normal max-w-[300px]">
                Make your child&apos;s birthday magical with a pony party! Our
                packages offer unforgettable experiences that will be cherished
                for years. Add more excitement with our petting zoo (extra fee).
                <br />* Please call for pricing and availabiliy.
              </p>
            </div>

            <div className="services__item bg-white p-[30px] rounded-[10px] shadow-custom2 min-h-[288px] flex flex-col items-center text-center">
              <div className="mb-[15px]">
                <Image
                  src="/assets/icons/services/icon-2.svg"
                  alt=""
                  width={70}
                  height={70}
                />
              </div>

              <h3 className="h3 mb-[10px]">Carnivals</h3>

              <p className="font-light leading-normal max-w-[300px]">
                Add some whimsy to your carnival with our pony party services!
                Our experienced staff will provide safe and enjoyable pony rides
                for guests of all ages to create cherished memories.
                <br />* Please call for pricing and availabiliy.
              </p>
            </div>

            <div className="services__item bg-white p-[30px] rounded-[10px] shadow-custom2 min-h-[288px] flex flex-col items-center text-center">
              <div className="mb-[15px]">
                <Image
                  src="/assets/icons/services/icon-3.svg"
                  alt=""
                  width={70}
                  height={70}
                />
              </div>

              <h3 className="h3 mb-[10px]">Fairs & Festivals</h3>

              <p className="font-light leading-normal max-w-[300px]">
                Add excitement to your event with our pony party entertainment!
                Our hands-on pony rides and petting zoo activities are perfect
                for any size fair/festival. Guaranteed to captivate attendees
                and make your event stand out.
                <br />* Please call for pricing and availabiliy.
              </p>
            </div>

            <div className="services__item bg-white p-[30px] rounded-[10px] shadow-custom2 min-h-[288px] flex flex-col items-center text-center">
              <div className="mb-[15px]">
                <Image
                  src="/assets/icons/services/icon-4.svg"
                  alt=""
                  width={70}
                  height={70}
                />
              </div>

              <h3 className="h3 mb-[10px]">Camp & Church Events</h3>

              <p className="font-light leading-normal max-w-[300px]">
                Add magic to your event with a pony party. Enjoy pony rides and
                hands-on activities for wholesome entertainment. Perfect for
                camps and churches. Leave a lasting impression.
                <br />* Please call for pricing and availabiliy.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="  section flex items-center justify-center w-full">
        <ImageSlider images={images} />
      </section>

      <section className="testimonial bg-testimonials bg-cover bg-right bg-no-repeat py-12 xl:min-h-[595px] xl:py-0">
        <div className="testimonial__constainer container mx-auto">
          <div className="flex flex-col items-center gap-x-14 xl:flex-row">
            <div className="max-w-[98%] xl:max-w-[710px]">
              <div className="swiper h-[400px]">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="h-full flex flex-col justify-center items-start">
                      <div className="max-w-[680px] mx-auto text-center xl:text-left">
                        <p className="font-light relative text-[22px] text-[#4c5354] leading-[190%] text-center xl:text-left before:bg-quoteLeft before:bg-contain before:bg-bottom before:inline-block before:top-0 before:w-10 before:h-10 before:bg-no-repeat after:bg-quoteRight after:bg-contain after:bg-bottom after:inline-block after:top-0 after:w-10 after:h-10 after:bg-no-repeat mb-7">
                          <span className="mx-2">
                            Many people have sighed for the &apos;good old
                            days&apos; and regretted the &apos;passing of the
                            horse. &apos; But today, when only those who like
                            horses own them, it is a far better time for horses.
                          </span>
                        </p>

                        <div className="text-[26px] text-[#4c5354] font-semibold">
                          -C.W. Anderson
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="swiper-pagination"></div>
              </div>
            </div>
            <div className="hidden xl:flex justify-end ml-20">
              <Image src="/assets/horse.png" alt="" width={400} height={400} />
            </div>
          </div>
        </div>
      </section>
      <section id="rescue" className="departments section">
        <div className="departments__bg bg-departments bg-cover xl:bg-auto bg-center bg-no-repeat max-w-[1466px] mx-4 xl:mx-auto rounded-[20px] px-6 xl:px-0 py-12 xl:pt-[80px] xl:pb-[90px] relative min-h-[588px] flex items-center">
          <div className="departments__container container mx-auto ">
            <div className="flex justify-between flex-col xl:flex-row gap-x-5">
              <div className="xl:w-[640px]">
                <h2 className="h2 mb-[20px] text-center xl:text-left">
                  Apache&apos;s Promise Inc.
                </h2>

                <p className="font-medium uppercase tracking-[2.24px] mb-[30px] text-black text-center xl:text-left">
                  In 1973, Lori made a promise to her first pony, Apache. After
                  41 years, her promise became a reality with the establishment
                  of &quot;Apache&apos;s Promise Animal Rescue.&quot;
                  Lori&apos;s commitment to saving animals has inspired many,
                  but it comes at a cost. However, her unwavering dedication to
                  helping animals in need serves as a reminder that even small
                  actions can make a big difference.
                </p>
                <a
                  href="https://www.facebook.com/apachespromiseinc/"
                  className="cursor-pointer text-black hover:text-accent transition-all"
                >
                  <i className="ri-facebook-circle-fill text-[40px]"></i>
                </a>
              </div>
              <div>
                <Image
                  src="/assets/apache.jpg"
                  alt=""
                  width={500}
                  height={500}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="about" className="team ">
        <div className="container mx-auto">
          <h2 className="team__title h2 mb-[50px] text-center xl:text-left">
            About Us
          </h2>

          <div className=" flex xl:flex-row gap-10 min-h-[400px]">
            <div className="flex w-full flex-col md:flex-row gap-9">
              <div className="flex-1 flex flex-col xl:flex-row">
                <div className="flex flex-col xl:flex-row items-center gap-[30px]">
                  <div className="flex-1">
                    <Image
                      src="/assets/Lori2.jpeg"
                      alt=""
                      width={400}
                      height={400}
                    />
                  </div>

                  <div className="flex-1 flex flex-col">
                    <h4 className="h4 mb-[10px]">Lori Russo</h4>

                    <div className="font-medium uppercase tracking-[2.24px] text-[#9ab4b7] mb-[20px]">
                      Owner
                    </div>

                    <p className="font-light mb-[26px] max-w-[320px]">
                      Lori&apos;s lifelong love for animals is truly inspiring.
                      Her unwavering dedication to working with horses and
                      animal rescues is a testament to her deep compassion for
                      all living beings. Since 1989, Lori has been spreading joy
                      and happiness through her pony parties, while continuing
                      to make a positive impact on the lives of animals in
                      need.Lori has been involved with animals since she was a
                      little girl, and they are her pride and joy. She has
                      dedicated years to working with horses and horse rescues,
                      as well as many other types of animal rescues.
                    </p>
                    <div className="flex items-center text-[30px] gap-x-5 text-accent-tertiary">
                      <a
                        href="https://www.facebook.com/p/Runabout-Farm-100063766294408/"
                        className="cursor-pointer hover:text-accent transition-all"
                      >
                        <i className="ri-facebook-circle-fill text-[50px]"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex w-full flex-col md:flex-row gap-9">
              <div className="flex-1 flex flex-col xl:flex-row">
                <div className="flex flex-col xl:flex-row items-center gap-[30px]">
                  <div className="flex-1">
                    <Image
                      src="/assets/casper.jpeg"
                      alt=""
                      width={400}
                      height={400}
                    />
                  </div>

                  <div className="flex-1 flex flex-col">
                    <div className="font-medium uppercase tracking-[2.24px] text-[#9ab4b7] mb-[20px]"></div>

                    <p className="font-light mb-[26px] max-w-[320px]">
                      The team at Runabout Farm is a shining example of
                      unwavering commitment to the welfare of animals in need.
                      For many years, they have been rescuing horses, ponies,
                      and various other animals from dire situations, such as
                      slaughterhouses and abusive environments. Currently, the
                      farm serves as a sanctuary to a diverse range of animals.
                      Through their dedication and hard work, Lori and her team
                      not only provide unforgettable experiences for the
                      community, but also offer a lifeline to animals that are
                      in distress.
                      <br /> *Donations are gratefully accepted to support their
                      ongoing mission of rescue and care.
                    </p>
                    <div className="flex items-center text-[30px] gap-x-5 text-accent-tertiary">
                      {/* <a
                        href="https://www.facebook.com/p/Runabout-Farm-100063766294408/"
                        className="cursor-pointer hover:text-accent transition-all"
                      >
                        <i className="ri-facebook-circle-fill text-[40px]"></i>
                      </a> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FaqSection />
      <section className=" flex items-center justify-center w-full">
        <ImageSlider images={images2} />
      </section>

      <section
        id="contact"
        className="newsletter bg-accent mt-12 py-12 flex items-center relative overflow-hidden"
      >
        <div className="absolute left-0 bottom-0">
          <Image
            src="/assets/img/pattern.svg"
            alt=""
            width={400}
            height={400}
          />
        </div>

        <div className=" container mx-auto">
          <div className="flex flex-col mb-10 lg:mb-0 lg:flex-row lg:items-center lg:gap-x-[58px]">
            <div className="flex-1 z-10 text-center md:text-left">
              <div className="text-base uppercase text-white tracking-[2.24px] font-medium">
                Got Questions? <br />
                Please feel free to reach out
              </div>
              <h1 className="h1 mb-4 text-white">Contact Us</h1>
            </div>

            <EmailSection />
          </div>
        </div>
      </section>

      <footer className="footer pt-12 xl:pt-[150px]">
        <div className="container mx-auto pb-12 xl:pb-[100px]">
          <div className="flex flex-col xl:flex-row gap-x-5 gap-y-10">
            <div className="footer__item flex-1">
              <a href="">
                <Image
                  className="mb-[30px]"
                  src="/assets/img/logo1.png"
                  alt=""
                  width={300}
                  height={300}
                />
              </a>

              <div className="flex flex-col gap-y-3 mb-10">
                <div className="flex items-center gap-x-[6px]">
                  <i className="ri-map-pin-fill text-[24px] text-accent"></i>
                  <div> Westerchester County and Fairfield County</div>
                </div>
                <div className="flex items-center gap-x-[6px]">
                  <i className="ri-mail-fill text-[24px] text-accent"></i>
                  <div>runaboutafarm@hotmail.com</div>
                </div>
                <div className="flex items-center gap-x-[6px]">
                  <i className="ri-phone-fill text-[24px] text-accent"></i>
                  <div>(203)223-1212</div>
                </div>
              </div>

              <div className="flex gap-[14px] text-[30px]">
                <div className="p-[10px] rounded-[10px] shadow-custom2 text-accent-tertiary hover:text-accent cursor-pointer transition-all">
                  <a
                    href="https://www.facebook.com/p/Runabout-Farm-100063766294408/"
                    className="cursor-pointer hover:text-accent transition-all"
                  >
                    <i className="ri-facebook-circle-fill text-[30px]"></i>
                  </a>
                </div>
              </div>
            </div>
                      <div>
                        <img src="/assets/image015.jpg" alt="Image" width={400} length={500} />
                      </div>
            <div className="footer__item flex-1 lg:pl-20">
              <h4 className="h4 mb-5">Quick Links</h4>
              <div className="flex gap-x-5">
                <ul className="flex-1 flex flex-col gap-y-5">
                  <li>
                    <a
                      href="#services"
                      className="hover:text-accent transition-all"
                    >
                      Our Services
                    </a>
                  </li>
                  <li>
                    <a
                      href="#rescue"
                      className="hover:text-accent transition-all"
                    >
                      Animal & Horse Rescue
                    </a>
                  </li>
                  <li>
                    <a
                      href="#about"
                      className="hover:text-accent transition-all"
                    >
                      About
                    </a>
                  </li>

                  <li>
                    <a
                      href="#contact"
                      className="hover:text-accent transition-all"
                    >
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="py-[30px] border-t">
          <div className="container mx-auto text-center">
            <div className="font-light text-base">
              &copy; 2024 All rights reserved. Developed by:
              <a
                href="https://www.gcastromonte.com"
                target="_blank"
                rel="noopener noreferrer"
           
       
              >
                <img
                  src="/../assets/1.png"
                  alt="Your Logo"
                  className="logo-image"
                  width={200}
                  length={200}
                />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
