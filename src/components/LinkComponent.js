import React from "react";
import { Link } from 'react-router-dom'
import {Image} from "react-bootstrap";

const LinkComponent = ({icon, role, currentFilter}) => (
    <Link to={role === 'all' ? '' : role}>
        <Image src={icon} style={{
            opacity: role === currentFilter ? '0.5' : '1'
        }}/>
    </Link>
)

export default LinkComponent