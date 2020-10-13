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
			{projectInfo.length > 0 && projectInfo.map((project, index) =>(
				<Fragment>
					{console.log("from map", project)}
					<ProjectInfo 
						projectLiveLink={project.projectLiveLink}
						projectTitle={project.projectTitle}
						projectDescription={project.projectDescription}
						thumb1={project.thumb1.url}
						thumb2={project.thumb2.url}
						projectBackCardTitle={project.projectBackCardTitle}
						demoUrl1={project.demoUrl1}
						demoUrl2={project.demoUrl2}
						techUsed={project.techUsed}
						apiUsed={project.apiUsed}

					/>
					
					{index !== projectInfo.length - 1 ? (
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