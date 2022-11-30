import { useRouter } from 'next/router';

import ALink from '~/components/features/custom-link';

import { mainMenu } from '~/utils/data/menu';

function MainMenu() {
    const pathname = useRouter().pathname;

    return (
        <nav className="main-nav">
            <ul className="menu">
                <li id="menu-home" className={ pathname === '/' ? 'active' : '' }>
                    <ALink href='/'>Home</ALink>
                </li>

                <li className={ `${ pathname.includes( '/elements' ) ? 'active' : '' } d-xl-show submenu` }>
                    <ALink href={ `/elements` }>Elements</ALink>

                    <ul>
                        {
                            mainMenu.element.map( ( item, index ) => (
                                <li key={ `elements-${ item.title }` }>
                                    <ALink href={ '/' + item.url }>
                                        { item.title }
                                    </ALink>
                                </li>
                            ) )
                        }
                    </ul>
                </li>

                <li className={ `submenu  ${ pathname.includes( '/pages' ) ? 'active' : '' }` }>
                    <ALink href="#">Pages</ALink>

                    <ul>
                        {
                            mainMenu.other.map( ( item, index ) => (
                                <li key={ `other-${ item.title }` }>
                                    <ALink href={ '/' + item.url }>
                                        { item.title }
                                        { item.new ? <span className="tip tip-new">New</span> : "" }
                                    </ALink>
                                </li>
                            ) )
                        }
                    </ul>
                </li>

                <li className={ `submenu  ${ pathname.includes( '/blog' ) && !pathname.includes( '/elements' ) ? 'active' : '' }` }>
                    <ALink href={ `/blog/classic` }>Blog</ALink>

                    <ul>
                        {
                            mainMenu.blog.map( ( item, index ) => (
                                <li key={ "blog" + item.title } className={ item.subPages ? "submenu" : "" }>
                                    <ALink href={ '/' + item.url }>
                                        { item.title }
                                    </ALink>

                                    {
                                        item.subPages ?
                                            <ul>
                                                {
                                                    item.subPages.map( ( item, index ) => (
                                                        <li key={ `blog-${ item.title }` }>
                                                            <ALink href={ '/' + item.url }>
                                                                { item.title }
                                                            </ALink>
                                                        </li>
                                                    ) )
                                                }
                                            </ul> : ""
                                    }
                                </li>
                            ) )
                        }
                    </ul>
                </li>

                <li>
                    <ALink href="/pages/about-us">About us</ALink>
                </li>
            </ul>
        </nav>
    )
}

export default MainMenu;