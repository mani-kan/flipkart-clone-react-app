import React, { useState,useEffect } from "react";
import '../App.css';
import banner1 from '../assets/banner1.png';
import gmk2 from '../assets/gmk2.jpg';
import ChangeText from "./ChangeText";
import oppok13x from "../assets/oppok13x.jpeg";
import moto from '../assets/moto.jpg';
import realmep4 from '../assets/realmep4.jpg';
import iphone16 from '../assets/iphone16.jpg';
import samsung from '../assets/samsung.jpg';
import samsung24 from '../assets/samsung24.jpg';
function Navbar(){
    const images=[
        "https://rukminim1.flixcart.com/fk-p-flap/3240/540/image/aed9795fa1ece4be.jpeg?q=60",
        "https://rukminim1.flixcart.com/fk-p-flap/3240/540/image/45348602ad4b2259.jpg?q=60",
        "https://rukminim1.flixcart.com/fk-p-flap/3240/540/image/619ee07223539121.jpeg?q=60",
        "https://rukminim1.flixcart.com/fk-p-flap/3240/540/image/05cba11116281817.jpeg?q=60",
        "https://rukminim2.flixcart.com/fk-p-flap/3240/540/image/5351fa95361652c9.jpg?q=60",
        "https://rukminim2.flixcart.com/fk-p-flap/3240/540/image/f332ab46feeed92e.jpg?q=60",
        "https://rukminim2.flixcart.com/fk-p-flap/3240/540/image/684385d69537e9fc.jpg?q=60",
        "https://rukminim1.flixcart.com/fk-p-flap/3240/540/image/a5aa268f84ad433f.jpeg?q=60"
    ];

    const images2=[
        "https://rukminim1.flixcart.com/fk-p-flap/1600/660/image/1b256aa26265da40.jpg?q=60",
        "https://rukminim1.flixcart.com/fk-p-flap/1600/660/image/cfc5d6c591424417.jpg?q=60",
        "https://rukminim1.flixcart.com/fk-p-flap/1600/660/image/9d7be999ebabda9f.jpg?q=60",
        "https://rukminim1.flixcart.com/fk-p-flap/1600/660/image/dabd107454839c20.png?q=60",

    ];

    const [index,setIndex]=useState(0);
    useEffect(() => {
        const timer = setInterval(() => {
          setIndex((prev) => (prev + 1) % images.length);
        }, 3000);
    
        return () => clearInterval(timer);
      }, [images.length]);
      //second images
      useEffect(() => {
          const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % images2.length);
          }, 3000);
      
          return () => clearInterval(timer);
        }, [images2.length]);
    return(
        <div>
            <nav className="nav">
                <ul>
                    <div className="gap">
                    <li><h3>GMK React Online Shopping Project</h3></li>
                    </div>
                    <li><a href="#">HOME</a></li>
                    <li><a href="#mobiles">Mobiles</a></li>
                    <li><a href="#">Accessories</a></li>
                    <li><input type="text" placeholder="Search..." /></li>
                    <li><a href="#">Login</a></li>
                    <li><a href="#">Cart</a></li>
                </ul>
            </nav>
            <section className="empty">

            </section>
            <section className="titleFlip">
                <div className="con">
                <div className="subflip">
                    <img src="https://rukminim2.flixcart.com/fk-p-flap/64/64/image/3dbe4c89fbf0003d.png?q=100" alt="image"  widht="60px" height="60px"/>
                    <p>Minutes</p>
                </div>
                <div className="subflip">
                    <img src="https://rukminim2.flixcart.com/fk-p-flap/64/64/image/cd6aca4f61e8ea95.png?q=100" alt="image"  widht="60px" height="60px"/>
                    <p>Mobiles & Tablets</p>
                </div>
                <div className="subflip">
                    <img src="https://rukminim2.flixcart.com/fk-p-flap/64/64/image/9c64dfa667885ca9.png?q=100" alt="image"  widht="60px" height="60px"/>
                    <p>Tvs & Applinces</p>
                </div>
                <div className="subflip">
                    <img src="https://rukminim2.flixcart.com/fk-p-flap/64/64/image/4d6b13d5a0e0724a.png?q=100" alt="image"  widht="60px" height="60px"/>
                    <p>Electronics</p>
                </div>
                <div className="subflip">
                    <img src="https://rukminim2.flixcart.com/fk-p-flap/64/64/image/ec2982e5564fe07c.png?q=100" alt="image"  widht="60px" height="60px"/>
                    <p>Fashion</p>
                </div>
                <div className="subflip">
                    <img src="https://rukminim2.flixcart.com/fk-p-flap/64/64/image/febcb9896245caf4.png?q=100" alt="image"  widht="60px" height="60px"/>
                    <p>Home & Kitchne</p>
                </div>
                <div className="subflip">
                    <img src="https://rukminim2.flixcart.com/fk-p-flap/64/64/image/3d7144345bbcf2e4.png?q=100" alt="image"  widht="60px" height="60px"/>
                    <p>Buety & Toys</p>
                </div>
                <div className="subflip">
                    <img src="https://rukminim2.flixcart.com/fk-p-flap/64/64/image/cddd92e134ba3ea9.png?q=100" alt="image"  widht="60px" height="60px"/>
                    <p>Furniture</p>
                </div>
                <div className="subflip">
                    <img src="https://rukminim2.flixcart.com/fk-p-flap/64/64/image/d9eea6cd0e7b68bb.png?q=100" alt="image"  widht="60px" height="60px"/>
                    <p>Flight Bookings</p>
                </div>
                <div className="subflip">
                    <img src="https://rukminim2.flixcart.com/fk-p-flap/64/64/image/2ebb95ec20eae8f1.png?q=100" alt="image"  widht="60px" height="60px"/>
                    <p>Grocery</p>
                </div>
                </div>
            </section>
            <section className="select1">
                <img src={images[index]} alt="banner" className="img1"/>
                
                <div className="namgetitle">
      <h1 className="h1">
        Sale's On  <ChangeText />
      </h1>
    </div>
            </section>
            <section className="mobileb">
            <h2 className="h2" id='mobiles'>Best Deals On smartPhones</h2>
            <div className="mobileb-container">
            <div className="mocard">
                <img src={oppok13x} alt="oppomobile" width="100px" height="120px"/>
                <p>OPPO K13x 5G <br />From $9,499*</p>
            </div>
            <div className="mocard">
                <img src={moto} alt="oppomobile" width="100px" height="120px"/>
                <p>Moto Edge 60 Pro 5G <br />From $24,999*</p>
            </div>
            <div className="mocard">
                <img src={realmep4} alt="oppomobile" width="100px" height="120px"/>
                <p>realme P4 5G <br />From $14,999*</p>
            </div>
            <div className="mocard">
                <img src={iphone16} alt="oppomobile" width="120px" height="120px"/>
                <p>IPHONE 16 PRO <br />From $1,05,900*</p>
            </div>
            <div className="mocard">
                <img src={samsung} alt="oppomobile" width="110px" height="120px"/>
                <p>SAMSUNG S23 ULTRA <br />From $50,000*</p>
            </div>
            <div className="mocard">
                <img src={samsung24} alt="oppomobile" width="110px" height="120px"/>
                <p>SAMSUNG S24 ULTRA <br />From $79,999*</p>
            </div>
            <div className="mocard">
                <img src={oppok13x} alt="oppomobile" width="110px" height="120px"/>
                <p>OPPO K13x 5G <br />From $9,499*</p>
            </div>
            <div className="mocard">
                <img src={oppok13x} alt="oppomobile" width="110px" height="120px"/>
                <p>OPPO K13x 5G <br />From $9,499*</p>
            </div>
            </div>
            </section>
            <section className="addp">
                <div className="addcard">
                    <img src="https://rukminim1.flixcart.com/fk-p-flap/1040/560/image/c5d0453a8ad30643.jpg?q=60" alt="img" />
                </div>
                <div className="addcard">
                    <img src="https://rukminim1.flixcart.com/fk-p-flap/1040/560/image/58d6d6db07978e56.jpg?q=60" alt="image" />
                </div>
                <div className="addcard">
                    <img src="https://rukminim1.flixcart.com/fk-p-flap/1040/560/image/a62ef5d49f9735da.jpg?q=60" alt="image" />
                </div>
                <div className="addcard">
                    <img src="https://rukminim1.flixcart.com/fk-p-flap/1040/560/image/42050160b31d795c.png?q=60" alt="image" />
                </div>
                <div className="addcard">
                    <img src="https://rukminim1.flixcart.com/fk-p-flap/1040/560/image/7f568f957d69c47e.jpg?q=60" alt="image" />
                </div>
                <div className="addcard">
                    <img src="https://rukminim1.flixcart.com/fk-p-flap/1040/560/image/c0381ba1a743d06f.jpg?q=60" alt="image" />
                </div>

            </section>
            <section className="mobileb">
            <h2 className="h2" id='mobiles'>Top deals on appliances</h2>
            <div className="mobileb-container">
            <div className="mocard">
                <img src="data:image/jpeg;base64,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" alt="oppomobile" width="100px" height="120px"/>
                <p>Premium TVs <br />From $15,499*</p>
            </div>
            <div className="mocard">
                <img src="data:image/jpeg;base64,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" alt="oppomobile" width="140px" height="120px"/>
                <p>Best-selling Refriger... <br />From $9,990*</p>
            </div>
            <div className="mocard">
                <img src="data:image/jpeg;base64,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" alt="oppomobile" width="150px" height="120px"/>
                <p>Trending deals <br /><b>Shop now!</b></p>
            </div>
            <div className="mocard">
                <img src="data:image/jpeg;base64,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" alt="oppomobile" width="120px" height="120px"/>
                <p>kitchen Essentials <br />From $1249*</p>
            </div>
            <div className="mocard">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv71GMFkcsrGvJfUkrYG8O8zYu80TCDTL7Sg&s" alt="oppomobile" width="110px" height="120px"/>
                <p>Home Essentials <br /><b>Shop Now!</b></p>
            </div>
            <div className="mocard">
                <img src="data:image/jpeg;base64,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" alt="oppomobile" width="110px" height="120px"/>
                <p>Fans&Geysers <br />From $7999*</p>
            </div>
            <div className="mocard">
                <img src="data:image/jpeg;base64,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" alt="oppomobile" width="110px" height="120px"/>
                <p>Microwave Ovens <br />From $4,490*</p>
            </div>
            <div className="mocard">
                <img src="data:image/png;base64,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" alt="oppomobile" width="110px" height="120px"/>
                <p>Lowest Price Ever <br />From $19,990*</p>
            </div>
            </div>
            </section>
            <section className="addp">
                <div className="addcard">
                    <img src="https://rukminim1.flixcart.com/fk-p-flap/1040/560/image/3bd25cc10a78308a.jpg?q=60" alt="img" />
                </div>
                <div className="addcard">
                    <img src="https://rukminim1.flixcart.com/fk-p-flap/1040/560/image/1851521e1446cb04.jpg?q=60" alt="image" />
                </div>
                <div className="addcard">
                    <img src="https://rukminim1.flixcart.com/fk-p-flap/1040/560/image/7fd6c110d38e5900.jpg?q=60" alt="image" />
                </div>
                <div className="addcard">
                    <img src="https://rukminim1.flixcart.com/fk-p-flap/1040/560/image/e6c8365c1ff08c13.jpg?q=60" alt="image" />
                </div>
                <div className="addcard">
                    <img src="https://rukminim1.flixcart.com/fk-p-flap/1040/560/image/03d0db4bb3782ec2.jpg?q=60" alt="image" />
                </div>
                <div className="addcard">
                    <img src="https://rukminim1.flixcart.com/fk-p-flap/1040/560/image/08d8f63f8455b971.jpg?q=60" alt="image" />
                </div>

            </section>
            <section className="add1">
                <div className="add1a">
                    <img src="https://rukminim1.flixcart.com/fk-p-flap/3200/700/image/fd2145dd37a22555.jpg?q=60" alt="" />
                </div>
            </section>
            <section>
                <div className="images2">
                <img src={images2[index]} alt="banner" className="img1"/>
                
                </div>
            </section>
            <section className="addp1">
                <div className="addcard">
                    <img src="https://rukminim1.flixcart.com/fk-p-flap/1040/560/image/f2758049d77d5eb0.jpg?q=60" alt="img" />
                </div>
                <div className="addcard">
                    <img src="https://rukminim1.flixcart.com/fk-p-flap/1040/560/image/760a10666c95bedd.jpg?q=60" alt="image" />
                </div>
                <div className="addcard">
                    <img src="https://rukminim1.flixcart.com/fk-p-flap/1040/560/image/4afde65304f0e23c.jpg?q=60" alt="image" />
                </div>
                <div className="addcard">
                    <img src="https://rukminim1.flixcart.com/fk-p-flap/1040/560/image/699019d905a94522.jpg?q=60" alt="image" />
                </div>
                <div className="addcard">
                    <img src="https://rukminim1.flixcart.com/fk-p-flap/1040/560/image/376153728619009d.jpg?q=60" alt="image" />
                </div>
                <div className="addcard">
                    <img src="https://rukminim1.flixcart.com/fk-p-flap/1040/560/image/40e47180775cd8a1.jpg?q=60" alt="image" />
                </div>

            </section>
            <section className="mobileb">
            <h2 className="h2" id='mobiles'>Smart gadgets</h2>
            <div className="mobileb-container">
            <div className="mocard">
                <img src="https://rukminim1.flixcart.com/image/240/240/l27wtjk0/speaker/i/4/e/-original-imagdhhg2f7zjbt7.jpeg?q=60" alt="oppomobile" width="90px" height="120px"/>
                <p>Mobile Speakers <br />From $599*</p>
            </div>
            <div className="mocard">
                <img src="https://rukminim1.flixcart.com/image/240/240/xif0q/smartwatch/d/f/p/-original-imagsrp9perdgpvn.jpeg?q=60" alt="oppomobile" width="90px" height="120px"/>
                <p>Fire Bolt Smart... <br />From $999*</p>
            </div>
            <div className="mocard">
                <img src="https://rukminim1.flixcart.com/image/240/240/xif0q/headphone/r/3/g/-original-imah4d4k5s3wtupu.jpeg?q=60" alt="oppomobile" width="90px" height="120px"/>
                <p>Top earphones <br />From $699*</p>
            </div>
            <div className="mocard">
                <img src="https://rukminim1.flixcart.com/image/240/240/xif0q/smartwatch/4/2/u/-original-imah2gmfkdccr5h3.jpeg?q=60" alt="oppomobile" width="90px" height="120px"/>
                <p>CMF Smart Wat... <br />From $2,999*</p>
            </div>
            <div className="mocard">
                <img src="https://rukminim1.flixcart.com/image/240/240/xif0q/power-bank/a/s/x/-original-imahbxeyxw3stpde.jpeg?q=60" alt="oppomobile" width="90px" height="120px"/>
                <p>Top Powerbanks <br />From $499*</p>
            </div>
            <div className="mocard">
                <img src="https://rukminim1.flixcart.com/image/240/240/l52sivk0/data-cable/micro-usb-cable/f/f/b/konnect-b-portronics-original-imagftu9f6cweghv.jpeg?q=60" alt="oppomobile" width="90px" height="120px"/>
                <p>Cables <br />From $79*</p>
            </div>
            <div className="mocard">
                <img src="https://rukminim1.flixcart.com/image/240/240/xif0q/smartwatch/g/4/g/-original-imah9qsmzb9gxjzj.jpeg?q=60" alt="oppomobile" width="90px" height="120px"/>
                <p>Noise Smart Wat.. <br />From $9,499*</p>
            </div>
            <div className="mocard">
                <img src="https://rukminim1.flixcart.com/image/240/240/xif0q/smartwatch/5/v/s/-original-imagxrhetgfuebnn.jpeg?q=60" alt="oppomobile" width="90px" height="120px"/>
                <p>Fastrack SmartWatc.. <br />From $1,399*</p>
            </div>
            </div>
            </section>
            <section className="addp">
                <div className="addcard">
                    <img src="https://rukminim1.flixcart.com/fk-p-flap/1040/560/image/5eae95f6fa8661ad.jpg?q=60" alt="img" />
                </div>
                <div className="addcard">
                    <img src="https://rukminim1.flixcart.com/fk-p-flap/1040/560/image/156142ee3f6a146f.jpg?q=60" alt="image" />
                </div>
                <div className="addcard">
                    <img src="https://rukminim1.flixcart.com/fk-p-flap/1040/560/image/35a7e89d8a88fba0.jpg?q=60" alt="image" />
                </div>
                <div className="addcard">
                    <img src="https://rukminim1.flixcart.com/fk-p-flap/1040/560/image/c5ca3648e400af34.jpg?q=60" alt="image" />
                </div>
                <div className="addcard">
                    <img src="https://rukminim1.flixcart.com/fk-p-flap/1040/560/image/f588c685c5431dd6.jpg?q=60" alt="image" />
                </div>
                <div className="addcard">
                    <img src="https://rukminim1.flixcart.com/fk-p-flap/1040/560/image/aa4ead99c6d1ffc6.jpg?q=60" alt="image" />
                </div>

            </section>
            <footer>
                <table>
                    <tr>
                        <th>
                            ABOUT
                        </th>
                        <th>
                            GROUP COMPANIES
                        </th>
                        <th>
                            HELP
                        </th>
                        <th>
                            CONSUMER POLOCY
                        </th>
                    </tr>
                    <tr>
                        <td>
                            Contact Us
                        </td>
                        <td>
                            Myntra
                        </td>
                        <td>
                            Payments
                        </td>
                        <td>
                            Cancellation & Returns
                        </td>
                    </tr>
                    <tr>
                        <td>
                            About Us
                        </td>
                        <td>
                            Cleartrip
                        </td>
                        <td>
                            Shipping
                        </td>
                        <td>
                            Terms Of Use
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Careers
                        </td>
                        <td>
                            Shopsy
                        </td>
                        <td>
                            Cancellation & Returns
                        </td>
                        <td>
                            Security
                        </td>
                    </tr>
                    <tr>
                        <td>Flipkart Stories</td>
                        <td></td>
                        <td>FAQ</td>
                        <td>Privacy</td>
                    </tr>
                    <tr>
                        <td>Press</td>
                        <td></td>
                        <td>          </td>
                        <td>Sitemap</td>
                    </tr>
                    <tr>
                        <td>Corporate Information</td>
                        <td></td>
                        <td></td>
                        <td>Grievance Redressal</td>
                    </tr>
                </table>


                
                <hr />
                <h2>@2025 GMK Creations</h2>
                <hr />
                <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/payment-method-c454fb.svg" alt="" />
            </footer>

            
        </div>
    )
}
export default Navbar