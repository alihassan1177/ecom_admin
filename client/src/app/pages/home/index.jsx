import MainLayout from "../../layouts/MainLayout";
import BannerImg from "../../assets/banner.jpg";
import { Link } from "react-router-dom";
import BootsImg from "../../assets/boot.jpeg";
import JacketImg from "../../assets/jacket.jpg";
import { HiArrowRight } from "react-icons/hi";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function BannerSection() {
  return (
    <section
      style={{
        backgroundImage: `url(${BannerImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="h-[568px] grid place-items-center"
    >
      <div className="flex flex-col items-center md:items-start gap-4 container md:text-left text-center">
        <h1 className="text-white font-bold md:text-6xl text-5xl max-w-lg">
          Premium Quality Leather Products
        </h1>
        <p className="text-slate-300 max-w-lg">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati
          rem nisi aut modi corporis iste veritatis quam, odio aspernatur illum.
        </p>
        <div className="flex items-center gap-2">
          <Link
            className="btn primary bg-red-600 hover:bg-red-800"
            to="/products"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </section>
  );
}

function CategorySection() {
  return (
    <section className="pt-14 container">
      <h2 className="main-heading mb-7">Our Categories</h2>
      <div className="grid sm:grid-cols-2 gap-6">
        <CategoryComponent img={BootsImg} title="Leather Boots" />
        <CategoryComponent img={JacketImg} title="Leather Jackets" />
      </div>
    </section>
  );
}

function CategoryComponent({ img, title }) {
  return (
    <div className="relative block hover:scale-105 transition-all" to="/">
      <img
        className="w-full md:h-96 h-52 object-cover"
        src={img}
        alt="Category"
      />
      <p className="md:absolute inset-0 bg-black md:opacity-0 transition-all md:hover:opacity-90 grid place-items-center text-white font-bold text-2xl py-2 md:text-4xl">
        <span className="flex gap-3 items-center">
          {title} <HiArrowRight />
        </span>
      </p>
    </div>
  );
}

function ProductSection() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="py-14 container">
      <h2 className="main-heading mb-7">Our Products</h2>

      <Slider className="w-full bg-black" {...settings}>
        <CategoryComponent img={BootsImg} title="Leather Boots" />
        <CategoryComponent img={JacketImg} title="Leather Jackets" />
        <CategoryComponent img={BootsImg} title="Leather Boots" />
        <CategoryComponent img={JacketImg} title="Leather Jackets" />
      </Slider>
    </section>
  );
}

export function ProductComponent() {
  return <h1>Products</h1>;
}

function AboutSection() {
  return (
    <section className="py-14 bg-slate-100">
      <div className="container">
        <h2 className="main-heading mb-7">About KingsDen</h2>
        <p className="font-medium text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum vero
          asperiores quos temporibus nesciunt fugiat quod eum sed debitis
          voluptatem aliquid neque, dignissimos perferendis eius sapiente est
          laboriosam eveniet praesentium in nemo. Quasi minima impedit eum
          incidunt at iusto ab, quos perferendis dignissimos quo nisi,
          repudiandae repellat laudantium quisquam exercitationem totam vel
          accusamus, mollitia molestias nulla? Sequi cumque voluptate minus
          delectus est voluptatibus iure, quia temporibus excepturi, pariatur
          quam vero facere nemo omnis officiis hic nobis, saepe molestias fuga.
          Quasi doloribus esse nihil, quibusdam exercitationem nobis sequi harum
          laborum velit, sint ad aliquam eum perspiciatis corporis fugit
          repudiandae consectetur hic.
        </p>
      </div>
    </section>
  );
}

export default function Homepage() {
  return (
    <MainLayout>
      <BannerSection />
      <CategorySection />
      <ProductSection />
      <AboutSection />
    </MainLayout>
  );
}
