import { NavLink } from "react-router-dom";
import mobile1 from "../../../../public/assets/mobile1.avif";
import mobile2 from "../../../../public/assets/mobile2.avif";
import mobile3 from "../../../../public/assets/mobile3.avif";

const MobileApplication = () => {
  // console.log("PortfolioSublinks MobileApplication render");

  const arrob = [
      {
        id: 1,
        img1: mobile1,
        img2: mobile2,
        img3: mobile3,
        title: "Mobile Application",
        subheading: "Build a User-Friendly Grocery E-Commerce APP",
        content1:
          "SgGrocer is a comprehensive mobile application designed to simplify your grocery shopping experience. With a focus on delivering high-quality, fresh produce, including vegetables and fruits, alongside a range of dairy products and freshly baked goods, SgGrocer ensures that you have access to the best groceries available, right at your fingertips. The app provides an easy, convenient way to shop for everyday essentials, offering a wide variety of items from trusted brands and local suppliers.",
        content2:
          "One of the key features of SgGrocer is its commitment to providing customers with value through regular deals and promotions. Additionally, the reorder function allows you to quickly purchase your most frequently bought items, making your shopping experience even more efficient and time-saving.",
        content3:
          "SgGrocer is designed to cater to the needs of busy individuals and families, offering a seamless shopping experience from start to finish. The app’s intuitive interface ensures that you can easily navigate through different categories, find your preferred products, and have them delivered directly to your door with just a few taps. Whether you're looking for fresh, locally sourced produce or your favorite bakery treats, SgGrocer delivers a hassle-free, reliable solution for all your grocery needs."
      },]

  return (
    <>
      <div className="container mt-4">
        <div className="row">
          {arrob.map((v, i) => (
            <div key={i} className="col-sm-12 col-md-4 mb-3">
              <NavLink
                to={`/portfolio/mobileapplication/project`}
                state={{ product: v, index: i }}
                className="text-decoration-none"
              >
                <div className="card p-3">
                  <img
                    src={v.img1}
                    alt={`Product ${i}`}
                    className="img-fluid"
                    style={{ height: "300px", objectFit: "contain" }}
                  />
                </div>
                <p className="text-black text-center p-2">{v.subheading}</p>
              </NavLink>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MobileApplication;