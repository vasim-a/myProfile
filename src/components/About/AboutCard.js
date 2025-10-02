import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Vasim Khan </span>
            from <span className="purple"> Tamil Nadu, India.</span>
            <br />
            <br />I am currently employed as a Front End Developer at
            <span className="purple"> <a href="https://www.datamatics.com/"> @Datamatics.</a> </span>
            <br />
            <br />
            Skilled at creating dynamic and interactive web applications that
            align with user needs and deliver optimal results.
            <br />
            <br />
            Proficient in modern <span className="purple"> MEAN & MERN  </span>Technologies, including
            <br />
            <br />
            Languages:{" "}
            <span className="purple"> {""}JavaScript, TypeScript</span>
            <br />
            <br />
            Frameworks and Libraries:
            <span className="purple"> {""}React.js, Redux, AngularJS, Vue 3, Node.js, Express.js, MongoDB</span>
            <br />
            <br />
            Styling Tools:
            <span className="purple">
              {""} HTML, CSS, SCSS, Media Query CSS, Bootstrap, TailwindCSS.
            </span>
            <br />
            <br />
            CMS & Tools:
            <span className="purple">
              {""} Adobe Experience Manager (AEM), Git, Bitbucket, GitHub, Yarn, NPM/NVM, VS Code, Figma (Basics).
            </span>
            <br />
            <br />
            Other:
            <span className="purple">
              {""} ERPNext, Frappe Cloud, Responsive Design, Performance Optimization.
            </span>
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
