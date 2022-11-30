import ALink from '~/components/features/custom-link';

export default function ToolBox () {
    const showSidebar = () => {
        document.querySelector( 'body' ).classList.add( "right-sidebar-active" );
    }

    return (
        <section className="toolbox">
            <div className="toolbox-left">
                <h2 className="title title-simple text-left">Riode Shop</h2>
                <p className="show-info">(showing 1–12 of 44 products)</p>
            </div>
            <div className="toolbox-right">
                <ALink href="#" className="right-sidebar-toggle mr-0 font-weight-normal" onClick={ showSidebar }>Filter</ALink>
            </div>
        </section>
    )
}