import React, {useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import '../../assets/css/ContactPA.scss';



const PlaidApply = () =>{
	const [sendingApplication, setSendingApplication] = useState(false);
	const [applicationSent, setApplicationSent] = useState(false);
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		resume: "",
  		phone: "", 
  		github: "", 
  		location: "", 
  		favorite_candy: "", 
  		superpower: "" 
	});
	
	const {
		name,
		email,
		resume,
  		phone,
  		github,
  		location,
  		favorite_candy,
  		superpower
	} = formData;
	
	const onChange = e =>
		setFormData({...formData, [e.target.name]: e.target.value});
	
	const onSubmit = async (e) => {
		e.preventDefault();
		
		setSendingApplication(true);
		
		// console.log("formData from contact ", formData);
		
		const body = JSON.stringify(formData);
		console.log("body ", body);
		
		try {
			const config = {
				headers: {
					'Content-Type': 'application/json'
				}
			}
			const res = await axios.post('https://contact.plaid.com/jobs', body, config);
		
		} catch(err) {
			console.log("from PlaidApply ",err);
		}

		setFormData({
			name: "",
			email: "",
			resume: "",
  			phone: "", 
  			github: "", 
  			location: "", 
  			favorite_candy: "", 
  			superpower: "" 	
		});
		
		setTimeout(()=>{
			setTimeout(()=>{
				// console.log("send a message****")
				setSendingApplication(false);
				setApplicationSent(false);
			}, 2000);
			setApplicationSent(true);
			// console.log("message sent*****")
		}, 2000);
	}
	
	return(
		<div className="ContactPA pb-5">
			<div className="Contact-title-header">
				<div className="Contact-title-item">
					 Apply at
					<img className="ml-1" src="https://plaid.com/assets/img/navbar/logo.svg" />
				</div>
				<div>
					<hr className="Contact-title-hr" />
				</div>
				<div>
					<p>Please fill out required fields</p>
				</div>
			</div>
			
			{sendingApplication && !applicationSent ? (
				<div className="Contact-message-container">
					<div class="spinner-border spinner-size text-secondary" role="status">
					  <span class="sr-only">Loading...</span>
					</div>
				</div>
				
			) : (
				
				applicationSent ? (
					<div className="Contact-message-container">
						<div>
							<h3>Message Sent!</h3>
							
						</div>
					</div>
					
				) : (
				
				<div className="Contact-form">
				<form onSubmit={e => onSubmit(e)}>
					<div className="form-group Contact-form-row">
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
						<div className="Contact-form-fields">
						<div>
							<label className="form-control-label" htmlFor="input-resume">
								Resume
							</label>
							<input
								type="resume"
								id="input-resume"
								className="form-control"
								
								value={resume}
								name="resume"
								onChange={e => onChange(e)}
								
							/>
						</div>
						<div>
							<label className="form-control-label" htmlFor="input-phone">
								Phone
							</label>
							<input
								type="phone"
								id="input-phone"
								className="form-control"
								
								value={phone}
								name="phone"
								onChange={e => onChange(e)}
								
							/>
						</div>
						<div>
							<label className="form-control-label" htmlFor="input-github">
								Github
							</label>
							<input
								type="github"
								id="input-github"
								className="form-control"
								
								value={github}
								name="github"
								onChange={e => onChange(e)}
								
							/>
						</div>
						<div>
							<label className="form-control-label" htmlFor="input-location">
								Location
							</label>
							<input
								type="location"
								id="input-location"
								className="form-control"
								
								value={location}
								name="location"
								onChange={e => onChange(e)}
								
							/>
						</div>
						<div>
							<label className="form-control-label" htmlFor="input-favorite_candy">
								Favorite Candy
							</label>
							<input
								type="favorite_candy"
								id="input-favorite_candy"
								className="form-control"
								
								value={favorite_candy}
								name="favorite_candy"
								onChange={e => onChange(e)}
								
							/>
						</div>
						<div>
							<label className="form-control-label" htmlFor="input-superpower">
								Superpower
							</label>
							<input
								type="superpower"
								id="input-superpower"
								className="form-control"
								
								value={superpower}
								name="superpower"
								onChange={e => onChange(e)}
								
							/>
						</div>
					</div>
					</div>
					<div className="Contact-form-button-container mt-3">
						<div className="Contact-form-submit">
							<button 
								type="submit" 
								className="btn btn-dark btn-lg btn-block"
								>Submit
							</button>
						</div>
					</div>
				</form>
			</div>
			))}
		</div>
	)
}

export default PlaidApply;