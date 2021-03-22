import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from '../routes';

export default props => {
    return (
        <Menu style={{marginTop: '10px'}}>
            <Link route="/">
                <a className="item">CrowdCoin</a>
            </Link>

            <Menu.Menu position="right">

            </Menu.Menu>
            <Menu.Item>
                +
            </Menu.Item>
        </Menu>
    );
}