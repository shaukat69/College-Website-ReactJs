import React, {useState} from 'react'
import emailjs from '@emailjs/browser';

const Result = () =>{
  
  return(
    <p className=' alert alert-success'>Your Message Has Been Successfully Sent.</p>
    )
  }
  
  const Contact = () => {
  document.title="A.I.J ITI - Contact Us";
  const [result, showResult] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_f6bel1i', 'template_sk7dpym', e.target, 'VgAHQx8PE1E6okfYj')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
      showResult(true)
  };

  setTimeout(() => {
    showResult(false)
  }, 4000);

  return (
    <>
      <div className="container h2-ubuntu contact-container mt-4">
        <form method='post' onSubmit={sendEmail}>
          <h1 className='contact-heading h2-ubuntu h3-border text-center mb-2'>Contact US</h1>
          <p className="text-center">{ result ? <Result /> : null}</p>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" name="name" className="form-control" placeholder='Enter Your Name' id="name" required/>
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email Id</label>
            <input type="email" name='email' className="form-control" placeholder='Enter Email Id' id="email" required/>
          </div>
          <div className="mb-3">
            <label htmlFor="mobile" className="form-label">Mobile No.</label>
            <input type="text" name='mobile' className="form-control" placeholder='Enter Mobile No.' id="mobile" required/>
          </div>
          <div className="mb-3">
            <label htmlFor="subject" className="form-label">Subject</label>
            <input type="text" name='subject' className="form-control" placeholder='Enter Subject' id="subject" required/>
          </div>
          <div className="mb-3">
            <label htmlFor="textarea" className="form-label">Message</label>
            <textarea name='message' className="form-control" rows={8} placeholder="Enter Your Message Here" id="textarea" required/>
          </div>
          <div className="d-grid gap-2 mt-4">
            <button type="submit" name='submit' className="btn btn-primary mb-4">Submit</button>
          </div>
        </form>

        <h1 className="text-center h2-ubuntu h1-border my-4">More Contact Details:</h1>
        <table className="table table-hover table-bordered table-striped text-center table-responsive">
          <tbody className='table-primary'>
            <tr className='table-dark'>
              <th colSpan="2">Contact Details</th>
            </tr>
            <tr>
              <td rowSpan="2">College</td>
              <td>02144274068</td>
            </tr>
            <tr>
              <td>aijszsmitc@gmail.com</td>
            </tr>
            <tr>
              <td rowSpan="2">Principal</td>
              <td>9271944526</td>
            </tr>
            <tr>
              <td>ishtiaqueghalte1@gmail.com</td>
            </tr>
            <tr>
              <td rowSpan="2">Head Clerk</td>
              <td>9260238336</td>
            </tr>
            <tr>
              <td>rafiqueulde04@gmail.com</td>
            </tr>
          </tbody>
        </table>


        <h1 className='text-center h2-ubuntu h2-border my-4'>Institute Location:</h1>
            <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d30298.099679163133!2d72.96597718937988!3d18.335306885243266!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xfdea70f2dc3449bd!2sSidi%20Zafar%20Shekhani%20Memorial%20Technical%20Institute%20(Anjuman%20ITI%20Murud)!5e0!3m2!1sen!2sin!4v1638973597336!5m2!1sen!2sin"
                width="100%" height="450" className=' pb-4'  allowfullscreen="" loading="lazy"></iframe>


      </div>
    </>
  )
}

export default Contact
