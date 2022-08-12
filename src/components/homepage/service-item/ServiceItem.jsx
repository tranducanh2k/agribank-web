import './ServiceItem.css';

const ServiceItem = ({ logo, name, navigate }) => {
    return (
        <div className="service-item" onClick={navigate}>
            <img src={require(`../../../assets/${logo}`)} alt='' />
            <h1>{name}</h1>
        </div>
    )
}

export default ServiceItem