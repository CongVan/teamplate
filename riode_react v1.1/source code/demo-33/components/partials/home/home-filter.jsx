import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import ALink from '~/components/features/custom-link';

import filterData from '~/utils/data/shop';
import { scrollTopHandler } from '~/utils';

function HomeFilter() {
    const router = useRouter();
    const [isFirst, setFirst] = useState(true);
    const [sizes, setSizes] = useState([]);
    const [brands, setBrands] = useState([]);
    const [colors, setColors] = useState([]);
    const query = router.query;

    useEffect(() => {
        window.addEventListener('resize', resizeHandler, false);
        document.querySelector("body").addEventListener("click", onBodyClick);

        return () => {
            window.removeEventListener('resize', resizeHandler);
            document.querySelector("body").removeEventListener("click", onBodyClick);
        }
    }, [])

    useEffect(() => {
        if (isFirst) {
            setFirst(false);
        } else {
            scrollTopHandler();
        }
    }, [query])

    const getSizes = (value) => {
        let tmpSize = [...sizes];
        let index = tmpSize.indexOf(value);
        if (index > -1) {
            tmpSize.splice(index, 1);
        } else tmpSize.push(value);
        setSizes(tmpSize);
    }

    const getBrands = (value) => {
        let tmpBrand = [...brands];
        let index = tmpBrand.indexOf(value);
        if (index > -1) {
            tmpBrand.splice(index, 1);
        } else tmpBrand.push(value);
        setBrands(tmpBrand);
    }

    const getColors = (value) => {
        let tmpColor = [...colors];
        let index = tmpColor.indexOf(value);
        if (index > -1) {
            tmpColor.splice(index, 1);
        } else tmpColor.push(value);
        setColors(tmpColor);
    }

    const selectOptionHandler = function (e) {
        e.preventDefault();
        e.currentTarget.closest('.toolbox-item.select-menu').classList.toggle('opened');
    }

    function onBodyClick(e) {
        (e.target.closest('.select-menu.opened') || (document.querySelector('.select-menu.opened')) && document.querySelector('.select-menu.opened').classList.remove('opened'));
    }

    const resizeHandler = () => {
        document.querySelector('body').classList.remove("sidebar-active");
    }

    function activeHandler(e) {
        if (e.currentTarget.classList.contains('active')) {
            e.currentTarget.classList.remove('active')
        } else e.currentTarget.classList.add('active')
    }

    return (
        <div className="toolbox justify-content-center">
            <div className="toolbox-item select-menu">
                <a className="select-menu-toggle" href="#" onClick={selectOptionHandler}>Select Color</a>

                <ul className="filter-items">
                    {
                        filterData.colors.map((item, index) =>
                            <li
                                key={item + ' - ' + index}
                                onClick={(e) => { activeHandler(e); getColors((item.slug)) }}
                            >
                                <ALink href="#">{item.name}</ALink>
                            </li>
                        )
                    }
                </ul>
            </div>

            <div className="toolbox-item select-menu">
                <a className="select-menu-toggle" href="#" onClick={selectOptionHandler}>Select Brands</a>

                <ul className="filter-items">
                    {
                        filterData.brands.map((item, index) =>
                            <li
                                key={item + ' - ' + index}
                                onClick={(e) => { activeHandler(e); getBrands((item.slug)) }}
                            >
                                <ALink href="#">{item.name}</ALink>
                            </li>
                        )
                    }
                </ul>
            </div>

            <div className="toolbox-item select-menu">
                <a className="select-menu-toggle" href="#" onClick={selectOptionHandler}>Select Size</a>

                <ul className="filter-items">
                    {
                        filterData.sizes.map((item, index) =>
                            <li
                                key={item + ' - ' + index}
                                onClick={(e) => { activeHandler(e); getSizes((item.slug)) }}
                            >
                                <ALink href="#">{item.name}</ALink>
                            </li>
                        )
                    }
                </ul>
            </div>

            <div className="toolbox-item select-menu">
                <a className="select-menu-toggle" href="#" onClick={selectOptionHandler}>Select Sports</a>

                <ul className="filter-items">
                    <li onClick={activeHandler}><ALink href="#">Basketball</ALink></li>
                    <li onClick={activeHandler}><ALink href="#">Football</ALink></li>
                    <li onClick={activeHandler}><ALink href="#">Running</ALink></li>
                    <li onClick={activeHandler}><ALink href="#">Ski</ALink></li>
                    <li onClick={activeHandler}><ALink href="#">Swimming</ALink></li>
                    <li onClick={activeHandler}><ALink href="#">Volleyball</ALink></li>
                </ul>
            </div>

            <ALink className="btn btn-primary btn-filter text-uppercase pt-3"
                href={{ pathname: '/shop', query: { sizes: sizes.join('&'), brands: brands.join('&'), colors: colors.join('&') } }}>Filter</ALink>
        </div>
    )
}

export default (HomeFilter);