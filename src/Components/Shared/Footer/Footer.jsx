import footerLogo from "../../../assets/Footer-Logo.png";

const Footer = () => {
  return (
    <footer className="footer p-10 bg-[#fbffdc]  my-20 rounded-3xl font-Cambria text-[#0a4d7b] font-bold text-xl">
      <div>
        <img src={footerLogo} className="md:w-64 md:h-30" alt="Logo" />
      </div>
      <div>
        <span className="footer-title text-[#e40e0e] text-2xl">Shop</span>
        <a className="link link-hover">Action Figures</a>
        <a className="link link-hover">Collectibles</a>
        <a className="link link-hover">Accessories</a>
        <a className="link link-hover">New Releases</a>
      </div>
      <div>
        <span className="footer-title text-[#e40e0e] text-2xl">Categories</span>
        <a className="link link-hover">Superheroes</a>
        <a className="link link-hover">Sci-Fi</a>
        <a className="link link-hover">Anime & Manga</a>
        <a className="link link-hover">TV & Movies</a>
      </div>

      <div>
        <span className="footer-title text-[#e40e0e] text-2xl">
          Customer Service
        </span>
        <a className="link link-hover">Order Tracking</a>
        <a className="link link-hover">Warranty Information</a>
        <a className="link link-hover">Payment Options</a>
        <a className="link link-hover">Product Support</a>
      </div>

      <div>
        <span className="footer-title text-[#e40e0e] text-2xl">
          Customer Support
        </span>
        <a className="link link-hover">FAQ</a>
        <a className="link link-hover">Shipping & Returns</a>
        <a className="link link-hover">Contact Us</a>
      </div>
      <div>
        <span className="footer-title text-[#e40e0e] text-2xl">Newsletter</span>
        <div className="form-control w-80">
          <label className="label">
            <span className="label-text">Subscribe to our newsletter</span>
          </label>
          <div className="relative">
            <input
              type="email"
              placeholder="Enter your email address"
              className="input input-bordered w-full pr-16"
            />
            <button className="btn absolute top-0 right-0 rounded-l-none bg-[#FF4A4A] hover:bg-[#98eecc] border-0 font-bold text-black">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
