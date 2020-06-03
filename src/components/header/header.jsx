import React from 'react';
import { Navbar, Card, Row, Col, NavItem, Container } from 'react-bootstrap'
// import { Code, You } from 'react-bootstrap-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComments, faCode, faPalette, faPrint, fayou } from '@fortawesome/free-solid-svg-icons'
import "./header.css"
import { ReactComponent as Code } from '../../icons/code.svg'
import { ReactComponent as Communication } from '../../icons/communication.svg'
import { ReactComponent as DigitalArts } from '../../icons/digitalArts.svg'
import { ReactComponent as Printing } from '../../icons/printing.svg'
import { ReactComponent as Youtube } from '../../icons/youtube.svg'
import { ReactComponent as ExploreAll } from '../../icons/explore.svg'

function Header() {
    return <div className="HeaderClass">
        <Code className="HeaderBox" />
        <Communication className="HeaderBox" />
        <DigitalArts className="HeaderBox" />
        <Printing className="HeaderBox" />
        <Youtube className="HeaderBox" />
        <ExploreAll className="HeaderBox" />
    </div>
}

export default Header;