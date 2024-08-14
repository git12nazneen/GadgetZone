import { Helmet } from 'react-helmet';

const Pagetitle = ({title}) => {
    return (
        <div>
             <Helmet>
                <title>{title}</title>
            </Helmet>
        </div>
    );
};

export default Pagetitle;