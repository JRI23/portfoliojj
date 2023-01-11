import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';

const Socials = () => {
    return (
        <div className="d-flex gap-1">
            <FontAwesomeIcon icon={faLink} />
            <a className="lin-blue" href="https://www.linkedin.com/in/jorai-jacobs-06a509229"><i className="fab fa-linkedin" /></a>
            <a className="ghub-black" href="https://github.com/JRI23"><i className="fab fa-github" /></a>
            <a className="glab-orange" href="https://gitlab.com/StudentJorai"><i className="fab fa-gitlab" /></a>
        </div>
    );
}

export default Socials;