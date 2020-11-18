import React, {Fragment, useState, useEffect} from 'react';
import {Link, NavLink} from 'react-router-dom';
import ProjectInfo from './ProjectInfo';
import '../../assets/css/Projects.scss';
import axios from 'axios';

const Projects = () =>{

	const [projectInfo, setProjectInfo] = useState({});

	// useEffect(()=>{
	// 	fetch('http://64.227.53.192/projects')
	// 	.then(response => response.json())
	// 	.then(data => {
	// 		setProjectInfo(data);
	// 	})
	// }, [])

	useEffect(()=>{
		const res = async () =>{
			await axios.get('https://curlyapi.com/wp-json/wp/v2/posts?_embed')
			.then(data => {
				setProjectInfo(data.data) 
			})
		}
		res();
	},[])
	
	console.log("setProjectInfo data ", projectInfo);

	return(
		<div className="d-flex flex-column">
		<span id="delivery_data_url" data-url="{{ route('delivery-data') }}"></span>
			<div className="Projects-title">
				<div className="Projects-title-item1">
					Projects
				</div>
				<div className="Projects-title-item2">
					<hr />
				</div>
			</div>
			{/* begin project info */}
			{projectinfo.map((project, index) =>(
				<Fragment>
					<ScrollAnimation animateIn="fadeIn" duration={1.5}>
					<ProjectInfo 
						projectLiveLink={project.acf.project_livelink}
						projectTitle={project.acf.project_title}
						projectDescription={project.acf.project_description}
						thumb1={project.acf.project_image_1.sizes.medium}
						thumb2={project.acf.project_image_2.sizes.medium}
						projectBackCardTitle={project.acf.project_backcardtitle}
						demoUrl1={project.acf.project_demourl1}
						demoUrl2={project.acf.project_demourl2}
						techUsed={project.acf.project_techused}
						apiUsed={project.acf.project_apiused}
					/>
					</ScrollAnimation>
					
					{index !== projectinfo.length - 1 ? (
						<hr className="Projects-divider" />
					): (
					 ""
					)}
	
				</Fragment>
			))}
		</div>
	)
}

export default Projects;