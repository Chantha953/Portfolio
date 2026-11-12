
const CardabtMe = ({ icon: Icon, title, subtitle }) => {
    return (
        <article>
            <div className="shadow-item cardItemabtMe d-flex justify-content-center align-items-center rounded-5">
                <div>
                    {Icon && (
                        <div className="d-flex justify-content-center mb-3 text-primary">
                            <Icon size={40} />
                        </div>
                    )}
                    <h6 className="text-center">{title}</h6>
                    <h6 className="text-center">{subtitle}</h6>
                </div>
            </div>
        </article>
    );
};

export default CardabtMe;
