/*
 *  Header Component
 *  
 *  const menus = [{text: '', link: ''}]
 *  const onClick = (e) => {}
 *  <Header menus={menus} onClick={onClick.bind(this)} className='header'/>
 */

import classnames from 'classnames'
import { Link } from 'react-router'

import styles from './style'

export default class Header extends React.Component {

    // props constrants
    static propTypes = {
        className: React.PropTypes.string,
        menus:React.PropTypes.arrayOf(React.PropTypes.shape({
            text: React.PropTypes.string,
            link: React.PropTypes.string
        })),
        onClick: React.PropTypes.func
    }

    constructor() {
        super();
    }

    // default state definition
    state = {
        activeIndex: 0
    }

    onMenuClick(index, e) {
        this.props.onClick && this.props.onClick(index, e);
        this.setState({
            activeIndex: index
        });
    }

    render() {
        // current active index
        const activeIndex = this.state.activeIndex;
        
        // combine classname with active
        const menuClass = (index) => {
            return classnames(styles['nav-item'], { [styles['active']]: index === activeIndex })
        }

        const menus = this.props.menus;

        return <header>
            <ul className={classnames(styles['nav'], this.props.className)}>
            {
                menus.map((menu, index) => {
                    return <li key={index} className={menuClass(index)}>
                        <Link to={menu.link} onClick={this.onMenuClick.bind(this, index)}>
                            { menu.text }
                        </Link>
                    </li>
                })
            }
            </ul>
        </header>
    }
}
