import Image from "next/image";
import "../styles/input.css";
import Link from "next/link";
import ImageSlider from "@/components/imageSlider";
import EmailSection from "@/components/emailSection";

export default function Home() {
  const images = [
    { src: "/assets/carousel1.jpg", alt: "Image 1" },
    { src: "/assets/carousel2.jpeg", alt: "Image 2" },
    { src: "/assets/carousel3.jpg", alt: "Image 3" },
    { src: "/assets/carousel4.jpg", alt: "Image 4" },
    { src: "/assets/carousel5.jpg", alt: "Image 5" },
    { src: "/assets/carousel6.jpg", alt: "Image 6" },
    { src: "/assets/carousel7.jpg", alt: "Image 7" },
    { src: "/assets/carousel8.jpeg", alt: "Image 8" },
    { src: "/assets/carousel9.jpg", alt: "Image 9" },
    { src: "/assets/carousel10.jpeg", alt: "Image 10" },
    { src: "/assets/carousel11.jpeg", alt: "Image 11" },
    { src: "/assets/carousel12.jpeg", alt: "Image 12" },
  ];
  const images2 = [
    { src: "/assets/carousel1.jpg", alt: "Image 1" },
    { src: "/assets/carousel2.jpeg", alt: "Image 2" },
    { src: "/assets/carousel3.jpg", alt: "Image 3" },
    { src: "/assets/carousel4.jpg", alt: "Image 4" },
    { src: "/assets/carousel5.jpg", alt: "Image 5" },
    { src: "/assets/carousel6.jpg", alt: "Image 6" },
    { src: "/assets/carousel7.jpg", alt: "Image 7" },
    { src: "/assets/carousel8.jpeg", alt: "Image 8" },
    { src: "/assets/carousel9.jpg", alt: "Image 9" },
    { src: "/assets/carousel10.jpeg", alt: "Image 10" },
    { src: "/assets/carousel11.jpeg", alt: "Image 11" },
    { src: "/assets/carousel12.jpeg", alt: "Image 12" },
  ];
  return (
    <div>
      <header id="home" className="py-8 lg:pt-6 lg:pb-14">
        <div className="container mx-auto lg:relative flex flex-col lg:flex-row lg:justify-between gap-y-4 lg:gap-y-0">
          <div className="flex justify-center lg:justify-normal ">
            <a href="#">
              <Image
                src="/assets/img/logo3.png"
                alt=""
                width={200}
                height={200}
              />
            </a>
          </div>

          <div className="flex items-center flex-col gap-y-4 lg:flex-row lg:gap-x-10 lg:gap-y-0">
            <div className="flex justify-center items-center gap-x-2 lg:justify-normal">
              <i className="ri-map-pin-2-fill text-2xl text-accent"></i>
              <div className="text-secondary">
                Lower Westchester County and Fairfield County
              </div>
            </div>

            <div className="flex justify-center items-center gap-x-2 lg:justify-normal">
              <i className="ri-phone-fill text-2xl text-accent"></i>
              <div className="text-secondary">(203)223-1212</div>
            </div>
            <div>
              <button className="btn btn-sm btn-outline w-[240px] lg:w-auto mx-auto lg:mx-0">
                Book now
              </button>
            </div>

            <nav className="mnav bg-white fixed w-[300px] top-0 h-screen -left-[300px] shadow-2xl lg:hidden transition-all duration-300 z-20">
              <div className="mnav__close-btn bg-primary w-8 h-8 relative -right-full top-8 flex justify-center items-center rounded-tr-lg rounded-br-lg cursor-pointer transition-all">
                <i className="mnav__close-btn-icon ri-arrow-right-s-line text-2xl text-white"></i>
              </div>

              <div className="px-12 flex flex-col gap-y-12 h-full">
                <ul className="flex flex-col gap-y-5">
                  <li>
                    <Link
                      href="#home"
                      className="text-secondary hover:text-accent transition-all duration-300"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-secondary hover:text-accent transition-all duration-300"
                    >
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-secondary hover:text-accent transition-all duration-300"
                    >
                      Animal & Horse Rescue
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-secondary hover:text-accent transition-all duration-300"
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-secondary hover:text-accent transition-all duration-300"
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>

                <form className="relative flex gap-x-[10px]">
                  <label for="mnav-search-input">
                    <i className="ri-search-line text-2xl text-accent"></i>
                  </label>
                  <input
                    type="text"
                    id="mnav-search-input"
                    placeholder="Search..."
                    className="outline-none w-[160px] border-b-2 focus:border-b-2 focus:border-accent placeholder:italic"
                  />
                </form>
              </div>
            </nav>

            <nav className="bg-white absolute w-full left-0 -bottom-[86px] shadow-custom1 h-16 rounded-[10px] hidden lg:flex lg:items-center lg:justify-between lg:px-[50px]">
              <ul className="flex gap-x-4">
                <li>
                  <a
                    href="#"
                    className="border-r pr-4 text-secondary hover:text-accent transition-all duration-300"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="border-r pr-4 text-secondary hover:text-accent transition-all duration-300"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="border-r pr-4 text-secondary hover:text-accent transition-all duration-300"
                  >
                    Animal & Horse Rescue
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="border-r pr-4 text-secondary hover:text-accent transition-all duration-300"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-secondary hover:text-accent transition-all duration-300"
                  >
                    Contact
                  </a>
                </li>
              </ul>

              <form className="relative flex gap-x-[10px]">
                <label
                  for="search-input"
                  className="flex justify-center items-center group"
                >
                  <i className="ri-search-line text-2xl text-accent"></i>
                </label>
                <input
                  type="text"
                  id="search-input"
                  placeholder="Search..."
                  className="outline-none w-[100px] focus:w-[180px] focus:border-b-2 focus:border-accent placeholder:italic placeholder:text-base transition-all duration-150"
                />
              </form>
            </nav>
          </div>
        </div>
      </header>

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
                families in Fairfield and Lower Westchester County. Book with us
                today to experience the magic and make memories that last a
                lifetime.
                <br />
                *We are not a riding stable and do not offer riding lessons.
              </p>

              <button className="btn btn-lg btn-accent mx-auto xl:mx-0">
                Contact us
              </button>
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

      <section className="stats py-12">
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

      <section className="services ">
        <div className="bg-services bg-cover bg-no-repeat max-w-[1466px] mx-4 xl:mx-auto rounded-[20px] xl:pt-[70px] px-6 xl:px-0 relative h-[368px] flex items-center xl:items-start -z-10">
          <div className="container mx-auto">
            <div className="services__top flex items-center flex-col xl:flex-row xl:mb-[60px]">
              <h2 className="h2 text-white flex-1 mb-4 xl:mb-0 text-center xl:text-left">
                Traveling Petting Zoo and Pony Parties
              </h2>
              <p className="text-white flex-1 text-center xl:text-left max-w-2xl xl:max-w-none">
                Experience the joy and excitement of a RunaboutFarm pony party
                at your next event. Contact us now to book your unforgettable
                celebration and inquire about pricing and availability. Let us
                bring smiles to the faces of children and adults alike!
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
                Celebrate your child&apos;s special day in style with a pony
                party! Our birthday party packages provide a magical experience
                that will be remembered for years to come. Add an extra touch of
                excitement with our optional petting zoo featuring small animals
                (additional fee applies).
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
                Add a touch of whimsy to your carnival with our pony party
                services. Let the laughter and joy of pony rides delight guests
                of all ages as they create cherished memories at your event. Our
                experienced staff will ensure a safe and enjoyable experience
                for everyone.
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
                Make your fair or festival stand out from the crowd with our
                pony party entertainment. Whether it&apos;s a small community
                event or a large-scale festival, our pony rides will captivate
                attendees and add an extra element of excitement. With hands-on
                experiences for children and optional petting zoo activities,
                our pony parties are guaranteed to be a hit.
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
                Infuse your camp or church event with the magic of a pony party.
                Our engaging pony rides and hands-on activities provide
                wholesome entertainment for campers and congregants alike.
                Whether it&apos;s a summer camp adventure or a community church
                gathering, our pony parties are sure to leave a lasting
                impression.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className=" flex items-center justify-center w-full">
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
                            Riding a horse is not a gentle hobby, to be picked
                            up and laid down like a game of Solitaire It is a
                            grand passion.
                          </span>
                        </p>

                        <div className="text-[26px] text-[#4c5354] font-semibold">
                          -Ralph Waldo Emerson
                        </div>
                      </div>
                    </div>
                  </div>

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

      <section className="team section">
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
                        <i className="ri-facebook-circle-fill"></i>
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
                      src="/assets/horse.JPG"
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
                      little girl, and they are her pride and joy.
                    </p>
                    <div className="flex items-center text-[30px] gap-x-5 text-accent-tertiary">
                      <a
                        href="https://www.facebook.com/p/Runabout-Farm-100063766294408/"
                        className="cursor-pointer hover:text-accent transition-all"
                      >
                        <i className="ri-facebook-circle-fill"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="faq">
        <div className="container mx-auto">
          <h2 className="faq__title h2 text-center mb-[50px]">
            We&apos;ve got answers
          </h2>

          <div className="max-w-5xl mx-auto">
            <div className="faq__item px-[30px] pt-7 pb-4 border-b cursor-pointer select-none">
              <div className="flex items-center justify-between mb-[10px]">
                <h4 className="h4">Where do all the animals come from ?</h4>

                <div className="faq__btn text-accent">
                  <i className="ri-add-fill text-2xl"></i>
                </div>
              </div>

              <div className="faq__answer h-0 overflow-hidden">
                <p className="font-light">
                  Runabout Farm has been saving horses, ponies, and other
                  animals from slaughterhouses and abusive homes for many years.
                  The farm purchases these animals and provides them with
                  veterinary care and medication if needed. Only after their
                  physical and mental health has been fully restored, they are
                  accepted into the pony party program
                </p>
              </div>
            </div>

            <div className="faq__item px-[30px] pt-7 pb-4 border-b cursor-pointer select-none">
              <div className="flex items-center justify-between mb-[10px]">
                <h4 className="h4">Do you breed the animals?</h4>

                <div className="faq__btn text-accent">
                  <i className="ri-add-fill text-2xl"></i>
                </div>
              </div>

              <div className="faq__answer h-0 overflow-hidden">
                <p className="font-light">
                  We choose to rescue and rehabilitate animals in need,
                  showering them with love and kindness, rather than contribute
                  to their overpopulation through breeding. Our commitment to
                  providing them with a forever home inspires us every day.
                </p>
              </div>
            </div>

            <div className="faq__item px-[30px] pt-7 pb-4 border-b cursor-pointer select-none">
              <div className="flex items-center justify-between mb-[10px]">
                <h4 className="h4">
                  What happens to all the animals rescued that aren&apos;t
                  physically able to be on the petting zoo?
                </h4>

                <div className="faq__btn text-accent">
                  <i className="ri-add-fill text-2xl"></i>
                </div>
              </div>

              <div className="faq__answer h-0 overflow-hidden">
                <p className="font-light">
                  Any horses and ponies that do not meet our program&apos;s
                  standards are allowed to live out their lives happily in a
                  pasture at Runabout Farm. Currently, Runabout Farm is home to
                  several animals, including horses, ponies, goats, ferrets,
                  chickens, ducks, Guinea pigs, and rabbits.
                </p>
              </div>
            </div>

            <div className="faq__item px-[30px] pt-7 pb-4 border-b cursor-pointer select-none">
              <div className="flex items-center justify-between mb-[10px]">
                <h4 className="h4">Question ?</h4>

                <div className="faq__btn text-accent">
                  <i className="ri-add-fill text-2xl"></i>
                </div>
              </div>

              <div className="faq__answer h-0 overflow-hidden">
                <p className="font-light">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic,
                  ipsam est cumque repellendus omnis, quam magnam sequi autem
                  nam aliquam pariatur illo dignissimos magni! Cumque nihil quia
                  animi obcaecati autem!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="departments section">
        <div className="departments__bg bg-departments bg-cover xl:bg-auto bg-center bg-no-repeat max-w-[1466px] mx-4 xl:mx-auto rounded-[20px] px-6 xl:px-0 py-12 xl:pt-[80px] xl:pb-[90px] relative min-h-[588px] flex items-center">
          <div className="departments__container container mx-auto ">
            <div className="flex justify-between flex-col xl:flex-row gap-x-5">
              <div className="xl:w-[640px]">
                <h2 className="h2 mb-[20px] text-center xl:text-left">
                  Apache&apos;s Promise Inc.
                </h2>

                <p className="mb-[30px] text-black font-light text-center xl:text-left">
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
                  <i className="ri-facebook-circle-fill text-[30px]"></i>
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

      <section className=" flex items-center justify-center w-full">
        <ImageSlider images={images2} />
      </section>

      <section className="newsletter bg-accent mt-12 py-12 flex items-center relative overflow-hidden">
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
                Got Questions? Please feel free to reach out
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
                  src="/assets/img/logo3.png"
                  alt=""
                  width={400}
                  height={400}
                />
              </a>

              <div className="flex flex-col gap-y-3 mb-10">
                <div className="flex items-center gap-x-[6px]">
                  <i className="ri-map-pin-fill text-[24px] text-accent"></i>
                  <div>Lower Westerchester County and Fairfield County</div>
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
                  <i className="ri-facebook-circle-fill"></i>
                </div>
              </div>
            </div>

            <div className="footer__item flex-1">
              <h4 className="h4 mb-5">Quick Links</h4>
              <div className="flex gap-x-5">
                <ul className="flex-1 flex flex-col gap-y-5">
                  <li>
                    <a href="#" className="hover:text-accent transition-all">
                      Our Services
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-accent transition-all">
                      Animal & Horse Rescue
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-accent transition-all">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-accent transition-all">
                      Faqs
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-accent transition-all">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d375.8918402997353!2d-73.55992786719159!3d41.08790297039473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2a3d551534fe1%3A0x6e12451a2652ec5b!2sRunabout%20Farm%20Pony%20Rides!5e0!3m2!1sen!2sus!4v1709758366916!5m2!1sen!2sus"
                width="600"
                height="450"
                style={{ border: "0" }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="py-[30px] border-t">
          <div className="container mx-auto text-center">
            <div className="font-light text-base">
              &copy; 2024 All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
