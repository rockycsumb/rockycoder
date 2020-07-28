import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import '../../assets/css/Contact.scss';
import emailjs from 'emailjs-com';

const Contact = () =>{
	
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: ""
	});
	
	const {
		name,
		email,
		message
	} = formData;
	
	const onChange = e =>
		setFormData({...formData, [e.target.name]: e.target.value});
	
	const onSubmit = e => {
		e.preventDefault();
		
		
		let templateParams = {
			name: name,
			email: email,
			message: message	
		}
			console.log("formData from contact ", formData);
		var service_id = 'gmail';
		var template_id = 'resume_form';
		var user_id = 'user_ziUA20aQdVmniRSrsE8jQ';
		
		emailjs.send(service_id, template_id, templateParams, user_id);
	
		setFormData({
			name: "",
			email: "",
			message: ""
		});
		
	}
	
	
	return(
		<div className="Contact pb-5">
			<div className="Contact-title-header">
				<div className="Contact-title-item">
					Contact
				</div>
				<div>
					<hr className="Contact-title-hr" />
				</div>
			</div>
			
			<div className="Contact-form">
				<form onSubmit={e => onSubmit(e)}>
					<div className="form-group text-center  Contact-form-row">
						<div className="Contact-form-row-item">
							<label className="form-control-label" htmlFor="input-name">
								Name
							</label>
							<input
								type="text"
								id="input-name"
								className="form-control"
								
								value={name}
								name="name"
								onChange={e => onChange(e)}
								required
							/>
						</div>
						<div>
							<label className="form-control-label" htmlFor="input-email">
								Email
							</label>
							<input
								type="email"
								id="input-email"
								className="form-control"
								
								value={email}
								name="email"
								onChange={e => onChange(e)}
								required
							/>
						</div>
					</div>
					<div className="Contact-textarea-container">
						<div className="form-group text-center Contact-textarea-item">
							<label htmlFor="input-textarea">Message</label>
							<textarea 
								className="form-control Contact-form-textarea" 
								id="input-textarea" 
								rows="8"
								placeholder=""
								name="message"
								value={message}
								onChange={e => onChange(e)}
							></textarea>
						</div>
					</div>
					<button type="submit">Submit</button>
				</form>
			</div>
		</div>
	)
}

export default Contact;