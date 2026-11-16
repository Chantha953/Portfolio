const CardTechnologies = ({name,img}) => {
    return (
        <article className="shadow-item d-flex justify-content-center align-items-center py-3 rounded-3 cardTechnology" style={{ width: "120px" }}>
            <div className="text-center">
                <img src={img} alt="" style={{ width: "36px" }} className="mb-2"/> <br />
                <span className="fw-medium m-0" style={{fontSize :"15px"}}>{name}</span>
            </div>
        </article>
    )
}
export default CardTechnologies;