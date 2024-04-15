import React, { useRef, useState } from "react";
import techBadges from "../data/TechBadges.json";
import { FolderGit2, Globe } from 'lucide-react';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function ProjectFocus(props) {

	const getBadges = (proj) => {
      const projTechs = proj.techs;
      const matchingTechBadges = techBadges.filter(tech => projTechs.includes(tech.name)).map(tech => tech.value);
      const badgeElements = matchingTechBadges.map(value => (
         <img className="h-6 select-none" key={value} alt={value} src={value} />
      ));
      return badgeElements;
   };

	const deployedLink = useRef(null)
	const gitLink = useRef(null)
	const [ isDeployedHovered, setDeployedHovered ] = useState(false)
	const [ isGitHovered, setGitHovered ] = useState(false)

	const setHovered = (link) => {
		if (link == "deployed"){
			setDeployedHovered(true)
		} else if (link == "git"){
			setGitHovered(true)
		} else {
			console.log("error")
		}
	}

	const removeHovered = (link) => {
		if (link == "deployed"){
			setDeployedHovered(false)
		} else if (link == "git"){
			setGitHovered(false)
		} else {
			console.log("error")
		}
	}

	useGSAP(() => {
      if (isDeployedHovered) {
         gsap.to(deployedLink.current, {
            duration: 1.5,
            text: "Visit Deployed Site →",
            ease: "power3.inOut"
         })
      } else {
         gsap.to(deployedLink.current, {
            duration: 1.5,
            text: "",
            ease: "power3.inOut"
         })
      }
   },[ isDeployedHovered ])

	useGSAP(() => {
      if (isGitHovered) {
         gsap.to(gitLink.current, {
            duration: 1.5,
            text: "See GitHub Repo →",
            ease: "power3.inOut"
         })
      } else {
         gsap.to(gitLink.current, {
            duration: 1.5,
            text: "",
            ease: "power3.inOut"
         })
      }
   },[ isGitHovered ])

	return (
		<>
			<div className="flex flex-col gap-10">
				
				<div className="mx-10 flex gap-10">
					<a target="_blank" href={props.focusProj.deployed} onMouseEnter={() => setHovered("deployed")} onMouseLeave={() => removeHovered("deployed")} className="cursor-pointer flex-grow flex justify-center items-center gap-5 bg-stone-300 bg-opacity-10 rounded-lg p-10 noise hover:bg-stone-900 hover:bg-opacity-90 ease-in-out duration-700">
						<Globe className="h-[4vh] w-[4vh]" />
						<h2 ref={deployedLink} className="font-title text-[1.4vw] leading-none tracking-widest"></h2>
					</a>
					<a target="_blank" href={props.focusProj.repo} onMouseEnter={() => setHovered("git")} onMouseLeave={() => removeHovered("git")}  className="cursor-pointer flex-grow flex justify-center items-center gap-5 bg-stone-300 bg-opacity-10 rounded-lg p-10 noise hover:bg-stone-900 hover:bg-opacity-90 ease-in-out duration-700">
						<FolderGit2 className="h-[4vh] w-[4vh]" />
						<h2 ref={gitLink} className="font-title text-[1.4vw] leading-none tracking-widest"></h2>
					</a>
				</div>

				<div className="mx-10 bg-stone-300 bg-opacity-10 rounded-lg p-10">
					<img src={props.focusProj.desktopImgs[0]} alt="Desktop view" className="w-full rounded-lg" />
				</div>

				<div className="bg-stone-900 bg-opacity-90 noise p-10 flex flex-col gap-10">
					<h1 className="text-[4vw] font-title tracking-wider leading-none">{props.focusProj.title}</h1>
					<div className="flex justify-between items-center gap-10">
                  <p className="w-[65ch] max-w-[60%] text-wrap-pretty text-xl">{props.focusProj.desc}</p>
                  <div className="max-w-[30%] flex flex-wrap justify-start items-center gap-4">
                     {getBadges(props.focusProj)}
                  </div>
               </div>
				</div>

				<div className="mx-10 flex gap-10">
					<div className="bg-stone-300 bg-opacity-10 rounded-lg p-10 flex gap-5 flex-grow">
						{props.focusProj.mobileImgs.map((image, index) => (
							<div key={index} className="h-full">
								<img src={image} alt="Mobile view" className="rounded-lg" />
							</div>
						))}
					</div>
					<div className="w-[50%] bg-stone-300 bg-opacity-10 noise rounded-lg p-10 flex flex-col gap-5">
						<div className="h-full">
							<img src={props.focusProj.desktopImgs[1]} alt="Desktop view" className="h-full w-full object-cover object-top rounded-lg" />
						</div>
						<div className="h-full">
							<img src={props.focusProj.desktopImgs[2]} alt="Desktop view" className="h-full w-full object-cover object-top rounded-lg" />
						</div>
					</div>
				</div>
				


			</div>
		</>
	)
};

export default ProjectFocus;