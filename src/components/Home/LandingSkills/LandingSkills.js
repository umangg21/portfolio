import React from 'react'
import "./LandingSkills.scss"

const Skills = [
    {
        icon: "assets/icons/skills/React.svg",
        title: "React"
    },
    {
        icon: "assets/icons/skills/JS.svg",
        title: "JavaScript"
    },
    {
        icon: "assets/icons/skills/TypeScript.svg",
        title: "TypeScript"
    },
    {
        icon: "assets/icons/skills/HTML5.svg",
        title: "HTML"
    },
    {
        icon: "assets/icons/skills/CSS3.svg",
        title: "CSS"
    }, {
        icon: "assets/icons/skills/Python.svg",
        title: "Python"
    },
    {
        icon: "assets/icons/skills/Sass.svg",
        title: "Sass"
    },
    
    {
        icon: "assets/icons/skills/ANTD.svg",
        title: "ANTD"
    },
    {
        icon: "assets/icons/skills/Bootstrap.svg",
        title: "Bootstrap"
    },
    {
        icon: "assets/icons/skills/Axios.svg",
        title: "Axios"
    },
    {
        icon: "assets/icons/skills/MomentJs.svg",
        title: "MomentJS"
    },
    {
        icon: "assets/icons/skills/ReactRouter.svg",
        title: "React Router"
    },
    {
        icon: "assets/icons/skills/Jasmine.svg",
        title: "Jasmine"
    },
    {
        icon: "assets/icons/skills/Protractor.svg",
        title: "Protractor"
    },
    {
        icon: "assets/icons/skills/Gulp.svg",
        title: "Gulp"
    },
    {
        icon: "assets/icons/skills/Grunt.svg",
        title: "Grunt"
    },
    {
        icon: "assets/icons/skills/Webpack.svg",
        title: "Webpack"
    },
    {
        icon: "assets/icons/skills/Jest.svg",
        title: "Jest"
    },
    {
        icon: "assets/icons/skills/Eslint.svg",
        title: "ESlint"
    },
    {
        icon: "assets/icons/skills/NPM.svg",
        title: "NPM"
    },
    {
        icon: "assets/icons/skills/GoogleAnalytics.svg",
        title: "Google Analytics"
    },
    {
        icon: "assets/icons/skills/Mozila.svg",
        title: "Mozila"
    },
    {
        icon: "assets/icons/skills/Chrome.svg",
        title: "Chrome"
    },
    {
        icon: "assets/icons/skills/Safari.svg",
        title: "Safari"
    },
    {
        icon: "assets/icons/skills/VSCode.svg",
        title: "VS Code"
    },
    {
        icon: "assets/icons/skills/Sketch.svg",
        title: "Sketch"
    },
    {
        icon: "assets/icons/skills/Git.svg",
        title: "Git"
    },
    {
        icon: "assets/icons/skills/GitHub2.svg",
        title: "GitHub"
    },
    {
        icon: "assets/icons/skills/Confluence.svg",
        title: "Confluence"
    },
    {
        icon: "assets/icons/skills/Jira.svg",
        title: "Jira"
    },
    {
        icon: "assets/icons/skills/Bitbucket.svg",
        title: "Bitbucket"
    },
]

const LandingSkills = () => {
    return (
        <div>
            <hr />
            <p className="experience-heading">Tools and Skills</p>

            <div className="skills-container">
                {
                    Skills.map((skill) =>
                        <div className="skill-set" key={skill.title}>
                            <img className="skill-icon" loading="lazy" src={`${process.env.PUBLIC_URL}/${skill.icon}`} alt=""></img>
                            {skill.title && <p className="skill-title">{skill.title}</p>}
                        </div>
                    )
                }
            </div>

        </div>
    )
}

export default LandingSkills
