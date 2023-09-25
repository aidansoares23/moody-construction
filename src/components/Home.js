import React from "react";
import "./Home.css";
import Contact from "./Contact.js";
import Services from "./Services.js";

function Home() {
  // Function to scroll to the about section
  const scrollToAbout = () => {
    const aboutElement = document.getElementById("about");
    aboutElement.scrollIntoView({ behavior: "smooth" });
  };

  // Function to scroll to the contact section
  const scrollToContact = () => {
    const contactElement = document.getElementById("contact");
    contactElement.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="home-container">
      <div className="header-container">
        <div className="header-wrapper">
          <div className="header-text">
            <h1>Welcome to JD Moody Construction</h1>
            <a className="btn" href="tel:2144995730">
              Call Us <i class="fa-solid fa-phone"></i>
            </a>
            <p>Proudly Serving San Luis Obispo and Neighboring Areas</p>
            <div className="buttons-container">
              <button className="btn" onClick={scrollToAbout}>
                Learn More
              </button>
              <button className="btn" onClick={scrollToContact}>
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="body-wrapper">
        <div className="services-container">
          <div className="services-header">
            <h1>Featured Services</h1>
            <p>
              We're ready to tackle any project coming our way. From bathroom
              remodeling to large scale property maintenance, there's nothing
              stopping JD Moody Construction from making your dreams, a reality
            </p>

            <Services />

            <h4 className="no-job">
              {" "}
              No job is too big or too small. <br />
              Please contact us regarding your specific needs!
            </h4>
          </div>
        </div>
        <br />
        <div className="about-container" id="about">
          <br />
          <div className="Who Are We?">
            <h2>Meet JD Moody Construction</h2>
            <p>
              JD Moody Construction is a construction and contracting firm based
              in San Luis Obispo, California. Founded with a passion for
              construction and a commitment to delivering top-notch services,
              we've been serving the community for over two decades. Our team
              brings together a diverse set of skills, enabling us to handle
              projects of all sizes and complexities. As a versatile
              construction company, we specialize in property maintenance,
              remodeling, and both commercial and residential new construction
              projects. We're proud of our ability to transform visions into
              reality, whether it involves revitalizing existing spaces or
              crafting innovative designs for new builds. Our dedication to
              quality, professionalism, and customer satisfaction drives
              everything we do. We take on projects with a focus on delivering
              excellence, attention to detail, and a deep commitment to meeting
              and exceeding our clients' expectations. JD Moody Construction is
              your trusted partner for construction needs in San Luis Obispo
              County and the surrounding areas. When you choose us, you're
              choosing experience, quality, and a team that's passionate about
              building dreams.
            </p>
          </div>
          <br />
          <div className="why-choose-us?">
            <h2>Why Choose Us?</h2>
            <ul className="why-choose-us-list">
              <li>
                <strong>Versatility:</strong> Our team boasts expertise in
                various trades, including flooring, painting, kitchen, and bath
                remodels, fences, ADUs, decks, and commercial tenant
                improvements. Whether it's a small repair or a major renovation,
                we have the skills to handle it all.
              </li>
              <li>
                <strong>Quality Craftsmanship:</strong> We take immense pride in
                delivering high-quality workmanship. Our attention to detail
                ensures that every project we complete meets the highest
                standards of quality and durability.
              </li>
              <li>
                <strong>Multi-Family Specialists:</strong> We specialize in
                multi-family and rental property remodels, offering services
                tailored to the unique needs of property owners. From
                maintenance to modernization, we enhance the value of your
                investment.
              </li>
              <li>
                <strong>Exceptional Team:</strong> Our experienced and dedicated
                team is the backbone of our success. With a wealth of knowledge
                and a passion for construction, we bring your vision to life.
              </li>
              <li>
                <strong>Customer-Centric:</strong> Customer satisfaction is our
                ultimate goal. We work closely with you to understand your
                needs, provide transparent communication throughout the project,
                and ensure your vision becomes a reality.
              </li>
            </ul>
            <p className="why-us-summary">
              Proudly serving San Luis Obispo County and surrounding areas,
              we're your trusted local partner for all construction needs.
              Discover the JD Moody Construction difference – where experience,
              quality, and customer focus come together to create exceptional
              results.
            </p>
          </div>
          <br />
        </div>

        <div className="contact-container" id="contact">
          <div className="contact-header">
            <h1>Contact Us Today!</h1>
          </div>
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default Home;

