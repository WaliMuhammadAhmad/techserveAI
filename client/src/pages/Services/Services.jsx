import React, { useEffect, useState } from "react";
import "./Services.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Button from "../../components/Button";

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // Array of states to manage expanded status for each section
  const [expandedSections, setExpandedSections] = useState([
    false,
    false,
    false,
    false,
  ]);

  // Toggle function to expand/collapse specific sections
  const toggleReadMore = (index) => {
    setExpandedSections((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  return (
    <>
      <Navbar />
      <div>
        <div id='check'>
          <div id='heading'>
            <h1>Services and products</h1>
            <p>Everything from one source.</p>
          </div>
          <div id='second'>
            <h2>Our Services</h2>
            <p>as a company</p>
          </div>

          <hr
            style={{
              border: "none",
              borderTop: "2px solid black",
              margin: "20px 0",
            }}
          />
        </div>

        <div id='check2'>
          <div id='proheading'>
            <h2>Products</h2>
          </div>
          <div id='productssection'>
            <div id='pro1'>
              <h2>Procure Pro</h2>
              <div id='proimg'>
                <img src='./img/logos/logo_removebg.png' alt=''></img>
              </div>
              <div id='upoints'>
                <ul>
                  <li>Cross-platform integration</li>
                  <li>Full Custom</li>
                  <li>appointment management</li>
                  <li>Individual training data</li>
                </ul>
              </div>

              <div id='upo'>
                <div id='lobutton'>
                  <Button text='To the product' link='/contact' />
                </div>
              </div>
            </div>

            <div id='pro1'>
              <h2>Intelligestics</h2>
              <div id='proimg'>
                <img src='./img/logos/logo_removebg.png' alt=''></img>
              </div>
              <div id='upoints'>
                <ul>
                  <li>Cross-platform integration</li>
                  <li>Full Custom</li>
                  <li>appointment management</li>
                  <li>Individual training data</li>
                </ul>
              </div>

              <div id='upo'>
                <div id='lobutton'>
                  <Button text='To the product' link='/contact' />
                </div>
              </div>
            </div>

            <div id='pro2'>
              <h2>SmartProp</h2>
              <div id='proimg'>
                <img src='./img/logos/dd.png' alt=''></img>
              </div>
              <div id='upoints'>
                <ul>
                  <li>Cross-platform integration</li>
                  <li>Full Custom</li>
                  <li>appointment management</li>
                  <li>Individual training data</li>
                </ul>
              </div>

              <div id='upoo'>
                <div id='lobutton'>
                  <Button text='To the product' link='/contact' />
                </div>
              </div>

              <div id='spacer'></div>
            </div>
          </div>
        </div>

        <div id='check3'>
          <div id='proheading'>
            <h2>Services</h2>

            <h3>From analysis to the finished product.</h3>
          </div>

          <div id='upperservices'>
            <div id='serviceCard'>
              <h2>Data Mining and Engineering</h2>
              <div className='vertical'></div>
              <div id='lo'>
                <p>
                  {expandedSections[0]
                    ? `At Techiserve.ai, we know that your data holds untapped potential, waiting to be discovered. Our Data Mining & Engineering services are designed to help you make sense of vast amounts of information, so you can focus on driving your business forward. We work closely with you to build a reliable and scalable data infrastructure, ensuring that your data is clean, accessible, and ready to power critical decisions. We don’t just extract data—we mine it for insights that can transform your operations. Whether it's uncovering hidden patterns, improving operational workflows, or gaining deeper insights into customer behavior, our goal is to turn your data into a powerful asset. From structuring and organizing large datasets to integrating complex data sources, we handle the heavy lifting, so you can concentrate on what really matters—making informed, impactful decisions that drive success.`
                    : `At Techiserve.ai, we know that your data holds untapped potential, waiting to be discovered. Our Data Mining & Engineering services are designed to help you make sense of vast amounts of information...`}
                  <button
                    onClick={() => toggleReadMore(0)}
                    className='read-more-btn'>
                    {expandedSections[0] ? "Read Less" : "Read More"}
                  </button>
                </p>

                <div id='lobutton'>
                  <Button text='Contact Our Team' link='/contact' />
                </div>
              </div>
            </div>
          </div>

          <div id='upperservices'>
            <div id='serviceCard2'>
              <h2>Artificial Intelligence & Machine Learning</h2>
              <div class='vertical'></div>
              <div id='lo'>
                <p>
                  {expandedSections[1]
                    ? `Artificial Intelligence (AI) and Machine Learning (ML) aren't just buzzwords—they’re tools that can revolutionize your business, and at Techiserve.ai, we’re here to make that a reality for you. We believe AI should be accessible and transformative for every business, no matter the size. By partnering with us, you'll have access to tailored AI and ML solutions that automate tasks, predict trends, and optimize operations with ease. Our team collaborates closely with you to understand your challenges and deliver AI solutions that are aligned with your goals. Whether it’s personalizing customer experiences, streamlining supply chains, or boosting operational efficiency, our AI and ML models are built to solve your specific problems. With Techiserve.ai, you’re not just adopting technology—you’re leveraging it to stay ahead of the competition and future-proof your business.`
                    : `Artificial Intelligence (AI) and Machine Learning (ML) aren't just buzzwords—they’re tools that can revolutionize your business, and at Techiserve.ai, we’re here to make that a reality for you. We believe AI should be accessible and transformative for every business, no matter the size. By partnering with us...`}
                  <button
                    onClick={() => toggleReadMore(1)}
                    className='read-more-btn'>
                    {expandedSections[1] ? "Read Less" : "Read More"}
                  </button>
                </p>
                <div id='lobutton'>
                  <Button id='kol' text='Contact Our Team' link='/contact' />
                </div>
              </div>
            </div>
          </div>

          <div id='upperservices'>
            <div id='serviceCard'>
              <h2>Advanced Analytics & Business Intelligence</h2>
              <div class='vertical'></div>
              <div id='lo'>
                <p>
                  {expandedSections[2]
                    ? `You already know that data holds the key to smarter decisions, but how do you turn that data into clear, actionable insights? That’s where our Advanced Analytics & Business Intelligence (BI) services come in. At Techiserve.ai, we don’t believe in one-size-fits-all solutions. We take the time to understand your unique business needs, working side by side with you to create analytics and BI solutions that drive performance. Imagine having real-time insights at your fingertips, knowing how each part of your business is performing, and being able to anticipate changes before they happen. Our advanced analytics tools let you dig deep into data to uncover trends, optimize strategies, and respond quickly to evolving market conditions. With custom interactive dashboards, automated reporting, and performance tracking, we empower you to make informed decisions with confidence.`
                    : `You already know that data holds the key to smarter decisions, but how do you turn that data into clear, actionable insights? That’s where our Advanced Analytics & Business Intelligence (BI) services come in. At Techiserve.ai, we don’t believe in one-size-fits-all solutions...`}
                  <button
                    onClick={() => toggleReadMore(2)}
                    className='read-more-btn'>
                    {expandedSections[2] ? "Read Less" : "Read More"}
                  </button>
                </p>
                <div id='lobutton'>
                  <Button text='Contact Our Team' link='/contact' />
                </div>
              </div>
            </div>
          </div>

          <div id='upperservices'>
            <div id='serviceCard'>
              <h2>Business Application Development</h2>
              <div class='vertical'></div>
              <div id='lo'>
                <p>
                  {expandedSections[3]
                    ? `When it comes to business applications, off-the-shelf software doesn’t always fit your specific needs. That’s why at Techiserve.ai, we offer custom business application development services that are as unique as your business. We take the time to understand your challenges, workflows, and long-term objectives, so the solutions we build aren’t just functional—they’re strategic. Whether you’re looking for a client-facing app that enhances customer interactions or an internal tool to streamline operations, we develop tailor-made applications that integrate seamlessly with your current systems. And because we believe in future-proofing your technology, our apps are designed with scalability in mind, allowing your business to grow without limits. With Techiserve.ai, you’ll get a solution that fits your exact requirements, boosts productivity, and improves the overall user experience—because we know your success depends on it.`
                    : `When it comes to business applications, off-the-shelf software doesn’t always fit your specific needs. That’s why at Techiserve.ai, we offer custom business application development services that are as unique as your business...`}
                  <button
                    onClick={() => toggleReadMore(3)}
                    className='read-more-btn'>
                    {expandedSections[3] ? "Read Less" : "Read More"}
                  </button>
                </p>
                <div id='lobutton'>
                  <Button text='Contact Our Team' link='/contact' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id='foot'></div>
      <div id='myfoot'>
        <Footer id='ki' />
      </div>
    </>
  );
};

export default Services;
