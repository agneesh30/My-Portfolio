import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        console.log("sending mail");
        console.log(form);

        emailjs.sendForm('service_bcoiowk', 'template_o1eq44p', form.current, 'ylEe5QDtdShDfaBC3')
            .then((result) => {
                console.log(result.text);
                form.current.reset();
            }, (error) => {
                console.log(error)
            });
    };

    return (
        <section className="container " id="contact">
            <h4 className="text-center py-5">
                <span className="h4 heading">Contact</span>
            </h4>
            <div className="about-card">
                <form ref={form} className='m-3' onSubmit={sendEmail}>
                    <div className="form-group row m-3">
                        <div className="col-md-6 my-2">
                            <input type="text" className="form-control" name="user_name" id="inputName" placeholder="Your Name*" required />
                        </div>
                        <div className="col-md-6 my-2">
                            <input type="email" className="form-control" name="user_email" placeholder="Your Email*" required />
                        </div>
                    </div>
                    <div className="form-group row m-3">
                        <div className="col-md-12">
                            <input type="text" className="form-control" name="subject" id="inputName" placeholder="Subject*" required />
                        </div>
                    </div>
                    <div className="form-group row  m-3">
                        <div className="col-sm-1-12">
                            <div className="my-3">
                                <textarea className="form-control" name="message" placeholder='Message*' rows={3} required></textarea>
                            </div>
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="d-grid gap-2 col-6 mx-auto">
                            <button type="submit" className="btn send">Send</button>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact