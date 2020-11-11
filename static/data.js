export default {
  name: "Hey, I'm Khouloud Hamdi",
  subtext: "Computer Engineering Student based in Ariana, Tunisia",
  jobStatus: "I am looking for end of studies internship",
  instaURL: "https://www.instagram.com/khoulouud_hamdi/",
  githubURL: "https://github.com/khouloud9698",
  linkedinURL: "https://www.linkedin.com/in/khouloud-hamdi-6b3a27197/",
  resumeURL: "https://khouloud-resume.netlify.app/static/resume.pdf",
  skills: [
    {
      title: "Languages: ",
      info: "Java, JavaFx, Kotlin, C/ C++, Latex, PHP, .Net, Python"
    },
    {
      title: "Libraries & Frameworks: ",
      info:
        "Spark, Kafka, Angular, jQuery, Bootstrap, Node, MongoDB"
    },
    {
      title: "Tools: ",
      info: "Git, Postman, Firebase"
    }
  ],
  
  experiences: [
    {
      companyLink: "https://innovation.orange.tn/projet/orange-developer-center",
      companyName: "Orange Tunisia in partnership with Google",
      companyDuration: "July 2020-September 2020",
      companyDesignation: "Mobile Developer Intern",
      description: (
        <ul className="description">
          <li>
            develop a mobile application that allows the management of a smart sport coach at home. This coach allows the analysis and the real-time posture correction and interaction with the clients
using voice commands.
          </li>
        </ul>
      )
    },
    {
      companyLink: "https://fis.expert/",
      companyName: "Financial Intelligence Solutions",
      companyDuration: "June 2019-August 2019",
      companyDesignation: "Frontend developer intern",
      description: (
        <ul className="description">
          <li>
       development of an application that enables analysis of the activities of the financial and non-financial sectors for the fight against money laundering and terrorist financing for the FATF organization.
          </li>
        </ul>
      )
    },
	  {
      companyLink: "http://www.fst.rnu.tn/",
      companyName: "Faculty of Mathematical, Physical and Natural Sciences of Tunis",
      companyDuration: "October 2017-June 2018",
      companyDesignation: "Data Analyst Intern",
      description: (
        <ul className="description">
          <li>
         Propose a new approach to community detection in bipartite graphs.
          </li>
        </ul>
      )
    }
  ],
  projects: []
}
    // projects: [{
    //   title: "cure.fit",
    //   url: "cure.fit",
    //   desc: "cure.fit is a health and fitness powerhouse that takes a holistic approach to physical and mental well being. At cure.fit, we make group workouts fun, daily food healthy & tasty, mental fitness easy with yoga & meditation, and medical & lifestyle care hassle-free."
    // }, {
    //   title: "cultgear",
    //   url: "cultgear.com",
    //   desc: "cultgear is your one-stop shop for all your sportswear needs. Shop for apparel for running, training and everything that enables your active lifestyle."
    // }]