import React from 'react';
import './Knowlege.css';
import htmlIcon from '../images/html-icon.png';
import cssIcon from '../images/css.jpg';
import springIcon from '../images/spring-icon.png';
import shellIcon from '../images/shell-icon.png';
import mysqlIcon from '../images/mysql-icon.png';
import postegreIcon from '../images/postgresql-logo.png';
import reactIcon from '../images/react-icon.png';
import ocpIcon from '../images/openshift-icon.jpg';
import awsIcon from '../images/aws-icon.jpg';

const Knowlege = () => {
  return (
    <div className="kwnolege-list">
         <img src={htmlIcon} alt="HTML" title='HTML' className="knowlege-icon" />
         <img src={cssIcon} alt="CSS" title='CSS' className="knowlege-icon" />
         <img src={springIcon} alt="Ecossistema Spring" title='Ecossistema Spring' className="knowlege-icon" />
         <img src={shellIcon} alt="ShellScript" title='ShellScript' className="knowlege-icon" />
         <img src={mysqlIcon} alt="MySql" title='MySQL' className="knowlege-icon" />
         <img src={postegreIcon} alt="PostegreSQL" title='PostegreSQL' className="knowlege-icon" />
         <img src={reactIcon} alt="React" title='React' className="knowlege-icon" />
         <img src={ocpIcon} alt="Openshift" title='Openshift' className="knowlege-icon" />
         <img src={awsIcon} alt="AWS" title='AWS' className="knowlege-icon" />
    </div>
  );
};

export default Knowlege;
