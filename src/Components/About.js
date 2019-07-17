import React, { Component } from 'react';

class About extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var profilepic= "images/"+this.props.data.image;
      var bio = this.props.data.bio;
      var professional = this.props.data.professional;
      var target = this.props.data.target;
      var clinic = this.props.data.address.clinic;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone1= this.props.data.address.phone1;
      var phone2= this.props.data.address.phone2;
      var email = this.props.data.email;
      var resumeDownload = this.props.data.resumedownload;
    }

    return (
      <section id="about">
      <div className="row">
         <div className="three columns">
            <img className="profile-pic"  src={profilepic} alt="Tim Baker Profile Pic" />
         </div>
         <div className="nine columns main-col">
            <h2>Sobre a nutri</h2>

            <p>{bio}</p>

            <h2>Histórico profissional</h2>

            <p>{professional}</p>

            <h2>Público alvo</h2>

            <p>{target}</p>

            <div className="row">
               <div className="columns contact-details">
                  <h2>Consultas</h2>
                  <p className="address">
						   <span>{clinic}</span><br />
						   <span>{street}<br />
						         {city} {state} {zip}
                   </span><br />
						   <span>{phone1}</span><br />
						   <span>{phone2}</span>
					   </p>
               </div>
            </div>
         </div>
      </div>

   </section>
    );
  }
}

export default About;
