import PropTypes from "prop-types";
import { formatDate } from "../helpers";

const RequestCard = ({ technology, title, desc, created_at }) => {
    return (
        <div className="border rounded flex items-center space-x-5">
            <img
                src={`https://ui-avatars.com/api/?name=${technology}&background=random&size=512&length=3&font-size=0.22&bold=true`}
                alt={technology}
                className="w-28"
            />
            <div className="">
                <h3 className="font-semibold text-lg">{title}</h3>
                <p className="text-gray-600 text-sm">{desc}</p>
                <time className="text-xs text-gray-500 font-medium">
                    {formatDate(created_at)}
                </time>
            </div>
        </div>
    );
};

RequestCard.propTypes = {
    technology: PropTypes.string,
    title: PropTypes.string,
    desc: PropTypes.string,
    created_at: PropTypes.string,
};

export default RequestCard;