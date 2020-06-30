import "../styles/cons.css";
// import * as typeformEmbed from "@typeform/embed";

class HomePage extends React.Component {
  

  render() {
    return (
      <div className='mainContainer'>
        <img src={require("../images/con.svg")} className='image'></img>
        <div className='con'>Under maintenance</div>
      </div>
      );
  }
}

export default HomePage;

// componentDidMount() {
//   this.reference = typeformEmbed.makePopup(
//     "https://adityajain527147.typeform.com/to/kwZI5S", // NOTE: Replace with your typeform URL
//     {
//       mode: "popup",
//       autoClose: 1000,
//       hideHeaders: true,
//       hideFooters: true,
//       onSubmit: function() {
//         console.log("Typeform successfully submitted");
//       }
//     }
//   );
// }

// openForm = () => {
//   console.log("clicked");
//   this.reference.open();
// };

// <React.Fragment>
//         <div className="landing_page">
//           <div className="landing_content_wrapper">
//             <img className="first_dot" src={require("../images/dots.png")} />
//             <div className="main_line">
//               We design & build Digital products, brands and experience
//             </div>
//             <img className="second_dot" src={require("../images/dots.png")} />
//             <div className="get_button" onClick={this.openForm}>
//               GET IN TOUCH
//             </div>
//           </div>
//         </div>
//         <div className="our_work">
//           <div className="head_line">SELECTED WORK</div>
//           <div className="first_card">
//             <div className="card_number">01</div>
//             <div className="screenshot_container">
//               <img
//                 className="screenshot"
//                 src={require("../images/lofty.png")}
//                 alt="Lofty Logistics"
//               />
//             </div>
//             <div className="project_container">
//               <div className="project_tech">DESIGN & DESKTOP SOLUTION</div>
//               <div className="project_name">Lofty Logistics</div>
//             </div>
//           </div>
//           <div className="second_card">
//             <div className="card_number">02</div>
//             <div className="screenshot_container">
//               <img
//                 className="screenshot1"
//                 src={require("../images/derma1.png")}
//                 alt="Lofty Logistics"
//               />
//               <img
//                 className="screenshot1"
//                 src={require("../images/derma2.png")}
//                 alt="Lofty Logistics"
//               />
//             </div>
//             <div className="project_container_1">
//               <div className="project_tech">IOS & ANDROID DEVELOPMENT</div>
//               <div className="project_name">Derma Cupid</div>
//             </div>
//           </div>
//           <div className="first_card">
//             <div className="card_number">03</div>
//             <div className="screenshot_container">
//               <img
//                 className="screenshot1"
//                 src={require("../images/po1.png")}
//                 alt="Lofty Logistics"
//               />
//               <img
//                 className="screenshot1"
//                 src={require("../images/po2.png")}
//                 alt="Lofty Logistics"
//               />
//             </div>
//             <div className="project_container">
//               <div className="project_tech">
//                 DESIGN,IOS & ANDROID DEVELOPMENT
//               </div>
//               <div className="project_name">Purchase Order</div>
//             </div>
//           </div>
//           <div className="view_more">VIEW MORE</div>
//         </div>
//         <div className="services">
//           <div className="services_heading">Services</div>
//           <div className="services_line">
//             We build software that makes business more efficient and customer’s
//             life easier
//           </div>
//           <div className="services_container">
//             <img src={require("../images/1.svg")} className="avatars" />
//             <img src={require("../images/2.svg")} className="avatars" />
//             <img src={require("../images/3.svg")} className="avatars" />
//             <img src={require("../images/4.svg")} className="avatars" />
//           </div>
//         </div>
//         <div className="clients">
//           <div className="clients_heading">Clients</div>
//           <div className="arrows">
//             <div className="left_arrow">
//               <img src={require("../images/left.svg")} />
//             </div>
//             <div className="right_arrow">
//               <img src={require("../images/right.svg")} />
//             </div>
//           </div>
//           <div className="slider">
//             <div className="cards">
//               <div className="testimonial_line">
//                 “I just wanted to share a quick note and let you know that you
//                 guys do a really good job. I’m glad I decided to work with you.
//                 It’s really great how easy your websites are to update and
//                 manage. I never have any problem at all.”
//               </div>
//               <div className="testimonial_title">Rohit Tatu, XYZ</div>
//             </div>
//           </div>
//         </div>
//       </React.Fragment>
    
